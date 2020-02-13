function divisibleByFive(arr) {
        numbers='';
        for(let index=0; index<arr.length; index++){
         let element=arr[index];
         if(element%5==0){
             numbers+=element+' ';
         }
     }
    
    return numbers;
}
let niz=[1,4,5,8,9,10,15,17];
console.log(`Elementi deljivi sa 5 su: ${divisibleByFive(niz)}`);
