$('.grid .grid-item').hover(handlerIn, handlerOut);

function handlerIn(){
	$(this).addClass('active');
}

function handlerOut(){
	$(this).removeClass('active');
}