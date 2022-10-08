let y = Math.floor(Math.random() * 100);
let chance =0;
let x;
while (x != y) {
  x = prompt("Guess the right number between 0 to 100 - ")
  ++chance;
  if (y == x) {
    alert("Hurray!🥳🥳 you guessed a right answer.", y)
    console.log("your total scores is ",100 -chance)
  }
  else if (y > x && x >=0) {
    alert("please increase your number")
  }
  else if (y < x && x <=100) {
    alert("please decrease your number ")
  }
  else {
    console.log("please enter a number between 1 to 100")
  }
}