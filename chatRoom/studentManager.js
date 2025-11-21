const fs = require('fs');
const path = require('path');

const studentPath = path.join(__dirname, 'student.json');

// Read all students
function readStudents() {
  try {
    const data = fs.readFileSync(studentPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading student file:", err);
    return [];
  }
}

// Write students to file
function writeStudents(students) {
  try {
    fs.writeFileSync(studentPath, JSON.stringify(students, null, 2));
    console.log("Student file updated successfully!");
    return true;
  } catch (err) {
    console.error("Error writing student file:", err);
    return false;
  }
}

// Display all students
function displayAllStudents() {
  const students = readStudents();
  console.log("\n=== All Students ===");
  console.log(students);
  return students;
}

// Add new student
function addStudent(rollno, name, marks, course) {
  const students = readStudents();
  
  // Check if student already exists
  const exists = students.find(s => s.rollno === rollno);
  if (exists) {
    console.log(`\nStudent with rollno ${rollno} already exists!`);
    return false;
  }

  const newStudent = { rollno, name, marks, course };
  students.push(newStudent);
  
  if (writeStudents(students)) {
    console.log(`\nStudent added successfully: ${name}`);
    return true;
  }
  return false;
}

// Search student by roll number
function searchByRollno(rollno) {
  const students = readStudents();
  const student = students.find(s => s.rollno === rollno);
  
  if (student) {
    console.log(`\n=== Student Found ===`);
    console.log(student);
    return student;
  } else {
    console.log(`\nStudent with rollno ${rollno} not found!`);
    return null;
  }
}

// Update student marks
function updateMarks(rollno, newMarks) {
  const students = readStudents();
  const studentIndex = students.findIndex(s => s.rollno === rollno);
  
  if (studentIndex !== -1) {
    const oldMarks = students[studentIndex].marks;
    students[studentIndex].marks = newMarks;
    
    if (writeStudents(students)) {
      console.log(`\nMarks updated for ${students[studentIndex].name}: ${oldMarks} -> ${newMarks}`);
      return true;
    }
  } else {
    console.log(`\nStudent with rollno ${rollno} not found!`);
  }
  return false;
}

// Delete student record
function deleteStudent(rollno) {
  const students = readStudents();
  const studentIndex = students.findIndex(s => s.rollno === rollno);
  
  if (studentIndex !== -1) {
    const deletedStudent = students.splice(studentIndex, 1)[0];
    
    if (writeStudents(students)) {
      console.log(`\nStudent deleted: ${deletedStudent.name} (Rollno: ${rollno})`);
      return true;
    }
  } else {
    console.log(`\nStudent with rollno ${rollno} not found!`);
  }
  return false;
}

// Demo: Run all operations
console.log("=== Student Management System ===\n");

// 1. Display all students
displayAllStudents();

// 2. Add a new student
addStudent(106, "Frank Wilson", 82, "Biology");

// 3. Search by roll number
searchByRollno(103);
searchByRollno(999); // Non-existent

// 4. Update student marks
updateMarks(102, 85);

// 5. Delete a student
deleteStudent(104);

// Display all students after operations
console.log("\n=== After All Operations ===");
displayAllStudents();
