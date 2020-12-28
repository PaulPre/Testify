$('#username').on('keyup', function(){
	var username_old = $('#username').val().trim();
	var username_new = username_old.replace(/[^a-z0-9]/gi,'');
	username_new = username_new.substr(0,7);
	if(username_old !== username_new){
		$('#username').val(username_new);
	}
	$('#username').removeClass('errorField');
	$('.usernameIcon').removeClass('errorFieldFa');
	$('#usernameErr').hide();
});

$('#password').on('keyup', function(){
	var password_old = $('#password').val().trim();
	var password_new = password_old.replace(/[^a-z0-9]/gi,'');
	password_new = password_new.substr(0,10);
	if(password_old !== password_new){
		$('#password').val(password_new);
	}
	$('#password').removeClass('errorField');
	$('.passwordIcon').removeClass('errorFieldFa');
	$('#passwordErr').hide();
});

function submitForm(){
	var formValid= true;
	
	if(!$('#username').val().trim() ){
        $('#username').addClass('errorField');
		$('.usernameIcon').addClass('errorFieldFa');
        $('#usernameErr').css("display","block");
        formValid = false;
    } 
	if(!$('#password').val().trim() ){
        $('#password').addClass('errorField');
		$('.passwordIcon').addClass('errorFieldFa');
        $('#passwordErr').css("display","block");
        formValid = false;
    }
	
	if(formValid){
        alert("Success");
    }
}