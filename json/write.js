const { address } = require('framer-motion/client');
const fs = require('fs');

// create a js object
const student ={
  name:"Himanshu",
  section:"K23QA",
  age:21,
  address:"lko",
  phone:9028347,
};

//convert the object to json string
const jsonData = JSON.stringify(student, null, 2);

//write json to file 
fs.writeFile('student.json', jsonData, (err)=>{
  if(err){
    console.error("Error writing file:",err);
  }else{
    console.log("JSON written successfully");
  }
})
