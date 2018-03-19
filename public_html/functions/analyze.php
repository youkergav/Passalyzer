<?php
	// Files to include.
	require_once($_SERVER["DOCUMENT_ROOT"]."/src/password.class.php");

	// Create a new password object.
	if(isset($_GET["password"])) {
		// Create a new password object based on user input and get JSON string.
		$password = new Password($_GET["password"]);
		echo($password->toJSON());
		unset($password);
	}
?>