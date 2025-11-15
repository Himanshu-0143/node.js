const fs = require('fs');
const { json } = require('stream/consumers');
//reading the existed file
fs.readFile('student.json', 'utf-8', (err, data)=>{
  if(err){
    console.error("error reading the file");
    return;
  }
   //convert the json string to js object
   let student = JSON.parse(data);
   //update the data
   student.address = "Lpu";
   student.name= "Chauhan";
   student.grade= "A";

  //  const updatedJsonData = JSON.stringify(student, null, 2);

   fs.writeFile(student.json, updatedJsonData, (writeErr) => {
    if (writeErr) {
      console.error("Error writing file:", writeErr);
    } else {
      console.log("File updated successfully!");
      console.log(updatedJsonData);
    }
  });

});