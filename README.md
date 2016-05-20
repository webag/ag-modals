#AG-modal 4

Modal windows with any html content, HTML5 video
Need: jQuery

New in 4 version:
* Now agmodal is normal jQuery plugin! It has inizialization and params!!!
* Add ajax HTML5 video future with percentage download!!! SO CUTE!!!
* Rewrite some css, append scss file.

New in 3 version:
* don't know, brothers, don't know.

New in 2 version:
* upgrade core of plugin
* no more need to write html for cross in modal
* add 2 visual effects
* allow multiple modal windows at same time (if modal called inside other open modal)

##Get started


#####1. Create modal with class .agmodal and any content inside.
```html
<div id="modal-id" class="agmodal">
	<!-- Some awesome text or html inside-->
</div>
```

#####2. Inizialization AgModal
```javascript
$(document).ready(function(){
	$('.agmodal').agmodal({
		effect: 'fade', //slide,scale,3d,morph
		overlayColor: 'rgba(0,0,0,0.5)'
	});
});
```

#####3. You may open agmodal with different methods
```html
<button data-ag="modal-id">Open Modal</button>
```
or
```html
<a href="#" data-ag="modal-id">Open Modal</a>
```
or
some tag with data-ag attribute


##Methods


#####Open agmodal

```javascript
$('#modal-id').agmodal('open');
```

#####Close agmodal

```javascript
$('#modal-id').agmodal('close');
```



##Ajax HTML5 video:

There are data-video and data-poster attributes to firing AgModal for ajax video download with percentage.

```html
<div id="modal-ajax-video-id" data-video="/video/full-video.mp4" data-poster="/images/poster.jpg" class="agmodal agmodal--video"></div>
```
