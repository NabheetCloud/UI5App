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

        $sqlFinal = "SELECT DATEDIFF( CURDATE( ) , DATE_FORMAT( Run,  '%Y-%m-%d' ) )+1 AS Run, DATEDIFF( CURDATE( ) , DATE_FORMAT( Junk,  '%Y-%m-%d' ) )+1 AS Junk, DATEDIFF( CURDATE( ) , DATE_FORMAT( Sleep,  '%Y-%m-%d' ) )+1 AS Sleep, DATEDIFF( CURDATE( ) , DATE_FORMAT( Sugar, '%Y-%m-%d' ) )+1 AS Sugar, DATEDIFF( CURDATE( ) , DATE_FORMAT( WakeUp,  '%Y-%m-%d' ) )+1 AS WakeUp
            FROM myHealth";
        try {
            $sel = $con->prepare($sqlFinal);
            $sel->execute();
            $row = $sel->fetchAll();
        }
      
        catch (PDOException $e) {
            echo "DataBase Error: Fetch Plant Master Data Fail!." . $e->getMessage();
            //exit("DataBase Error: Fetch Plant Master Data Fail!." . $e->getMessage());
        }
        catch (Exception $e) {
            echo "General Error: Fetch Plant Master Data Fail!.<br>" . $e->getMessage();
        //exit("DataBase Error: Fetch Plant Master Data Fail!." . $e->getMessage());
        }
        echo json_encode(array("data"=>
                       $row
                    )) ;
        
        
        
    

?>