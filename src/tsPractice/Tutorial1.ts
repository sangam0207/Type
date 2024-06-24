let name:string="Sangam Shukla";
name=name.toLocaleUpperCase();
console.log(name) 

interface objectInterface{
    name:string,
    age:number,
    isPassed:boolean
}
const student:objectInterface={
    name:"sangam",
    age:22,
    isPassed:true
}
console.log(student)

let count:number=20;
count=count+20;

const isbig:boolean=count>=30;
console.log(isbig);



//// Array in TS ////

const temp:number[]=[10,20,30];
console.log(temp);

const studentNames:string[]=['sangam','shukla','roshan'];
console.log(studentNames);

// mixedArray
const mixedArray:(number|boolean|string)[]=['sangam',10,true,20];
console.log(mixedArray)


let foundName:string|undefined;
for(let item of studentNames){
    if(item==='shukla'){
        foundName=item;
        break;
    }
}
console.log(foundName?.length);

////  Object in TypeScript  ////

interface obj{
    name:string,
    age:number
}

const studentDetail1:obj={
    name:'Sagar shukla',
    age:22
}
const studentDetail2:obj={
    name:'Sangam shukla',
    age:22
}
const studentDetail3:obj={
    name:'Rahul',
    age:24
}
const studentDetail4:obj={
    name:'Harry',
    age:21
}

// Array of Obj

const studentList:obj[]=[studentDetail1,studentDetail2,studentDetail3,studentDetail4];
console.log(studentList)

// Optional items in object;

interface itemModel{
    title:string;
    price:number;
    amount?:number // it is optional
}
const item1:itemModel={
    title:'Item1',
    price:30,
    amount:5
}
const item2:itemModel={
    title:'Item2',
    price:25
}
const itemList:itemModel[]=[item1,item2]
console.log(itemList)



// Function in TypeScript //

function add(item1:number,item2:number):number{
    return item1+item2
}
const result=add(23,24);
console.log(result);

//Optional and default parameter 

const calculatePrice=(price:number,off:number):number=>{
    return price-off;
}
console.log(calculatePrice(200,20));

const finalPrice=(price:number,discount?:number):number=>{// optional parameter
    return price-(discount||0)
}
console.log(finalPrice(200))

const finalPrice2=(price:number,discount:number=10)=>{ // default parameter
    return price-discount
}
console.log(finalPrice2(200));
console.log(finalPrice2(200,150))

// Task 1

function processInput(value:number|string):void{  //Union 
    if(typeof value==='number'){
        console.log(value*2);
    }
    else if(typeof value==='string'){
        console.log(value.toLocaleUpperCase());
    }
}
processInput(15);
processInput('sangam shukla');







