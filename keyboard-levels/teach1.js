$(function(){

	$(document).keypress(function(e){
	  if (e.key == 'f' && $('#group1').hasClass("active")) {
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
	  		$("#group2").addClass("active")
	  		$("#group1").removeClass("active");
	  	}
	  }

	  else if (e.key == 'g' && $('#group2').hasClass("active")) {
	  	$(".flower2").each(function() {
	  		if (!($(this).hasClass("done"))) {
	  			$(this).css("visibility", "visible");
	  			$(this).css("opacity", "1");
	  			$(this).addClass("done");
	  			return false;
	  		} 
	  	});

	  	let done = true;
	  	$(".flower2").each(function() {
	  		if (!($(this).hasClass("done"))) {
	  			done = false;
	  		}
	  	});
	  	if (done) {
	  		$("#group3").css("opacity", 1);
	  		$("#group3").addClass("active")
	  		$("#group2").removeClass("active");
	  	}
	  }

	  else if (e.key == 'h' && $('#group3').hasClass("active")) {
	  	$(".flower3").each(function() {
	  		if (!($(this).hasClass("done"))) {
	  			$(this).css("visibility", "visible");
	  			$(this).css("opacity", "1");
	  			$(this).addClass("done");
	  			return false;
	  		} 
	  	});

	  	let done = true;
	  	$(".flower3").each(function() {
	  		if (!($(this).hasClass("done"))) {
	  			done = false;
	  		}
	  	});
	  	if (done) {
	  		$("#group4").css("opacity", 1);
	  		$("#group4").addClass("active")
	  		$("#group3").removeClass("active");
	  	}
	  }

	  else if (e.key == 'j' && $('#group4').hasClass("active")) {
	  	$(".flower4").each(function() {
	  		if (!($(this).hasClass("done"))) {
	  			$(this).css("visibility", "visible");
	  			$(this).css("opacity", "1");
	  			$(this).addClass("done");
	  			return false;
	  		} 
	  	});

	  	let done = true;
	  	$(".flower4").each(function() {
	  		if (!($(this).hasClass("done"))) {
	  			done = false;
	  		}
	  	});
	  	if (done) {
	  		$("#group3").removeClass("active");
	  		$("#sun").css("visibility", "visible");
			$("#sun").css("opacity", "1");
	  	}
	  }

	});

});