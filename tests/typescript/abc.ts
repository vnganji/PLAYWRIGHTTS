let a: string="welcom venkat";

console.log(a);

type ts = 'apples'|'mangos'|'pineapple';
let printfruit = (fruits: ts) =>
{
    console.log(fruits);
};

printfruit("mangos");
//printfruit("banana") throw error as banana is not part of ts obkject

interface infer1 {
    name: string,
    age: number,
    print: ()=>string;
}

class abc implements infer1{

    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name=name;
        this.age=age;

    } 
   
    
    print = ()=>{return `${this.name}`};

    
}

let obj = new abc("srikanth",20);
console.log(obj.print());

type student ={
    name: string;
    subjects: string[];
}

let stud1: student ={
    name: "ravi",
    subjects: ["maths","english","science"]
}

console.log(`${stud1.name}, ${stud1.subjects[0]}`);