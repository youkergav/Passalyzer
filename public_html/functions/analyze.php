<?php
	// Files to include.
	require_once($_SERVER["DOCUMENT_ROOT"]."/src/password.class.php");

	// Create a new password object.
	if(isset($_POST["password"])) {
		// Create a new password object based on user input and get JSON string.
		$password = new Password($_POST["password"]);
		echo($password->toJSON());
		unset($password);
	}
?>