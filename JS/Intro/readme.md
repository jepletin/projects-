# 1 What is JavaScript Variables
Variables are containers for storing data.
 
### example
x=5 where xis 5 and 5 is x.

## 2 How to Declare Variables in JavaScript?

To declare variable we use let,and const
### examples
let x=25;
const y =25;

##  3 Rules in JavaScript

### Spaces are not allowed in variable names. 
let myAge =25;
my Age = 5; invalid syntax error because of space

### Only letters, digits, underscores, and dollar signs are permitted in variable name.
 let my_Age=24;
$my_Age =23;
23 my_Age-incorrect don't start with a number

### Case matters when it comes to variable names.
let age = 25;
let Age = 30;
let AGE = 35;
(age, Age, AGE); 25 30 35 — these are three separate variables

###  A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, any other special characters must not be taken.

let _myAge =24;
let $price = 200;
let myAge = 45;

### certain terms such as reserved words in JavaScript shouldn’t be used to name variables.
like:
let let =35; not allowed
const const =34; not allowed this are reserved words
but if you want to use it you can use them like this
let _let ,$let

## 4  Ways of Writing Variables for a programmer

#### Pascal case
First letter of each word is capital from the begining. 
## example;
let MyAge=25;

#### Camel case

camel is like pascal case but the first word start with small letters

## example:
let my_Age=25;

#### Snake case

small letters

All lowercase with underscores separating words.

 ## example:
let my_age=25;
total_price = 99.99;

  # 5 Summary 
  I have learned about how to declare  variables with let and const  keywords i have also learn the rules to follow when write JavaScript 
  
# DATA TYPE
Is a classification that specifies the kind of data a variable can hold in a programming language.
two types of Major Data-types.

### Primitive

### Object

## Primitive data types

A primitive data type specifies the type of a variable and the kind of values it can hold.

##### The primitive data types in Java are :
Number
String
Boolean
Undefined
Null

#### Numbers 
Represents integer or floating decimal types of data.

const age=23 // Number Positive Integer

let price=23.45 // Floating point

let another=-230 // Number Negative

  

#### Strings
Is a sequence of characters.

## example
let myName =“LydiaJepleting” 
let cat=‘Garfield’
let email=lydiajepleting9@gmail.com 
let age=“28”

#### Boolean
Represent a logical entity that can have two values. true or false
## example
is_active = True
has_permission = False
is_logged_in = True

#### Undefined

Do not set a variable to undefined. Let JavaScript  set something to undefined for you.

Absence or a value. A variable which has been declare and not assign it a value its value becomes undefined.

let age // The value of age is undefined

//This is not good code

  

#### Null

Null means the absence of a value. You can explicitly set a variable to null.
## examples
let marks=null

// Input Marks

  

## Ways to create a string variable 3 ways
####  Using Double Quotes (" ")
## example
let fName=“lydia”
let lName=“jepleting”

#### Using Single Quotes (' ')
## example
let fName=‘lydia’
let lName=‘Jepleting’

  

#### Using Back Ticks Quotes (``)
## example
let firstName=`lydia`
let lastName=`jepleting`

  

## Difference between undefined and null

Real-Life Example
Suppose a school database stores a student’s email:
### Undefined: 
The email field has not been filled in yet.
### Null: 
The student does not have an email address, so the field is intentionally left empty.

  

## Undefined
 means a variable has been declared but not assigned a value,

## Null  
means a variable has been intentionally assigned an empty or no value by the programmer.
