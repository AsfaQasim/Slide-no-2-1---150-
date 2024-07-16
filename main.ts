  
    //   Slide  no  2
    // Variable 

//  Case sensitive 


// let myName = "asfa"   // Camel case
// let my_name = "asfa"  // sanke case 
// let  _my_name = "asfa" // snake case
// let MyName = "asfa"    // Pascal case
// let $myName = "asfa"   // accepted(legal)

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

// let a = 6
// let b= 5
// let c = !(a > b)
// console.log(c);   // false bcz ! operator is convert to false 

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

// let weather = "cloudy"

// if(weather === "raining"){
//   console.log("Here is raining");
  
// }
// else if (weather === "cloudy"){
//   console.log("Here is cloudy");
  
// }
// else 
// {
//   console.log("Wear a sun glasses");
  
// }

