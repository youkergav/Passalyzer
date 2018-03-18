$("#btnAnalyze").click(function() {
	var input = $("#inPassword").val();

	if(input) {
		// Parse out the password data.
		showLoading();
		parsePassword(input);
	}
});

$("#inPassword").keypress(function(e) {
	if (e.which == 13) {
    	var input = $("#inPassword").val();

		if(input) {
			// Parse out the password data.
			showLoading();
			parsePassword(input);
		}
  	}
});

$("button.close").click(function() {
	reset();
})