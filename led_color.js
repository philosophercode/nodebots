var five = require("johnny-five"),
  board, led;

// With Options object & pins object

board = new five.Board();


board.on("ready", function() {
  console.log("on")
  new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  // With Options object & pins array
  new five.Led.RGB({
    pins: [6, 5, 3]
  });

  // With pins array
  new five.Led.RGB([6, 5, 3]);




});
