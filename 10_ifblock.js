var marriageEligibility = function(age, candidateName, gender){
    if (age>=21 && gender=="Male") {
        console.log(`Eligible : Age- ${age}, Name- ${candidateName}`);
    }
}
marriageEligibility(23, "Bill", "Male");
marriageEligibility(20, "Elon", "Male");


console.log(`----------------------------`);
function vote(person, age){
    if (age>=18) {
        console.log(`Yes. please vote. Age: ${age}, Name: ${person}`);
    } else {
        console.log(`Sorry. please try next year. Age: ${age}, Name: ${person}`);  
    }
}
vote("Jenny", 34);
vote("Bill", 14);
vote("Elon", 18);