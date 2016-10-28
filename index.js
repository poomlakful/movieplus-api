var app = require('express')();
var users = require('./users');
var movies = require('./movies');
var showtimes = require('./showtimes');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5555;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//----------------Root------------------//
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

//----------------User-------------------//
app.get('/user', function (req, res) {
    res.json(users.findAll());
});
app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});
app.post('/newuser', function (req, res) {
    var json = req.body;
    if(json.name != null) {
    	console.log(json);
    	res.send('Add new ' + json.name + ' Completed!');
    }
    else
    	res.send('no data');
});

//-----------------Movie----------------//
app.get('/movie', function (req, res) {
    res.json(movies.findAll());
});
app.get('/movie/:id', function (req, res) {
    var id = req.params.id;
    res.json(movies.findById(id));
});

//----------------Show Time------------//
app.get('/showtime/:cinemaId', function (req, res) {
    var id = req.params.cinemaId;
    res.json(showtimes.findByCinemaId(id));
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});