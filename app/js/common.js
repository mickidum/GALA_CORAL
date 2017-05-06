jQuery(document).ready(function($) {
	$('.terms-conditions').on('click','.terms a', function(event) {
		event.preventDefault();
		$('.terms-conditions .hidden-text').toggleClass('animate fadeInDown');
	});

	// FORM
	$('#myform').on('blur','input', function(event) {
    	event.preventDefault();
    	var a = $('#myform').serialize();
      $.post('api/api.php', a, function(data) {
				var obj = JSON.parse(data);
				if (obj.error) {
					var strError = '<span style="color:red;font-size:10px;">' + obj.message +'</span>';
					$('#result').html(strError);
					return;
				}
				else {
					var strValid = '<span style="color:green;font-size:10px;">' + obj.message +'</span>';
					$('#result').html(strValid);
				}
      });
		});

		$('#myform').on('submit', function(event) {
			event.preventDefault();
			if (!$('#myform input').val()) {
				console.log('no value');
				return;
			}
		});


});
