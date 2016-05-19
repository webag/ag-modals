AG-modal 4
---
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

Get started
------

```
//inizialization AgModal
$(document).ready(function(){
	$('.agmodal').agmodal({
		effect: 'fade', //slide,scale,3d,morph
		overlayColor: 'rgba(0,0,0,0.5)'
	});
});
```


Example of use:
------

```

<div id="modal-id" class="agmodal">
	<!-- Some awesome text or html inside-->
</div>

call modal:
<button data-ag="modal-id">Open Modal</button>
or
<a href=# data-ag="modal-id">Open Modal</a>
or
some tag with data-ag attribute

or via js
$('#modal-id').agmodal('open');

close modal
$('#modal-id').agmodal('close');
```

Example of use:
------

```

<div id="modal-id" class="agmodal">
	<!-- Some awesome text or html inside-->
</div>

call modal:
<button data-ag="modal-id">Open Modal</button>
or
<a href=# data-ag="modal-id">Open Modal</a>
or
some tag with data-ag attribute

or via js
$('#modal-id').agmodal('open');

close modal
$('#modal-id').agmodal('close');
```
