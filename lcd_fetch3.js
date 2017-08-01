const fetch = require('node-fetch');
let dataWeather = '';
fetchWeather = () => {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=10020,us?units=metric&appid=APIKEY')
  .then(function(data){
    data.json()
    .then(function(response) {
      console.log(response);
      console.log(response.main.temp);
      let tempNY = response.main.temp;
      lcd.clear();
      lcd.print('NYC temp: ');
      lcd.print(`${Math.floor(tempNY*(9/5) - 459.67)}f`);


      // do (true) {
      //   lcd.print(JSON.stringify(response));
      // }
      // lcd.print(JSON.stringify(response))
      // // this.loop(10, () => {
      // //   lcd.print(JSON.stringify(response))
      // //   // lcd.clear().print("hello Isaac")
      // // });
      // while (true) {
      //   setInterval(() => {
      //     lcd.print(JSON.stringify(response))

      //   }, 1000);

    });
  });
}


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

  dataWeather = fetchWeather();
  // JSON.stringify(dataWeather)
  console.log(dataWeather);
  // let weather = dataWeather.main.temp
  lcd.clear();

  this.repl.inject({
    lcd: lcd
  });
  console.log('finished');
  lcd.clear().print("Hi Dad");
});
