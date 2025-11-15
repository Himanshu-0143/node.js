const fs = require('fs');

fs.readFile('data.json', 'utf-8', (err,data)=>{
  if(err){
    console.error("Error reading the file", err);
    return;
  }
  const user = JSON.parse(data);
  console.log("User Name:", user.name);
  console.log("City:",user.city);
  console.log("Age:",user.age);
  console.log("Phone Number:",user.Phone);

})