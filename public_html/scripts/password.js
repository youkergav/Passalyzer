jQuery.fn.extend({
	reveal: function() {
		this.hide();
		this.removeClass("d-none");
		this.slideDown();
	}
});

function reset() {
	// Show the loading content.
	$("#grpPassword #outResult").slideUp(function() {
		$("#grpPassword #outResult").removeClass("alert-success alert-warning alert-danger");
		$("#grpPassword #outResult h4.alert-heading").html("");
		$("#grpPassword #outResult span.alert-message").html("");

		$(".list-group-item").remove();
		$(".tab-pane").remove();

		$("#btnLess").addClass("d-none");
		$("#btnLess").removeClass("d-inline");
		$("#btnMore").addClass("d-inline");
		$("#btnMore").removeClass("d-none");

		$("#grpResult").hide();

		// Reset the table body rows.
		var rows = $("#grpPassword #grpResult tbody tr");
		for(var i = 0; i < rows.length; i++) {
			$(rows[i]).remove();
		}
	});

	$("#inPassword").blur();
}

function showLoading() {
	reset();
	$("#btnAnalyze").html($("#btnAnalyze").data("loading-text"));
}

function showInfo(key) {
	switch(key) {
		case "danger":
			$("#grpPassword #outResult").addClass("alert-danger");
			$("#grpPassword #outResult h4.alert-heading").html("Oh no!");
			$("#grpPassword #outResult span.alert-message").html("Your password has been compromised. Please change your password immediately.");

			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-danger active")
				.attr("id", "list-problems-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-problems")
				.html("Problems")
			);
			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-danger")
				.attr("id", "list-solutions-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-solutions")
				.html("Solutions")
			);
			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-danger")
				.attr("id", "list-stats-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-stats")
				.html("Statistics")
			);
			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-danger")
				.attr("id", "list-matches-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-matches")
				.html("Matches")
			);

			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade show active")
				.attr("id", "list-problems")
				.attr("role", "tabpanel")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-solutions")
				.attr("role", "tabpanel")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-stats")
				.attr("role", "tabpanel")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-matches")
				.attr("role", "tabpanel")
			);

			$("#grpPassword #outResult").reveal();
			break;

		case "warning":
			$("#grpPassword #outResult").addClass("alert-warning");
			$("#grpPassword #outResult h4.alert-heading").html("Weak Password!");
			$("#grpPassword #outResult span.alert-message").html("Your password is easy to crack. We highly recommend changing your password.");

			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-warning active")
				.attr("id", "list-problems-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-problems")
				.html("Problems")
			);
			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-warning")
				.attr("id", "list-solutions-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-solutions")
				.html("Solutions")
			);
			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-warning")
				.attr("id", "list-stats-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-stats")
				.html("Statistics")
			);
			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-warning")
				.attr("id", "list-matches-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-matches")
				.html("Matches")
			);

			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade show active")
				.attr("id", "list-problems")
				.attr("role", "tabpanel")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-solutions")
				.attr("role", "tabpanel")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-stats")
				.attr("role", "tabpanel")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-matches")
				.attr("role", "tabpanel")
			);

			$("#grpPassword #outResult").reveal();
			break;

		case "success":
			$("#grpPassword #outResult").addClass("alert-success");
			$("#grpPassword #outResult h4.alert-heading").html("Good news!");
			$("#grpPassword #outResult span.alert-message").html("Your password has been checked and deemed safe to use.");

			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-success active")
				.attr("id", "list-stats-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-stats")
				.html("Statistics")
			);
			$("#list-tab-result").append($("<a></a>")
				.addClass("list-group-item list-group-item-action list-group-item-success")
				.attr("id", "list-matches-list")
				.attr("data-toggle", "list")
				.attr("role", "tab")
				.attr("href", "#list-matches")
				.html("Matches")
			);

			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade show active")
				.attr("id", "list-stats")
				.attr("role", "tabpanel")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-matches")
				.attr("role", "tabpanel")
			);

			$("#grpPassword #outResult").reveal();
			break;
	}
}

