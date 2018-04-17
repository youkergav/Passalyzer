<?php
	// Set the content type.
	header('Content-Type: application/json');

	// Create a new password object.
	if(isset($_GET["password"])) {
		require_once($_SERVER["DOCUMENT_ROOT"]."/passalyzer/password.class.php");
		
		// Create a new password object based on user input and get JSON string.
		$password = new Password($_GET["password"]);
		echo($password->toJSON());
		unset($password);
	}
?>