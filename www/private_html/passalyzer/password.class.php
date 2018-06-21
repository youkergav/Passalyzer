<?php
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/MatchInterface.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/Match.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/DigitMatch.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/Bruteforce.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/YearMatch.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/SpatialMatch.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/SequenceMatch.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/RepeatMatch.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/DictionaryMatch.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/L33tMatch.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matchers/DateMatch.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Matcher.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Searcher.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/ScorerInterface.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Scorer.php");
	require($_SERVER["DOCUMENT_ROOT"]."/passalyzer/Zxcvbn.php");

	use ZxcvbnPhp\Zxcvbn;

	class Password {
		// Private variables.
		private $password;

		// Constructor for password object.
		public function __construct($input) {
			// Build object attributes.
			$password = $input;

			$this->lenPass= strlen($input);
			$this->lenAlpha = strLen(preg_replace("/[0-9]+/", "", $input));
			$this->lenNumeric = strLen(preg_replace("/[^0-9]+/", "", $input));
			$this->lenSpecial = strLen(preg_replace("/[A-Za-z0-9]+/", "", $input));
			$this->isBreached($password);

			// Create zxcvbn object for more info. *REMOVE LATER*
			$zxcvbn = new Zxcvbn();
			$strength = $zxcvbn->passwordStrength($input);

			$this->entropy = $strength["entropy"];
			$this->timeCrack = $strength["crack_time"];
			$this->timeCalc = $strength["calc_time"];
			$this->score = $strength["score"];

			$matches = array();
			foreach($strength["match_sequence"] as $item) {
				$piece = array(
					"token"=>$item->token,
					"pattern"=>$item->pattern,
					"entropy"=>$item->entropy,
					"matchedWord"=>$item->matchedWord
				);

				array_push($matches, $piece);
			}
			$this->matches = $matches;

			unset($zxcvbn);
		}

		// Method to detect if password is in breach.
		private function isBreached($password) {
			// Create a curl request.
			$curl = curl_init();
			curl_setopt($curl, CURLOPT_URL, 'https://api.pwnedpasswords.com/pwnedpassword/'.$password);
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

		// Method to convert object to JSON.
		public function toJSON() {
			return json_encode($this, JSON_PRETTY_PRINT);
		}
	}
?>