class Student {
    rollno
    name
    division



    constructor(myrollno,myname,mydivion){
        this.rollno = myrollno;
        this.name = myname;
        this.division = mydivion;
    }
    getDetail(){
    console.log(`Student Details => Name: ${this.rollno}, City: ${this.name}, Age: ${this.division}`);
    }
    }
    const Gautami = new Student("11","gautami",25);
    Gautami.getDetail();
        const Saurabh = new Student("12","saurabh",29);
    Saurabh.getDetail();
    const Komal = new Student("13","komal",24);
Komal.getDetail();