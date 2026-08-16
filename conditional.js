//if statement
































// home work
//if
function getGrade(mark) {
  if (mark >= 90) return "A+";
  if (mark >= 80) return "A";
  if (mark >= 70) return "B+";
  if (mark >= 60) return "B";
  if (mark >= 50) return "C+";
  return "Fail";
}
console.log(getGrade(80)); 
console.log(getGrade(45)); 

//else if

let mark = 80;
let grade;
if (mark >= 90) {
  grade = "A+";
} else if (mark >= 80) {
  grade = "A";
} else if (mark >= 70) {
  grade = "B+";
} else if (mark >= 60) {
  grade = "B";
} else if (mark >= 50) {
  grade = "C+";
} else {
  grade = "Fail";
}
console.log("Grade: " + grade);




//nested if statement

const a = 123;
const b = 964;
const c = 789;

if (a==b){
  if ( a > b ){
    console.log("a is the largest number")
 }else{
  console.log("c is the largest number")
 }
}else{
  if ( b > c ){
    console.log("b is the largest number ")
  }else{
    console.log("c is the largest number")
  }
}

// switch statement
//switch (expression){
//   case 1 ;
//  body of case1 
// break


let day = 7 ;
switch(day){
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wensday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break; 
  default:
    console.log("invalid entry")           
}


let days = "monday"

switch(days){
  case "monday":
  case "tuesday":
  case "wensday":
  case "thursday":
  case "friday":
     console.log("weekday");
     break;
  case "saturday":
  case "sunday":
     console.log("weekend")
     break;
  default:
    console.log("invalid entry")                
}

