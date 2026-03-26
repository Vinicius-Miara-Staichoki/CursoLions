let nums = [1, 2, 4, 300, 5, 78, 9, 81];
let maior2 = nums[0];
let maior = nums[0];
let maior3 = nums[0];
for (i = 0; i < nums.length; i++) {
    if (nums[i] > maior) {
        maior2 = maior;
        maior = nums[i];

    }
    else {
        if (maior2 < nums[i]){
            maior3 = maior2;
            maior2 = nums[i];
        }
    }


}
console.log("Maior: ", maior);
console.log("Segundo maior: ", maior2);