
$(document).ready(function() {

	
	$( "#status_led" ).click(function() {
		
		console.log('script status...');
		
		jQuery.ajax({
			  url: 'scriptStatus', 
			  success: function(data, textStatus, jqXHR) {
				console.log(data);
			  },
			  error: function(jqXHR, textStatus, errorThrown) {
					console.log(textSatus);
			  }
			});
		
	});   
	
	$( "#run_led" ).click(function() {
		console.log('run led script...');
		
		jQuery.ajax({
			  url: 'scriptLED', 
			  success: function(data, textStatus, jqXHR) {
				console.log('success led script');
			  },
			  error: function(jqXHR, textStatus, errorThrown) {
					console.log(textSatus);
			  }
			});
		

		
	});     
});

