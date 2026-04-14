let a = [1, 1, 2, 3, 4, 5, 5, 5, 7, 5];
let x = 5;
let b=[];

for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]=== a[j]){
            b.push(a[j]);

        }
    }
}
console.log()