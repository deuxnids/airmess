<?

class Font{	

	private $backgroundColor ;
	private $color = '2000' ;
	private $ny;

	public function __construct($backgroundColor,$ny ) {
		$this->backgroundColor = $backgroundColor;
		$this->ny = $ny;
   }
	
	private function getGrid($vertex){
		$nx = max($vertex[1]);
		$grid = array();
		for ($i = 0; $i < $this->ny;$i++ ){
			$grid[$i]=array_fill(0,$nx,$this->backgroundColor);
		}
		for( $i = 0; $i < sizeof($vertex[0]); $i++ ) {
			$y = $vertex[0][$i];	
			$x = $vertex[1][$i];	
			$grid[$y][$x] = $this->color;			
		}
		return $grid;	
	}


	private function get_test(){
		//           y                					x
		$vertex = [[0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
		$grid = $this->getGrid($vertex);
		return $grid;
	}

	private function get_a(){
		//           y                					x
		$vertex = [[0,1,2,3,4,5,6,6,6,5,4,3,2,1,0,12], [0,0,0,0,0,0,1,2,3,4,4,4,4,4,4,4]];
		$grid = $this->getGrid($vertex);
		return $grid;
	}

	private function get_b(){
		//           y                					x
		$vertex = [ [ 0,1,2,3,4,5,6,6,6,6,5,4,3,3,3,3,3, 2,1,0,0,0 ], [ 0,0,0,0,0,0,0,1,2,3,4,4,4,3,2,1,0, 4,4,3,2,1 ]];
		$grid = $this->getGrid($vertex);
		return $grid;
	}
	private function get_c(){
		$vertex = [ [ 5,6,6,6,5,4,3,2,1,0,0,0,1  ],
						[ 4,3,2,1,0,0,0,0,0,1,2,3,4 ]];
		$grid = $this->getGrid($vertex);
		return $grid;
	}

	private function get_d(){
		$vertex = [ [ 0,1,2,3,4,5,6,6,6,6,5,4,3,2,1,0,0,0  ],
						[ 0,0,0,0,0,0,0,1,2,3,4,4,4,4,4,3,2,1 ]];
		$grid = $this->getGrid($vertex);
		return $grid;
	}

	private function get_e(){
		$vertex = [ [ 0,0,0,0,0,1,2,3,4,5,6,6,6,6,6,3,3,3 ],
						[ 4,3,2,1,0,0,0,0,0,0,0,1,2,3,4,1,2,3 ]];
		$grid = $this->getGrid($vertex);
		return $grid;
	}

	private function get_f(){
		$vertex = [ [ 0,1,2,3,4,5,6,6,6,6,6,3,3,3 ],
						[ 0,0,0,0,0,0,0,1,2,3,4,1,2,3 ]];
		$grid = $this->getGrid($vertex);
		return $grid;
	}
	private function get_g(){
		$vertex = [ [ 1,2,3,4,5,6,6,6,5,0,0,0,1,2,2],
						[ 0,0,0,0,0,1,2,3,4,1,2,3,4,4,3]];
		$grid = $this->getGrid($vertex);
		return $grid;
	}

	private function get_h(){
		$vertex = [ [ ],
						[ ]];
		$grid = $this->getGrid($vertex);
		return $grid;
	}

	public function get($char){
		if($char == 'a')
			return $this->get_test();
		if($char == 'b')
			return $this->get_b();

	}

}
?>
