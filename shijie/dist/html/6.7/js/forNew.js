$('nav .li1').each(function(index, value){
	$('nav .li1').eq(index).on('click', function(){
		$('nav .li1').each(function(){
			$(this).find('a').css('color', 'black')
		})
		$(this).find('a').eq(0).css('color', 'green');

	})
})