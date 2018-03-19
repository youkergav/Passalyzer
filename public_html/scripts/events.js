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

$("#btnVisibility").click(function() {
	if($("#inPassword").prop("type") == "password") {
		$("#inPassword").prop("type", "text");
		$("#icnVisibility").removeClass("fa-eye-slash");
		$("#icnVisibility").addClass("fa-eye");
	} else if($("#inPassword").prop("type") == "text") {
		$("#inPassword").prop("type", "password");
		$("#icnVisibility").removeClass("fa-eye");
		$("#icnVisibility").addClass("fa-eye-slash");
	}
});

$("button.close").click(function() {
	reset();
});