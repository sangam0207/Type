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


// <--------------   Alias Challenge-------------->

    // Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).
    // Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).
    // Create a Union Type: Define a type Staff that is a union of Employee and Manager.
    // Create the printStaffDetails function: This function should accept a parameter of type Staff. 
    //Inside the function, use a type guard to check if the 'employees' property exists in the passed object.
    // If it does, print a message indicating that the person is a manager and the number of employees they manage. 
    //If it doesn't, print a message indicating that the person is an employee and the department they belong to.
    // Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. 
    // Also create a Manager object named bob who manages alice and steve.
    // Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.



type Employee={
    id:number,
    name:string,
    department:string
}
type Manager={
    id:number,
    name:string,
    employees:Employee[]
}
let employee1={id:2,name:'John',department:'Development'}
let employee2={id:2,name:'Harry',department:'Ui/Ux'}
let manager1={id:1,name:'Sangam',employees:[employee1,employee2]}

type Staff=Employee|Manager

function printStaffDetails(staff:Staff):void{
if('employees' in staff){
    console.log(`${staff.name} is a Manager and He manage ${staff.employees.length} employees`)
}
else{
  console.log(  `${staff.name} is an Employee and he is from ${staff.department} department`)
}
}

printStaffDetails(employee1)
printStaffDetails(manager1)



// Interaction property of Alias
 

type Book={
    id:number,
    name:string,
    price:number
}
type DiscountedBook=Book & {discount:number}// Intersection
const Book1:Book={
    id:1,
    name:'Ramayan',
    price:200
}

const Book2:DiscountedBook={
    id:1,
    name:'Jungle Book',
    price:250,
    discount:30
}
console.log(Book1);
console.log(Book2)


// Interface

interface College{
readonly id:number,
 name:string,
   Students:number
}
const college1:College={
     id:6,
     name:'XYZ College',
     Students:40
}
//college1.id=90; can not change it's value. ;
const college2:College={
    id:9,
    name:'APJ technical university',
    Students:400
}
console.log(college1,college2);


interface Person{
    name:string
}
const person1:Person={
    name:'sangam shukla'
}
interface DogOwner extends Person{
    dogName:string
}
const person2:DogOwner={
    name:'sangam shukla',
    'dogName':'harry'
}
interface Manager extends Person{
    // managePeople():void
    // delegateTasks():void
}
const person3:Manager={
    name:'Sangam shukla',
     managePeople(){
        console.log('managePeople')
    },
    delegateTasks(){
        console.log('delegateTasks func')
    }
}
type employeeType=Person|DogOwner|Manager;
function getEmployee():employeeType{
    const randomNumber=Math.random();
    if(randomNumber<.33){
        return person1
    }
    else if(randomNumber>=.33 && randomNumber<.66){
        return person2;
    }
    else{
        return person3;
    }
}

const result1:employeeType=getEmployee();
console.log(result1)





