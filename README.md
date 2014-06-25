Grady
=
Personal framework for quick styling of site.
-
Components:
 - Form components generator
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
 Before ending `</body>` tag.
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
Form generator.
-
Simply add the following code snippet for a quick login form.
```html
<form id="gen-login"></form>
```
This will produce the following output.

![checkmark]( https://github.com/markogrady1/grady/raw/master/demo/images/generated_login_form.png)

Generated code.
```html
<form id="gen-login">
	<!--code generated by Grady-->
	<label for="name">Name</label>
	<input name="name" id="name" class="form-in" placeholder="name / username">
	<label for="password">Password</label>
	<input type="password" id="password" name="password" class="form-in">
	<input type="submit" name="submit" value="Login">
</form>
```
Other form combinations available.
The following table lists the login form combinations and class names.

Note: To add a `Remember Me` check box simply append `-r` to the class name.

| Login Combination    		|Class Name 	         |
| --------------------------------|:--------------------:| 
| Name-Password 		  | `gen-login`          | 
| Username-Password    		  |`username-gen-login`  | 
| Email-Password       	   	  | `email-gen-login`    | 
|Name-Password w/ remember me	  |`gen-login-r`	 |
|Username-Password w/ remember me |`username-gen-login-r`|	
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
Project status: Production still in progress.

Other project:  
<a href="http://www.thereformat.com" target="_blank">The Reformat Blog</a>


