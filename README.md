#AG-modal

Lightweight Jquery plugin for creating modal windows with any html content.

**Need**: jQuery

**Only 4 kb**

##Get started

#####1. Include js and css in your projects.
```html
<link href="{your_path}/agmodal.css" rel="stylesheet">
<script src="{your_path}/agmodal.jquery.min.js" type="text/javascript"></script>
```

#####2. Create div with any content inside. You may create this in any place of your page. But be carefull with replacement it in containers with `overflow:hidden`.
```html
<div id="your_id">
	{some html}
</div>
```

#####3. Inizialize AgModal
```javascript
$(document).ready(function(){
	$('#your_id').agmodal();
});
```

#####4. Now you can open this agmodal by element with `data-ag` attribute. The value of data-ag attribute - the ID of your modal.
```html
<button data-ag="your_id">Open Modal</button>
```

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
