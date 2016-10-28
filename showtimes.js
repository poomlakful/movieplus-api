var theatre = [
    {
        "id": 1,
        "name": "Theatre 1",
        "cinemaId": 1,
        "movieID": 1,
        "language": "TH/TH",
        "time": ["13.30","15.00","17.30","20.00"]
    },
    {
        "id": 2,
        "name": "Theatre 2",
        "cinemaId": 1,
        "movieID": 2,
        "language": "TH/TH",
        "time": ["13.30","15.00","17.30","20.00"]
    },
    {
        "id": 3,
        "name": "Theatre 3",
        "cinemaId": 1,
        "movieID": 3,
        "language": "TH/TH",
        "time": ["13.30","15.00","17.30","20.00"]
    },
    {
        "id": 1,
        "name": "Theatre 1",
        "cinemaId": 2,
        "movieID": 1,
        "language": "TH/TH",
        "time": ["13.30","15.00","17.30","20.00"]
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