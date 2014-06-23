function displayMenu(menu){
	var gui;
	//var menu = document.getElementById('menu-list');
	if (menu.className.match(/\blook-feel\b/)) 
    gui = true;

	if(menu.style.display=='block'){
		menu.style.display='none';
		menu.removeAttribute('class','menu-anim');
		if(gui) menu.setAttribute('class','look-feel');
		

	}else{
		menu.style.display='block';
		if(gui)
		menu.setAttribute('class','menu-anim look-feel');
		else
		menu.setAttribute('class','menu-anim');
		
	}
	
}
window.onresize = function() {
   var w = window.innerWidth;
var menu_list = document.getElementById('menu-list');
var menu_list2 = document.getElementById('menu-list2');
if(w>=601){
	menu_list.style.display='block';
	menu_list2.style.display='block';

}else{
	
	menu_list.style.display='none';
	menu_list2.style.display='none';
}
};
window.onload = function(){
	var menu = document.getElementById('menu-list');
	var bars = document.getElementById('bars-wrp');
	bars.addEventListener("click",function(){
	displayMenu(menu);
},false);

};
