function ArrayAdditionI(arr) {
  let highestNumber = arr[0];

  arr.forEach((number) => {
    if (number > highestNumber) {
      highestNumber = number;
    }
  });

  const indexOfHighestNumber = arr.indexOf(highestNumber);
  arr.splice(indexOfHighestNumber, 1);

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      sum = sum + arr[j];

      if (sum == highestNumber) {
        return "true";
      }
    }
  }

  return "false";
}

// keep this function call here
console.log(ArrayAdditionI());
