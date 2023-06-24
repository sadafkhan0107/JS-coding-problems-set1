/**
 * WAP to check if string is pallindrome.
 */

{
  const str = "malayalam";
  const revstr = str.split("").reverse().join("");
  if (revstr === str) console.log("String is pallindrome");
  else console.log("String is not pallindrome");
}

/**
 * WAP to delete all the vowels from a string.
 */

{
  const str = "The quick browm fox jumps over the lazy dog";

  function stringWithNoVowel(str) {
    const vowel = ["a", "e", "i", "o", "u"];
    let result = "";
    for (let char of str) {
      if (!vowel.includes(char.toLowerCase())) {
        result += char;
      }
    }
    return result;
  }

  console.log(stringWithNoVowel(str));
}

/**
 * mask the last 4 characters with #
 */

{
  const str = "123456789987654321"; // 12345678998765####;

  const mask = "#".repeat(4);
  console.log(mask);
  const newStr = str.slice(0, str.length - 4) + mask;
  console.log(newStr);
}

/**
 * Odd To Even & Vice Versa
 */

{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const newArr = arr.map((num) => (num % 2 === 0 ? num - 1 : num + 1));
  console.log(newArr);
}

/**
 * Sum of numbers less than 40
 */

{
  const arr = [10, 17, 61, 54, 44, 32, 39, 23];

  let res = arr.reduce((acc, curr) => (curr < 40 ? acc + curr : acc), 0);
  console.log(res);
}

/**
 * Create an array of names of senoir employees
 */

{
  const employees = [
    {
      name: "Prakash",
      numOfYears: 5
    },
    {
      name: "Ashish",
      numOfYears: 3
    },
    {
      name: "Sakshi",
      numOfYears: 4
    },
    {
      name: "Sadaf",
      numOfYears: 2
    },
    {
      name: "Avneet",
      numOfYears: 2
    }
  ];

  const emps = employees
    .filter((employe) => employe.numOfYears > 2)
    .map((employe) => employe.name);
  console.log(emps);
}

// print 1, 2, 3 with delay of 1, 2, 3 second.

{
  function delayPrint() {
    for (var i = 1; i < 4; i++) {
      function print(i) {
        setTimeout(() => {
          console.log(i);
        }, i * 1000);
      }
      print(i);
    }
  }
  delayPrint();
}

{
  const arr = [
    { name: "Apple" },
    { name: "Mango" },
    { name: "Potato" },
    { name: "Guava" },
    { name: "Capsicum" }
  ];
  [
    { name: "Apple", type: "fruit" },
    { name: "Mango", type: "fruit" },
    { name: "Potato", type: "vegetable" },
    { name: "Guava", type: "fruit" },
    { name: "Capsicum", type: "vegetable" }
  ];

  const newArr = arr.map((item) =>
    item.name.length > 5
      ? { ...item, type: "vegetable" }
      : { ...item, type: "fruit" }
  );

  console.log(newArr);
}

{
  const input = [
    ["a", "b", "c"],
    ["c", "d", "e"],
    ["e", "d", "f"]
  ];
  // Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']
  function changeArr(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
      // console.log(input);
      newArr = [...newArr, ...input[i]];
    }
    return newArr;
  }
  console.log(changeArr(input));
  // console.log(input);

  const newArr = input.reduce((acc, cur) => [...acc, ...cur], []);
  console.log(newArr);
}

// console.log("hello") // 1
// let promise = new Promise((resolve, reject) => {
//   console.log("hey") // 2
//   setTimeout(() => {
//     console.log("tata") // 6
//     resolve("promise resolved")
//     console.log("bye")}, 1000);   // 7
//   console.log("prakash") // 3
// })
// console.log("html")  // 4
// promise.then(res => console.log(res)) // 8
// console.log("css") // 5

// function User(name, age){
//   this.name = name
//   this.age = age
// }

// const user1 = new User("sadaf", 25)
// console.log(user1)

/**
 * Given an array write a function that returns an object with sum of even and odd numbers
 * arr = [1, 2, 3, 4, 5, 6]
 * OUTPUT = {even: 12, odd: 9}
 */

{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const sumobj = arr.reduce(
    (acc, curr) =>
      curr % 2 === 0
        ? { ...acc, even: acc.even + curr }
        : { ...acc, odd: acc.odd + curr },
    { even: 0, odd: 0 }
  );
  console.log(sumobj);
}

