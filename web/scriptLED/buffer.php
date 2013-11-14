<?

class Buffer{	

	public $nx ;
	public $ny ;
	public  $grid = array();
	private $font;
	private $backgroundColor ='0000'; 

	private function initializeGrid(){
		for ($i = 0; $i < $this->ny;$i++ ){
			$this->grid[$i]=array_fill(0,$this->nx,$this->backgroundColor);
		}
	}

	public function __construct( ) {
		$this->cursor = 0;
		$this->nx = 96;
		$this->ny = 16;
		$this->font = new Font($this->backgroundColor,$this->ny);
		$this->initializeGrid();
    }

	public function write($message){
		print " Buffer:\tWrite message '".$message."'\n";
		// Nouvelle image 100*30
		$im = imagecreate(96, 16);
		// Fond blanc et texte bleu
		$bg = imagecolorallocate($im, 255, 255, 255);
		$textcolor = imagecolorallocate($im, 0, 0, 255);
		// Ajout de la phrase en haut à gauche
		imagestring($im, 5, 0, 0,$message, $textcolor);
		//imagepng($im);
		//print imagecolorat($im, 15, 15);
		$this->grid = $im;
		$im2 = imagecreatetruecolor(40, 16);

imagecopyresampled (  $im2 , $im , 0 ,0 , 0 ,0 , 96, 16 , 40 , 16);
imagepng($im2,"test.png");
	}

	public function draw($ystart,$yend,$xstart,$xend){
		for ($i = $ystart; $i < $yend;$i++ ){
			for($j = $xstart; $j < $xend;$j++ ){
				$this->grid[$i][$j]='2000';
			}
		}

	}
   

}
?>
