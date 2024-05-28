function getNumberOfCircles(directions) {
  let degrees = 0;

  for (let i = 0; i < directions.length; i++) {
    const currentDirection = directions[i];

    switch (currentDirection) {
      case "left":
        degrees = degrees - 90;
        break;
      case "right":
        degrees = degrees + 90;
        break;
    }
  }

  return Math.floor(Math.abs(degrees / 360));
}

console.log(getNumberOfCircles(["left", "right", "left", "right"])); // output: 0
console.log(
  getNumberOfCircles([
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
  ])
); // output: 2
console.log(
  getNumberOfCircles([
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "left",
  ])
); // output: 1
console.log(getNumberOfCircles(["right", "right", "right"])); // output: 0
console.log(getNumberOfCircles(["left"])); // output: 0
console.log(getNumberOfCircles(["left", "left", "left", "left"])); // output: 1
console.log(
  getNumberOfCircles([
    "left",
    "left",
    "left",
    "left",
    "right",
    "right",
    "right",
    "right",
  ])
); // output: 0
