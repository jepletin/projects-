/*
create an object. called car.
properties: name,model,top_speed
engine_information:<object>how many cylinder,number
manufacture:object<> name,aka, country
<number as property<key>>:any number
alert_info:function that when called prints information of the car as an alert
fun_fact:<key>

*/

const car={
    name:"volvo",
    model:"XC90",
    colour: "Crystal White",
    top_speed: "180 km/h",
   engine_information:{
    cylinders: 4,
    engine_number: "B4204T",
    },
    manufacture:{
        name: "volvo car",
        aka:"volvo",
        county:"sweden",
    },  
     202:"volvo car is my dream car ",

    alert_info:function(){
        alert(`car:${car.name} 
            model:${car.model}
               colour:${car.colour} 
               top_speed:${car.top_speed}`);

    },
     fun_fact: "Volvo invented the three-point seatbelt in 1959 and made the patent free for everyone.",

}

console.log(`car  datatype ${typeof car}`);
console.log(car);
console.log("--using console.log (table)--");
console.table(car);

console.log(`The name is ${car.name} its type is ${typeof car.name}`);
console.log(`the name is ${car["name"]} its type is ${typeof car["name"]}`);
//bracket notation
let v1 = "model";
console.log(`Model is ${car[v1]} its type is ${typeof car[v1]}`);
//car and its colour using dot notation
console.log(`the colour is ${car.colour} its type is ${typeof car.colour}`);
//bracket notation
console.log(`the colour is ${car["colour"]} its type is ${typeof car["colour"]}`);
console.log(`Top Speed is ${car.top_speed} its type is ${typeof car.top_speed}`);
console.log(`Top Speed is${car["top_speed"]} its type is ${typeof car["top_speed"]}`);
//engine information (nested object)
console.log(`Engine Information type is ${typeof car.engine_information}`);

//bracket notation
console.log(`Engine Information type is ${typeof car["engine_information"]}`);


console.log(`Cylinders are ${car.engine_information.cylinders} its type is ${typeof car.engine_information.cylinders}`);


console.log(`Cylinders are ${car["engine_information"] ["cylinders"]} its type is ${typeof car["engine_information"]["cylinders"]}`);

console.log(`Engine Number is ${car.engine_information.engine_number} its type is ${typeof car.engine_information.engine_number}`);
console.log(`Engine Number is${car["engine_information"] ["engine_number"]} its type is ${typeof car["engine_information"]["engine_number"]}`);
//manufacture object
console.log(`Manufacture type is ${typeof car.manufacture}`);
console.log(`Manufacture type is ${typeof car["manufacture"]}`);
console.log(` Manufacture Name is ${car.manufacture.name} its type is ${typeof car.manufacture.name}`);
console.log(` Manufacture Name is ${car["manufacture"] ["name"]} its type is ${typeof car["manufacture"]["name"]}`);
console.log(` Manufacture aka is ${car.manufacture.aka} its type is ${typeof car.manufacture.aka}`);
console.log(`Manufacture aka is ${car["manufacture"] ["aka"]} its type is ${typeof car["manufacture"]["aka"]}`);


console.log(`The country is  ${car.manufacture.country} its type is ${typeof car.manufacture.county}`);
console.log(` The country is  ${car["manufacture"] ["country"]} its type is ${typeof car["manufacture"]["country"]}`);

console.log(`202 is ${car["202"]} its type is ${typeof car["202"]}`);



console.log(`alert_info type is ${car.alert_info} its type is ${typeof car.alert_info}`);
console.log(` alert_info type is  ${car["alert_info"]} its type is ${typeof car["alert_info"]}`);

console.log(`Fun_fact ${car.fun_fact} its type is ${typeof car.fun_fact}`);
console.log(` fun_fact  ${car["fun_fuct"]} its type is ${typeof car["fun_fact"]}`);




// Object.entries(car).forEach(([key, value]) => {
//     console.log(`${key}: ${car [key]} | Type: ${typeof value}`);
// });


//ucsing obect.entries 

Object.entries(car).forEach(([key, value]) => {

    if (typeof value === "object" && value !== null) {
        console.log(`${key}:`);

        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
            console.log(`   ${nestedKey}: ${nestedValue} | Type: ${typeof nestedValue}`);
        });

    } else {
        console.log(`${key}: ${value} | Type: ${typeof value}`);
    }

});



