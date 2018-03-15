var timeout = null;

$("#inPassword").keyup(function() {
	clearTimeout(timeout);
	var input = $("#inPassword").val();

	// Show the loading content.
	$("#grpPassword #stats").hide();
	$("#grpPassword #matches").hide();
	$("#grpPassword #outLoading").show();

	timeout = setTimeout(function () {
        if(input){
        	// Reset the table body rows.
			var rows = $("#grpPassword #grpResult tbody tr");
			for(var i = 0; i < rows.length; i++) {
				$(rows[i]).remove();
			}

			// Parse out the password data.
			parsePassword(input);
		} else {
			$("#grpPassword #outLoading").hide();
		}
    }, 500);
});