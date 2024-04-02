class Vehicle{
constructor(No,name,color,mileage,fueltype){
this.No = No;
this.name = name;
this.color = color;
this.mileage = mileage;
this.fueltype = fueltype;
}
detail(){
    
            console.log(`Vehicle Details:
                         Model No of the vehicle is : ${this.No}
                         Name of car: ${this.name}
                         Color: ${this.color} 
                         Mileage:${this.mileage}
                        Fultype:${this.fueltype}`);

}
}
const Nexon = new Vehicle("389909", "NEXON","Red","20km/hr","Diesel");
//Nexon.detail();

const XUV = new Vehicle("895638", "XUV","White","18km/hr","Petrol");
//XUV.detail();

const Harrier = new Vehicle("674309", "HARIER","Black","20km/hr","Petrol");
//Harrier.detail();

const CRETA = new Vehicle("452305", "CRETA","White","21km/hr","CNG");
//CRETA.detail();


const Ciaz  = new Vehicle("216750", "CIAZ","White","18km/hr","Petrol");
//Ciaz.detail();
console.log("================================Step 1=======================================");

const array =[Nexon,XUV,Harrier,CRETA,Ciaz];
for (const element of array) {
    element.detail();
}

console.log("================================Step 2=======================================");




class College{
    constructor(name,univercity,location,Accreditation){
        this.name = name;
        this.univercity = univercity;
        this.location = location;
        this.Accreditation = Accreditation;

    }
diplay(){
    console.log(`Name: ${this.name}, Univercity:${this.univercity}, Location: ${this.location}, Accreditation: ${this.Accreditation} `);



}


}
 const KTHM = new College("KTHM Collge","SPPU","Nashik","NAAC-A");
 KTHM.diplay();


const MIT = new College("MIT Collge","SPPU","PUNE","NAAC-B");
 MIT.diplay();
 
 const COEP = new College("COEP Collge","Autonomous","pune","NAAC-A+");
 COEP.diplay();
 
 const VJTI = new College("VJTI Collge","Autonomous","Mumbai","NAAC-A++");
 VJTI.diplay();
 



