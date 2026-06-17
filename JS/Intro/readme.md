# What is javaScript Variables
Variables are  containers for storing data.

    x=5 where xis 5 and 5 is x.
## How to  Declare Variables in JavaScript?
To declare variable  we use let,and const

    let x=25;
    const y =25;
## Rules in Javascript
 1. Spaces are not allowed in variable names.
     myage =  5;  
     myagein20years=34;
    my  age =  5; invalid syntax error because of space 


2. Only letters, digits, underscores, and dollar signs are permitted in variable name.

    my_age=24;
    $myage=23;
    _myage
    23myage-incorrect dont start with a number


3. Case matters when it comes to variable names.

  let age = 25;
let Age = 30;
let AGE = 35;
(age, Age, AGE); 25 30 35 — these are three separate variables

4. A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, any other special characters must not be taken.

    let _myage =24;
    let $price =  200;
    let myage =  45;

5. certain terms such as reserved words in javascript shouldn’t be used to name variables.
  like: 
  let let =35;   not allowed
  const const =34;   not allowed this are reserved words
  but if you want to use it you can use them like this 
  let _let ,$let
  
  ## Ways of Writing Variables for a programmer
 1. Pascal case 
  First letter of each word is capital from the begining 

  example;
  MyAgeInTheNext5Years=45;

    class  UserAccount  {  }
    class  ShoppingCart  {  }


2. Camel case
 camel is like pascal case but the first word start with small letters 
 example:
 myAgeInTheNext5Years=45;
 
  

     let firstName =  "John"; 
    let totalPrice =  99.99;



3. Snake case 
 small letters
All lowercase with underscores separating words.
example:
my_age_in_the_next_5_years=30

    first_name =  "John" ;
    total_price =  99.99;
