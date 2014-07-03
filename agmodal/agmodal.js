$(document).ready(function(){
	$('a[data-ag]').on('click', function(e) {
		e.preventDefault();
		var modalLocation = $(this).attr('data-ag');
		var modal = $('#'+modalLocation);

		$('<div class="agmodal-bg"></div>').insertAfter(modal);
		modal.addClass('ag-visible');	
		$('.agmodal-bg').fadeIn(400);

		modal.bind('ag:close', function () {
			modal.removeClass('ag-visible');
			$('.agmodal-bg').fadeOut(300);
			$('.agmodal-bg').remove();
		})

		$('.close-agmodal').click(function(){
			modal.trigger('ag:close');
		});

		$('.agmodal-bg').click(function(){
			modal.trigger('ag:close');
		});
	});

})