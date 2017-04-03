console.log("js is working");

var cats = document.getElementById('cats');


function makeResults() {
	var results = document.createElement('li');
	results.innerHTML = 'Cats';
	results.className = 'results';
	cats.appendChild(results);
}


$("form").on("submit", function(event){
	event.preventDefault();
	makeResults();

var ajax = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
	.done(function(data){
	console.log(data);
	});

// var catinfo = ajax.innerHTML;
// JSON.stringify(ajax);
// $('.results').add(ajax);


});

// var looper = function() {
// 	for (var i = 0; i < Things.length; i++) {
// 		Things[i]
// 	}
// }