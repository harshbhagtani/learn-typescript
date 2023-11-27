//launch.json is for debugging our ts code

let age: number = 20;

//we dont have to always annotate the variable with type since we
//have initialized it string it takes it as string type
let myname = "harsh";

//avoid any type as it is javascript only

//use any type only when you are not sure about the type

let numbers: number[] = [1, 2, 3];
//or
//let numbers = [1, 2, 3];

//tuples fixed lenght array with each elemnet having a type

let user: [number, string] = [1, "Mosh"];

//user[0]. will list down all functions that we can perform for a number like toFixed toString
//intellisense gets notified by ts that its a number similar for any other declared type one of the benefits
//for developers

//Enums

enum Size {
  Small,
  Medium,
  Large
}

console.log(Size.Small); // by default it takes 0 1 2

enum Status {
  Pending = 1,
  Fullfilled,
  Rejected
}

console.log(Status.Rejected); // by default it takes 3 since Pending started from 1

//functions
//nounusedlocal true for checking local varibles not used

function caculateTax(income: number, taxYear?: number): number {
  if (income < 50000) return income * 0.2;

  return income * 0.3;
}

caculateTax(10000);
//? in front of taxyear makes that argument optional

/**
 *  2nd method
 * 
 * or 
 * function caculateTax(income: number, taxYear=2022): number {
  if (income < 50000) return income * 0.2;

  return income * 0.3;
}
by giving default value we removes ts error here 
 */

//objects

let employee: {
  age: number;
  name: string;
} = {
  age: 22,
  name: "harsh"
};

//if some property is option we can write like ? in front of key

/**
 * {
  age: number;
  name: string;
  dob?:string;
  fn:(date:Date)=>void;  this is for methods inside object
}

 */

// we can define the types separately

type Employee = {
  name: string;
  age: number;
  retire?: (date: Date) => void;
};

//union types

let weight: number | string = "22";
weight = 22;

// no error since we have used union type here

//type intersection

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizable;

let component: UiWidget = {
  drag: () => {},
  resize: () => {}
};

//literal types

let color: "primary" | "secondary" | "default" = "primary";
//can take only one of these 3 values
