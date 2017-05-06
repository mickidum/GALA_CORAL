jQuery(document).ready(function($) {
	$('.terms-conditions').on('click','.terms a', function(event) {
		event.preventDefault();
		$('.terms-conditions .hidden-text').toggleClass('animate fadeInDown');
	});

	// FORM
	var error = true;

	// VALIDATION FORM ON FOCUS LEAVE
	$('#myform').on('blur','input', function(event) {
    	event.preventDefault();
    	var a = $('#myform').serialize();
      $.post('api/api.php', a, function(data) {
				var obj = JSON.parse(data);
				if (obj.error) {
					var strError = '<span style="color:red;font-size:10px;">' + obj.message +'</span>';
					$('#result').html(strError);
					return error = true;
				}
				else {
					var strValid = '<span style="color:green;font-size:10px;">' + obj.message +'</span>';
					$('#result').html(strValid);
					return error = false;
				}
      });
		});

// REDIRECT TO REGISTRATION
		$('#myform').on('submit', function(event) {
			event.preventDefault();
			var inputVal = $('#myform input').val();
			if (!inputVal || error) {
				console.log('no value');
				return;
			}
			setTimeout(function(){
				$('#myform').find("input[type=text]").val("");
				window.location = 'https://www.coral.co.uk/register?email=' + inputVal;
			},1000);

		});


});
