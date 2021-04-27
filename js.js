$('.title').click(function(){
	$('.title').fadeOut('fast')
	setTimeout(function(){
		$('.content').fadeIn('slow')
	}, 500)
})

$('.back').click(function(){
	$('.content').fadeOut('fast')
	setTimeout(function(){
		$('.title').fadeIn('slow')
	}, 500)
})

$(document).keyup(function(e){
    if (e.keyCode == 27) { 
        $('.content').fadeOut('slow')
    setTimeout(function(){
        $('.title').fadeIn('slow')
	}, 500)
    }
});