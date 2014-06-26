window.onload=function(){
	var ifrurl1 = "monitor1.php";
	var ifrurl2 = "monitor2.php";
	
	function ifrload(){
		try{
			document.getElementById("content1").innerHTML = "<iframe name='ifr1' id='ifr1' frameborder='0' width='100%' height='100%' marginwidth='0' marginheight='0' scrolling='no' style='overflow:hidden; border:none;' src='"+ifrurl1+"' ></iframe>";
			setTimeout(function(){document.getElementById("content2").innerHTML = "<iframe name='ifr2' id='ifr2' frameborder='0' width='100%' height='100%' marginwidth='0' marginheight='0' scrolling='no' style='overflow:hidden; border:none;' src='"+ifrurl2+"' ></iframe>";},6000);
		}catch(e){}
	}
	ifrload();
}