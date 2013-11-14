<?
require_once('window.php');

print "* * * *  LED DISPLAY APPLICATION * * * *\n";
print "* * * *       September 2013     * * * *\n";
print "* * * *      Denis Metrailler    * * * *\n\n";


session_start();
$transmitter 	    = new Transmission();
$window 			= new Window($transmitter);




$transmitter->autoset();
/*
while( $transmitter->autoset()==false){
	$transmitter->close();
	$transmitter->create();
}
*/

usleep( 100000);
$transmitter->sendPause();
usleep( 1000000);
$window->write("Good Morning :) ");

$i = 1; 

var_dump($_SESSION);
for ($i = 1; $i <= 1000; $i++) {
   
		print $i."\n";

		$window->move($i);
		usleep( 10000);

}


?>
