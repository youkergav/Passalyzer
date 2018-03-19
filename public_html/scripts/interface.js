jQuery.fn.extend({
	reveal: function() {
		this.hide();
		this.removeClass("d-none");
		this.slideDown();
	}
});

function reset() {
	// Show the loading content.
	$("#grpPassword #outDanger").slideUp();
	$("#grpPassword #outWarning").slideUp();
	$("#grpPassword #outSuccess").slideUp();
	$("#grpPassword #outError").slideUp();
	$("#inPassword").blur();

	// Reset the table body rows.
	var rows = $("#grpPassword #grpResult tbody tr");
	for(var i = 0; i < rows.length; i++) {
		$(rows[i]).remove();
	}
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

function showPassword(score) {
	switch(score) {
		case 0:
		case 1:
			$("#grpPassword #outDanger").reveal();
			break;
		case 2:
		case 3:
			$("#grpPassword #outWarning").reveal();
			break;
		case 4:
			$("#grpPassword #outSuccess").reveal();
			break;
	}

	$("#btnAnalyze").html("Analyze");
}