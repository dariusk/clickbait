var sub = "SXGWLZPDOKFIVUHJYTQBNMACERxswgzldpkoifuvjhtybqmncare";

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
    $('#'+i).append('<p>' + (i+1) + '. ' + caption() + '</p>');
  }
}

function doError (e) {
	console.log($(e).parent().remove());
}
Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
}
if (gup('d') === "") {
	var thisNoun = nouns.pick().word;
	var thisAdj = leigh_adjs.pick();
	var thisNum = Math.floor(Math.random()*10+10);
}
else {
  var thisAdj = decodeStr(unescape(gup('d')).split('$')[0]);
  var thisNoun = decodeStr(unescape(gup('d')).split('$')[1]);
  var thisNum = gup('n');
}



var headline = "The " + thisNum + " Most " + thisAdj.humanize() + " " + thisNoun.pluralize().humanize();
$('body').append('<h1>'+headline+'</h1>');
$('body').append('<p><a href="'+location.href.split('?')[0]+'?d='+encodeStr(thisAdj)+'$'+encodeStr(thisNoun)+'&n='+thisNum+'">Share this!</a></p>')
imageSearch.execute(thisNoun);
function caption() {
	var result = "";
	var captions = [
		"Wow, check out this " + thisNoun + ". How " + thisAdj + "!",
		"Now that's what I call " + thisAdj + "!!",
		"Don't you wish you had a " + thisNoun + " like this to call your own?",
		"Sure, your mom might think it's " + adjs.pick().word + ", but we're pretty sure this " + thisNoun + " is as " + thisAdj + " as they come!",
		"Two words: " + thisAdj.humanize() + ". " + thisNoun.humanize() + ". 'nuff said!",
		adjs.pick().word.humanize() + "? " + adjs.pick().word.humanize() + "? We're thinking this " + thisNoun + " is 100% pure " + thisAdj + "!",
		"We're betting you haven't seen a " + thisNoun + " like this all week!",
		"This particular " + thisNoun + " became internet famous for being " + thisAdj + " late last year.",
		"This " + thisNoun + " is practically synonymous with " + thisAdj + "!",
		"Basically, if you're interested in " + thisAdj + " stuff, you can't go wrong here.",
		"A " + thisAdj + " " + thisNoun + " for the ages!",
		"Classic " + thisNoun + " of the " + thisAdj + " variety!",
		"Hey, " + nouns.pick().word.pluralize() + " called: they want their " + thisAdj + " back!",
		"There's only one word to describe this " + thisNoun + ", and that word is... " + thisAdj + ", baby!",
		"This " + thisNoun + " is probably best known for its marriage to the hottest celebrity of the year, though it's included in THIS list because it's so " + thisAdj + "!",
		"Did someone say \"" + thisAdj + "\"?"
	];
	result += captions.pick();

	result += "";
	return result;
}

function encodeStr(uncoded) {
  uncoded = uncoded.toUpperCase().replace(/^\s+|\s+$/g,"");
  var coded = "";
  var chr;
  for (var i = uncoded.length - 1; i >= 0; i--) {
    chr = uncoded.charCodeAt(i);
    coded += (chr >= 65 && chr <= 90) ? 
      sub.charAt(chr - 65 + 26*Math.floor(Math.random()*2)) :
      String.fromCharCode(chr); 
    }
  return encodeURIComponent(coded);  
}

function decodeStr(coded) {
  coded = decodeURIComponent(coded);  
  var uncoded = "";
  var chr;
  for (var i = coded.length - 1; i >= 0; i--) {
    chr = coded.charAt(i);
    uncoded += (chr >= "a" && chr <= "z" || chr >= "A" && chr <= "Z") ?
      String.fromCharCode(65 + 32 + sub.indexOf(chr) % 26) :
      chr; 
    }
  return uncoded;   
} 

function gup( name ){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
  var regexS = "[\\?&]"+name+"=([^&#]*)";  
  var regex = new RegExp( regexS );  
  var results = regex.exec( window.location.href ); 
  if( results == null ) {
    return "";  
  }
  else {
    return results[1];
  }
}