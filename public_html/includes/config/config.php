<?php
	function getConfig($type, $key) {
		$cfgJson = json_decode(file_get_contents(dirname($_SERVER["DOCUMENT_ROOT"])."/config.json"), true);
		$cfgVal = $cfgJson[$type][$key];
		
		return $cfgVal;
	}
?>