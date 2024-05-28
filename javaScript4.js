const exampleArray = [0.25, 2, 23.45, 6.8, 6.9, 100];

function getDecimalsSum(numbers) {
  let decimalPartSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const decimalPart = number % 1;
    decimalPartSum = decimalPartSum + decimalPart;
  }

  return Math.round(decimalPartSum * 100) / 100;
}

console.log(getDecimalsSum(exampleArray)); // output: 2.4
