﻿window.onload=function(){
	/* 
	 // 이것을 실행하면 window.onload 이벤트 특성상 다 로딩되고 된뒤에 이 내용이 나오므로 'object' 항목 있음으로 나타난다.
	*/ 
		
				var revapi;

				jQuery(document).ready(function() {

					   revapi = jQuery('.fullwidthbanner').revolution(
						{
							delay:9000,
							startwidth:1170,
							startheight:500,
							hideThumbs:10,

							thumbWidth:100,
							thumbHeight:50,
							thumbAmount:5,

							navigationType:"both",
							navigationArrows:"solo",
							navigationStyle:"round",

							touchenabled:"on",
							onHoverStop:"on",

							navigationHAlign:"center",
							navigationVAlign:"bottom",
							navigationHOffset:0,
							navigationVOffset:0,

							soloArrowLeftHalign:"left",
							soloArrowLeftValign:"center",
							soloArrowLeftHOffset:20,
							soloArrowLeftVOffset:0,

							soloArrowRightHalign:"right",
							soloArrowRightValign:"center",
							soloArrowRightHOffset:20,
							soloArrowRightVOffset:0,

							shadow:0,
							fullWidth:"on",
							fullScreen:"off",

							stopLoop:"off",
							stopAfterLoops:-1,
							stopAtSlide:-1,


							shuffle:"off",

							autoHeight:"off",
							forceFullWidth:"off",

							hideThumbsOnMobile:"off",
							hideBulletsOnMobile:"on",
							hideArrowsOnMobile:"on",
							hideThumbsUnderResolution:0,

							hideSliderAtLimit:0,
							hideCaptionAtLimit:768,
							hideAllCaptionAtLilmit:0,
							startWithSlide:0,
							videoJsPath:"plugins/revslider/rs-plugin/videojs/",
							fullScreenOffsetContainer: ""
						});

				});	//ready
				
}