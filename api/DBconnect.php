<?php

require '/var/www/html/vendor/autoload.php';

class DBconnect {

    private $DB_CONNECTIONSTRING = "mongodb://my-mongo:27017";
    private  $db_connection;

	function __construct(){
        //Connecting to MongoDB
        try {
			//Establish database connection
            $this->db_connection = new MongoDB\Client( $this->DB_CONNECTIONSTRING );
		
        }catch (Exception $error) {
			echo $error->getMessage(); 
        }
    }

	public function getDatabase() {
		return $this->db_connection;
	}
}