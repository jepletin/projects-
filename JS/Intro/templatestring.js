let firstName ="samuel"
let secondName ="njuguna"
let age=34;
let address ="juja county "

let userDetails= firstName+ "" +secondName+ " is"+age+ "years old"+"he stays at "+address
console.log(userDetails)
console.log ("user details is ", typeof userDetails)
// template string use back ticks

let userDetails2=` ${firstName} ${secondName} is  ${age }  years old  and he stay ${address}`;
console.log(userDetails2)
console.log(` ${firstName} ${secondName} is  ${age }  years old  and he stay ${address}`)