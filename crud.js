let students = [
    {
        id: 1,
        name: "Rahul",
        age: 22,
        course: "python"
    },
    {
        id: 1,
        name: "Anu",
        age: 21,
        course: "AI"
    }
];
function viewStudents(){
    let result =""
    students.forEach(function(student){
        result +=
        "ID: "+student.id +
        "\nName: "+student.name +
        "\nAge: "+student.age +
        "\nCourse: "+student.course +
        "\n---------------------\n";
    });
    alert(result);
}
function addStudent(){
    let id = Number(prompt("Enter Student ID:"));
    let name =prompt("Enter Student Name:");
    let age = Number(prompt("Enter Student Age:"));
    let course =prompt("Enter Student Course:");
    let student = {
        id:id,
        name:name,
        age:age,
        course:course
    };
    students.push(student);
    alert("Student Added Successfully!");
    console.log(students);
}
function updatestudent(){
    let id = number(prompt("enter student id"));

    let student = students.find(function(student){});
    if (student) {
        student.name = prompt("enter new name:",student.name);
        student.age = prompt("age:",student.age);
        student.course = prompt("enter the course:",student.course);
        alert("student updated successfully");

    } else {
        alert("student not found!");
    }
    console.log(students);
}

// delete student 

function deletestudent() {
    let id = number (prompt("enter student id:"));
    let index = students.findIndex(function(student){
        return student.id === id;
    });

    if (index ! == -1){
        students.splice(index,1);
        alert ("student deleted successfully!");

    } else {
        alert ("student not found!");

    }

    console.log(students);

}  