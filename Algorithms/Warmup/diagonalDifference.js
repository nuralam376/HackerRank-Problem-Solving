function diagonalDifference(arr) {
  let arrLength = arr.length;
  let rld = 0;
  let lrd = 0;

  for (let i = 0; i < arr.length; i++) {
    let arrLengthCheck = arrLength - 1;

    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        lrd += arr[i][i];
      }
      if (j == arrLengthCheck) {
        rld += arr[i][j];
        arrLength--;
      }
    }
  }

  return Math.abs(lrd - rld);
}
