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
	$("#list-matches").append($("<table></table>")
		.attr("id", "table-matches")
		.addClass("table text-center")
		.append($("<tr></tr>")
			.append($("<th></th>")
				.addClass("border-header-" + key)
				.attr("col", "row")
				.html("Token")
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
				.html("Word")
			)
		)
	);

	for(var i = 0; i < matches.length; i++) {
		var token = matches[i]["token"];
		var pattern = matches[i]["pattern"].charAt(0).toUpperCase() + matches[i]["pattern"].slice(1)
		if(Math.floor(matches[i]["entropy"]) != 0) { entropy = Math.floor(matches[i]["entropy"]) + " bits"; } else { entropy = "&mdash;"; }
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