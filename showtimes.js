var theatre = [
    {
        "id": 1,
        "theatreName": "Theatre 1",
        "cinemaId": 1,
        "movieID": 1,
        "name": "The BFG(1)",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/The_BFG_poster.jpg/220px-The_BFG_poster.jpg",
        "time": "117",
        "director": "Steven Spielberg",
        "language": "TH/TH",
        "showTime": ["13.30","15.00","17.30","20.00"]
    },
    {
        "id": 2,
        "theatreName": "Theatre 2",
        "cinemaId": 1,
        "movieID": 2,
        "name": "The BFG(2)",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/The_BFG_poster.jpg/220px-The_BFG_poster.jpg",
        "time": "117",
        "director": "Steven Spielberg",
        "language": "TH/TH",
        "showTime": ["13.30","15.00","17.30","20.00"]
    },
    {
        "id": 3,
        "theatreName": "Theatre 3",
        "cinemaId": 1,
        "movieID": 3,
        "name": "The BFG(3)",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/The_BFG_poster.jpg/220px-The_BFG_poster.jpg",
        "time": "117",
        "director": "Steven Spielberg",
        "language": "TH/TH",
        "showTime": ["13.30","15.00","17.30","20.00"]
    },
    {
        "id": 1,
        "theatreName": "Theatre 1",
        "cinemaId": 2,
        "movieID": 1,
        "name": "The BFG(1)",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/The_BFG_poster.jpg/220px-The_BFG_poster.jpg",
        "time": "117",
        "director": "Steven Spielberg",
        "language": "TH/TH",
        "showTime": ["13.30","15.00","17.30","20.00"]
    }
];

exports.findAll = function() {
    return theatre;
};

exports.findByCinemaId = function(id) {
    var theatreList = [];
    for (var i = 0; i < theatre.length; i++) {
        if (theatre[i].cinemaId == id) {
            theatreList.push(theatre[i]);
        }
    }
    return theatreList;
};