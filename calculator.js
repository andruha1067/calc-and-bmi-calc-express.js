const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Calculator App
app.use(express.static("public")); // this send the get request without the .get

app.get("/", function(req, res){
  //res.sendFile(__dirname + "/css/styles.css");
  //res.sendFile(__dirname + "/public/index.html");

  //console.log(__dirname);
});

app.post("/", function(req, res) {
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var result = 0;
  var plus = req.body.plus;

  if (plus === "") {
    result = num1 + num2;
    res.send(num1 + " + " + num2 + " = " + result);
  } else {
    result = num1 - num2;
    res.send(num1 + " - " + num2 + " = " + result);
  }

  //console.log(req.body);

});

// BMI Calculator app
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = (weight / Math.pow(height, 2)).toPrecision(3);
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
