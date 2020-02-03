$(function(){

	$(".star").click(function(){
	  	$(this).css("border-bottom", ".7em  solid #F9E74D");
	  	$(this).css("transform", "rotate(10deg)");
	  	$(this).delay(500).queue(function (next) { 
	  		$(this).css("transform", "rotate(0deg)");
  			next(); 
  		});
	  	$(this).toggleClass('lit');
	  	$(this).addClass("done");
	  	let win = true;
	 	$( ".star" ).each(function( index ) {
		  if (!($(this).hasClass("done"))) {
		  	win = false;
		  }
		});
		if (win) {
			$("#moon").css("box-shadow", "0 0 60px 10px #fff")
			$("h1").css("visibility", "visible");
			$("h1").css("opacity", "1");
			$("#o3").css("visibility", "visible");
			$("#o3").css("opacity", "1");
		}
	});


});