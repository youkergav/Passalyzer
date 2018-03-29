function parsePassword(input) {
	if(input) {
		// AJAX function to retrieve password data.
		$.ajax({
			dataType: "JSON",
			url: "functions/analyze.php?password=" + encodeURIComponent(input), 
			success: function(password) {
				// Append the overview data.
				switch(password.score) {
					case 0:
					case 1:
						showInfo("danger");

						if(password.breached) {
							$("#list-problems").append($("<h5></h5>").html("Database Breach"));
							$("#list-problems").append($("<ul></ul>")
								.append($("<li></li>").html("Your password has been leaked in a publically avalible database breach."))
								.append($("<li></li>").html("Hackers have a very high chance of exposing this password."))
							);

							$("#list-solutions").append($("<h5></h5>").html("Change Your Password"));
							$("#list-solutions").append($("<ul></ul>")
								.append($("<li></li>").html("Avoid using this password at all costs. It is no longer safe to use."))
								.append($("<li></li>").html("Use a different password that has not been found in a database breach."))
							);
						}

						$("#list-problems").append($("<h5></h5>").html("Crack Time"));
						$("#list-problems").append($("<ul></ul>")
							.append($("<li></li>").html("Your password is easy to crack."))
							.append($("<li></li>").html("Hackers can exposed your password quickly with a combination of bruteforce and dictonary attacks."))
						);

						$("#list-solutions").append($("<h5></h5>").html("Increase Password Strength"));
						$("#list-solutions").append($("<ul></ul>")
							.append($("<li></li>").html("Make the password more unique."))
							.append($("<li></li>").html("Add special characters and numbers to the password so it can't be easily guessed."))
						);

						showMatches(JSON.parse(atob(password.matches)), "danger");

						break;
					case 2:
					case 3:
						if(password.breached) {
							showInfo("danger");
							
							$("#list-problems").append($("<h5></h5>").html("Database Breach"));
							$("#list-problems").append($("<ul></ul>")
								.append($("<li></li>").html("Your password has been leaked in a publically avalible database breach."))
								.append($("<li></li>").html("Hackers have a very high chance of exposing this password."))
							);

							$("#list-problems").append($("<h5></h5>").html("Crack Time"));
							$("#list-problems").append($("<ul></ul>")
								.append($("<li></li>").html("Your password can be cracked over time."))
								.append($("<li></li>").html("With enough time, hackers can exposed your password with a combination of bruteforce and dictonary attacks."))
							);

							$("#list-solutions").append($("<h5></h5>").html("Change Your Password"));
							$("#list-solutions").append($("<ul></ul>")
								.append($("<li></li>").html("Avoid using this password at all costs. It is no longer safe to use."))
								.append($("<li></li>").html("Use a different password that has not been found in a database breach."))
							);

							$("#list-solutions").append($("<h5></h5>").html("Increase Password Strength"));
							$("#list-solutions").append($("<ul></ul>")
								.append($("<li></li>").html("Add more special characters and numbers to the password so it can't be easily guessed."))
								.append($("<li></li>").html("Avoid keywords and use phrases instead."))
								.append($("<li></li>").html("Don't just replace letters with special character \"lookalikes\". <i>Example: \"password\" and \"p@$$w0rd\"</i>"))
							);

							showMatches(JSON.parse(atob(password.matches)), "danger");
						} else {
							showInfo("warning");

							$("#list-problems").append($("<h5></h5>").html("Crack Time"));
							$("#list-problems").append($("<ul></ul>")
								.append($("<li></li>").html("Your password can be cracked over time."))
								.append($("<li></li>").html("With enough time, hackers can exposed your password with a combination of bruteforce and dictonary attacks."))
							);

							$("#list-solutions").append($("<h5></h5>").html("Increase Password Strength"));
							$("#list-solutions").append($("<ul></ul>")
								.append($("<li></li>").html("Add more special characters and numbers to the password so it can't be easily guessed."))
								.append($("<li></li>").html("Avoid keywords and use phrases instead."))
								.append($("<li></li>").html("Don't just replace letters with special character \"lookalikes\". <i>Example: \"password\" and \"p@$$w0rd\"</i>"))
							);

							showMatches(JSON.parse(atob(password.matches)), "warning");
						}

						break;
					case 4:
						if(password.breached) {
							showInfo("danger");
							
							$("#list-problems").append($("<h5></h5>").html("Database Breach"));
							$("#list-problems").append($("<ul></ul>")
								.append($("<li></li>").html("Your password has been leaked in a publically avalible database breach."))
								.append($("<li></li>").html("Hackers have a very high chance of exposing this password."))
							);

							$("#list-solutions").append($("<h5></h5>").html("Change Your Password"));
							$("#list-solutions").append($("<ul></ul>")
								.append($("<li></li>").html("Avoid using this password at all costs. It is no longer safe to use."))
								.append($("<li></li>").html("Use a different password that has not been found in a database breach."))
							);

							showMatches(JSON.parse(atob(password.matches)), "danger");
						} else {
							showInfo("success");
							showMatches(JSON.parse(atob(password.matches)), "success");
						}

						break;
				}

				// Append the statistical data.
				$("#list-stats").append($("<h5></h5>").html("Characters"));
				$("#list-stats").append($("<ul></ul>")
					.append($("<li></li>").html("This password has <i>" + password.lenPass + " characters</i> in total."))
					.append($("<li></li>").html("This password has <i>" + password.lenAlpha + " alphabetical</i> characters."))
					.append($("<li></li>").html("This password has <i>" + password.lenNumeric + " numerical</i> characters."))
					.append($("<li></li>").html("This password has <i>" + password.lenSpecial + " special</i> characters."))
				);

				$("#list-stats").append($("<h5></h5>").html("Cracking"));
				$("#list-stats").append($("<ul></ul>")
					.append($("<li></li>").html("This password has <i>" + Math.round(password.entropy) + " bits</i> of entropy."))
					.append($("<li></li>").html("It would take <i>" + formatSeconds(password.timeCrack) + "</i> to crack this password.</i>"))
				);

				console.log(password);
				$("#btnAnalyze").html("Analyze");
			},
			statusCode: {
				500: function() {
					$("#grpPassword #outError").reveal();
					$("#btnAnalyze").html("Analyze");
				}
			}
		});
	}
}