console.log("js is working");
// var cats = $('#cats').attr('id');
var cats = document.getElementById('cats');
var catname = $('#cat-name').val();
var catnote = $('#cat-note').val();


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
				// console.log(separateCats[0]);
			}
		// console.log(data);
		});

	var newlist = document.createElement('li');
	var catname = $('#cat-name').val();
	var catnote = $('#cat-note').val();
	newlist.append(catname + " - " + catnote);
	$('.results').append(newlist);

// var catinfo = ajax.innerHTML;
// JSON.stringify(ajax);
// $('.results').add(ajax);


});
