function show(){
    console.log("====================step1===================");
console.log("My name is Guatami");
console.log("I want to become React Developer");
}
show();


function personalDetail(firstname,lastname,collegename){
    console.log("====================step2===================");
console.log("Firstname:",firstname);
console.log("Lastname:",lastname);
console.log("College Name:",collegename);
}
personalDetail("Gautami","Kale","KTHM COLLEGE","Nashik");




function swap(arg1,arg2){
    console.log("====================step3===================");
console.log("Before swap",arg1,arg2);
var temp = arg1;
arg1 = arg2;
arg2 = temp;
console.log("After swap",arg1,arg2);
}
swap("virat","Anushka");
swap(1000,2000);

function addThreeValues(n1,n2,n3){
    console.log("====================step4===================");
    console.log("Arguments: ", n1, n2, n3);
    var result = n1+n2+n3;
    console.log("Addition is: ", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("hello "," Good ", " Morning ");

function bankDetails(bankname,accountNum,location,pincode){
    
     console.log("Bankname:",bankname," AccountNum:",accountNum ,"  Location: ",location,"  Pincode: ",pincode);
     
}
bankDetails("CITI Bank","56527388","pune",431202);
bankDetails("Axis Bank","56527388","Mumbai",441202);
bankDetails("HDFC Bank","56527388","pune",631202,"open");