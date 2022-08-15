/// Datatypes

/*
- Number = Integers + Floats
- String => "just text"
- Boolean => true || false (on and off)

- Arrays => Lists 
- Objects => dictonary (python name) => key/value pairs.

- undefined + null + NaN (Not a Number) 
*/

console.log(Number("4") + 1);

// Boolean operators;

/*
AND - &&
OR - ||

negate (NOT) == !
*/

const teacherIsHere = true;
const isItTen = true;
const isItWeekend = false;

const classStarts = teacherIsHere && isItTen && !isItWeekend;

const weAreFree = !teacherIsHere || !isItTen || isItWeekend;
console.log("are we free?", weAreFree);

// to run some code on a certain condtion (side-effects)
if (weAreFree) {
  console.log("Relaxing"); // runs if true
  //sendEmail(); // side-effect (run some code);
} else {
  console.log("Studying"); // runs if false
}

// to assign a certain value depending on a condition;
const message =
  !teacherIsHere || !isItTen || isItWeekend ? "Relaxing" : "Studying";

console.log("Status", message);

// Intro to arrays and objects;

const averageAge = (student1.age + student2.age + student3.age) / 3;

console.log("average age", averageAge);

// Arrays
// Lists
//                0       1          2        3         4
const staff = ["Matias", "Karla", "Wouter", "Maria", "Zuzana", "Alex"];

// console.log("names of staff", staff);

// what do we usually want to do in a list?

// 1. get a certain element
const secondStaffMember = staff[1];
// console.log("second", secondStaffMember);

// 2. how many elements I have in the list?
console.log("how many staff members?", staff.length);

// question: Get the last element of the array:
console.log(staff.length - 1);
// console.log(staff[0]);

// 3. Iterate over the list and do something for each element.
// for tomorrow.

const student1 = {
  name: "Maria",
  id: 1,
  age: 28,
  group: 61,
  onsite: true,
};

const student2 = {
  name: "Swen",
  id: 1,
  age: 32,
  group: 61,
  onsite: true,
};

const student3 = {
  name: "Alex",
  id: 1,
  age: 48,
  group: 61,
  onsite: true,
};

// .find => find elements in the array
// .filter => filter the list based on a condition
// .map =>
const staffList = [
  {
    name: "Karla",
    age: 28,
    onsite: false,
  },
  {
    name: "Matias",
    age: 18,
    onsite: true,
  },
  {
    name: "Swen",
    age: 48,
    onsite: false,
    hobbies: ["archery", "gaming"],
  },
];

const newStaffList = [...staffList, { name: "Wouter" }];

console.log("get the age of Matias", staffList);
