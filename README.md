AG-modal 2
---
Modal windows with any html content.
Need: jQuery

New in 2 version:
* upgrade core of plugin
* no more need to write <a class="close-agmodal"></a> in modal
* add 2 visual effects
* allow multiple modal windows at same time (if modal called inside other open modal)

Example
------
Example of use:

```
<a data-ag="modal-example">Example link</a>

<div id="modal-example" class="agmodal">
	<h2 class="spasibo">Thanks for clean socks!</h2>
	........
</div>
```


Transition effects
------
You may also add some transition effects by adding special classes to modal window.
Example:
```
<div id="modal-spasibo" class="agmodal ag-fx-morph">
```

available classes:
* ag-fx-slide
* ag-fx-scale
* ag-fx-3d
* ag-fx-morph (new)
* ag-fx-morph_top (new)
