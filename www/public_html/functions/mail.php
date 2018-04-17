<?php	
	if($_POST) {
		require_once($_SERVER['DOCUMENT_ROOT']."/includes/config/config.php");
		require_once($_SERVER['DOCUMENT_ROOT']."/includes/security/captcha.php");

		foreach($_POST as $key => $value) {
			$value = str_replace(array("\r", "\n", "%0a", "%0d"), "", stripslashes($value)); 
		}

		$capSecret = getConfig("keys", "captcha_contact");
		$capResponse = $_POST["g-recaptcha-response"];
		if(verifyCaptcha($capSecret, $capResponse)) {
			$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
			$completeForm = true;

			if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
				if(isset($_POST["name"])){ $mailName = filter_var($_POST["name"], FILTER_SANITIZE_STRING); } else { $completeForm = false; }
				if(isset($_POST["email"])){ $mailAddress = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL); } else { $completeForm = false; }
				if(isset($_POST["subject"])){ $mailSubject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING); } else { $completeForm = false; }
				if(isset($_POST["message"])){ $mailMessage = filter_var($_POST["message"], FILTER_SANITIZE_STRING); } else { $completeForm = false; }
				$mailDate = date("l, F j, Y", time());
				$mailTime = date("g:i A", time());

				if($completeForm) {
					$mailTo = getConfig("emails", "contact");
					$mailMessage = "
						<html>
							<head>
								<title>HTML email</title>

								<style>body{font-family:Arial,Helvetica,sans-serif}table{font-size:14px}td{padding:5px 0}td:first-child{padding-right:5px}</style>
							</head>

							<body>
								<h4>A user has messaged you.</h4>

								<table>
									<tr>
										<td><b>Name</b></td>
										<td>".$mailName."</td>
									</tr>
									<tr>
										<td><b>Email</b></td>
										<td><a href="mailto:".$mailAddress."?subject=RE: ".$mailSubject."">".$mailAddress."</a></td>
									</tr>
									<tr>
										<td><b>Subject</b></td>
										<td>".$mailSubject."</td>
									</tr>
									<tr>
										<td valign="top"><b>Message</b></td>
										<td>
											<p>".$mailMessage."</p>
										</td>
									</tr>
									<tr>
										<td><b>Date</b></td>
										<td>".$mailDate."</td>
									</tr>
									<tr>
										<td><b>Time</b></td>
										<td>".$mailTime."</td>
									</tr>
								</table>
							</body>
						</html>
					";

					$mailHeaders  = "MIME-Version: 1.0".PHP_EOL;
					$mailHeaders .= "Content-Type: text/html; charset=ISO-8859-1".PHP_EOL;
					$mailHeaders .= "From: Passalyzer Contact: ".$mailName." <contact@passalyzer.com>".PHP_EOL;
					$mailHeaders .= "X-Mailer: PHP/".phpversion();

					if(mail($mailTo, $mailSubject, $mailMessage, $mailHeaders)) {
						header("Location: /contact?response=success");
						die();
					} else {
						header("Location: /contact?response=failure");
						die();
					}
				}
			}
		}
	}

	header("Location: /contact");
?></contact@passalyzer.com>