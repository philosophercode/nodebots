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
  let articleTitles = [];
  fetchArticles = () => {
    fetch('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=APIKEY')
    .then(function(data){
      data.json()
      .then(function(response) {
        let articles = response.articles;
        // console.log(articles);
        articles.forEach(function(article) {
          let articleTitle = article.title;
          articleTitles.push(articleTitle)
          // console.log(articleTitle);
        });
        console.log('List:' + articleTitles);
        const headlinesString = articleTitles.toString();
        lcd.clear();
        // lcd.cursor(0,0).print(Math.PI);
        // lcd.cursor(1,0).print(Math.E);

        lcd.autoscroll().print(headlinesString.repeat(10));
        // this.loop(100, () => {
        //   lcd.print(headlinesString)
        //   // lcd.clear().print("hello Isaac")
        // });


        // lcd.print('NYC temp: ');
        // lcd.print(`${Math.floor(tempNY*(9/5) - 459.67)}f`);


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


  fetchArticles();
  // dataArticles = fetchArticles();
  // JSON.stringify(dataWeather)
  // console.log(dataArticles);
  // console.log(articleTitles);
  // let weather = dataWeather.main.temp
  // lcd.clear();

  this.repl.inject({
    lcd: lcd
  });
  console.log('finished');
  // lcd.clear().print("Hi Dad");
});
