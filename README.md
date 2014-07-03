AG-modal
---
Modal windows with any html content.
Need: jQuery

Example
------
Example of use:

DEMO: http://agmegadeth.github.io/ag-modals
```
<a data-ag="modal-example">Example link</a>

<div id="modal-example" class="agmodal">
	<h2 class="spasibo">Thanks for clean socks!</h2>
	........
  <a class="close-agmodal">×</a>
</div>
```


Transition effects
------
You may also add some transition effects by adding special classes to modal window.
Example:
```
<div id="modal-spasibo" class="agmodal ag-fx-scale">
```

available classes:
* .ag-fx-slide
* .ag-fx-scale
* .ag-fx-3d
