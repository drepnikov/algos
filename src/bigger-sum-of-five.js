// Самая большая сумма последовательности из 5 чисел (вернуть числа) (метод скользящего окна)
function biggerSumOfFive(arr) {
  /* Тупой перебор
   let currentMax = -Infinity;
   let result = [];

for (let i = 0; i + 5 <= arr.length; i++) {
    const slice = arr.slice(i, i + 5);
    const sliceSum = slice.reduce((acc, n) => (acc += n));

    if (sliceSum > currentMax) {
    currentMax = sliceSum;
    result = slice;
   }
  }

   return result;
  */

  // инициируем начальную максимальную сумму, суммировав 5 первых членов
  let result = arr.slice(0, 5);
  let currentSum = result.reduce((acc, n) => (acc += n));
  let largestSum = currentSum;

  for (let i = 1; i + 5 <= arr.length; i++) {
    // "сдвигаем" удаляя предыдщуий элемент...
    currentSum -= arr[i - 1];
    // ...и прибавляя следующий
    currentSum += arr[i + 4];

    if (currentSum > largestSum) {
      largestSum = currentSum;
      result = arr.slice(i, i + 5);
    }
  }

  return result;
}

console.log(biggerSumOfFive([5, 7, 1, 4, 3, 6, 2, 9, 2])); // [4, 3, 6, 2, 9]
