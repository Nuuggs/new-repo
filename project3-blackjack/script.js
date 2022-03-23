// 2 kinds of SCOPE - GLOBAL && FUNCTIONAL
// Global is outside everything else
console.log("this is in global scope");
var MODE_START = "start";

var MODE = MODE_START;

var USERNAME = "";

var main = function (input) {
  console.log("checking current mode: " + MODE);
  if (MODE == MODE_START) {
    if (input != "") {
      USERNAME = input;
      MODE = DRAW_CARD;
      return "Hello " + input + "Welcome to my Blackjack game!";
    }
    return "Please enter your name!";
  }
};
