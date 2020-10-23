// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let sum = 0;
  let total = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      sum += arr[j];
    }
    total.push(sum);
    sum = 0;
  }
  let min = total[0];
  let max = total[0];
  for (let i = 1; i < total.length; i++) {
    if (total[i] > max) {
      max = total[i];
    }
    if (total[i] < min) {
      min = total[i];
    }
  }
  console.log(`${min} ${max}`);
}

const numbers = [256741038, 623958417, 467905213, 714532089, 938071625];
miniMaxSum(numbers);
