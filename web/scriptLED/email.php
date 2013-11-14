<?

class Email{	

	private $hostname = '{imap.gmail.com:993/imap/ssl}INBOX';
	private $username = 'smsledparty@gmail.com';
	private $password = '3615codetf1' ;
	private $inbox;

	public function __construct( ) {
	
    }
    
	public function getNewEmails() {
		print " Email:\t\tRead incoming emails\n";
		$data = array();
		$this->inbox = imap_open($this->hostname,$this->username,$this->password) or die('Cannot connect to Gmail: ' . imap_last_error());
		$emails = imap_search($this->inbox,'UNSEEN');
		if($emails) {
		print " Email:\t\tnew emails found\n";
			rsort($emails);
			foreach($emails as $email_number) {
				$overview = imap_fetch_overview($this->inbox,$email_number,0);
				$message = imap_fetchbody($this->inbox,$email_number,1);
				array_push($data,$message);
				print " Email:\t\t\t".$message."\n";
			}
	} 
	imap_close($this->inbox);
	print " Email:\t\tDone reading incoming emails \n";
	return $data;	
	}




}
?>












