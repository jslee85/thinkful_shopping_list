$(document).ready(function() {
	/*From stack exchange. Input value with enter key...I think?*/
	$('#addtext').keypress(function (e) {
		if (e.which == 13) {
    		var newitem = $(this).val();
    		$('.yourshoppinglist').prepend('<li class="shoppinglistitem">'+newitem+'</li>');
    		return false;    //<---- Add this line
  		}
	});

	/*Toggle between complete and incomplete*/
	$('.shoppinglistitem').on('click', function() {
		$(this).toggleClass('licompleteditem');
	});

	/*First attempt--did not work!*/
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