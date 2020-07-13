$(function(){
	function runIt() {
		$( ".cloud" ).each(function( index ) {
			let direction = Math.floor(Math.random() * Math.floor(4));
			if (direction === 0) {
				$(this).animate({top:'+=75'}, 300);
       			$(this).animate({top:'-=75'}, 300, runIt);
			} else if (direction === 1) {
				$(this).animate({left:'+=75'}, 300);
       			$(this).animate({left:'-=75'}, 300, runIt);
			} else if (direction === 2) {
				$(this).animate({bottom:'+=75'}, 300);
       			$(this).animate({bottom:'-=75'}, 300, runIt);
			} else {
				$(this).animate({right:'+=75'}, 300);
       			$(this).animate({right:'-=75'}, 300, runIt);
			}
       		
       	});
   	}
 	runIt();

	$(".cloud").mouseenter(function(){
		if (!($(this).hasClass("done"))) {
			$(this).stop(true);
		}

	  	$(this).animate({left: "-300px"}, 1000);
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
	});

});