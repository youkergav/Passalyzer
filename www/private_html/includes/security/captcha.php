<?php
	function verifyCaptcha($secret, $response) {
        $fields = array(
            'secret' => $secret,
            'response' => $response
        );

 		$params = "";
        foreach($fields as $key => $value) {
        	$params .= $key."=".$value."&";
        }
        $params = rtrim($params, "&");

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $result = json_decode(curl_exec($ch), true);
        curl_close($ch);

        if($result["success"] == "1") {
        	return true;
        } else {
        	return false;
        }
    }
?>