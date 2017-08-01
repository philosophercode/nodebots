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

  lcd.clear();

  this.repl.inject({
    lcd: lcd
  });
  console.log('finished');
  lcd.clear().print("Hi MOM");
  // lcd.clear().print("hello Isaac")
  // lcd.clear().print("How are you doing pops?");
});