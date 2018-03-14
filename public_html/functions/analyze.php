<?php
	// Create a new password object.
	if(isset($_POST["password"])) {
		require_once($_SERVER["DOCUMENT_ROOT"]."/src/password.class.php");
		$password = new Password($_POST["password"]);

		echo($password->toJSON());

		unset($password);
	}
?>