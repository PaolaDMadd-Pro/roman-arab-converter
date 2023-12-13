var inputRoman = document.getElementById("converter-input");
var inputArab = document.getElementById("converter-input-arabic");
var outputRoman = document.getElementById("converter-output");
var outputArab = document.getElementById("converter-output-arabic");

inputRoman.addEventListener("input", function (event) {
  event.preventDefault();//not provided/suggested by AI
  let inputValue = event.target.value;
  let roman = convertToRoman(inputValue);
  outputRoman.textContent = roman;
});

inputArab.addEventListener("change", function (event) {
  event.preventDefault(); 
  let response = "please enter a valid Roman number";
  let inputValue = event.target.value;
  
  if (inputValue === inputValue.toLowerCase()) 
  {
    //inputArab.reset();
    outputArab.textContent = response;
  } else 
  {

      isConverted = convertToArabic(inputValue);
        
      if (!isConverted)
      {
        //inputArab.reset();
        outputArab.textContent = response;
      }
       else {
        outputArab.textContent = isConverted;
      } 
    };
});

function convertToRoman(num) {
  if (num < 0 || num > 4000) return null;
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const arabicNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = "";
  for (let i = 0; i < romanNumeral.length; i++) {
    while (num >= arabicNumeral[i]) {
      result += romanNumeral[i];
      num -= arabicNumeral[i];
    }
  }
  return result;
}

function convertToArabic(roman) {
  let isValid = checkConsecutiveChars(roman);
  if (!isValid) {
    return false;
  } else {
    const romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    const arabicNumeral = [
      1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
    ];
    let result = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
      while (roman.indexOf(romanNumeral[i]) == 0) {
        result += arabicNumeral[i];
        roman = roman.replace(romanNumeral[i], "");
      }
    }
    return result;
  }
}

function checkConsecutiveChars(str) {
  let consecutiveRegex = /(.)\1\1\1/;
  if (str === "MMMM") {
    return true;
  } else if (str === "LL" || str === "LLL") {
    return false;
  } else {
    return !str.match(consecutiveRegex);
  
  }
}
