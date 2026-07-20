#!/usr/bin/env node
/**
 * Minify json_manager.html → jsonGod.min.html
 *
 * Usage:
 *   node minify.mjs
 *   node minify.mjs path/to/input.html path/to/output.html
 *
 * Zero dependencies. Safely minifies HTML + embedded CSS.
 * JS is lightly cleaned (block comments + line comments outside strings)
 * and whitespace collapsed only outside string/template/regex literals.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, process.argv[2] || 'json_manager.html');
const outPath = path.resolve(__dirname, process.argv[3] || 'jsonGod.min.html');

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>~+])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

/** Light JS minify: strip comments + collapse safe whitespace; keep strings/templates/regex intact. */
function minifyJs(js) {
  let out = '';
  let i = 0;
  const n = js.length;
  let inStr = null; // ' " `
  let inLineComment = false;
  let inBlockComment = false;
  let inRegex = false;
  let regexClass = false;
  let escape = false;
  let templateExprDepth = 0;

  const prevNonWs = () => {
    for (let j = out.length - 1; j >= 0; j--) {
      if (!/\s/.test(out[j])) return out[j];
    }
    return '';
  };

  while (i < n) {
    const c = js[i];
    const next = js[i + 1];

    if (inLineComment) {
      if (c === '\n') {
        inLineComment = false;
        // keep a newline as space separator when needed
        if (out && !/\s$/.test(out)) out += '\n';
      }
      i++;
      continue;
    }

    if (inBlockComment) {
      if (c === '*' && next === '/') {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    if (inStr) {
      out += c;
      if (escape) {
        escape = false;
      } else if (c === '\\') {
        escape = true;
      } else if (inStr === '`' && c === '$' && next === '{') {
        out += '{';
        i += 2;
        templateExprDepth = 1;
        // parse template expression as normal code until depth 0
        while (i < n && templateExprDepth > 0) {
          const tc = js[i];
          const tn = js[i + 1];
          // nested strings inside ${}
          if (inStr === null || inStr === '`') {
            // reuse outer loop style for simplicity: append and track braces/strings
          }
          if (!escape && (tc === '"' || tc === "'" || tc === '`')) {
            // handle mini string in expression
            const q = tc;
            out += tc;
            i++;
            let esc2 = false;
            while (i < n) {
              const sc = js[i];
              out += sc;
              if (esc2) esc2 = false;
              else if (sc === '\\') esc2 = true;
              else if (sc === q) {
                i++;
                break;
              } else i++;
              if (esc2) {
                /* already advanced */
              } else if (sc !== q) {
                /* cont */
              }
            }
            continue;
          }
          if (tc === '/' && tn === '/') {
            // skip line comment in template expr
            i += 2;
            while (i < n && js[i] !== '\n') i++;
            continue;
          }
          if (tc === '/' && tn === '*') {
            i += 2;
            while (i < n - 1 && !(js[i] === '*' && js[i + 1] === '/')) i++;
            i += 2;
            continue;
          }
          if (tc === '{') templateExprDepth++;
          if (tc === '}') {
            templateExprDepth--;
            out += tc;
            i++;
            if (templateExprDepth === 0) break;
            continue;
          }
          out += tc;
          i++;
        }
        continue;
      } else if (c === inStr) {
        inStr = null;
      }
      i++;
      continue;
    }

    if (inRegex) {
      out += c;
      if (escape) {
        escape = false;
      } else if (c === '\\') {
        escape = true;
      } else if (c === '[') {
        regexClass = true;
      } else if (c === ']' && regexClass) {
        regexClass = false;
      } else if (c === '/' && !regexClass) {
        inRegex = false;
      }
      i++;
      continue;
    }

    // comments
    if (c === '/' && next === '/') {
      inLineComment = true;
      i += 2;
      continue;
    }
    if (c === '/' && next === '*') {
      inBlockComment = true;
      i += 2;
      continue;
    }

    // strings
    if (c === '"' || c === "'" || c === '`') {
      inStr = c;
      out += c;
      i++;
      continue;
    }

    // regex heuristic
    if (c === '/') {
      const p = prevNonWs();
      if (!p || /[=(:,;!&|?{}[~+\-*%<>^return\n]/.test(p) || p === 'n' /* from return end - weak */) {
        // better: check if previous token suggests division
        const canBeRegex = !p || '=(,:;!&|?{([~+-*%<>^'.includes(p) || /\b(return|case|throw|else|new|typeof|delete|void|in|of)\s*$/.test(out);
        if (canBeRegex) {
          inRegex = true;
          regexClass = false;
          out += c;
          i++;
          continue;
        }
      }
    }

    // whitespace collapse
    if (/\s/.test(c)) {
      // keep single space only when both sides need token separation
      let j = i;
      while (j < n && /\s/.test(js[j])) j++;
      const left = out[out.length - 1] || '';
      const right = js[j] || '';
      const needSpace =
        left &&
        right &&
        /[A-Za-z0-9_$)\]'"`]/.test(left) &&
        /[A-Za-z0-9_($\+'"`]/.test(right);
      if (needSpace && !/\s$/.test(out)) out += ' ';
      i = j;
      continue;
    }

    out += c;
    i++;
  }

  return out.trim();
}

function minifyHtml(html) {
  // strip HTML comments (not conditional)
  html = html.replace(/<!--[\s\S]*?-->/g, '');

  // minify <style>...</style>
  html = html.replace(/<style(\s[^>]*)?>([\s\S]*?)<\/style>/gi, (_, attrs, css) => {
    return `<style${attrs || ''}>${minifyCss(css)}</style>`;
  });

  // minify <script>...</script> (skip src= external)
  html = html.replace(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi, (match, attrs, js) => {
    if (attrs && /\bsrc\s*=/i.test(attrs)) return match;
    try {
      return `<script${attrs || ''}>${minifyJs(js)}</script>`;
    } catch (e) {
      console.warn('JS minify fallback (left as-is):', e.message);
      return match;
    }
  });

  // collapse whitespace between tags, preserve inside script/style/textarea/pre
  const parts = [];
  const re = /(<(script|style|textarea|pre)\b[^>]*>[\s\S]*?<\/\2>)|(<[^>]+>)|([^<]+)/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[1]) {
      parts.push(m[1]);
    } else if (m[3]) {
      parts.push(m[3].replace(/\s+/g, ' '));
    } else if (m[4]) {
      // text node
      const t = m[4].replace(/\s+/g, ' ');
      parts.push(t);
    }
  }

  return parts
    .join('')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function main() {
  if (!fs.existsSync(srcPath)) {
    console.error(`Input not found: ${srcPath}`);
    process.exit(1);
  }
  const raw = fs.readFileSync(srcPath, 'utf8');
  const min = minifyHtml(raw);
  // banner (kept tiny)
  const banner = `<!-- Json God min build — decade.tw — source: ${path.basename(srcPath)} -->\n`;
  fs.writeFileSync(outPath, banner + min, 'utf8');
  const inKb = (Buffer.byteLength(raw) / 1024).toFixed(1);
  const outKb = (Buffer.byteLength(banner + min) / 1024).toFixed(1);
  const saved = (100 * (1 - Buffer.byteLength(banner + min) / Buffer.byteLength(raw))).toFixed(1);
  console.log(`minified ${path.basename(srcPath)} → ${path.basename(outPath)}`);
  console.log(`${inKb} KB → ${outKb} KB (−${saved}%)`);
  console.log(outPath);
}

main();
