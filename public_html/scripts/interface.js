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

function showError() {
	// Show the error content.
	$('#btnAnalyze').html("Analyze");
	$("#grpPassword #outError").reveal();
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
				.html("Problems...")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-solutions")
				.attr("role", "tabpanel")
				.html("Solutions...")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-stats")
				.attr("role", "tabpanel")
				.html("Statistics...")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-matches")
				.attr("role", "tabpanel")
				.html("Matches...")
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
				.html("Problems...")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-solutions")
				.attr("role", "tabpanel")
				.html("Solutions...")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-stats")
				.attr("role", "tabpanel")
				.html("Statistics...")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-matches")
				.attr("role", "tabpanel")
				.html("Matches...")
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
				.html("Statistics...")
			);
			$("#nav-tabContent-result").append($("<div></div>")
				.addClass("tab-pane fade")
				.attr("id", "list-matches")
				.attr("role", "tabpanel")
				.html("Matches...")
			);

			$("#grpPassword #outResult").reveal();
			break;
	}
}

function showPassword(score, breached) {
	switch(score) {
		case 0:
		case 1:
			showInfo("danger");
			break;
		case 2:
		case 3:
			if(breached) {
				showInfo("danger");
			} else {
				showInfo("warning");
			}

			break;
		case 4:
			if(breached) {
				showInfo("danger");
			} else {
				showInfo("success");
			}

			break;
	}

	$("#btnAnalyze").html("Analyze");
}