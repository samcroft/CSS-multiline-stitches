$(function(){	
	var input = $('h1');
	var text = input.html().split(' ');
	var output;
	
	for (var i = 1, len = text.length; i < len; i++) {
		if (i %4 === 0 && i < len - 1) {
			text[i] += '<br>';
		}
	}
	
	output = text.join(' ');
	
	var input = output.split('<br>');
	output = '';
	
	$.each(input, function(i,o){
		output += '<span class=\"s-'+i+'\">'+o+'</span>';
		if (i < (input.length - 1)) {
			output += '<br>';
		}
	});
	
	$('h1').html(output);
	
	$('h1').find('span').each(function(i,o){
		el = $(this);
		
		if (el.width() > $('span.s-'+(i-1)).width()) {
			el.addClass('longer-than-previous');
		} else {
			el.addClass('shorter-than-previous')
		}
		
		if (el.width() > $('span.s-'+(i+1)).width()) {
			el.addClass('longer-than-next');
		} else {
			el.addClass('shorter-than-next');
		}
	});
});