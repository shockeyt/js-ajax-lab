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
		var separateCats = JSON.parse(data);
		for (var i = 0; i < separateCats.length; i++) {
			var catList = document.createElement('li');

			catList.append(separateCats[i].name + " - " + separateCats[i].note);
			cats.append(catList);
		}
	console.log(data);
	});

// var catinfo = ajax.innerHTML;
// JSON.stringify(ajax);
// $('.results').add(ajax);


});
