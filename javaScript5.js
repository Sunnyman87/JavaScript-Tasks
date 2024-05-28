const initialValue =
  "fox apple dog banana cat grape orange kiwi pear lemon dog kiwi fox orange pear";

function solution(initialValue) {
  const words = initialValue.split(" ");
  const wordsWithoutDuplicates = [];

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    if (wordsWithoutDuplicates.includes(currentWord)) {
      continue;
    }

    wordsWithoutDuplicates.push(currentWord);
  }

  return wordsWithoutDuplicates.sort().join(" ");
}

console.log(solution(initialValue)); // output: apple banana cat dog fox grape kiwi lemon orange pear
