var theatre = [
    {
        "id": 1,
        "theatreName": "Theatre 1",
        "cinemaId": 1,
        "movieID": 1,
        "name": "Inferno โลกันตนรก",
        "poster": "https://upload.wikimedia.org/wikipedia/th/thumb/d/de/Inferno_Tom_Hanks_Felicity_Jones_film_poster.jpg/250px-Inferno_Tom_Hanks_Felicity_Jones_film_poster.jpg",
        "time": "121",
        "director": "Ron Howard",
        "language": "TH/TH",
        "showTime": ["13.30","15.00","17.30","20.00"]
    },
    {
        "id": 2,
        "theatreName": "Theatre 2",
        "cinemaId": 1,
        "movieID": 2,
        "name": "Doctor Strange จอมเวทย์มหากาฬ",
        "poster": "https://upload.wikimedia.org/wikipedia/th/thumb/c/c7/Doctor_Strange_poster.jpg/250px-Doctor_Strange_poster.jpg",
        "time": "115",
        "director": "Scott Derrickson",
        "language": "TH/TH",
        "showTime": ["13.30","15.00","17.30","20.00"]
    },
    {
        "id": 3,
        "theatreName": "Theatre 3",
        "cinemaId": 1,
        "movieID": 3,
        "name": "Jack Reacher 2 ยอดคนสืบระห่ำ 2",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Jack_Reacher_Never_Go_Back_poster.jpg/220px-Jack_Reacher_Never_Go_Back_poster.jpg",
        "time": "118",
        "director": "Edward Zwick",
        "language": "TH/TH",
        "showTime": ["13.30","15.00","17.30","20.00"]
    },
    {
        "id": 1,
        "theatreName": "Theatre 1",
        "cinemaId": 2,
        "movieID": 1,
        "name": "Inferno โลกันตนรก",
        "poster": "https://upload.wikimedia.org/wikipedia/th/thumb/d/de/Inferno_Tom_Hanks_Felicity_Jones_film_poster.jpg/250px-Inferno_Tom_Hanks_Felicity_Jones_film_poster.jpg",
        "time": "121",
        "director": "Ron Howard",
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