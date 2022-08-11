let carlist = [];

fetch("https://igorlech.github.io/sunbeam/cars.json")
.then(function(data) {
    return data.json();
})
.then (function(post) {
    carlist = post;
})
.catch (function (error) {
    output.innerHTML = "Service is unbelievable";
})