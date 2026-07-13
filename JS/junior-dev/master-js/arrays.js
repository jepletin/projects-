let car=[
    "Volvo",
    "XC90",
    "Crystal White",
    "180 km/h"
,
{
    cylinders: 4,
    engine_number: "B4204T",
    },
    {
        name: "volvo car",
        aka:"volvo",
        county:"sweden",
    },  
    function(){
        alert(`car:${car.name} 
            model:${car.model}
               colour:${car.colour} 
               top_speed:${car.top_speed}`);

    },
     `Volvo invented the three-point seatbelt in 1959 and made the patent free for everyone.`,
     [10,40,,60,80],


];
console.table(car)
console.log(car.length)
console.log(typeof car)
console.log (car[0])
console.log (car[2])
console.log (car[3])
console.log (car[4])
console.log (car[5])
console.log (car[6])
console.log (car[7])
console.log (car[8])
console.log (car[9])
car[6]();


for(let i=0;i<=car.length;i++){
    console.log(car [i]);
}








