function  factorial(num){
let fact =1;
for (let index = num; index >= 1; index--) {
fact = fact*index;    
}
console.log(`Factorial  of ${num} is ${fact}`);

}
factorial(5);
factorial(3);
factorial(null);
factorial(8);
factorial(4);
factorial(undefined);
factorial(NaN);
factorial(0);