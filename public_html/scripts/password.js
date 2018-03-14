function validatePassword(input) {
	if(input) {
		var postData = {password: input};

		$("#matches").hide();
		var rows = $('#matches tbody tr');
		for(var i = 0; i < rows.length; i++) {
			$(rows[i]).remove();
		}

		$.ajax({
			type: "POST",
			dataType: "JSON",
			data: postData,
			url: "functions/analyze.php", 
			success: function(password) {
				$("#loading").hide();

				$("#rsLenPass").html(password.lenPass);
				$("#rsLenAlpha").html(password.lenAlpha);
				$("#rsLenNumeric").html(password.lenNumeric);
				$("#rsLenSpecial").html(password.lenSpecial);
				$("#rsEntropy").html(password.entropy);
				if(password.breached) {$("#rsBreached").html("&#10003;");} else {$("#rsBreached").html("&#10007;");}
				$("#rsTimeCrack").html(password.timeCrack);
				$("#rsScore").html(password.score);

				var matches = JSON.parse(atob(password.matches));
				for(var i = 0; i < matches.length; i++) {
					$("#matches tbody").append("<tr><td>" + matches[i]["token"] + "</td><td>" + matches[i]["pattern"] + "</td><td>" + matches[i]["entropy"] + "</td><td>" + matches[i]["matchedWord"] + "</td></tr>")
				}

				$("#results").show()
				$("#matches").show()
				console.log(password);
			},
			statusCode: {
				500: function() {
					$("#loading").hide();
					$("#error").show();
				}
			}
		});
	}
}