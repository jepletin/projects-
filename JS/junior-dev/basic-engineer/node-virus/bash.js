const fs = require(`fs`); // nodejs file system

/*
 fs.appendFile(@param1,@param2,@param3)
 @param1=>file name :<path>
 @param2=>data to write to the file
 @param3=>callback function (@errorParam) if there is an error
 -> succefull
*/

/*
 for Loops, while loops

 ->we are going to create an application


 ->function <give it any name>
   void funciton-> function that does not take any parameters
 -> create a file -> name of file is currentdate.txt
 and 10k lines of code.
 Q.go you 1>
   <got you 2 >
   <got 3>
 -> use a for loop
 file system api-> nodejs

*/




 function creatAndWrite(){
    let fileData="";
    const fileName=`${new Date().toISOString()}.txt`;
    const cb=(error)=>{};
    for(let i=0; i<= 10000;i++){
        fileData=fileData +`\nGot you ${i}\n`
    }
    fs.writeFile(fileName,fileData,cb);
 }
 creatAndWrite()
















//throw { message: "not working", data: "" };

function testAppendFile() {
    const fileData = "\nHello world testing file\n";
    const cb = (error) => {
        if (error) {
            console.log("creating file failed");
            console.log(error);
            //settimeout()
        }
    };
    fs.appendFile("testfile.txt", fileData, cb);
}

testAppendFile();