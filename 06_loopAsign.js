console.log("=============Step 1===========");
const word = " I am very good IT Developer";
const vowels = "aeiou";
let vowelscount = 0;
for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
        vowelscount++;
        
        
    }
    
}

console.log(` Total number of vowels in given string is:${vowelscount}`);
console.log("=============Step 2===========");
//function cubeSum(n) {
var sum = 0;

    for (let index = 0; index <= 5; index++) {
        
        sum = sum+index*index*index;
    }
    
//}
//cubeSum();
//console.log(sum);
    console.log("The numbers are 1,2,3,4,5");
  console.log(` The sum of cube is: ${sum}`); 
    
   console.log("=============Step 3===========");
function oddPositionChars(word) {
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if(index%2!=0 && element!=" ")
        console.log(element);
    
        
    }
    
}
console.log("The given string is : Hard work always pays back");
oddPositionChars("Hard work always pays back");
console.log("The given string is : Soon I will be UI IT Champ");
oddPositionChars("Soon I will be UI IT Champ");