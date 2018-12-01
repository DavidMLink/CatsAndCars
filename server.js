// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

var app = express();


app.get('/', function(request, response) {
   response.send("<h1>Hello Express</h1>");
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){    
    response.render('cats.ejs');
})
app.get("/catMJ", function (request, response){    
    var cats_array = [
        {name: "King Of Pop", favFood: "Spaghetti", age: 4,}
    ]
    response.render('catMJ.ejs', {cat: cats_array});
})
app.get("/catBed", function (request, response){    
    var cats_array = [
        {name: "King Of Sleeping", favFood: "Dr. Pepper", age: 7,}
    ]
    response.render('catBed.ejs', {cat: cats_array});
})
app.get("/catYarn", function (request, response){  
    var cats_array = [
        {name: "King Of Messing Things up", favFood: "Yarn", age: 1,}
    ]  
    response.render('catYarn.ejs', {cat: cats_array});
})

app.get("/cars", function (request, response){
    response.render('cars.ejs')
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8888, function() {
  console.log("listening on port 8888");
})