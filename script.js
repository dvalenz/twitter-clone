$(document).ready(function(){

	$('.tweet-content').click(function() {
        $('#initiallyHiddenBlock').show();
        $('textarea').animate({height:'5em'});
        
    });

	var left = 140
		$('.counter').text( '' + left);
		$('#message1').keyup(function(){
		left =140 - $(this).val().length;
		if(left <=11){
			$('.counter').addClass("overlimit");
		}
		if(left >= 11){
		$('.counter').removeClass("overlimit");
		}

		$('.counter').text('' + left);

			});

	$('.tweet-content').keyup(function(){
		
		/*This is for the counter*/
	


		/*this is the button enabled*/

		$('.tweet-controls button').addClass("enabled");
		if(left<0){
			$('.tweet-controls button').removeClass("enabled");
		}
	$('button').click(function(){
		console.log("Clickes")
			});

	});
	$('span.action-retweet').click(function(){
		console.log("hello")
	$('#myModal').modal(backdrop)
	
	});

});
