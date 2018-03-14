var timeout = null;

$("#frmPassword").keyup(function() {
	clearTimeout(timeout);
	var input = $("#frmPassword").val();

	$("#results").hide();
	$("#matches").hide();
	$("#loading").show();

	timeout = setTimeout(function () {
        if(input){
			var rows = $('#matches tbody tr');
			for(var i = 0; i < rows.length; i++) {
				$(rows[i]).remove();
			}

			validatePassword(input);
		} else {
			$("#loading").hide();
		}
    }, 500);
});