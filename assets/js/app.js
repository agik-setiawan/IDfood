$(document).ready(function() {
	$(window).scroll(function(event) {
		var top=$(this).scrollTop();
		if(top>180){
			//$("#navbar").addClass('fixed-top');
		}else{
			//$("#navbar").removeClass('fixed-top')
		}
	});
});