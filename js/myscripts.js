$ (document).ready(function() {



$('#div_for_img img').click(function () {
	var moto = $(this).clone();
	$('#forresults').append(moto);
});

});//Конец  ready

