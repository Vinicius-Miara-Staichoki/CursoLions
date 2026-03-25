let nums = [1, 12, 34, 47, 53, 21, 4, 8]
let soma = 0;
for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        soma += nums[i];
    }
}
console.log(soma)