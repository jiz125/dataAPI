
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=new&york&appid=b71c7a9022f0d952d1367526279a1fa4&units=metric'
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=b71c7a9022f0d952d1367526279a1fa4';
var units = '&units=metric';

var condition;
var input;

function setup() {
  createCanvas(600, 400);
  // var url = api + city + apiKey + units;
  // loadJSON(url, gotData);
  var button = select('#submit');
  button.mousePressed(selectCity); //ask for the city weather
  input = select('#city')
}

function selectCity() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  condition = data;
}

function draw() {
  background(0);

  if (condition) {
    var temp = condition.main.temp
    var humidity = condition.main.humidity
    var clouds = condition.clouds.all
    var current = condition.weather.id


    // ellipse(100, 100, temp, temp)
    // ellipse(300, 100, humidity, humidity)

    //clouds
    fill(200,clouds*4);
    ellipse(300,200,700,700);
    for(let i = 0; i < 50; i ++){

    }

    fill(255);
    text(clouds,20,20);

    //city name
    text(input.value(), 20, 40)
    console.log(input.value(),clouds);
    text(current,20,50);
  }
}
