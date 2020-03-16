$(function(){

	$(".rainbow").mouseenter(function(){
	  	let color;
	  	if ($(this).is($("#c1"))) {
	  		color = "#EF7474";
	  	} else if($(this).is($("#c2"))) {
	  		color = "#FAB27F";
	  	} else if($(this).is($("#c3"))) {
	  		color = "#FFF599";
	  	} else if($(this).is($("#c4"))) {
	  		color = "#9CE596";
	  	} else if($(this).is($("#c5"))) {
	  		color = "#8CACEB";
	  	} else if($(this).is($("#c6"))) {
	  		color = "#B28EFE";
	  	}

	  	$(this).css('background-color', color);
	  	$(this).addClass("done");
	  	let win = true;

	 	$( ".rainbow" ).each(function( index ) {
		  if (!($(this).hasClass("done"))) {
		  	win = false;
		  }
		});
		if (win) {
			$("#myCanvas").css("background-color", "#A9EAFF");
			$("#c7").css("background-color", "#A9EAFF");
			$("h1").css("visibility", "visible");
			$("h1").css("opacity", "1");
			$("#o3").css("visibility", "visible");
			$(".sun").css("opacity", "1");
		}
	});


});