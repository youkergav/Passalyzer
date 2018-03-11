function validatePassword(input) {
	if(input) {
		var postData = {password: input};

		$.ajax({
			type: "POST",
			dataType: "JSON",
			data: postData,
			url: "functions/analyze.php", 
			success: function(password) {
				$("#rsPassword").html(password.password);
				$("#rsLenPass").html(password.lenPass);
				$("#rsLenAlpha").html(password.lenAlpha);
				$("#rsLenNumeric").html(password.lenNumeric);
				$("#rsLenSpecial").html(password.lenSpecial);
				if(password.breached) {$("#rsBreached").html("&#10003;");} else {$("#rsBreached").html("&#10007;");}

				console.log(password);
			},
			statusCode: {
				500: function() {
					alert("An error has occured. Please try again later.");
				}
			}
		});
	}
}