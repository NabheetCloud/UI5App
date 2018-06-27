<?php
define("SITEROOT",		"http://".$_SERVER['HTTP_HOST']."/");
define("SITEJS",		"http://".$_SERVER['HTTP_HOST']."/js/");
define("SITECSS",		"http://".$_SERVER['HTTP_HOST']."/css/");
define("IMAGEDIR",		"http://".$_SERVER['HTTP_HOST']."/images/");

define("USR",'fitbike1');
define("DB",'fitbike');
define("HST",'localhost');
define("PWD",'bPTRwMLMKC8D');

try {
$con =  new PDO('mysql:host=localhost; dbname=i2986507_wp1', 'fitbike_user', 'fitbike1234$$');
 }
catch (PDOException $e) {
	error_log("Connection Issue Database." . $e->getMessage(),3,'signalsai.log');
	
}
catch (Exception $e) {
	error_log("Connection Issue  General Error." . $e->getMessage(),3,'signalsai.log');
	
}	
?>