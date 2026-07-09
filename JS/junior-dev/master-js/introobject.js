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