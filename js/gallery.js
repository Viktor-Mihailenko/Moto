$ (document).ready(function () {



$('#gallerySwitch').click(function ()
	{
	$('#gallery').slideToggle(2000);
	}
	);


$('#small a').click(function (e){
	if ($('#big img').attr('src') != $(this).attr('href')){
			$('#big img').hide().attr('src',$(this).attr('href'));
			$('#big img').load(function ()
			{$(this).fadeIn(2000);});
	}
				e.preventDefault();

				});
$('#small a img').click(function ()
{	$('#small a img').fadeTo(100,1);
	$(this).fadeTo(1500, 0.5)});


	});