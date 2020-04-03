$(function(){

	function runIt() {
		$( ".fish" ).each(function( index ) {
       		$(this).animate({top:'+=20'}, 1000);
       		$(this).animate({top:'-=20'}, 1000, runIt);
       	});
   		}
 	runIt();

 	function moveBubble() {
	 	$(".bubble").each(function(index) {
	 		$(this).animate({top: '-40px'}, 10000);
	 	})
 	}

 	function createBubble() {
 		let top = "top: " + Math.floor((Math.random() * 600) + 500) + "px;";
 		let left = "left: " + Math.floor((Math.random() * 600) + 20) + "px;";
 		$('<div class="bubble" style="' + top + left + '"></div>').appendTo('.treasure');
 	}
 	//createBubble();
 	setInterval(function(){
    	createBubble();
    	moveBubble(); 
	}, 2000);

 	$(".treasure").click(function() {
 		$(".open").css("visibility", "visible");
 		$(".open").css("opacity", "1");
 		$("#gold").css("box-shadow", "0 -20px 40px 20px #fdf4d2");
 		$("h1").css("visibility", "visible");
		$("h1").css("opacity", "1");
 	})

	$(".fish").mouseenter(function(){

		let direction = Math.floor(Math.random() * Math.floor(2));

		if (!($(this).hasClass("done"))) {
			$(this).stop(true);
		}

		if (direction === 0) { 
	  		$(this).animate({left: "-1000px"}, 3000);
	  	} else {
	  		$(this).animate({right: "-1000px"}, 3000);
	  	}
	  	$(this).addClass("done");

	  	/*
	  	
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
		}*/
	});


});