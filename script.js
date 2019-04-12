$(function(){
	console.log("burgerburger")
	$('.hamburger').on('click',function(){
		$('.menu').fadeIn();
	});

	$('.exit-responsive').on('click',function(){
	 	$('.menu').fadeOut();
	// 	console.log("successsss");
	});
});