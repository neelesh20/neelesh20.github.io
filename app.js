$(document).ready(function() {

$('#submitThis').click(function(event){
		// zero out results if previous search has run
         console.log('works');
		$('.results').html('');
		// get the value of the comparison user the user submitted
		var comparisonInput = $('#comparison').val();
		hisFollowers(comparisonInput);
	});

var redirectURI = "https://googledrive.com/host/0ByxxHCTtgf7WZnIwbjlHOGQ3RmM/index.html";
var clientID = "34bb7328c72b4be496b6ddfc2cc1fa03";

var getAccessCode = function() { 
	var accessUrl = $(location).attr('href');
	console.log(accessUrl);
	var charCount = ("https://c302f97d9f890b0c98cc10cd574a51f89eb26855.googledrive.com/host/0ByxxHCTtgf7WZnIwbjlHOGQ3RmM/index.html#access_token=".length);
	console.log(accessUrl.substring(charCount));
	return accessUrl.substring(charCount);
	
};

var accessCode = getAccessCode();
var userId = accessCode.substring(0, accessCode.indexOf('.'));


var hisFollowers = function(comparisonInput){

		var result = $.ajax({
		method:"GET",
		url: "https://api.instagram.com/v1/users/" + comparisonInput + "/follows?access_token="+accessCode,
		dataType: "jsonp",
		cache:false,
        
	
		}).done(function(result){

			$.each(result.items, function(i, a) {
			$('.results').append('<div>' + a.data.username + a.data.profile_picture + '</div>');
		});
	})
		
	.fail(function(jqXHR, error, errorThrown){
		var errorElem = showError(error);
		$('.search-results').append(errorElem);
	});

};

});
