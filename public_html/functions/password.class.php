<?php
	class Password {
		function __construct($input) {
			$this->clear = $input;
			$this->sha1 = sha1($input);
		}
	}
?>