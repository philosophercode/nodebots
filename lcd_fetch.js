// const five = require("johnny-five");
// const board = new five.Board();

// board.on("ready", () => {
//   // Create an Led on pin 13
//   const led = new five.Led(13);

//   // Strobe the pin on/off, defaults to 100ms phases
//   led.strobe(1000);
// });
const node_fetch = require('node-fetch');
var five = require("johnny-five"),
  board, lcd;

board = new five.Board();

board.on("ready", function() {
  console.log('started');
  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20


    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });

  // Tell the LCD you will use these characters:
  lcd.useChar("check");
  lcd.useChar("heart");
  lcd.useChar("duck");

  // Line 1: Hi rmurphey & hgstrp!
  lcd.clear().print("rmurphey, hgstrp");
  lcd.cursor(1, 0);

  // Line 2: I <3 johnny-five
  // lcd.print("I").write(7).print(" johnny-five");
  // can now be written as:
  lcd.clear().print("I :heart: johnny-five");
//   lcd.clear().print("Hi JOHN");
//   for (var i = 0; i < 0; i++) {
//       lcd.cursor(1, 0).print("01");
//       lcd.cursor(2, 0).print("10");
      
//   }
    let posA = 0
    let posB = 1
  lcd.clear()
  this.loop(1000, () => {
    // lcd.clear().cursor(0, 0).print("I :check::heart: 2 :duck: :)");
        if (posA===0) {
            posA = 1;
            posB = 0;
        } else {
            posA = 0;
            posB = 1;
        }
    // lcd.cursor(posA, 0).print("0101010101010101010101010101");
    // lcd.cursor(posB, 0).print("1010101010101010101010101010");
    // lcd.cursor(posA, 0).print("0");
    // lcd.cursor(posB, 0).print("1");
    lcd.cursor(posA).print(`${posB}`);
    lcd.cursor(posB).print(`${posA}`);
    lcd.clear().print("hello Isaac")
  });

  this.repl.inject({
    lcd: lcd
  });
  console.log('finished');
});