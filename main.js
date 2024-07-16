//   Mcqs sir fasih
// function myFunc(data1: number, data2: string): number{
//     const num: number = data2 as unknown as number;
//     console.log(typeof num);
//     const result: number = data1 + num;
//     return result;
// }
// const myAnswer: number = myFunc(10, "5");
// // console.log(myAnswer);
// function categorizeAge(age: number): string {
//     if (age < 13) {
//         return "Child";
//     } else if (age >= 13 && age <= 19) {
//         return "Teenager";
//     } else {
//         return "Adult";
//     }
// }
// let x = categorizeAge(16)
// // console.log(x);
// function calculateDiscount(quantity: number): number {
//     let discount = 0;
//     if (quantity > 10) {
//         discount = 20;
//     } else if (quantity >= 5) {
//         discount = 10;
//     } else {
//         discount = 0;
//     }
//     return discount;
// }
// let x = calculateDiscount(10);
// console.log(x);
// const student = {
//     name: "Muhammad Fasih",
//     age: 20,
//     isStudent: true,
// }
// const {name, age, isStudent} = student;
// const myKey: keyof typeof student = age === 21 ? "name" : "age";
// student["name"] = "Salman Shahid";
// console.log(student[myKey]);
// console.log(name);
// type A = {
//     name: string;
//     age: number;
// }
// type B = {
//     name: string;
//     rollNum: number;
// }
// let myObj1: A = {
//     name: "Muhammad Fasih",
//     age: 20,
// }
// let myObj2: B = {
//     name: "Salman Shahid",
//     rollNum: 1234,
// }
// myObj1 = myObj2 as unknown as A;
// console.log(typeof myObj1);
// console.log(myObj1.name === myObj2.name);
// console.log(myObj1.age);
// let array = [10, 20, 30];
// for (let value of array) {
//     console.log(value);
// }
// let i = 0;
// do {
//     i++;
// } while (i < 3);
// console.log(i);
// let sum = 0;
// let n = 5;
// while (n > 0) {
//     sum += n;
//     n--;
// }
// console.log(sum);
// const myName = (fName: string, lName?: string): string => {
//     const myFullName: string = lName ? fName + " " + lName : fName;
//     return myFullName;
// }
// const myAnswer1: string = myName("Muhammad");
// const myAnswer2: string = myName("Muhammad", "Fasih");
// console.log(myAnswer2);
// console.log(myAnswer1);
// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log(`${this.name} makes a sound`);
//   }
// }
// class Dog extends Animal {
//   makeSound() {
//     console.log(`${this.name} barks`);
//   }
// }
// const myDog = new Dog('Rex');
// myDog.makeSound();
// class Car {
//     private brand: string;
//     constructor(brand: string) {
//       this.brand = brand;
//     }
//     getBrand() {
//       return this.brand;
//     }
//   }
//   const myCar = new Car('Toyota');
//   console.log(myCar.getBrand());
//  const  arr: number [] = [1,2,3,4,5,6,7 ]
// const result = arr.fill(5,1,4)
// console.log(result);
// let array:number[]=[ 1, 2, 3, 4, 5, 6, 7, 8, ]                                                 const numGreater:number[] = array.filter((CurrentEle:number)=> CurrentEle > 4)
// console.log(numGreater);
// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
//   const john = new Person('John', 30);
//   john.greet();
//   class Shape {
//     public area(): number {
//       return 0;
//     }
//   }
//   class Circle extends Shape {
//     radius: number;
//     constructor(radius: number) {
//       super();
//       this.radius = radius;
//     }
//     public area(): number {
//       return Math.PI * this.radius * this.radius;
//     }
//   }
//   const circle = new Circle(5);
//   console.log(circle.area()); 
//   Sliddes 
// Variable 
//  Case sensitive 
// let myName = "asfa"   // Camel case
// let my_name = "asfa"  // sanke case 
// let  _my_name = "asfa"
// let MyName = "asfa"    // Pascal case
// let $myName = "asfa"
//  Strong typing 
//    STRING 
// let myName : string = "asfa"
// let myName1 : string = "asifa"
//  Error 
// let myName2 : string = "asfa"
// myName2 = 33   // type number is not assignable to type string 
// data type string number or boolean
// let myName : string = "asfa"
// let myAge : number = 3
// let isStudent : boolean = true
// let randomValue : any = "asfa "
// randomValue = true
// randomValue = 7
//  strongly type 
// let my_name: string = "asfa"
// let my_age : number = 5
// let is_student : boolean  = true 
//  Type inference
// let myName = "asfa4tt"
// let e = "usa"
// let f = 3
// let g = true
//  Additional primitive data type 
// undefined 
// let my_age;
// console.log(my_age);  // undefined 
// let myName :unknown = 8
// let my_name = myName as string 
// console.log(typeof my_name);
// synatx error 
// lett myName = "asfa"
// console.log(myName);
// type error 
// let myName = "asfa"
// console.loger(myName)
// ASSIGNABILITY ERROR 
// let my_name  ="asfa"
// my_name = 4
// String concatenation 
// let my_name : string = "asfa";
// let myName : string = "qasim";
// let my_name1: string = my_name + " " + myName
// console.log(my_name1);
//   template literal 
// let my_name : string = "asfa";
// let my_name1 : string = "qasim";
// let myFullName : string =  `${my_name} ${my_name1}`
// console.log(myFullName);
// Arithmetic  operator 
// (+)
// let num = 2
// let num1 = 7
// let cart : number = num + num1;
// console.log(cart);
// (-)
// let num = 5
// let num1 = 2
// let total : number = num - num1
// console.log(total);
// (*)
// let num = 5
// let num1 = 5
// let cart = num * num1
// console.log(cart);
// (/)
// let num = 5;
// let num1 = 6;
// let cart = num / num1
// console.log(cart);
// (**)  // Exponent 
// let num = 2
// let num1 = num ** 2
// console.log(num1);
// Modules (%) (Means reminder)
// let num = 10;
// let num1  = 3;
// let cart = num % num1
// console.log(cart);
// Unary operator 
// let a = 5;
// let b = 2 
// console.log(a++);  // answer is 5
// console.log(a);    // answer is 6 
// let a = 6;
// let b = 3;
// console.log(b--);  // answer is 3
// --b
// console.log(b);  // answer is 1
// More practice 
// let a : number = 5;
// let b : number = 2;
//               //  6   +  6  +  1  +  1  + 7  +  0 + 1
// let c : number = ++a + a++  + --b + b-- + a  + b++ + b
// console.log(c);  // output 22
// More practice 
// let a = 4
// let b = 2
//       //  5 + 5  +   1  +  1  + 6 +  0  +  1  
// let c = ++a + a++ + --b + b-- + a + b++ + b
// console.log(c);  // output 19
// More parctice 
// let a = 5
// let b = 5 
//       // 5 +   7  + 5  +  5 +  5  
// let c = a++ + ++a + b-- + ++b + b
// console.log(c);   // output 27
// Combining operator 
// let result = 3 + 5 * 2
// console.log(result);
// let result = 3 + 4 * 2
// result++
// console.log(result);
// Adiition calculator 
// import inquirer from "inquirer";
// let answer = await  inquirer.prompt([{
//   name: "num",
//   type:"number",
//   message: "Enter first number"
// },
// {
//   name: "num1",
//   type: "number",
//   message: "Enter second number "
// }
// ])
// console.log(answer.num + answer.num1);
//  BMI CALCULATOR 
// let weightInKg = 36  // 36 kg
// let heightInMeter = 5 // height in meter 
// let bmi = weightInKg /  heightInMeter * heightInMeter
// console.log(bmi);
// Home work Calculator 
// import inquirer from "inquirer";
// let answer = await inquirer.prompt ([{
//   name: "firstNumber",
//   type: "number",
//   message:  "Enter first number"
// },
// {
//   name: "secondNumber", 
//   type: "number",
//   message: "Enter second number"
// },
// {
//   name: "operator",
//   type: "list",
//   message: "Select one of the operator to perform operation",
//   choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponent"]
// }
// ])
// if(answer.operator === "Addition"){
//   console.log(answer.firstNumber + answer.secondNumber);
// }
// else if(answer.operator === "Subtraction"){
//   console.log(answer.firstNumber - answer.secondNumber);
// }
// else if(answer.operator === "Multiplication"){
//   console.log(answer.firstNumber * answer.secondNumber);
// }
// else if(answer.operator === "Division"){
//   console.log(answer.firstNumber / answer.secondNumber);
// }
// else if(answer.operator === "Modulus"){
//   console.log(answer.firstNumber % answer.secondNumber);
// }
// else if(answer.operator === "Exponent"){
//   console.log(answer.firstNumber ** answer.secondNumber);
// }
// else 
// {
//   console.log("Please select valid operation");
// }
//  Assignment Operator 
// let a = 4 
// a += 5
// console.log(a);
//   Practice 
// let a = 5 
// let b  = 4 
// let c = (a ==b) // false bcz 5 is not eqaul to 4 
// let c1 = (a !== b) // true bcz  5 is not aqual to 4
// let c2 = (a < b)   // false bcz 5 is not less than 4
// let c3 = (a > b) // true bcz 5 is greater than 4 
// let c4 = (a <= b)   // fasle bcz 5 is not less than or equal to of 4
// let c5 = (a >= b)   // true bcz 5 is greater than or equal to 4
//     Logical operator
// && operator 
// let a = 5
// let b = 4
// let c = (a >4 && b < a)
// console.log(c);  // true bcz both conditions  are true 
// OR opeartor 
// let a = 5 
// let b = 6
// let c = (a < b || b < a) 
// console.log(c);  // true bcz one condition is true
// NOT operator 
let a = 6;
let b = 5;
let c = !(a > b);
console.log(c); // false bcz ! operator is convert to false 
//    Logic Statement 
// let myName : string = "Asfa"
// if (myName === "asfa"){
// console.log("Here is my name ");
// }
// else if (myName === "Asfa"){
//    console.log("Here is another name");
// }
// else 
// {
//   console.log("Please select valid");
// }
//    More example 
// let isRaining =  true
// if(isRaining){
//   console.log("Wear a rain coat");
// }
// else 
// {
//   console.log("Wear a sunglasses");
// }  // Output wear a rain coat
// let isRaining =  false
// if(isRaining){
//   console.log("Wear a rain coat");
// }
// else 
// {
//   console.log("Wear a sunglasses");
// }  // Output wear a sunglasses
//  Else if 
let weather = "cloudy";
if (weather === "raining") {
    console.log("Here is raining");
}
else if (weather === "cloudy") {
    console.log("Here is cloudy");
}
else {
    console.log("Wear a sun glasses");
}
export {};
