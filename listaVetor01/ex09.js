let nums = [1, 2, 3, 11, 22, 9, 7, 29]
let soma = 0;
for (i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
        soma++
    }
}
console.log(soma)