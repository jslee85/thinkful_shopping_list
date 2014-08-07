$(document).ready(function() {

	/*$('input').keyup(function() {
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

 	});*/

	/*Toggle between complete and incomplete*/
	$('.shoppinglistitem').on('click', function() {
		$(this).toggleClass('licompleteditem');
	});

	/*$('.yourshoppinglist li').click(function() {
		$('.yourshoppinglist li').removeClass('shoppinglistitem').addClass('licompleteditem');
		$(this).toggleClass('shoppinglistitem licompleteditem')
	});*/

	/*Hover state for delete button*/
	$('.deletebutton').mouseenter(function() {
		$(this).hide();
		$('.deletebuttonred').show();
	});
	
	$('.deletebuttonred').mouseleave(function() {
		$(this).hide();
		$('.deletebutton').show();
	});

	/*Allows user to delete items*/
	$('.deletebuttonred').on('click', function() {
		$(this).closest('.licompleteditem').remove();
	});
});