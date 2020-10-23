function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    zero = 0;
  const arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log((positive / arrayLength).toFixed(6));
  console.log((negative / arrayLength).toFixed(6));
  console.log((zero / arrayLength).toFixed(6));
}
