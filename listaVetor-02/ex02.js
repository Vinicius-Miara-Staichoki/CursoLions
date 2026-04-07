let a = [1,1,2,4,2,5,5,5];


for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]=== a[j]){
            a.splice(j,1);
            j--
            
            

        }
    }
   
}
console.log(a);







