var location = [{
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
    var locationSelected = document.getElementById('dropdown').value;
    console.log(location.filter(locationSelected));
}