/* TASK 1
* Create a variable, set the numeric value for this variable and execute this value into console
* */
// let variable=5;
// console.log(variable);

/* TASK 2
* Create variable using const keyword
* Try to rewrite the value of it
* */
// const variable=5;
// variable=8;  //attempt to assign to const or readonly variable

/* TASK 3
* Create a variable with the value '123', show its type in console using typeof operator
* Change the type of this value into numeric, using parseInt(), parseFloat()
* And show its type in console using typeof operator again
* */
// let variable='123';
// console.log("it's type:" , typeof(variable));
// variable=parseInt(variable);
// console.log(typeof variable);
/* TASK 4
* Use browser modal windows to show the message "Hello! This is alert"
* */
// alert("Hello! This is alert");

/* TASK 5
* Show the modal window with message "Enter the number" and ability to write this number
* Create a variable with result of the users enter as its value and show this value in console.
* */
// let num=prompt("Enter the number");
// console.log(num);
// console.log(typeof num); // string olacaq, promptda string sheklinde dushur


/* TASK 6
* Use prompt modal window for getting two different numbers from the user
* Show the result of next operations in console: +; -; *; /.
* */
// let a=prompt("Enter the first number");
// let b=prompt("Enter the second number");
// console.log(a+b); //toplayanda iki stringi concat eleyecek, ona gore de ededleri parse inte chevirib sora hell etmek lazimdir
// console.log(a-b); // qalan bu
// console.log(a*b); // 3u
// console.log(a/b); //normal ishleyecek string olsalar bele

/* TASK 1
* Show up next things in console, using cinsole.log() method:
  - max integer value
  - min integer value
  - not a number
  - max safe integer
  - min safe integer
* */
//
// let a=Number.MAX_VALUE;
// let b=Number.MIN_VALUE
// let c=Number.NaN;
// let d=Number.MAX_SAFE_INTEGER;
// let e=Number.MIN_SAFE_INTEGER;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


/* TASK 2
* Create two variables. First will contain - any number, second - any string with any word inside.
* Execute the SUM of these two variables in the console
* Execute the DEFERENCE between these two variables in the console
* Execute the result of MULTIPLYING these two variables in the console
* Explain the result of every operation by your own words
* */

// let num=32;
// let str='any string';
// console.log(num+str); // burda concat edir
// console.log(num-str);// burda iki ferqli typedi deye chixa bilmir NaN verir
// console.log(num*str);// burda da eynile


/* TASK 3
* Create 2 variables. Assign true for first one, and false for second one.
* Execute into console:
*   - result of comparing 0 and variable with false inside with == operator
*   - result of comparing 1 and variable with true inside with === operator
* */

// let num1=true;
// let num2=false;
// console.log(0==num2);
// console.log(1===num1);

/* TASK 4
* Execute into console next statements and explain every result in your own words:
* Create variables - x = 6, y = 15, z = 4:
    * x += y  - x++ * z
    * z = --x -y * 6
    * y /= x + 5 % z
* 'random string' + 500
* 'random string' + +'number'
* 'random string' + +'500n'
* 'random string' + parseInt('404not found')
* !!'false' == !!'true'
* 'true' == true
* 'true' === true
* NaN == 1` `NaN == NaN` `NaN === NaN` `NaN > NaN` `NaN < NaN` `NaN >= NaN` `NaN <= NaN
* [] == true` `{} == true
* */
//
// let x=6;
// let y=15;
// let z=4;
// // console.log(x+=y-x++ *z); // x=x+y-x++ *z= 6+15-6*4=21-24=-3
// // console.log(z=--x-y*6); // z=--6-15*6= 5-90=-85;
// // console.log(y /= x + 5 % z); // y=y/(x+5%z)=15/7=2.1
// let str="random";
// console.log(str+500);// concat
// console.log(str+'500'); //yene concat
// console.log(str+'500n');//concat
// console.log(str+parseInt('404 not found')); // random404  parseint ancaq string icindeki inti numbere chevirir ve 404u chevirib concat eledi

// console.log(!!'false'==!!'true'); // true verir
// console.log('true'==true); //false
// console.log('true'===true); //false
// console.log(NaN == 1); //false
// console.log(NaN == NaN); //false
// console.log(NaN === NaN);//false
// console.log(NaN > NaN); //false
// console.log(NaN < NaN);// false
// console.log(NaN >= NaN); //false
// console.log(NaN <= NaN);//false


/* TASK 5
* Use browser modal windows for getting three numbers from user.
* Then execute into console:
*   - arithmetic average
*   - max number
*   - min number
* */
let n1=prompt("enter n1");
let n2=prompt("enter n2");
let n3=prompt("enter n3");
// console.log((n1+n2+n3)/3);
// bele etdikde stringleri concat eliyir meselen 1+2+3=123 edir sora 123/3=41
//ona gore parse int etmek lazimdir
//
// let n1=parseInt(prompt("enter n1"));
// let n2=parseInt(prompt("enter n2"));
// let n3=parseInt(prompt("enter n3"));
// console.log((n1+n2+n3)/3);

// if(n1>n2 && n1>n3){
//     console.log(`max number is ${n1}`);
// }
// else if(n2>n1 && n2>n3){
//     console.log(`max number is ${n2}`);
// }
// else
//    console.log(`max number is ${n3}`);

