"use strict";

var workers = [{
    username: "Neha",
    place: "Jaipur"
}, {
    username: "Priya",
    place: "Jodhpur"
}, {
    username: "Megha",
    place: "Udaipur"
}, {
    username: "Riyu",
    place: "Jaipur"
}, {
    username: "Preyan",
    place: "Jodhpur"
}, {
    username: "Yash",
    place: "Udaipur"
}];

function locationData() {
    var i = 0;
    var text = "";
    var locationSelected = document.getElementById('dropdown').value;
    // alert(locationSelected);
    let Availableworker = workers.filter(function(e) {
        return e.place == locationSelected;
    });

    for (i = 0; i < Availableworker.length; i++) {
        text += Availableworker[i].username + "<br>";
    }

    document.getElementById('resultPara').innerHTML = text;
}