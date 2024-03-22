console.log("============================step1=========================");
var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
var first = fruits_seasonal.shift(0);
var last = fruits_seasonal.pop();

console.log("First element of array:",first);
console.log("Lst elelment of array:",last);
console.log("============================step2=========================");

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
console.log("2.Papaya before banana element");
var addele = fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);



console.log("============================step3=========================");
var fruits_seasonal1 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal1);
console.log("3.Remove the Mango element from array");
var removeele = fruits_seasonal1.splice(3,1);
console.log(fruits_seasonal1);


console.log("============================step4=========================");
const fruits_seasonal11 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal11);
console.log("4.Add the pineapple at last position");
fruits_seasonal11.push("pineapple");
console.log(fruits_seasonal11);


console.log("============================step5=========================");
var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
fruits_seasonal.splice(4,0,"Dragon fruit");
console.log("5.Add dragon fruit before watermelon");
console.log(fruits_seasonal);

console.log("============================step6=========================");
var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
fruits_seasonal.splice(1,1,"kiwi");
console.log("6.Replace orange with kiwi");
console.log(fruits_seasonal);

console.log("============================step7=========================");
var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
var result = fruits_seasonal.slice(1,4);
console.log("7.log eleent starting from 1 to 4");
console.log(result);

console.log("============================step8=========================");
var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
 var result = fruits_seasonal.slice(2,5)
 console.log("8.only select last three element");
console.log(result);
