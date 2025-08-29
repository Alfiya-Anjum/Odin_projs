fibs(8)    // [0, 1, 1, 2, 3, 5, 8, 13]
fibsRec(8) // [0, 1, 1, 2, 3, 5, 8, 13]


// Iterative
function fibs(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}

// Recursive
function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = fibsRec(n - 1); // get sequence up to n-1
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]); // add new fib number
  return arr;
}

// Test
console.log(fibs(8));    // [0,1,1,2,3,5,8,13]
console.log(fibsRec(8)); // [0,1,1,2,3,5,8,13]
