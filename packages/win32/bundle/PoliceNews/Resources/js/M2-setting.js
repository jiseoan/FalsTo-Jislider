window.onload=function(){
	/* 
	 // 이것을 실행하면 window.onload 이벤트 특성상 다 로딩되고 된뒤에 이 내용이 나오므로 'object' 항목 있음으로 나타난다.
	*/ 
		
				var revapi;

				jQuery(document).ready(function() {

					   revapi = jQuery('.fullwidthbanner').revolution(
						{
							dottedOverlay:"none",
							delay:9000,
							startwidth:1658,
							startheight:1080,
							hideThumbs:0,

							thumbWidth:231,
							thumbHeight:120,
							thumbAmount:7,

							navigationType:"thumb",
							navigationArrows:"none",
							navigationStyle:"round",

							touchenabled:"off",
							onHoverStop:"off",

							navigationHAlign:"right",
							navigationVAlign:"bottom",
							navigationHOffset:-245,
							navigationVOffset:90,
							navigationMouse:"off",

							soloArrowLeftHalign:"left",
							soloArrowLeftValign:"center",
							soloArrowLeftHOffset:20,
							soloArrowLeftVOffset:0,

							soloArrowRightHalign:"right",
							soloArrowRightValign:"center",
							soloArrowRightHOffset:20,
							soloArrowRightVOffset:0,

							shadow:5,
							fullWidth:"off",
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
							hideCaptionAtLimit:0,
							hideAllCaptionAtLilmit:0,
							startWithSlide:0,
							videoJsPath:"../rs-plugin/videojs",
							fullScreenOffsetContainer: ""
						});

				});	//ready
				
}