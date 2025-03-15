// https://leetcode.com/
// https://www.hackerrank.com/
///////////////////////Exercise 1///////////
/*function FirstElements(arr, n) {
  if (n > arr.length) {
    console.log("Inavlid Number specified");
    return "Exiting Program!";
  }

  for (let count = 0; count < n; count++) {
    console.log(arr[count]);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

FirstElements(arr, 3);
*/

///////////////Exercise 2//////////////
//https://www.geeksforgeeks.org/count-occurrences-of-all-items-in-an-array-in-javascript/
/*
function mostFrequent(arr) {
  let counting = [];

  let Most;

  for (let check = 0; check < arr.length; check++) {
    counting.push(0);
  }
  // console.log(counting);

  for (let iterator = 0; iterator < arr.length; iterator++) {
    let key = arr[iterator];
    // console.log(key);
    for (let iterator2 = iterator; iterator2 < arr.length; iterator2++) {
      console.log(arr[iterator2]);
      if (arr[iterator2] == key) {
        // console.log(counting[iterator]);
        counting[iterator] = counting[iterator] + 1;
      }
    }
  }

  let max = counting[0];

  for (let iterator = 0; iterator < counting.length; iterator++) {
    // let max = counting[0];
    if (counting[iterator] > max) {
      max = counting[iterator];
    }
  }

  Most = counting.indexOf(max);
  console.log(counting);
  // return Most;

  // console.log("The most frequent number is:" + arr[Most])
  return "The most frequent number is: " + arr[Most];
  //   console.log("The most frequent element is: " + arr[Most]);
}

console.log(mostFrequent([1, 2, "a", "a", 5, 15, true, "a"]));
*/
///////////////Exercise 3//////////////
/*function productOfArray(arr) {
  for (let count = 0; count < arr.length; count++) {
    if (typeof arr[count] == typeof true) {
      console.log("-1");
      return -1;
    }
    if (typeof arr[count] == typeof "check") {
      console.log("-1");
      return -1;
    }
    if (typeof arr[count] == typeof undefined) {
      console.log("-1");
      return -1;
    }
  }

  let product = 1;
  for (let chk = 0; chk < arr.length; chk++) {
    product = arr[chk] * product;
  }

  console.log("The product of the numbers is: " + product);
}
productOfArray([10, 5, 10]);*/
///////////////Exercise 4//////////////
/*function removeNonIntegers(array) {
  let new_array = [];

  for (let count = 0; count <= array.length; count = count + 1) {
    if (typeof array[count] == typeof 56) {
      // new_array = new_array.slice(0, count).concat(new_array.slice(count + 1));
      // This syntax from the class is not right, tzpes assignment of number to arraz is done here
      // new_array = new_array.push(array[count]);
      new_array.push(count);
    }
  }

  return new_array;
}
console.log(removeNonIntegers([false, true, false, true]));
console.log(removeNonIntegers([0, 1, 4, 3, true, true, 6, 7, true]));
*/
///////////////Exercise 5//////////////
/*function insert(str1, str2, position) {
  if (position == undefined) {
    return str1.slice(0, 0).concat(str2).concat(str1.slice(0));
  }
  // length_str1 = str1.length;

  return str1.slice(0, position).concat(str2).concat(str1.slice(position));
}
console.log(insert("We are doing some exercises.", "JavaScript ", 18));
console.log(insert("We are doing some exercises.", "JavaScript "));
*/
/*
let a = 10;
let b = "git";
a = b;

let c = [1, 2, 5];
c = a;
c = b;
// c = c.push(5);

console.log("We are doing some exercises.", "JavaScript ");
console.log(a);
console.log(b);
console.log(c);
*/
