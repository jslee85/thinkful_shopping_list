$(document).ready(function() {


	$('input').keyup(function() {
    	var newitem = $(this).val();
    	$('span').text(newitem);
 	})
 	
 	.keyup();

	$('.input').keypress(function (e) {
		if (e.which == 13) {
    		$('form#login').submit();
    		return false;    //<---- Add this line
  		}
	});

 	$('.newitem').on('click', function() {

 	});

	$('.licompleteditem').mouseenter(function() {
		$('.deletebutton').hide();
		$('.deletebuttonred').show();
	})
	
	.mouseleave(function() {
		$('.deletebuttonred').hide();
		$('.deletebutton').show();
	});

	$('.deletebuttonred').on('click', function() {
		$(this).closest('.licompleteditem').remove();
	});
});



    getItem();