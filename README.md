Grady
=
Personal framework for quick styling of site
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
**Login Form**   
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
Other field combinations available.
The following table lists the login form combinations and class names.    
For example, to generate a form with a **Name field** and **Password field** add `gen-login` as the class value.  
Note: To add a `Remember Me` check box simply append `-r` to the class name.

| Login Combination    		  |Class Value 	         |
| --------------------------------|:--------------------:| 
| Name **-** Password 		  | `gen-login`          | 
| Username **-** Password    		  |`username-gen-login`  | 
| Email **-** Password       	   	  | `email-gen-login`    | 
|Name **-** Password w/ remember me	  |`gen-login-r`	 |
|Username **-** Password w/ remember me |`username-gen-login-r`|	

**Sign-up/Register Form**

| Sign-up Form Combinations 		  |Class Value 	       |
| --------------------------------|:--------------------:| 
| Name **-** Email **-** Password **-** Confirm Password   | `gen-register`          | 
| Username **-** Email **-** Password **-** Confirm Password   |`username-gen-register`  | 
| Name **-** Username **-** Email **-** Password **-** Confirm Password  	  | `full-gen-register`    |    

Example
```html
<form id="full-gen-register"></form>
```
This snippet produces a full set of fields for registering a user.  
All you have to do is obtain the input values from either the `id` or `name` attributes and voila!!   
However in order to do this, remember to insert the `method` and `action` attributes/values inside the form tag.   
```html
<form id="full-gen-register" action="file.php" method="POST"></form>
```
Because the elements are not loaded from the server, they are not visible when viewing the source. It is however possible to view the generated code with the browser's developer tools. `Inspect Element`.    
Each form field attribute( id, class, name, etc..) is named after it's specific label. So for example, the **email** field will have an **id** of `email`. The **name** attribute will also consist of the same value.


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


