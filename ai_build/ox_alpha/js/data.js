/* decade.tw landing content — single source of truth.
   Extracted from the existing React site (PAGEX_HOME / PAGE_WORKS / PAGEX_ABOUT / PAGEX_CONTACT). */
(function () {
  "use strict";

  var BASE = "https://decade.tw";

  window.DECADE_DATA = {
    base: BASE,

    heroSlides: [
      BASE + "/images/slide/31.png",
      BASE + "/images/slide/33.png",
      BASE + "/images/slide/0.png",
      BASE + "/images/slide/5.png"
    ],

    stats: [
      { value: "2009", labelKey: "stat.founded" },
      { value: "18+", labelKey: "stat.years" },
      { value: "100+", labelKey: "stat.projects" },
      { value: "1000+", labelKey: "stat.devices" }
    ],

    services: [
      { icon: "🏛️", zh: "智慧型展場導覽系統建置與規劃", en: "Smart exhibition guide systems" },
      { icon: "💡", zh: "互動科技裝置設計與製作", en: "Interactive installation design & build" },
      { icon: "🛠️", zh: "產品原型設計與製作", en: "Product prototyping" },
      { icon: "🖥️", zh: "軟體程式設計", en: "Software engineering" },
      { icon: "⚡", zh: "電子電路設計與開發", en: "Electronic circuit design" },
      { icon: "🎓", zh: "互動裝置諮詢・演講・Arduino.TW", en: "Consulting, talks & Arduino.TW community" }
    ],

    filters: [
      { id: "all", zh: "全部", en: "All" },
      { id: "lantern", zh: "燈節主燈", en: "Lantern Festival" },
      { id: "control", zh: "中控系統", en: "Central Control" },
      { id: "arm", zh: "機械手臂", en: "Robotic Arm" },
      { id: "art", zh: "公共藝術", en: "Public Art" }
    ],

    videos: [
      { id: "GGZHxkKLopg", zh: "基隆山海鳴光", en: "Keelung Shan-Ming Glow", tags: ["control"] },
      { id: "et_1mErdoKY", zh: "台北燈節主燈偶控系統", en: "Taipei Lantern Festival main lantern control", tags: ["lantern", "control"] },
      { id: "RtN9LXy0nSY", zh: "台灣燈會新竹主燈控制系統", en: "Taiwan Lantern Festival Hsinchu main lantern", tags: ["lantern", "control"] },
      { id: "9_RAmF9dAQo", zh: "高雄流行音樂中心", en: "Kaohsiung Music Center", tags: ["control"] },
      { id: "AMcD4XxWp9Y", zh: "豪華朗機工 聆聽花開的聲音", en: "Luxy Boyz — Listening to the Flowers Bloom", tags: ["art"] },
      { id: "uDib2sl9EQ4", zh: "誠品30週年機械手臂控制", en: "Eslite 30th anniversary robotic arm", tags: ["arm"] },
      { id: "zv084TmAvKo", zh: "台中世界花卉博覽會", en: "Taichung World Flora Expo", tags: ["control", "art"] },
      { id: "mnyQ6473jj0", zh: "世大運開幕式", en: "Universiade Opening Ceremony", tags: ["control"] },
      { id: "blTlSpL5gPA", zh: "誠品30週年機械手臂控制", en: "Eslite 30th robotic arm (show control)", tags: ["arm"] },
      { id: "G21wHvVLtVY", zh: "法國IRCAM 中央控制", en: "IRCAM France central control", tags: ["control"] },
      { id: "dF1C0cCYdGA", zh: "台北流行音樂中心控制系統", en: "Taipei Music Center control system", tags: ["control"] },
      { id: "7wjWHlk9EHU", zh: "台南奇美博物館", en: "Chimei Museum Tainan", tags: ["art"] }
    ],

    works: [
      { year: 2027, items: ["「故宮南院 X 豪華朗機工」－中央控制軟體技術總監"] },
      {
        year: 2026,
        items: [
          "Visual Model Training（SacoMeasure AI Model）",
          "Gxxgle Home-Connection calc algorithm",
          "「臺中國家歌劇院－最後一問 X 豪華朗機工」－中央控制軟體技術總監"
        ]
      },
      {
        year: 2025,
        items: [
          "「兩廳院－國家交響樂團」III資策會 X NSO X AI",
          "「豪華朗機工」宇宙寫生／日光域／手識／四合／很難很難",
          "「IONIC」SacoMeasure",
          "「桃園會展中心」入口裝置藝術〈匯聚流〉丁建中",
          "「信義區微風顯示器」「台中都會公園」「北區資安中心」「北區球場」顯示控制中心",
          "「特拉維夫」裝置藝術 丁建中",
          "「IRCAM 法國龐畢度美術館」失眠寫生簿 豪華朗機工",
          "「兩廳院 舞鈴劇團」5G手環無線點控 資策會",
          "「密室逃脫」超高頻RFID",
          "「ITRI」震動演算法分析",
          "「台北流行音樂中心－幻流行光」「高雄流行音樂中心－波光之翼」「基隆火車站－山海鳴光」X 豪華朗機工－中控建置與技術總監"
        ]
      },
      { year: 2020, items: ["「台灣燈會－新竹主燈 X 豪華朗機工」「台北燈會－萬華主燈 X AKIBO老師」－中央控制軟體技術總監"] },
      {
        year: 2019,
        items: [
          "「信義誠品30週年」一起幻想 X 豪華朗機工－機械手臂中控技術總監",
          "「臺南奇美博物館」影子特展 X 豪華朗機工－中控技術總監",
          "「台北當代藝術館」查無此人小花展 X 豪華朗機工－中控技術總監",
          "「永豐餘元太科技 EINK」電子紙控制計劃案"
        ]
      },
      {
        year: 2018,
        items: [
          "「臺中世界花卉博覽會」聆聽花開的聲音 X 豪華朗機工－中控系統建置",
          "「GoGoRo新車發表會」硬體控制系統建置",
          "「宜蘭傳藝中心」互動介面多點控制設計",
          "「臺北小巨蛋CTC世界盃國標舞公開賽」RF無線控制設計"
        ]
      },
      {
        year: 2017,
        items: [
          "「松山文創園區讀衣II」時尚X藝術跨界展 X JUST IN XX 周裕穎－驅動控制建置",
          "「台北世大運」群控光電顧問",
          "「白晝之夜」X 江惠菁 X 步里赫森－電路技術支援；台電大樓公共藝術遠端控制",
          "「元太科技 EINK 電子紙」驅動控制系統規劃執行",
          "「Fashion Tech JustInCase」科技服裝 X JUST IN XX－驅動控制建置",
          "「農業溫室與政府公開資訊」「臺中機器學習」研究計劃",
          "「國家歌劇院 UltraCombo 群控無人機」通訊協定顧問"
        ]
      },
      {
        year: 2016,
        items: [
          "「台電公共藝術」日光域／河飄風／太陽之詩 X 華麗邏輯－電控技術設計與製作"
        ]
      },
      {
        year: 2015,
        items: [
          "「解密國家寶藏 X 奇想樂園互動科技館」X 工研院－採用 Centurion Pro V2.0/V1.5 系統",
          "「智慧型IMU壓力感測藍芽柺杖」X 台大ivLab X 資策會－共同研發",
          "「桃園機場第二航廈公共藝術」歐基理德的飛行 X 豪華朗機工",
          "「英國曼徹斯特」日光域 X 豪華朗機工",
          "「鹽水月津港燈節主燈」日光域 X 豪華朗機工",
          "「文建會旗艦計畫」無人劇場 Timecode 系統研發－採用 Centurion Pro V1.0",
          "「汐止台灣科學園區」見為知著／時中光 X 豪華朗機工",
          "「Computex Taipei」雲端3D印表機 X 威盛電子－合作研發",
          "2008 SIGGRAPH 發表 Many-to-One WSN 多人控制系統；2007 中油S3加油機控制卡行銷40+加油站；2006 創辦 Arduino.TW 社群"
        ]
      }
    ],

    about: {
      zh: [
        "帝凱互動科技成立於2009年，是一間科技藝術的技術整合公司。擅長將硬體伺服馬達、機械手臂、電腦燈光等媒材，利用演算法巧妙地展現活靈活現的作品。",
        "近年來中大型展覽互動需求越來越多，每件作品的中央控制系統皆搭配雲端，讓數千個媒材裝置可以輕鬆以手機管理，遠端監控與調閱歷程、隨時排查。",
        "2009年起透過開放硬體計畫自行研發互動控制系統 Centurion，已運行於各大展場：工研院奇想樂園與解密國家寶藏、Computex Taipei、世界設計大展、北美館、關渡美術館、香港藝術中心、澳洲、新加坡等地。DECADE.TW 期待在更多作品背後驅動更多繽紛，步步求精朝向下一個十年邁進。"
      ],
      en: [
        "Founded in 2009, DECADE Interactive Technology is an art-tech integration company specializing in servo motors, robotic arms and stage lighting, choreographed by custom algorithms.",
        "Each central control system is cloud-connected, letting thousands of media devices be managed from a phone, monitored remotely, with full history for troubleshooting.",
        "Since 2009 our self-developed Centurion interactive control system has powered major venues including ITRI exhibitions, Computex Taipei, World Design Expo, Taipei Fine Arts Museum, Hong Kong Arts Center, Australia and Singapore. DECADE.TW drives color behind more works — step by step toward the next decade."
      ]
    },

    media: [
      "2012 CTimes 8月號 封面故事／3D印表機 催生下一波製造革命",
      "2012 CTimes 4月號 封面故事／Arduino的電路板互動藝術",
      "2011 CTimes 11月號 封面故事／開放硬體這條路",
      "2011 文化創意精品專輯 Charming Taiwan（文建會）"
    ],

    books: [
      "《建置無線感測網路》Robert Faludi著，林義翔、劉士達譯，O'Reilly台灣，2012",
      "《踏進互動科技世界－使用Arduino》Massimo Banzi著，林義翔譯，旗標出版社，2009"
    ],

    contact: {
      nameZh: "帝凱科技有限公司 DECADE Co., Ltd.",
      addrZh: "台北市北投路一段9-C號",
      addrEn: "No. 9-C, Sec. 1, Beitou Rd., Beitou Dist., Taipei City, Taiwan",
      vat: "29133824",
      email: "victoria@decade.tw",
      line: "@ecz7450a",
      fb: "https://www.facebook.com/DECADE.TW",
      youtube: "https://www.youtube.com/@decadetw",
      github: "https://github.com/xlinx/sd-webui-decadetw-auto-prompt-llm",
      mapUrl: "https://www.google.com/maps?q=%E5%B8%9D%E5%87%B1%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&output=embed",
      mapLink: "https://goo.gl/maps/6UJAAUuYaViwRyBKA",
      lineBtn: "https://lin.ee/RcQIUgM",
      copyrightZh: "©{year} DECADE.TW － 帝凱科技有限公司",
      copyrightEn: "©{year} DECADE.TW — DECADE Co., Ltd."
    }
  };
})();
