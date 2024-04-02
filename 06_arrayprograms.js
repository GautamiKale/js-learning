const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`==== Even index elements =======`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        console.log(element);
        
    }
    
  // console.log(sum1); 
}
const array1Numbers = [2, 4, 1, 7, 9, 8];
console.log(`==== Sum an array elements =======`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];  
    sum = sum + element;
}
console.log(`Sum of an array is: ${sum}`);

const arrayNumbers2 = [2, 4, 1, 7, 9, 8];
console.log(`===== Traversing an array using for in loop=======`);
for (const index in arrayNumbers2) {
    console.log(arrayNumbers2[index]);
}
console.log(`=======Odd index elements===========`);
for (const index in arrayNumbers2) {
    if (index%2!=0) {
        console.log(arrayNumbers2[index]); 
    }
}
console.log(`=======join method===========`);
console.log(`========================================`);
var friendList = ["Jenny", "Bill", "Andy", "Elon"];
for (const element of friendList) {
    console.log(element);
}
console.log(friendList);
const elements = friendList.join(",");
console.log(elements);

console.log(friendList.join("="));