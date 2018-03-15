function parsePassword(input) {
	if(input) {
		// Get the post data.
		var postData = {password: input};

		// AJAX function to retrieve password data.
		$.ajax({
			type: "POST",
			dataType: "JSON",
			data: postData,
			url: "functions/analyze.php", 
			success: function(password) {
				// Append the statistic data to the stats table..
				$("#grpPassword #grpResult #stats tbody").append("<tr><td>Number of Characters:</td><td>" + password.lenPass + "</td></tr>");
				$("#grpPassword #grpResult #stats tbody").append("<tr><td>Alphabetic Characters:</td><td>" + password.lenAlpha + "</td></tr>");
				$("#grpPassword #grpResult #stats tbody").append("<tr><td>Numberic Characters:</td><td>" + password.lenNumeric + "</td></tr>");
				$("#grpPassword #grpResult #stats tbody").append("<tr><td>Special Characters:</td><td>" + password.lenSpecial + "</td></tr>");
				$("#grpPassword #grpResult #stats tbody").append("<tr><td>Entropy:</td><td>" + password.entropy + "</td></tr>");
				$("#grpPassword #grpResult #stats tbody").append("<tr><td>Crack Time:</td><td>" + password.timeCrack + "</td></tr>");
				if(password.breached) {$("#grpPassword #grpResult #stats tbody").append("<tr><td>Breached:</td><td>&#10003;</td></tr>");} else {$("#grpPassword #grpResult #stats tbody").append("<tr><td>Breached:</td><td>&#10007;</td></tr>");}
				$("#stats tbody").append("<tr><td>Score:</td><td>" + password.score + "</td></tr>");

				// Append the match data to the matches table.
				var matches = JSON.parse(atob(password.matches));
				for(var i = 0; i < matches.length; i++) {
					$("#grpPassword #grpResult #matches tbody").append("<tr><td>" + matches[i]["token"] + "</td><td>" + matches[i]["pattern"] + "</td><td>" + matches[i]["entropy"] + "</td><td>" + matches[i]["matchedWord"] + "</td></tr>")
				}

				// Show the password content.
				$("#grpPassword #outLoading").hide();
				$("#grpPassword #stats").show()
				$("#grpPassword #matches").show()
				console.log(password);
			},
			statusCode: {
				500: function() {
					// Show the error content.
					$("#grpPassword #outLoading").hide();
					$("#grpPassword #outError").show();
				}
			}
		});
	}
}