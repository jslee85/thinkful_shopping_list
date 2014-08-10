$(document).ready(function() {
	/*From stack exchange. Input value with enter key...I think?
	$('#addtext').keypress(function (e) {
		if (e.keyCode === 13) {
			var newitem = '<li class="shoppinglistitem"><span>';
			var newitem += '"$(this).val();"';
			var newitem += '</span>';
			var newitem += '<i class="deletebutton"></i>';
			var newitem += '</li>';
			$('.yourshoppinglist').prepend(newitem);
			$('#addtext').val('');
			return false;
		}
	});*/

	/*Toggle between complete and incomplete*/
	$('.yourshoppinglist').on('click', '.shoppinglistitem', function() {
		$(this).toggleClass('licompleteditem');
	});

	$('.yourcompletedlist').on('click', '.licompleteditem', function() {
		$(this).toggleClass('shoppinglistitem');
	});

	/*Allows user to delete items*/
	$('.licompleteditem').on('click', '.deletebutton', function() {
		$(this).closest('.licompleteditem').remove();
	});
});