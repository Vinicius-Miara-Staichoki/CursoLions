let nums = [1, 2, 3, 4, 5, 9]
let maior = nums[0];
let a = 0;
for (i = 1; i < nums.length; i++) {
    if (nums[i] > maior) {
        maior = nums[i];

    }
    else {
        a = 1;

        console.log("Não crescente")
    }



}
if (a === 0) {

    console.log("Crescente")

}
