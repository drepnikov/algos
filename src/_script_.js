function mergeSortedArraysWithChangeArr1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[0]) {
      arr1.splice(i, 0, arr2.shift());
    }
  }

  if (arr2.length) {
    arr1.splice(arr1.length, 0, ...arr2);
  }

  return arr1;
}

console.log(mergeSortedArraysWithChangeArr1([1, 2, 5, 9], [3, 4, 5, 6, 9])); // [1,2,3,4,5,5,6,9,9]
