let number = document.getElementById("numberInput");
let button = document.getElementById("convertButton");
let result = document.getElementById("resultText");

function convertToRoman(num) {
  let roman = "";
  let thousands = 0;
  let hundreds = 0;
  let tens = 0;
  let units = 0;
  const romanValueTranslator = function(number) {
    switch(number) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
      case 5:
        return "V";
      case 6:
        return "VI";
      case 7:
        return "VII";
      case 8:
        return "VIII";
      case 9:
        return "IX";
      case 10:
        return "X";
      case 20:
        return "XX";
      case 30:
        return "XXX";
      case 40:
        return "XL";
      case 50:
        return "L";
      case 60:
        return "LX";
      case 70:
        return "LXX";
      case 80:
        return "LXXX";
      case 90:
        return "XC";
      case 100:
        return "C";
      case 200:
        return "CC";
      case 300:
        return "CCC";
      case 400:
        return "CD";
      case 500:
        return "D";
      case 600:
        return "DC";
      case 700:
        return "DCC";
      case 800:
        return "DCCC";
      case 900:
        return "CM";
      case 1000:
        return "M";
      case 2000:
        return "MM";
      case 3000:
        return "MMM";
    }
  }
  
  // Get the thousands and translate it to roman
  if (Math.trunc(num / 1000) >= 1) {
    thousands = Math.trunc(num / 1000) * 1000;
    roman += romanValueTranslator(thousands);
    num -= thousands;
  }

  // Get the hundreds and translate it to roman
  if (Math.trunc(num / 100) >= 1) {
    hundreds = Math.trunc(num / 100) * 100;
    roman += romanValueTranslator(hundreds);
    num -= hundreds;
  }

  // Get the tens and translate it to roman
  if (Math.trunc(num / 10) >= 1) {
    tens = Math.trunc(num / 10) * 10;
    roman += romanValueTranslator(tens);
    num -= tens;
  }

  // Get the units and translate it to roman
  units = num;
  if (units >= 1) {
    roman += romanValueTranslator(num);
  }

  return roman;
}
 
const check = function () {
  if (number.valueAsNumber < 1 || number.valueAsNumber > 3999) {
    alert("Please enter a positive integer number between 1 and 3999");
    number.valueAsNumber = 1;
  }
  else {
    result.textContent = "The roman number is: " + convertToRoman(number.valueAsNumber);
  }
}

button.addEventListener("click", check);