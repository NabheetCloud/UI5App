<?php
require('connectDatabase.php');
	//http://stackoverflow.com/questions/18382740/cors-not-working-php
	if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }


    
    $postdata = file_get_contents("php://input");
$request = json_decode($postdata);

	if (isset($postdata)) {
        date_default_timezone_set('Asia/Dili');
        $date = date('Y-m-d', time());
        if($request->Run <> ""){
            $sql = "Run = '".$date."'";
        }
        if($request->Junk <> ""){
            $sql = "Junk = '".$date."'";
        
        }
        if($request->Sugar <> ""){
            $sql = "Sugar = '".$date."'";
        
        }
         if($request->WakeUp <> ""){
            $sql = "WakeUp = '".$date."'";
        
        }
       if($request->Sleep <> ""){
            $sql = "Sleep = '".$date."'";
        
        }
       
        $sqlFinal = "update myHealth set " . $sql;
  
        try {
            $sel = $con->prepare($sqlFinal);
            $sel->execute();
        }
      
        catch (PDOException $e) {
            echo "DataBase Error: Fetch Plant Master Data Fail!." . $e->getMessage();
            //exit("DataBase Error: Fetch Plant Master Data Fail!." . $e->getMessage());
        }
        catch (Exception $e) {
            echo "General Error: Fetch Plant Master Data Fail!.<br>" . $e->getMessage();
        //exit("DataBase Error: Fetch Plant Master Data Fail!." . $e->getMessage());
        }
        
        
        
        }

?>