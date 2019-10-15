
//alert("Sahypama hosh geldiniz");
//var name = prompt("Adynyz?"); 
//document.write(name);

var a = (5==="5"); // == compares only values, not types. But === compares both.
document.write(a);


 var date = Date();
 document.write("<br>"+date);
 var widh = window.innerWidth;
 document.write("<br>"+widh);
 console.log(sum(2,4));

 function sum(num, num2){
     return num+num2;
 }


 //converts to integer if possible;
 function convertToInt(str){
      return parseInt(str) || "not possible to convert";
 }

 var val1 = convertToInt("bafsdf5");
 console.log(val1);


 var student = {

    "name" : "bagtyyar",
    "lastName" : "ak",
    "weight" : 75,
    "height" : 145,
    "subjects" : ["math", "geo", "lang", ["c++", "python", "java", "html"]],
    "the word" : "great"
 }

 console.log(student["the word"].length);
 console.log(student.subjects[3][2]);
 var randNum = Math.floor(Math.random() * 10);
 console.log("Random number "+ randNum);

//random number between begin and end
 function rand2(begin, end){
     return Math.floor(Math.random() * (end-begin))+begin;
 }
 
 console.log(rand2(5,15));


 //convert to integer from binary
 function convertToIntFromBinary(str){
     return parseInt(str, 2);
 }

 console.log(convertToIntFromBinary("11011"));

 //checkSign of num
 function checkSign(num){
     return (num>0)? 1 : (num===0)? 0 : -1;
 }

 console.log(checkSign(83-80));

const ABC = 4.5;  //better use all capital letter to differentiate
 // ABC = 4.5;  // you cannot assign value to const variable like(final in java)

//difference between let and var is on "let" you cannot declare with same name,
// it's better to use let instead of var.
// another diff is var has global scope, but let doesn't

let a2 = "apple"; 
// let a2 = "banana"; // will throw an error, duplicate declaration
a2 = "banana"; // no problem with it



const MATH_CONSTANTS = {
    PI : 3.14,
    E : 2.94,
    GOLD_RATIO : 1.65
}

Object.freeze(MATH_CONSTANTS); //willnot allow you to change value
console.log(MATH_CONSTANTS.GOLD_RATIO);


//anonymous function (function without name) ==> arrow function
var magic = function(){
    return new Date();
}

const magic2 = () => new Date();
console.log(magic2);

// another example to convert arrow function
var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
}

var myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat2("one", "two"));

//higher order arrow functions
const realNumArr = [-1,2,3.4,5,7.9,10,-12,15];

const cubedList = (arr) => {                //checking if num is integer  and then taking cube
    const cubedIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x*x);
    return cubedIntegers;
}
console.log(cubedList(realNumArr));

//time 2:53:59
//https://www.youtube.com/watch?v=PkZNo7MFNFg





