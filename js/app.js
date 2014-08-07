$(document).ready(function() {
	/*From stack exchange. Input value with enter key...I think?*/
	$('#addtext').keypress(function (e) {
		if (e.keyCode === 13) {
    		var newitem = '<li class="shoppinglistitem">'
    		var newitem += $(this).val();
    		var newitem += '<span>'    		
    		var newitem += '<i class="deletebutton"></i>'
    		var newitem += '</li>'
       		$('.yourshoppinglist').prepend(+newitem+);
    		return false;    //<---- Add this line
  		}
	});

	/*Toggle between complete and incomplete*/
	$('.shoppinglistitem').on('click', function() {
		$(this).toggleClass('licompleteditem');
	});

	/*Allows user to delete items*/
	$('.licompleteditem .deletebutton').on('click', function() {
		$(this).closest('.licompleteditem').remove();
	});
});