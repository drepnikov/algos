function mergeSortedArraysWithChangeArr1(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;

  while (arr1[index1] !== undefined && arr2[index2] !== undefined) {
    if (arr2[index2] <= arr1[index1]) {
      arr1.splice(index1, 0, arr2[index2]);
      index2++;
    } else {
      index1++;
    }
  }

  if (arr2[index2] !== undefined) {
    arr1.splice(arr1.length, ...arr2.slice(index2));
  }

  return arr1;
}

console.log(mergeSortedArraysWithChangeArr1([1, 2, 5, 9], [3, 4, 5, 6, 9])); // [1,2,3,4,5,5,6,9,9]
console.log(mergeSortedArraysWithChangeArr1([1, 2, 5, 9], [3, 4, 5, 6, 9])); // [1,2,3,4,5,5,6,9,9]
