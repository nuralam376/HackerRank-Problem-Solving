function birthdayCakeCandles(candles) {
  let height = candles[0];
  let heightCount = 0;
  for (let i = 0; i < candles.length; i++) {
    if (height < candles[i]) {
      heightCount = 0;
      height = candles[i];
      heightCount++;
    } else if (height === candles[i]) {
      heightCount++;
    }
  }
  return heightCount;
}

console.log(birthdayCakeCandles([3, 2, 1, 3, 2, 1, 9, 9, 3]));
