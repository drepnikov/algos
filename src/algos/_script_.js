function missingNumber(arr) {
  let necessarySum = 0;

  for (let i = 1; i <= arr.length; i++) {
    necessarySum += i;
  }

  return necessarySum - arr.reduce((acc, n) => (acc += n));
}

console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
