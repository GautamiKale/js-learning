const professor = {

    name: "Saurabh",
    age:30,
    designation:"Assitant Professor",
    college:"COEP PUNE",
    mobileno:387919,
      degree:{
        engineering:"CSC",
        postgraduction:"MTECH",
        PHD:"Adv Computing",
    },
 certificate: ["Hackr Rank certificate","certificate in IFE cource ","certificate in Adv computing"],
  }
console.log(professor);

console.log(professor.certificate);

professor.totalexperince = 14;
console.table(professor);
professor.mobileno = 88899;
console.log(professor);
professor.certificate.splice(1,0,"Oracle certificate");
console.log(professor.certificate);
var re =professor.certificate.pop();
console.log(re);

console.log(professor);







for (let index = 0; index < professor.certificate.length; index++) {
    const element = professor.certificate[index];
    console.log(element);
}