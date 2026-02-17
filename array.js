let arr = [1, 2, 3, 4, 5];
arr[0]=10;
arr.pop(4);

console.log(arr);

const arr2 = [7, 2, 3, 4, 5];
arr2[3]=10;
console.log(arr2);



// 2Darray
brr1 = [1,'s',2.14,"Mayank", true];
brr = [[1,2,3,4],[5,6,7,8,9,10]];
console.log(brr, brr1);


//Forof  

let crr = [3,7,5,5,9,1,5];  // Correct array name

for(let i = 0; i < crr.length; i++){  // Use crr.length instead of arr.length
    crr[i] += 2;  // Corrected from crr[i] = +2 to crr[i] += 2
    console.log(crr[i]);  
}


drr=[1,2,3,4,5,6,7,8,9,10];
for (const element of drr) {
    console.log(element); 
    
}