/**
 * Average-Age of Family members
 */
{
  const familyMembers = [
    {
      name: "Narsingrao",
      age: 56
    },
    {
      name: "Padma",
      age: 52
    },
    {
      name: "Poonam",
      age: 30
    },
    {
      name: "Prakash",
      age: 27
    },
    {
      name: "Ashish",
      age: 50
    }
  ];
  const totalAge = familyMembers.reduce((acc, curr) => acc + curr.age, 0);
  const avgAge = totalAge / familyMembers.length;
  console.log(avgAge);
}

/**
 * Count occurence of distinct elements
 * Output: {a:2, b:2,c:2,d:1,e:1,f:1}
 */

{
  const arr = ["a", "b", "c", "c", "d", "e", "b", "f", "a"];
  const result = arr.reduce(
    (acc, curr) =>
      curr in acc ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
    {}
  );
  console.log(result);
}

/**
 * Q1: Arrange the words in the sentence in ascending order of their length
 * Input - gfg is a comp science learning platform
 * Output - a is gfg comp science learning platform
 */

{
  const str = "gfg is a comp science learning platform";

  function sortByLen(str) {
    let arrOfWords = str.split(" ");
    arrOfWords = arrOfWords.sort((a, b) => a.length - b.length);
    let newStr = arrOfWords.join(" ");
    return newStr;
  }

  console.log(sortByLen(str));
}

/**
 * Q2: Reverse words of a string without changing their order
 *
 * Input: react is a library
 * Outut: tcaer si a yrarbil
 */

{
  const str = "react is a library";

  function revInPlaceStr(str) {
    let arrOfWords = str.split(" ");
    const revArrOfWrds = arrOfWords.map((word) =>
      word.split("").reverse().join("")
    );
    return revArrOfWrds.join(" ");
  }
  console.log(revInPlaceStr(str));
}

/**
 * Count frequency of all number in an array, return the
 * numbers with the max frequency, if 2 or more numbers have
 * the same max freq then return the highest number
 */

{
  const arr = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5];
  let maxCount = 0;
  let maxValue = 0;

  const freqArr = arr.reduce(
    (acc, curr) =>
      curr in acc ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
    {}
  );
  console.log(freqArr);

  const arrOfKeyValue = Object.entries(freqArr);
  console.log(arrOfKeyValue);
  for (let [key, value] of arrOfKeyValue) {
    if (value > maxCount) {
      maxCount = value;
      maxValue = key;
    }
    if (value === maxCount) {
      maxValue = maxValue > key ? maxValue : key;
    }
  }
  console.log(maxValue, maxCount);
}

// Implement a function to sort an array of
//objects based on a specific property value.

{
  const students = [
    { name: "John", age: 20 },
    { name: "alice", age: 18 },
    { name: "Bob", age: 22 }
  ];
  function sortByProperty(students, property) {
    let sortedArr = [];
    if (students.length === 0 || students.length === 1) return students;
    // console.log(typeof students[1][property])
    if (typeof students[0][property] !== "string") {
      sortedArr = students.sort((a, b) => a[property] - b[property]);
    } else {
      sortedArr = students.sort((a, b) =>
        a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1
      );
    }
    return sortedArr;
  }
  console.log(sortByProperty(students, "name"));
}

//---> find target sum pair
// ---> arr = [4, 1, 6, 5] target = 9
// ---> o/p = [4, 5]
{
  function findPair(arr, target) {
    let pairArr = [];
    let helper = {};
    for (let i = 0; i < arr.length; i++) {
      helper[arr[i]] = target - arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
      if (helper.hasOwnProperty(target - arr[i])) {
        pairArr.push(arr[i], target - arr[i]);
        return pairArr;
      }
    }
    return pairArr;
  }

  console.log(findPair([1, 4, 6, 5], 9));
}

// ---> Compare Objects
// {a: 1, b: 2} {b: 2, a: 1} => true
// {a: 1} {a: 2} => false
// {} {} => true
// {a: undefined} {a: 0} => false

function compareObjs(obj1, obj2) {
  let len1 = Object.keys(obj1).length;
  let len2 = Object.keys(obj2).length;
  let flag = false;
  if (len1 !== len2) return false;
  if (len1 === 0 && len2 === 0) return true;
  let keys = Object.keys(obj1);
  for (let key of keys) {
    // console.log(obj1[key])
    if (obj2.hasOwnProperty(key)) {
      if (obj1[key] === obj2[key]) {
        flag = true;
      } else {
        return false;
      }
    }
  }
  return flag;
}
console.log(compareObjs({ a: 1, b: 2 }, { b: 2, a: 1 }));
