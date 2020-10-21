function staircase(n) {
  if (n > 100) {
    return;
  }

  let str = "";

  for (let i = 1; i <= n; i++) {
    for (let j = i; j < n; j++) {
      str += " ";
    }

    for (let j = 1; j <= i; j++) {
      str += "#";
    }
    if (i < n) str += "\n";
  }
  console.log(str);
}

staircase(101);
