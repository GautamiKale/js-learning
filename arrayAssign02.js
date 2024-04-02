const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
 var first = arrayNumbers.shift(0);
 console.log(`First Element ${first}`);
 var last = arrayNumbers.pop();
 console.log(`Last element ${last}`);

 const thirdLast = arrayNumbers[arrayNumbers.length-3];
 console.log(` Third last element ${thirdLast}`);
   

 
// Initializing numbers array
let arrayNumbers1 = [20,31,40,25,23,11,29,9,60,2,11];
 
// Declaring empty Even array
let even = [];
for(let i = 0; i <arrayNumbers1.length; i++) {
       if (arrayNumbers1[i] % 2 == 0)
       even.push(arrayNumbers1[i]);
}
 
// Printing output
console.log(`Even numbers in an array are: ${even}`);
 

var arrayNumbers2 = [20,31,40,25,23,11,29,9,60,2,11];
 
// Declaring empty Even array
var odd = [];
for(let i = 0; i <arrayNumbers2.length; i++) {
       if (arrayNumbers2[i] % 2 == 1)
       odd.push(arrayNumbers2[i]);
}
 
// Printing output
console.log(`Odd numbers in an array are: ${odd}`);


console.log(`==== Even index elements =======`);
var arrayNumbers3 = [20,31,40,25,23,11,29,9,60,2,11];
var sum = 0;
for (let index = 0; index < arrayNumbers3.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers3[index];
        console.log(element);
        sum = sum + element; 
        
}

  
}
console.log(sum);


console.log(`==== Even index elements =======`);
var arrayNumbers4 = [20,31,40,25,23,11,29,9,60,2,11];
var sum = 0;
for (let index = 0; index < arrayNumbers4.length; index++) {
    if (index%2==1) {
        const element = arrayNumbers4[index];
        console.log(element);
        sum = sum + element; 
        
}

  
}
console.log(sum);