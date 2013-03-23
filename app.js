google.load("search", "1");
var searchCount = 0;
var fullResults = [];
var imageSearch = new google.search.ImageSearch();
imageSearch.setSearchCompleteCallback(this, searchComplete, null);
imageSearch.setResultSetSize(8);

function searchComplete() {
  results = imageSearch.results;
  fullResults = fullResults.concat(results);
  console.log(results);

  if (searchCount < 2) {
  	imageSearch.gotoPage(searchCount+1);
  }
  else {
  	appendStuff();
  }
  searchCount++;
}

function appendStuff() {
  for (var i=0;i<thisNum;i++) {
    $('body').append('<img src="' + fullResults[i].url + '" width=400>');
    $('body').append('<p>' + (i+1) + '. ' + caption() + '</p>');
  }
}

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
}

var thisNoun = nouns.pick().word;
var thisAdj = leigh_adjs.pick();
var thisNum = Math.floor(Math.random()*10+10);

var headline = "The " + thisNum + " Most " + thisAdj.humanize() + " " + thisNoun.pluralize().humanize();
$('body').append('<h1>'+headline+'</h1>');
imageSearch.execute(thisNoun);

function caption() {
	var result = "";
	var captions = [
		"Wow, check out this " + thisNoun + ". How " + thisAdj + "!",
		"Now that's what I call " + thisAdj + "!!",
		"Don't you wish you had a " + thisNoun + " like this to call your own?"
	];
	result += captions.pick();

	result += "";
	return result;
}