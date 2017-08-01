// const five = require("johnny-five");
// const board = new five.Board();

// board.on("ready", () => {
//   // Create an Led on pin 13
//   const led = new five.Led(13);

//   // Strobe the pin on/off, defaults to 100ms phases
//   led.strobe(1000);
// });

const fetch = require('node-fetch');
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

let dataWeather = '';




fetch('http://api.openweathermap.org/data/2.5/weather?q=10020,us?units=imperial&appid=APIKEY')
  .then(function(data){
    data.json()
    .then(function(response) {
      console.log(response.main.temp);
    });
  });

    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"

//   dataWeather = fetchWeather();
//   // JSON.stringify(dataWeather)
//   console.log(dataWeather);
//   // let weather = dataWeather.main.temp
//   lcd.clear();
//   this.loop(1000, () => {
//     lcd.print(`${dataWeather}`)
//     // lcd.clear().print("hello Isaac")
//   });

//   this.repl.inject({
//     lcd: lcd
//   });
//   console.log('finished');
