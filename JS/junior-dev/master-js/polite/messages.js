const data =require("./data.json")
const fs=require("fs");
/*
Step 1. ensure your js file can access the data.
*/


/*
Step 2: use a for<while> a loop to go through each data point
-print the data

Step 3: for each data point create a message example

Dear <<sir/madam> based on gender>>
We regret to inform you that you wont be going
to next stage of the interview.
the reasone_you not a good fit.

console.log(the message)*/
// Step 4: create an empty array and
// the user data including the messages.
// output object should be

// {
//     "id": 4,
//     "first_name": "Krystle",
//     "Last_name": "Rubroe",
//     "email": "krubroe3@indiatimes.com",
//     "gender": "Female",
//     "phone": "244-641-3793",
//     "message": <>
// }

// Step 5: write this data to a file called output.json.
// Hint do JSON.stringify -> js object to json notation.
// - save this data to your file ie output.json

const output=[];
for(let i=0;i< data.length;i++){
const doc=data[i];

const{ first_name,last_name,email,gender,phone} = doc;
 let title = "";
if (doc.gender === "Male") {
    title = "Sir";
} else {
    title = "Madam";
}

const message = `
Dear ${title}, ${first_name} ${last_name}.We regret to inform you that you will not be proceeding to the next stage of the interview.
Thank you for your interest in joining our company. Please continue checking our website for future job opportunities.

Kind regards,
HR Team
`;
output.push({first_name,last_name,email,gender,phone,message});
}
const outputText=JSON.stringify(output);//text
fs.writeFile("output.JSON",outputText,(error)=>{});