start_index=10
prefix=""
i=$start_index
find . -maxdepth 1 -name "*.png" -print0 | sort -z | while IFS= read -r -d '' file; do
    mv "$file" "${prefix}$(printf "%02d" $i).png"
    ((i++))
done
#num=0; for i in *; do mv "$i" "$(printf '%d' $num).${i##*.}"; ((num++)); done
#for file in *; do mv -- "$file" "${file%.*}.png"; done
