let nums = [1, 2, 54, 7, 232, 43, 41, 42]
let soma = 0;
for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        soma++
    }
}
console.log(soma)