///////////////Exercise 1/////////////////
/*let MyName = "Farhan";
let age = 25;
let isStudent = true;

console.log(
  "Name of Student is: " +
    MyName +
    ", the age is " +
    age +
    ", is he student: " +
    isStudent
);
*/

////////////Exercise 2//////////////
/*let food = ["food1", "food2", "food3"];

let person = {
  name: "Farhan",
  age: 35,
  hobbies: ["skiing", "dancing", "running"],
};

console.log(person + " has the favourite foods " + food);
*/

////////////Exercise 3//////////////
/*function age(alt) {
  if (alt > 18) console.log("Adult");
  else console.log("Minor");
}

age(15);
*/

//////////Exercise 4///////////
for (let count = 1; count < 11; count++) {
  console.log(count);
}

let count = 10;
while (count > 0) {
  console.log(count);
  count--;
}

/////////Exercise 5//////////
/*function add(num1, num2) {
  return num1 + num2;
}

function greet(num1) {
  console.log("Greetings: " + num1);
}

console.log(add(4, 5));

greet(3);
*/

//////////////Exercise 6/////////////
/*function createPerson(name, age, hobbies) {
  let person = {
    name: name,
    age: age,
    hobbies: hobbies,
  };

  return person;
}

function describePerson(person) {
  console.log(
    "The person is " +
      person.name +
      " the age is " +
      person.age +
      " and the hobbies are " +
      person.hobbies
  );
}

let person = createPerson("Farhan", 30, ["Skiing", "Running", "Jumping"]);
describePerson(person);
*/
