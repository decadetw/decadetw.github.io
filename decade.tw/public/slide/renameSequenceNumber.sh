num=0; for i in *; do mv "$i" "$(printf '%d' $num).${i##*.}"; ((num++)); done


for file in *; do mv -- "$file" "${file%.*}.png"; done
