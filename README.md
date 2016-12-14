#AG-modal

Lightweight Jquery plugin for creating modal windows with any html content.

**Need**: jQuery

**Only 4 kb**

##Get started

####1. Include js and css in your projects.
```html
<link href="{your_path}/agmodal.css" rel="stylesheet">
<script src="{your_path}/agmodal.jquery.min.js" type="text/javascript"></script>
```

####2. Create div with any content inside.

You may create this in any place of your page. But be carefull with replacement it in containers with `overflow:hidden`.
```html
<div id="your_id">
	{some html}
</div>
```

####3. Inizialize AgModal
```javascript
$(document).ready(function(){
	$('#your_id').agmodal();
});
```

####4. Now you can open this agmodal by element with `data-ag` attribute.

The value of data-ag attribute - the ID of your modal.
```html
<button data-ag="your_id">Open Modal</button>
```


##Parameters

There are a small stack of available parameters. Example for call plugin with parameters:
```javascript
$('#your_id').agmodal({
    effect: 'fade', //slide,scale,3d,morph,
    overlayColor: 'rgba(44, 55, 73, 0.9)',
    center: false,
    video: true,
    videoAjax: false
});
```


| Parameter        | Default           | Description  |
| ------------- |-------------| -----|
| effect      | 'fade' | visual effect |
| overlayColor      | 'rgba(44, 55, 73, 0.9)' | background colow of overlay |
| center      | false | vertical centered modal |
| video      | false | set true if you want video in modal |
| videoAjax      | false | set true if you want to load video from server with ajax. For this parameter required additional data attributes. See this in the end of readme.|
| width      | null | Set number value if you want to change width of your modal in js. By default width of modal get from css.|


##Methods

####Open agmodal

```javascript
$('#modal-id').agmodal('open');
```

####Close agmodal

```javascript
$('#modal-id').agmodal('close');
```



##Ajax HTML5 video:

There are `data-agvideo` and `data-agposter` attributes to firing AgModal for ajax video download with percentage. If server don't get the size of video for calculating percentage you need to add `data-agmb` attribute with size of yout file in bytes.

```html
<div id="your_id" data-agvideo="/video/full-video.mp4" data-agposter="/images/poster.jpg" data-agmb="16000000"></div>
```

```javascript
$('#your_id').agmodal({
    video: true,
    videoAjax: false
});
```
