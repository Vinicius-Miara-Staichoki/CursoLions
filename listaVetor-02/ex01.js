let nums = [1, 2, 4, 300, 5, 78, 300, 81];
let maior2 = nums[0];
let maior = nums[0];
let maior3 = nums[0];
for (i = 0; i < nums.length; i++) {
    if (nums[i] > maior) {
        maior2 = maior;
        maior = nums[i];

    }

    else {

    }
    if (maior2 < nums[i]) {
        maior3 = maior2;
        maior2 = nums[i];
        if (maior2 === maior) {
            maior2 = maior3;
        }
    }

}



if (maior > maior2) {
    console.log("Maior: ", maior);
    console.log("Segundo maior: ", maior2);
}
if (maior2 === maior) {
    console.log("Maior: ", maior)
    console.log("Segundo maior: ", maior3)

}

