(function( $ ){

	var methods = {

		init : function( options ) {

			var settings = $.extend({
				overlayColor: 'rgba(44, 55, 73, 0.9)',
				effect: 'scale' //slide,scale,3d,morph
			}, options);

			return this.each(function(){
				var current_modal = $(this);
				if (!current_modal.parent('.agmodal__wrapper').length) {
					current_modal.append('<a class="agmodal__close"></a>');
					$(this).wrap('<div class="agmodal__wrapper" tabindex="-1"></div>');
					current_modal.addClass('agmodal--' + settings.effect);
					var current_modal__wrapper = current_modal.parent('.agmodal__wrapper');

					current_modal__wrapper.css('background-color', settings.overlayColor);
					$(document).trigger('agmodal.inited');
				};
			});
		},

		open : function() {
			var current_modal = $(this);
			var current_modal__wrapper = current_modal.parent('.agmodal__wrapper');

			$('html').addClass('agmodal--lock');
			current_modal__wrapper.addClass('agmodal__wrapper--visible');
			current_modal.addClass('agmodal--visible');

			setTimeout( function() {
				$('.agmodal__wrapper--visible').focus();
			},400);


			// video open
			if (current_modal.find('video').length) {
				var current_video = current_modal.find('video').get(0);
				current_video.play();
			}
			if (current_modal.attr('data-video')) {
				if (current_modal.find('video').hasClass('downloaded') !== true) {

					var video_src = current_modal.data('video');
					var poster_src = current_modal.data('poster');
					var video_html = '<video preload="auto" controls poster="' + poster_src + '">';

					video_html = video_html + '</video>';
					var preloader_html = "<div class='agmodal__video-preloader'><span></span></div>";
					current_modal.prepend(video_html);
					current_modal.prepend(preloader_html);
					
					xhr = new XMLHttpRequest();
					xhr.open('GET', video_src, true);
					xhr.responseType = 'blob';
					xhr.onprogress = function(e) {
						var total = 0;
						if (e.lengthComputable) {
							total = e.total;
							$('.agmodal__video-preloader span').text(parseInt( (e.loaded / total * 100), 10) + "%");
						} else {
							total = 86100000;
							$('.agmodal__video-preloader span').text(parseInt( (e.loaded / total * 100), 10) + "%");
						}
					}
					xhr.onload = function(e) {
						if (this.status == 200) {
							var current_video = current_modal.find('video').get(0);
							var myBlob = this.response;
							var vid = window.URL.createObjectURL(myBlob);
							console.log(myBlob);
							current_video.src = vid;
							current_modal.find('.agmodal__video-preloader').remove();
							current_video.oncanplay = function() {
								current_video.play();
							}
							current_modal.find('video').addClass('downloaded');
						}
					}

					xhr.send();
				} else {
					current_video.play();
				}
			}
			// video open

			current_modal.trigger('agmodal.opened');
			return this;
		},

		close : function() {
			var current_modal = $(this);
			var current_modal__wrapper = current_modal.parent('.agmodal__wrapper');

			current_modal.removeClass('agmodal--visible');
			current_modal__wrapper.removeClass('agmodal__wrapper--visible');

			setTimeout( function() {
				if(!$('.agmodal--visible').length){
					$('html').removeClass('agmodal--lock');
				}
				current_modal__wrapper.scrollTop(0);
			},400);

			// video close
			if(current_modal.find('video').length){
				current_modal.find('video').get(0).pause();
			}


			if (current_modal.attr('data-video')) {
				if (!current_modal.find('video').hasClass('downloaded')) {
					current_modal.find('video').get(0).pause();
					current_modal.find('video').get(0).src = "";
					current_modal.find('video').get(0).load();
					setTimeout( function() {
						current_modal.find('video').remove();
					},1000);
					xhr.abort();
					$('html').animate( { scrollTop: 0 }, 800 );
					$('body').animate( { scrollTop: 0 }, 800 );
				}
			}
			// video close

			current_modal.trigger('agmodal.closed');
			return this;
		}

	};

	// определяем ширину скроллбара
	$(window).load(function(){
		var HTML,w1,w2,scrollWidth;
		HTML = $("html"),
			w1 = $(window).width();
		HTML.addClass('agmodal--lock-test');
		w2 = $(window).width();
		HTML.removeClass('agmodal--lock-test');
		scrollWidth = w2 - w1;
		$("<style type='text/css'>.agmodal--lock{margin-right:" + scrollWidth + "px !important;}</style>").appendTo("body");
	});
	// определяем ширину скроллбара

	$(document).ready(function() {
		$('*[data-ag]').click(function(e){
			e.preventDefault();
			var modalLocation = $(this).attr('data-ag');
			var modal = $('#'+modalLocation);
			modal.agmodal('open');
		});
	});

	$(document).on('agmodal.inited', function() {
		$('.agmodal__close').click(function(e){
			$(this).parent('.agmodal').agmodal('close');
		});

		$('.agmodal__wrapper').click(function(e){
			$(this).find('.agmodal').agmodal('close');
		}).children().click(function(e){
			e.stopPropagation();
		});
	});

	$.fn.agmodal = function( method ) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Метод ' +  method + ' в jQuery.agmodal не существует' );
		}
	};

})( jQuery );