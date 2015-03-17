$(document).ready(function(){
	$('*[data-ag]').on('click', function(e) {
		e.preventDefault();
		var modalLocation = $(this).attr('data-ag');
		var modal = $('#'+modalLocation);
		modal.trigger('ag:open');
	});

	$('.agmodal').bind('ag:open',function(){
		$('<div class="agmodal-bg"></div>').insertAfter(this);
		$(this).addClass('ag-visible');
		$('.agmodal-bg').fadeIn(400);

		var scrolled = $(window).scrollTop()+50;
		$('.agmodal').css('top', scrolled);

		$(this).bind('ag:close', function () {
			$(this).removeClass('ag-visible');
			$('.agmodal-bg').fadeOut(400);
			setTimeout(function() {$('.agmodal-bg').remove();},400);

			if($('.agmodal video').length){
				$('.agmodal video').get(0).pause();
			}
		})

		$('.close-agmodal,.agmodal-bg').click(function(){$(this).trigger('ag:close');});
	})

})
