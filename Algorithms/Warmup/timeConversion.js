function timeConversion(s) {
  const amOrPm = s.slice(-2);
  let newTime = s.split("").slice(0, -2);
  const time = newTime[0] + newTime[1];

  if (amOrPm === "AM") {
    if (time == "12") {
      newTime[0] = "0";
      newTime[1] = "0";
    }
  }
  if (amOrPm === "PM") {
    if (time == "12") {
      newTime[0] = "1";
      newTime[1] = "2";
    } else {
      let convertedTime = parseInt(time) + 12;
      const splitTime = convertedTime.toString().split("");
      newTime[0] = splitTime[0];
      newTime[1] = splitTime[1];
    }
  }
  return newTime.join("");
}

console.log(timeConversion("12:45:54PM"));