function showMatches(matches, key) {
	$("#list-matches").append($("<div></div>")
		.addClass("table-responsive")
		.append($("<table></table>")
			.attr("id", "table-matches")
			.addClass("table text-center")
			.append($("<tr></tr>")
				.append($("<th></th>")
					.addClass("border-header-" + key)
					.attr("col", "row")
					.html("Found")
				)
				.append($("<th></th>")
					.addClass("border-header-" + key)
					.attr("col", "row")
					.html("Pattern")
				)
				.append($("<th></th>")
					.addClass("border-header-" + key)
					.attr("col", "row")
					.html("Entropy")
				)
				.append($("<th></th>")
					.addClass("border-header-" + key)
					.attr("col", "row")
					.html("Matches")
				)
			)
		)
	);

	for(var i = 0; i < matches.length; i++) {
		var token = matches[i]["token"];
		var pattern = matches[i]["pattern"].charAt(0).toUpperCase() + matches[i]["pattern"].slice(1)
		if(Math.floor(matches[i]["entropy"]) != 0) { entropy = matches[i]["entropy"].toFixed(3) + " bits"; } else { entropy = "&mdash;"; }
		if(matches[i]["matchedWord"]) { word = matches[i]["matchedWord"]; } else { word = "&mdash;"; }

		if(i == 0){
			$("#list-matches table").append($("<tr></tr>")
				.addClass("table-" + key)
				.append($("<td></td>")
					.addClass("border-none")
					.html(token)
				)
				.append($("<td></td>")
					.addClass("border-none")
					.html(pattern)
				)
				.append($("<td></td>")
					.addClass("border-none")
					.html(entropy)
				)
				.append($("<td></td>")
					.addClass("border-none")
					.html(word)
				)
			);
		} else {
			$("#list-matches table").append($("<tr></tr>")
				.addClass("table-" + key)
				.append($("<td></td>").html(token))
				.append($("<td></td>").html(pattern))
				.append($("<td></td>").html(entropy))
				.append($("<td></td>").html(word))
			);
		}
	}
}

function formatSeconds(seconds) {
	var years = Math.floor(seconds / 31536000);
	var months = Math.floor((seconds % 31536000) / 2592000);
	var days = Math.floor(((seconds % 31536000) % 2592000) / 86400);
	var hours = Math.floor((((seconds % 31536000) % 2592000) % 86400) / 3600);
	var minutes = Math.floor(((((seconds % 31536000) % 2592000) % 86400) % 3600) / 60);
	var seconds = Math.floor((((seconds % 31536000) % 2592000) % 86400) % 3600) % 60;

	var output = "";
	if(years > 0) {
		if(years > 999) {
			output += years.toLocaleString() + " years"; 
		} else {
			if(years == 1) { output += years.toLocaleString() + " year "; } else { output += years.toLocaleString() + " years "; }
			if(months == 1) { output +=  months + " month ";} else { output += months + " months "; }
			if(days == 1) { output += days + " day "; } else { output += days + " days "; }
			if(hours == 1) { output += hours + " hour "; } else { output += hours + " hours "; }
			if(minutes == 1) { output += minutes + " minute and "; } else { output += minutes + " minutes and "; }
			if(seconds == 1) { output += seconds + " second"; } else { output += seconds + " seconds"; } 
		}
	} else {
		if(months > 0) {
			if(months == 1) { output +=  months + " month ";} else { output += months + " months "; }
			if(days == 1) { output += days + " day "; } else { output += days + " days "; }
			if(hours == 1) { output += hours + " hour "; } else { output += hours + " hours "; }
			if(minutes == 1) { output += minutes + " minute and "; } else { output += minutes + " minutes and "; }
			if(seconds == 1) { output += seconds + " second"; } else { output += seconds + " seconds"; }
		} else {
			if(days > 0) {
				if(days == 1) { output += days + " day "; } else { output += days + " days "; }
				if(hours == 1) { output += hours + " hour "; } else { output += hours + " hours "; }
				if(minutes == 1) { output += minutes + " minute and "; } else { output += minutes + " minutes and "; }
				if(seconds == 1) { output += seconds + " second"; } else { output += seconds + " seconds"; }
			} else {
				if(hours > 0) {
					if(hours == 1) { output += hours + " hour "; } else { output += hours + " hours "; }
					if(minutes == 1) { output += minutes + " minute and "; } else { output += minutes + " minutes and "; }
					if(seconds == 1) { output += seconds + " second"; } else { output += seconds + " seconds"; }
				} else {
					if(minutes > 0) {
						if(minutes == 1) { output += minutes + " minute and "; } else { output += minutes + " minutes and "; }
						if(seconds == 1) { output += seconds + " second"; } else { output += seconds + " seconds"; }
					} else {
						if(seconds > 0) {
							if(seconds == 1) { output += seconds + " second"; } else { output += seconds + " seconds"; }
						} else {
							return("less than a second");
						}
					}
				}
			}
		}
	}

	return(output);
}

function parsePassword(input) {
	if(input) {
		// AJAX function to retrieve password data.
		$.ajax({
			dataType: "JSON",
			url: "functions/analyze?password=" + encodeURIComponent(input), 
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
					.append($("<li></li>").html("This password has <i>" + password.entropy.toFixed(3) + " bits</i> of entropy."))
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