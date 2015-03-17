$(document).ready(function(){
	$('.agmodal').bind('ag:open');

	$('*[data-ag]').on('click', function(e) {
		e.preventDefault();
		var modalLocation = $(this).attr('data-ag');
		var modal = $('#'+modalLocation);
		modal.trigger('ag:open');
	});

	$('.agmodal').on('ag:open', function() {
		var id_modal = $(this).attr('id');
		var id_bg = "bg_for_"+id_modal;
		$('<div class="agmodal-bg" id="'+id_bg+'"></div>').insertAfter(this);
		$(this).addClass('ag-visible');
		$('#'+id_bg).fadeIn(400);
		var scrolled = $(window).scrollTop()+50;
		$(this).css('top', scrolled);

		$('.close-agmodal').click(function(){$(this).trigger('ag:close');});
		$('.agmodal-bg').click(function(){$('#'+id_modal).trigger('ag:close');});

		$(this).bind('ag:close', function () {
			$(this).removeClass('ag-visible');
			$('#'+id_bg).fadeOut(400);
			setTimeout(function() {$('#'+id_bg).remove();},400);

			if($('.agmodal video').length){
				$('.agmodal video').get(0).pause();
			}
		})
	});

})
