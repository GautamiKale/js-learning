var n1=100;
var n2=200;
console.log("=====Before swap=====");
console.log("n1:",n1 ,"n2:",n2);
console.log("=====After Swap=====");
var temp = n1;
n1 = n2;
n2 = temp;
console.log("n1:", n1, " n2:", n2);



console.log("==== Variable Re-declaration ======");
var pinCode = "411057";
console.log(pinCode);
pinCode  = "112233"; // Variable update

var pinCode = "445533"; // Variable re-declaration
console.log(pinCode);