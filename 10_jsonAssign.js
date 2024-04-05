


const personJSON1 = 
{
"name": "Aleix Melon",
 "id" :"E00245",
 "role":["Dev","DBA"],
 "age":23,
 "doj":"11-12-2019",
 "married":false,
 "address": {
             "street":"32, Laham St.",
             "city":"Innsbruck",
             "country":"Austria"
             },
 "referred-by":"E0012"
}
;
const array = personJSON1.name.split(" ");
//console.log(array);
const array2 = personJSON1.doj.split("-")
//console.log(array2);



console.log(`==Convert JSON to Object==`);
console.log(personJSON1);
//console.log(personJSON1.role[0]);
console.log("==Log on conole role DEV==");
console.log(personJSON1.role[0]);
console.log("==Log only last name Melon==");

const result1 = array[array.length-1];
console.log(result1);

console.log("==Log only joining year of employee==");

const result2 = array2[array2.length-1];
console.log(result2);