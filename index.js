function convertToRoman(num) {
  // Functions
  function frstDigChk(d) {
    let numeral = "";

    switch (d) {
      case 1:
      case 2:
      case 3:
        numeral = "I".repeat(d);
        break;
      case 4:
        numeral = "IV";
        break;
      case 5:
        numeral = "V";
        break;
      case 6:
      case 7:
      case 8:
        numeral = "V" + "I".repeat(d - 5);
        break;
      case 9:
        numeral = "IX";
        break;
    }

    return numeral;
  }

  function secDigChk(d) {
    let roman = "";

    switch (d) {
      case 1:
      case 2:
      case 3:
        roman = "X".repeat(d);
        break;
      case 4:
        roman = "XL";
        break;
      case 5:
        roman = "L";
        break;
      case 6:
      case 7:
      case 8:
        roman = "L" + "X".repeat(d - 5);
        break;
      case 9:
        roman = "XC";
        break;
    }

    return roman;
  }

  function thrdDigChk(d) {
    let roman = "";

    switch (d) {
      case 1:
      case 2:
      case 3:
        roman = "C".repeat(d);
        break;
      case 4:
        roman = "CD";
        break;
      case 5:
        roman = "D";
        break;
      case 6:
      case 7:
      case 8:
        roman = "D" + "C".repeat(d - 5);
        break;
      case 9:
        roman = "CM";
        break;
    }

    return roman;
  }

  function frthDigChk(d) {
    return "M".repeat(d);
  }

  // Code
  let roNum = "";
  let digs = num.toString().split("");

  switch (digs.length) {
    case 1:
      roNum = frstDigChk(num);
      break;
    case 2:
      roNum = secDigChk(parseInt(digs[0]));
      roNum += frstDigChk(parseInt(digs[1]));
      break;
    case 3:
      roNum = thrdDigChk(parseInt(digs[0]));
      roNum += secDigChk(parseInt(digs[1]));
      roNum += frstDigChk(parseInt(digs[2]));
      break;
    case 4:
      roNum = frthDigChk(parseInt(digs[0]));
      roNum += thrdDigChk(parseInt(digs[1]));
      roNum += secDigChk(parseInt(digs[2]));
      roNum += frstDigChk(parseInt(digs[3]));
      break;
  }

  return roNum;
}

console.log(convertToRoman(36));
