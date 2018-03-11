function validatePassword(input) {
	if(input) {
		var postData = {password: input};

		$.ajax({
			type: "POST",
			dataType: "JSON",
			data: postData,
			url: "functions/analyze.php", 
			success: function(password) {
				if(password.breached) {
					$("#result").html("The password \"" + password.password + "\" has been breached!");
				} else {
					$("#result").html("The password \"" + password.password + "\" is safe.");
				}
			}
		});
	}
}