$(document).ready(function() {
	$('#addtext').keypress(function (e) {
		if (e.which === 13) {
			var newitem = '<li class="shoppinglistitem"><span>';
			newitem += $(this).val();
			newitem += '</span>';
			newitem += '<i class="deletebutton"></i>';
			newitem += '</li>';
			$('.yourshoppinglist').prepend(newitem);
			$('#addtext').val('');
			return false;
		}
	});

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