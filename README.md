Grady
=
Personal framework for quick styling of site.
-
Components:
 - Input fields
 - Buttons
 - Checkboxes
 - Radio buttons
 - Error message areas
 - Responsive menu
 
**Implementation**
-
 Between `<head>` tags.
```html
<link rel="stylesheet" href="grady.min.css">
```
 Before end `</body>` tag.
```html
<script src="grady.min.js"></script>
```
**A Grady text field.**
![checkmark]( https://github.com/markogrady1/grady/raw/master/demo/images/text_field_img.png)

  Code snippet for text field.
  Simply add type for password,email or others.
```html
<input class="form-in">
```
**A Grady checkbox.**

![checkmark]( https://github.com/markogrady1/grady/raw/master/demo/images/grady_checkbox_img.png)
  
   Code snippet for checkbox.
```html
<div class="whl-chk-wrp" >
	<span class="check-wrp">
		<input type="checkbox" name=" "/>
	</span>
	<span class="check-label">Checkbox label</span>
</div>
```
 **A pair of Grady radio buttons.**
 
![checkmark]( https://github.com/markogrady1/grady/raw/master/demo/images/grady_radio_btn_img.png)
  
Code snippet for single radio button.
```html
<div class="whl-radio-wrp" >
	<span class="radio-wrp">
		<input type="radio" name="name"/>
	</span>
	<span class="radio-label">Radio label one</span>
</div>	
```
**Directories**
```
	grady/
	|
	├── css/
	|   ├── grady.css
	|   └── grady.min.css
	|   
	|
	├── demo/
	|   ├── demo.css
	|   └── grady_docs.html
	|
	└── js/
	    ├── grady.js
	    └── grady.min.js
```
Production still in progress.

Other project:  
<a href="http://www.thereformat.com" target="_blank">The Reformat Blog</a>


