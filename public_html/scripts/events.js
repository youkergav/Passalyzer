$("#frmSubmit").click(function() {
	var input = $("#frmPassword").val();
	validatePassword(input);
});

$("#frmPassword").keypress(function(k) {
	if(k.which == 13) {
		var input = $("#frmPassword").val();
		validatePassword(input);

		return false;
	}
});