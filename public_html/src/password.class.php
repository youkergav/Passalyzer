<?php
	class Password {
		// Constructor for password object.
		public function __construct($input) {
			$this->password = $input;
			$this->lenPass= strlen($input);
			$this->lenAlpha = strLen(preg_replace("/[0-9]+/", "", $input));
			$this->lenNumeric = strLen(preg_replace("/[^0-9]+/", "", $input));
			$this->lenSpecial = strLen(preg_replace("/[A-Za-z0-9]+/", "", $input));
			$this->isBreached();
		}

		// Method to detect if password is in breach.
		private function isBreached() {
			// Create a curl request.
			$curl = curl_init();
			curl_setopt($curl, CURLOPT_URL, 'https://api.pwnedpasswords.com/pwnedpassword/'.$this->password);
			curl_setopt($curl, CURLOPT_HEADER, false);
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
			curl_exec($curl);

			// Get status code of request.
			$status = curl_getinfo($curl)["http_code"];
			curl_close($curl);

			// Append to breached property.
			if($status == 200) {
				$this->breached = true;
			} else {
				$this->breached = false;
			}
		}

		public function toJSON() {
			return json_encode($this);
		}
	}
?>