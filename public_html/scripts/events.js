var timeout = null;

$("#frmPassword").keyup(function() {
	clearTimeout(timeout);
	var input = $("#frmPassword").val();

	$("#results").hide();
	$("#loading").show();

	timeout = setTimeout(function () {
        if(input){
			validatePassword(input);
		} else {
			$("#loading").hide();
		}
    }, 500);
});