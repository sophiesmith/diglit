$(function(){

	$(".center").click(function(){

	  	if ($(this).hasClass("flower1")) {
	  		$('.flower1').css('visibility', 'visible')
	  		$('.flower1').css('opacity', '1');
	  	} else if ($(this).hasClass("flower2")) {
	  		$('.flower2').css('visibility', 'visible')
	  		$('.flower2').css('opacity', '1');
	  	} else if ($(this).hasClass("flower3")) {
	  		$('.flower3').css('visibility', 'visible')
	  		$('.flower3').css('opacity', '1');
	  	}

	  	
	  	$(this).css('visibility', 'hidden')
	  	$(this).css('opacity', '0');

	  	$(this).addClass("done");
	  	let win = true;
	 	$( ".center" ).each(function( index ) {
		  if (!($(this).hasClass("done"))) {
		  	win = false;
		  }
		});
		if (win) {
			$("h1").css("visibility", "visible");
			$("h1").css("opacity", "1");
			$("#o3").css("visibility", "visible");
			$("#o3").css("opacity", "1");
		}
	});


});