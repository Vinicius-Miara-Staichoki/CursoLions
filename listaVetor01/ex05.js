let nums = [1, 4, 2, 6, 9, 3]
let maior = nums[0];
for (i = 0; i < nums.length; i++) {
    if (nums[i] > maior) {
        maior = nums[i];
    }

}
console.log(maior)
