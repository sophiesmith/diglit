$(function(){

	function runIt() {
		$( ".fish" ).each(function( index ) {
       		$(this).animate({top:'+=20'}, 1000);
       		$(this).animate({top:'-=20'}, 1000, runIt);
       	});
   		}
 	runIt();

 	$(".treasure").click(function() {
 		$(".open").css("visibility", "visible");
 		$(".open").css("opacity", "1");
 	})

	/*$(".fish").mouseenter(function(){
	  	$(this).animate({left: "-300px"}, 2000);
	  	$(this).addClass("done");
	  	let win = true;
	 	$( ".fish" ).each(function( index ) {
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