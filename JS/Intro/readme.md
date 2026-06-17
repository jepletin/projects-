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


DATA TYPE

Is a classification that specifies the kind of data a variable can hold in a programming language.

two types of Major Data-types.
Primitive
Object

Primitive data types
A primitive data type specifies the type of a variable and the kind of values it can hold.
The primitive data types in Java are :
Number
String
Boolean
Undefined
Null

Numbers
Represents integer or floating decimal types of data.
const age=23 // Number Positive Integer
let price=23.45 // Floating point
let another=-230 // Number Negative

Strings
Is a sequence of characters.
let myName =“LydiaJepleting” // String
let cat=‘Garfield’ // String
let email=lydiajepleting9@gmail.com // String
let age=“28” // String Not A Number

Boolean
Represent a logical entity that can have two values. true or false
is_active = True
has_permission = False
is_logged_in = True

Undefined
Do not set a variable to undefined. Let js set something to undefined for you.
Absence or a value. A variable which has been declare and not assign it a value its value becomes undefined.
let age // The value of age is undefined
//This is not good code

Null
Null means the absence of a value. You can explicitly set a variable to null.
let marks=null
// Input Marks.

Ways to create a string variable 3 ways
1. Using Double Quotes (" ")
let firstName=“lydia”
let lastName=“jepleting”

1. Using Single Quotes (' ')
let firstName=‘lydia’
let lastName=‘Jepleting’

1. Using Back Ticks Quotes (``)
let firstName=`lydia`
let lastName=`jepleting`

Difference between undefined and null
Real-Life Example
Suppose a school database stores a student’s email:

Undefined: The email field has not been filled in yet.
Null: The student does not have an email address, so the field is intentionally left empty.

Undefined means a variable has been declared but not assigned a value,
Null means a variable has been intentionally assigned an empty or no value by the programmer.