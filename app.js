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
  	$('body').append('<div id="' + i + '"></div>');
    $('#'+i).append('<img src="' + fullResults[i].url + '" onerror="doError(this)" width=400>');
    $('#'+i).append('<p>' + (i+1) + '. ' + caption() + ' <a href="#'+i+'">(Link to this!)</a></p>');
  }
}

function doError (e) {
	console.log($(e).parent().remove());
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
		"Don't you wish you had a " + thisNoun + " like this to call your own?",
		"Sure, your mom might think it's " + adjs.pick().word + ", but we're pretty sure this " + thisNoun + " is as " + thisAdj + " as they come!",
		"Two words: " + thisAdj.humanize() + ". " + thisNoun.humanize() + ". 'nuff said!"
	];
	result += captions.pick();

	result += "";
	return result;
}