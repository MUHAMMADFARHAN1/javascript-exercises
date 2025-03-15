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
// function mostfrequent(arr) {
//   let check = arr.length;
//   let arr_check = arr;

//   for (let iterator = 0; iterator < arr.length; iterator++) {
//     let key = arr_check[iterator];
//     let counting = [];
//     for (let iterator2 = iterator; iterator2 < arr.length; iterator2++) {
//       if (arr.iterator2 == key && arr_check.iterator2 != undefined) {
//         counting.iterator = counting.iterator++;
//         delete arr_check.iterator;
//       }
//     }

//   }
// }

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

///////////////Exercise 3//////////////

///////////////Exercise 4//////////////

///////////////Exercise 5//////////////
