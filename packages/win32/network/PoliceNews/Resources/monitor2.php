<!DOCTYPE html>

<!--
#######################################
	- THE HEAD PART -
######################################
-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width,initial-scale=1">
    
	<title>JISLIDER - Monitor 2</title>
    
    <!-- get jQuery from the google apis -->
    <script type="text/javascript" src="js/jquery.js"></script>

    <!-- CSS STYLE -->
    <link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="css/preview.css" media="screen" />

    <script type="text/javascript" src="previewjs/preview.js"></script>

     <!-- jQuery REVOLUTION Slider  -->
    <script type="text/javascript" src="rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
    <script type="text/javascript" src="rs-plugin/js/jquery.themepunch.revolution.min.js"></script>

	<!-- REVOLUTION BANNER CSS SETTINGS -->
	<link rel="stylesheet" type="text/css" href="rs-plugin/css/settings.css" media="screen" />

	<!-- MEGAFOLIO GALLERY  CSS SETTINGS -->
	<link rel="stylesheet" type="text/css" href="megafolio/css/settings.css" media="screen" />

     <!-- MEGAFOLIO GALLERY  JS FILES  -->
    <script type="text/javascript" src="megafolio/js/jquery.themepunch.megafoliopro.js"></script>

     <!-- THE FANYCYBOX ASSETS -->
	<link rel="stylesheet" href="megafolio/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
	<script type="text/javascript" src="megafolio/fancybox/jquery.fancybox.pack.js"></script>

	<!-- Optionally add helpers - button, thumbnail and/or media ONLY FOR ADVANCED USAGE-->
	<script type="text/javascript" src="megafolio/fancybox/helpers/jquery.fancybox-media.js"></script>
    
    
    <!-- Chang URLs to wherever Video.js files will be hosted -->
	<link href="rs-plugin/videojs/video-js.css" rel="stylesheet" type="text/css">
	<!-- video.js must be in the <head> for older IEs to work. -->
	<script src="rs-plugin/videojs/video.js"></script>

	<!-- Unless using the CDN hosted version, update the URL to the Flash SWF -->
	<script>
		videojs.options.flash.swf = "rs-plugin/videojs/video-js.swf";
	</script>

    
    <!-- Monitor 2 Setting-->
	<script type='text/javascript' src='js/M2-setting.js'></script>
    
    
</head>
<body style="cursor: url('images/blank.cur'),none !important;">

	<sidebar2>
		<section class="container">
			<article class="side-container">
				<div class="sidebg2"></div>
			</article>
		</section>
	</sidebar2> <!-- END OF HEADER -->

<article class="spectaculus" style="right: 131px; ">
<!-- START REVOLUTION SLIDER 3.1 rev5 fullwidth mode -->

	<div class="fullwidthbanner-container">
    	
		<div class="fullwidthbanner" >
			<?php
			 include 'assets/M2.php';
			?>
			<div class="tp-bannertimer"></div>
        </div>
	</div>
    <!-- END REVOLUTION SLIDER -->
</article>

	<!-- Content End -->
</body><!-- END OF BODY -->