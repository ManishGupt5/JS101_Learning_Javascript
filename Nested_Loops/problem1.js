for (let i = 1; i <= 12; i++) {
  for (let j = 1; j <= 31; j++) {
    if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
      console.log(j + " - " + i);
    }
    else if (i == 2) {
      if (j <= 28 || j <= 29) { console.log(j + " - " + i); }
      else { break; }
    }
    else if (i == 4 || i == 6 || i == 9 || i == 11) {
      if (j < 31) { console.log(j + " - " + i); }
    }
  }
}