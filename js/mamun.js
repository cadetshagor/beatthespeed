$(document).ready(function(){
	
	/*player selection page*/
	$('.adddiv').click(function () {
		var divname= this.name;
		$('.adddiv').removeClass("active_adddiv");
		$(this).addClass("active_adddiv");
		$("#"+divname).show().siblings().hide();
	
	});
	
	/* predictions page*/
	$('.pre_nav').click(function () {
			var getcoin= this.name;
			$('.pre_nav').removeClass("ac_pre");
			$(this).addClass("ac_pre");
			$("#"+getcoin).show().siblings().hide();
		
		});
	/* end of predictions page*/
	
	$('.button3').click(function () {
		var btname= this.name;
		$("#"+btname).removeClass("deactivate");
		$("#"+btname).addClass("active_adddiv");
		
	
	});
	
	$('.button2').click(function () {
		$('.button2').removeClass("active_adddiv");
		$(this).addClass("deactivate");
		
	});
	
	$(".inline").colorbox({inline:true, width:"50%"});
	/* end of player selection page*/
	
	/* player_15 page*/
	
	$('.button2').click(function () {
		$('.button4').fadeIn();
		$(this).css("display","none");
		
	});
	$('.button4').click(function () {
		$('.button2').fadeIn();
		$(this).css("display","none");
		
	});
	/* end of player_15 page*/
	
	
});