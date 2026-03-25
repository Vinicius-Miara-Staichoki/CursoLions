let nums = [1, 4, 3, 22, 6 , 11]
let menor = nums[0];
for (i = 0; i < nums.length; i++) {
    if (nums[i] < menor) {
        menor = nums[i];
    }

}
console.log(menor)