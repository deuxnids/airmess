<?php

namespace airmess\DispBundle\Classes;

use airmess\DispBundle\Entity\Sms;

class Led{

	
    public function __construct()
    {

    }


	public function run($doctrine,$session) {
		$transmitter 	    = new Transmission();
		$window 			= new Window($transmitter);

		$transmitter->autoset();	
		usleep( 1000000);  	// wait 1 sec
		$transmitter->sendEnd(); // wait 0.094367  
		usleep( 1000000); // 1 sec = 1000000
		
		//$transmitter->sendPause();  // wait 4 sec
		$transmitter->sendPause();  // wait 4 sec
		
		usleep( 1000000); // 1 sec = 1000000
		$window->write("Good Morning :) ");
		 
		$i = 1;
		$email = new Email($doctrine);
		 
		 
		$repository = $doctrine
			->getManager()
			->getRepository('airmessDispBundle:Sms');
		//$email->getNewEmails();
		$messages = $repository->findAll();
		$time = time();
		
		$wait = 30000;
		 
		for ($j = 1; $j <= 2; $j++) {
			
				
			//$transmitter->sendPause();
			//usleep( 1000000);
			print "loop ";
			foreach ($messages as $message) {
						
				$window->write($message->getMessage()." ".$j);
				
				for ($i = 1; $i <= 96*2+$window->nx; $i++) {
					$time2 = time();
					if($time2 >= $time + 20) // changer ca
					{
						$time = $time2;
						$transmitter->sendPause();
						usleep( 1000);
						$transmitter->sendPause();
						//$transmitter->sendPause(); // every 20 sec
						usleep( 1000);						
					}
					$window->move($i);
					usleep( $wait);
				}	
			}			 
		}
		return true;
	}




}
?>