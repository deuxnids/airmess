<?php

namespace airmess\DispBundle\Classes;

use airmess\DispBundle\Classes;

class Window{	

	public $nx;
	private $transmitter;

	public function __construct(Transmission $transmitter ) {
		$this->transmitter = $transmitter;
    }

	public function write($message){
	//	print " Window:\tWrite message\n";
	//	$bbox = imagettfbbox(10, 0, $font, 'Powered by PHP ' . phpversion());
		putenv('GDFONTPATH=' . realpath('.'));;
		$font = 'arial.ttf';
		$box = imagettfbbox(5,0,$font , $message);
		$this->nx = $box[2]-$box[0];
	//  get width in pixel of the message ?
		$this->nx = 100;
		
		$im = imagecreate(96*2+$this->nx, 16);
		$bg = imagecolorallocate($im, 0, 0, 1);
		$textcolor = imagecolorallocate($im, 0, 0, 0);
		imagestring($im, 5, 96, 0,$message, $textcolor);
		$this->image = $im;
	}

	public function move($dx){
	//	print " Window:\tMove message\n";
		$im2 = imagecreatetruecolor(96, 16);
		imagecopyresampled(  $im2 , $this->image , 0 ,0 , $dx%(96*2+$this->nx) ,0 , 96, 16 , 96 , 16);
		$cmd = $this->getCmd($im2);
		$this->transmitter->sendCmds($cmd);
	}


	public function getCmd($subImage){
		$cmd  = array();

		$cmd[0] ="01dd";
		$cmd[1] ="02dd";
		$cmd[2] ="fedd";

		for ($i = 0; $i <96*16/3 ;$i++ ){
			$cmd[0] = $cmd[0].(imagecolorat($subImage,  $i%96,                    15-  (int) ($i/96)                   )*1000  + 1000	);
			$cmd[1] = $cmd[1].(imagecolorat($subImage,  ((96*16/3)%96+$i)%96  ,   15-  (int) ($i/96)  -  (int)(16/3)   )*1000  + 1000	); 
			$cmd[2] = $cmd[2].(imagecolorat($subImage,  ((2*96*16/3)%96+$i)%96 ,  15-  (int) ($i/96)  -  (int)(16/3*2) )*1000  + 1000	); 	
		}		

		$cmd[0] = hex2Bin($cmd[0]);
		$cmd[1] = hex2Bin($cmd[1]);
		$cmd[2] = hex2Bin($cmd[2]);

		return $cmd;
	}
}