$(function(){

	$(document).keypress(function(e){
	  if (e.key == 'f') {
	  	$(".flower1").each(function() {
	  		if (!($(this).hasClass("done"))) {
	  			$(this).css("visibility", "visible");
	  			$(this).css("opacity", "1");
	  			$(this).addClass("done");
	  			return false;
	  		} 
	  	});

	  	let done = true;

	  	$(".flower1").each(function() {
	  		if (!($(this).hasClass("done"))) {
	  			done = false;
	  		}
	  	});
	  	if (done) {
	  		$("#group2").css("opacity", 1);
	  	}
	  }

	  else if (e.key == 'g') {
	  	$(".flower2").each(function() {
	  		if (!($(this).hasClass("done"))) {
	  			$(this).css("visibility", "visible");
	  			$(this).css("opacity", "1");
	  			$(this).addClass("done");
	  			return false;
	  		} 
	  	});
	  }

	});

	/*$(".cloud").mouseenter(function(){
	  	$(this).animate({left: "-300px"}, 2000);
	  	$(this).addClass("done");
	  	let win = true;
	 	$( ".cloud" ).each(function( index ) {
		  if (!($(this).hasClass("done"))) {
		  	win = false;
		  }
		});
		if (win) {
			$("#myCanvas").css("background-color", "#A9EAFF");
			$("h1").css("visibility", "visible");
			$("h1").css("opacity", "1");
			$("#o3").css("visibility", "visible");
			$("#o3").css("opacity", "1");
		}
	});*/


});