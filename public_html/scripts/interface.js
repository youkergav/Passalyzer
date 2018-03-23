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
		$("#grpPassword #outResult").removeClass("alert-success");
		$("#grpPassword #outResult").removeClass("alert-warning");
		$("#grpPassword #outResult").removeClass("alert-danger");
		$("#grpPassword #outResult h4.alert-heading").html("");
		$("#grpPassword #outResult span.alert-message").html("");

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

function showPassword(score, breached) {
	switch(score) {
		case 0:
		case 1:
			$("#grpPassword #outResult").addClass("alert-danger");
			$("#grpPassword #outResult h4.alert-heading").html("Oh no!");
			$("#grpPassword #outResult span.alert-message").html("Your password has been compromised. Please change your password immediately.");
			$("#grpPassword #outResult").reveal();
			break;
		case 2:
		case 3:
			if(breached) {
				$("#grpPassword #outResult").addClass("alert-danger");
				$("#grpPassword #outResult h4.alert-heading").html("Oh no!");
				$("#grpPassword #outResult span.alert-message").html("Your password has been compromised. Please change your password immediately.");
				$("#grpPassword #outResult").reveal();
			} else {
				$("#grpPassword #outResult").addClass("alert-warning");
				$("#grpPassword #outResult h4.alert-heading").html("Weak Password!");
				$("#grpPassword #outResult span.alert-message").html("Your password is easy to crack. We highly recommend changing your password.");
				$("#grpPassword #outResult").reveal();
			}

			break;
		case 4:
			if(breached) {
				$("#grpPassword #outResult").addClass("alert-danger");
				$("#grpPassword #outResult h4.alert-heading").html("Oh no!");
				$("#grpPassword #outResult span.alert-message").html("Your password has been compromised. Please change your password immediately.");
				$("#grpPassword #outResult").reveal();
			} else {
				$("#grpPassword #outResult").addClass("alert-success");
				$("#grpPassword #outResult h4.alert-heading").html("Good news!");
				$("#grpPassword #outResult span.alert-message").html("Your password has been checked and deemed safe to use.");
				$("#grpPassword #outResult").reveal();
			}

			break;
	}

	$("#btnAnalyze").html("Analyze");
}