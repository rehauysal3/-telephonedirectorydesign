$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$("#list-form").fadeOut(100);
		$("#lastcalls-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$('#list-form-link').removeClass('active');
		$('#lastcalls-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
		
		
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$("#list-form").fadeOut(100);
		$("#lastcalls-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$('#list-form-link').removeClass('active');
		$('#lastcalls-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
		
		
	});
	$('#list-form-link').click(function(e) {
		$("#list-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$("#register-form").fadeOut(100);
		$("#lastcalls-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$('#register-form-link').removeClass('active');
		$('#lastcalls-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	
		
	});

	$('#lastcalls-form-link').click(function(e) {
		$("#lastcalls-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$("#list-form").fadeOut(100);
		$("#register-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$('#register-form-link').removeClass('active');
		$('#list-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
		
		
	});
});


