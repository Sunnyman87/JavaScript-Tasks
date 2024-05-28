function CaesarCipher(str, num) {
  let string = "";

  for (i = 0; i < str.length; i++) {
    let currentCharacter = str[i];

    let charCode = currentCharacter.charCodeAt(0) + num;

    if (currentCharacter.match(/[a-zA-Z]/)) {
      string = string + String.fromCharCode(charCode);
    } else {
      string = string + str[i];
    }
  }
  // code goes here
  return string;
}

console.log(CaesarCipher());
