function LRUCache(strArr) {
  let cache = [];

  strArr.forEach((letter) => {
    if (!cache.includes(letter)) {
      if (cache.length >= 5) {
        cache.splice(0, 1);
      }

      cache.push(letter);
    } else {
      let indexOfLetter = cache.indexOf(letter);
      cache.splice(indexOfLetter, 1);
      cache.push(letter);
    }
  });

  return cache.join("-");
}
console.log(LRUCache());
