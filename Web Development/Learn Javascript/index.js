// 1. Ways to print in Javascript
// console.log("Hello World");
// alert("me");
// document.write("This is document write");

// 2. Javascript console api
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("This is warning");
// console.error("This is an error");
// console.clear();
// console.assert(4 == (6 - 2));

// 3. Javascript Variables
// What are variables - Containers to store data values

/*
multi
line
comment
 */

// var num1 = 34;
// var num2 = 56;
// console.log(num1 + num2);


// 4. Data types in Javascript
// Numbers
// var number1 = 455;
// var number2 = 56.76;

// String
// var str1 = "This is a string";
// var str1 = 'This is a string';

// Objects
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     tete: 99.977
// };

// // Booleans
// var a = true;
// var b = false;

// var und = undefined;
// var und;
// var n = null;

/*
At a ver high level, there are two types of data types in Javascript
1. Primitive data types: undefined, null, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

// Arrays
// var arr = [1, 2, "string", 4.67, 5];

// Operetors in Javascript
// var x = 100;
// var y = 10;
// console.log("The value of x + y is ",x+b);
// console.log("The value of x - y is ",x-b);
// console.log("The value of x * y is ",x*b);
// console.log("The value of x / y is ",x/b);

// Assignment Operators
// var c = y;
// c += 2; // c = c + 2
// c -= 2; // c = c - 2
// c *= 2; // c = c * 2
// c /= 2; // c = c / 2

// Comparision Operetors
// var w = 34;
// var f = 56;
// console.log(w == f);
// console.log(w >= f);
// console.log(w <= f);
// console.log(w < f);
// console.log(w > f);

// Logical Operetors

// Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical not
// console.log(!false);
// console.log(!true);


// function avg(a, b) {
//     c = (a + b) / 2;
//     return c
// }
// DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// conditionals in Javascript

// var age = 18;

// SIngle if statement
// if (age >= 18){
//     console.log("You can drive a car")
// }

// if - else statement
// if (age >= 18){
//     console.log("You can drive a car")
// }
// else{
//     console.log("You cannot drive a car")
// }

// if-else ladder
// if (age >= 18 && age <=99){
//     console.log("You can drive a car")
// }
// else if (age > 100){
//     console.log("You are too old")
// }
// else{
//     console.log("You cannot drive a car")
// }

// Loops in Javascript

// for loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// for (var i = 0; i < arr.length; i++) {
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// while loop
// let j = 10;
// while (j <arr.length) {
//     console.log(arr[j])
//     j += 1
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length)


// let myArr = ["Fan", "Camera", 34, null, true]
// Some Array Methods
// myArr.pop();
// myArr.push("tete");
// myArr.length();
// myArr.shift();
// myArr.unshift("Harry");
// console.log(myArr.unshift("Harry"));
// console.log(myArr);


// String Methods in Javascript
// let mystring = ("tete is a good boy")
// console.log(mystring.length)
// console.log(mystring.indexOf("tete"))
// console.log(mystring.lastIndexOf("tete"))
// console.log(mystring.slice(1, 4))
// d = mystring.replace("tete", "rohan");
// d = d.replace("good", "bad");
// console.log(d, mystring)

// let myDate = new Date();
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth())
// console.log(myDate.getDay())
// console.log(myDate.getHours())
// console.log(myDate.getMilliseconds())


// DOM manipulation
// let elem = document.getElementById('click');
// console.log(elem);

// let elemclass = document.getElementsByClassName("container")
// console.log(elemclass);
// elemclass[0].style.background = "yellow"
// elemclass[0].classList.add("bg-primary")
// elemclass[0].classList.add("text-success")
// elemclass[0].classList.remove("text-success")
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

// tn = document.getElementsByTagName('div');
// console.log(tn);
// createElement = document.createElement('p');
// createElement.innerText = "This is a created para";
// tn[0].appendChild(createElement);
// createElement2 = document.createElement('b');
// createElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createElement2, createElement);
// removeChild(element); // --> removes an element



// Selecting using query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// Events in Javascript


function clicked() {
    null;
}

// function clicked() {
//     console.log("The button was clicked");
// }
// window.onload = function(){
//     console.log("The document was loaded");
// }


// FirstContainer.addEventListener('click', function(){
//     console.log("click on Container")
// })


// FirstContainer.addEventListener('mouseover', function(){
//     console.log("mouse on Container")
// })

// FirstContainer.addEventListener('mouseout', function(){
//     console.log("mouse out of on Container")
// })

// FirstContainer.addEventListener('mouseup', function(){
//     console.log("mouseup when clicked on Container")
// })

// FirstContainer.addEventListener('mousedown', function(){
//     console.log("mousedown when clicked on Container")
// })

// FirstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have Clicked"
//     console.log("click on Container")
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

// FirstContainer.addEventListener('mouseup', function () {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouseup when clicked on Container")
// })

// FirstContainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have Clicked"
//     console.log("mousedown when clicked on Container")
// })


// Arrow functions
// function summ(a, b){
//     return a+b;
// }
// summ = (a, b)=>{
//     return a+b;
// }

// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b>SetTimeout and setInterval fired"
//     console.log("mousedown when clicked on Container")
//     console.log("I am your log")
// }

// SetTimeout and setInterval

// setTimeout(logKaro, 5000);
// setInterval(logKaro, 5000);

// use clearInterval(ctr2)/clearTimeout(ctr1) to cancel setInterval/setTimeout
// clr1 = setTimeout(logKaro, 5000);
// clr2 = setInterval(logKaro, 5000);


// Javascript localStorage
// localStorage.setItem('name', 'tete')
// localStorage.getItem('name')
// localStorage.clear()
// localStorage.removeItem('name')

// JSON
// obj = {name: "tete", length: 1, a: {this: "this"}}
// jso = JSON.stringify(obj);
// console.log(jso);
// parsed = JSON.parse(`{"name":"tete","length":1,"a":{"this":"this"}}`)
// console.log(parsed)

// Template literals - Backticks
// a = 34;
// console.log(`This is my ${a}`)