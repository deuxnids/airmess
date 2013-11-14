<?

class Transmission{	

	private $ip ;
	private $italk ;
	private $port ;
	private $sock;

	public function __construct( ) {
		$this->ip = '192.168.1.201';
		$this->italk = "12345";
		$this->port  = "54321";
		$this->router  = "192.168.1.255";

		$this->create();
		print " Transmitter:\t\tsocket created\n";
    }
   

	public function create() {
	error_reporting(~E_WARNING);
		if(!($this->sock = socket_create(AF_INET, SOCK_DGRAM, 0)))
		{
			 $errorcode = socket_last_error();
			 $errormsg = socket_strerror($errorcode);
			  
			 die("Couldn't create socket: [$errorcode] $errormsg \n");
		}
	}
 
	public function sendPause() {
		$cmd = hex2bin('24440003');
		$this->sendCmd($cmd,$this->italk);
		print " Transmitter:\t\tsend Pause\n";
		usleep(10000);	
	}


	public function autoset() {
		print " Transmitter:\t\tautoset\n";
		$cmd = hex2bin('2441');
		$value = $this->sendCmdWithReply($cmd,$this->italk, $this->router);
		return $value;
	}

	public function sendEnd() {
		$cmd = hex2bin('00dd');
		$port = 12345; 
		$this->sendCmd($cmd,$port);
		print " Transmitter:\t\tsend End\n";
	}


	public function sendCmd($cmd,$port = 54321 ) {

		 if( ! socket_sendto($this->sock, $cmd , strlen($cmd) , 0 , $this->ip , $port))
		 {
		     $errorcode = socket_last_error();
		     $errormsg = socket_strerror($errorcode);
		  //   die("Could not send data: [$errorcode] $errormsg \n");
		 }
		      
	}

	public function sendCmds($cmds) {

		foreach($cmds as $cmd){
			$this->sendCmd($cmd);
			usleep( 10000);
		}  
	}


	public function close( ) {
		socket_close ( $this->sock);
	}


	public function sendCmdWithReply($cmd,$port = 54321, $ip ) {

		if($ip == $this->router){
 		// setting a broadcast option to socket: 
		socket_set_option($this->sock, SOL_SOCKET, SO_BROADCAST, 1);
		}	
		socket_set_option($this->sock, SOL_SOCKET, SO_RCVTIMEO , array("sec"=>10,  "usec"=>0  ));
		socket_set_option($this->sock, SOL_SOCKET, SO_KEEPALIVE, 1);

		 //Send the message to the server
		 if( ! socket_sendto($this->sock, $cmd , strlen($cmd) , 0 , $ip , $port))
		 {
		     $errorcode = socket_last_error();
		     $errormsg = socket_strerror($errorcode);
		      
		     die("Could not send data: [$errorcode] $errormsg \n");
		 }
		 //Now receive reply from server and print it

			 if(socket_recv ( $this->sock , $reply , 2045 , MSG_WAITALL ) === FALSE)
			 {
				  $errorcode = socket_last_error();
				  $errormsg = socket_strerror($errorcode);
				   


					//return false;
				  die("Could not receive data: [$errorcode] $errormsg \n");

			 }

		 else{
		 $reply = bin2hex($reply);
		 print " Transmitter:\t\treply message ".$reply."\n";    
	return true;
} 
	
	}


}
?>


