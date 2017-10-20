$(function (){

	var url = '';

	var options = {

		twitter: {
		},

		facebook : true,
		googlePlus : true
	};

	$('.socialShare').shareButtons(url, options);

});
