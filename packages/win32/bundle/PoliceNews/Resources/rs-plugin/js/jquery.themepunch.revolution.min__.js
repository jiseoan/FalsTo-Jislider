﻿/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.0.6 (14.11.2013)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/

function revslider_showDoubleJqueryError(e){
	var t="JiSlider Error: You have some jquery.js library include that comes after the revolution files js include.";
	t+="<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	t+="<br><br> To fix it you can:<br>혻혻혻 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	t+="<br>혻혻혻 2. Find the double jquery.js include and remove it.";
	t="<span style='font-size:16px;color:#BC0C06;'>"+t+"</span>";
	jQuery(e).show().html(t)
}
(function(e,t){
	function n(e){
		var t=[],n;
		var r=window.location.href.slice(window.location.href.indexOf(e)+1).split("_");
		for(var i=0;i<r.length;i++){
			r[i]=r[i].replace("%3D","=");
			n=r[i].split("=");
			t.push(n[0]);
			t[n[0]]=n[1]
		}
		return t
	}
	function r(t,n){
		try{
			if(n.hideThumbsUnderResoluition!=0&&n.navigationType=="thumb"){
				if(n.hideThumbsUnderResoluition>e(window).width())e(".tp-bullets").css({display:"none"});
				else e(".tp-bullets").css({display:"block"})
			}
		}
		catch(r){}
		t.find(".defaultimg").each(function(t){b(e(this),n)});
		var i=0;
		if(n.forceFullWidth=="on")i=0-n.container.parent().offset().left;
		try{
			t.parent().find(".tp-bannershadow").css({width:n.width,left:i})
		}
		catch(r){}
		var s=t.find(">ul >li:eq("+n.act+") .slotholder");
		var o=t.find(">ul >li:eq("+n.next+") .slotholder");
		x(t,n);
		o.find(".defaultimg").css({opacity:0});
		s.find(".defaultimg").css({opacity:1});
		var a=t.find(">ul >li:eq("+n.next+")");
		M(a,n,true);
		u(n,t)
	}
	function s(){
		var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"];
		var t=false;
		for(i in e){
			if(navigator.userAgent.split(e[i]).length>1){
				t=true
			}
		}
		return t
	}
	function o(t,n){
		var r=e('<div style="display:none;"/>').appendTo(e("body"));
		r.html("<!--[if "+(n||"")+" IE "+(t||"")+"]><a>혻</a><![endif]-->");
		var i=r.find("a").length;
		r.remove();
		return i
	}
	function u(e,t){
		e.cd=0;
		if(e.videoplaying!=true){
			var n=t.find(".tp-bannertimer");
			if(n.length>0){
				n.stop();
				n.css({width:"0%"});
				n.animate({width:"100%"},{duration:e.delay-100,queue:false,easing:"linear"})
			}
			clearTimeout(e.thumbtimer);
			e.thumbtimer=setTimeout(function(){c(t);y(t,e)},200)
		}
	}
	function a(e,t){
		e.cd=0;
		var n=t.find(".tp-bannertimer");
		if(n.length>0){
			n.stop(true,true);
			n.css({width:"0%"})
		}
		clearTimeout(e.thumbtimer)
	}
	
	/* 썸 클릭시 선택 재생 */
	function f(e,t){
		e.cd=0;
		T(t,e);
		var n=t.find(".tp-bannertimer");
		if(n.length>0){
			n.stop();
			n.css({width:"0%"});
			if(e.videoplaying!=true)n.animate({width:"100%"},{duration:e.delay-100,queue:false,easing:"linear"})
		}
	}
	
	function l(n,r){
		var i=n.parent();
		if(r.navigationType=="thumb"||r.navsecond=="both"){
			i.append('<div class="tp-bullets tp-thumbs '+r.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')
		}
		var s=i.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
		var o=s.parent();
		o.width(r.thumbWidth);
		o.height(r.thumbHeight*r.thumbAmount);
		o.parent().width(r.thumbWidth);
		o.parent().height(r.thumbHeight*r.thumbAmount);
		n.find(">ul:first >li").each(function(e){
			var i=n.find(">ul:first >li:eq("+e+")");
			if(i.data("thumb")!=t)var o=i.data("thumb");
			else var o=i.find("img:first").attr("src");
			s.append('<div class="bullet thumb" style="width:'+r.thumbWidth+"px;height:"+r.thumbHeight+'px;"><img src="'+o+'"></div>');
			var u=s.find(".bullet:first")
		});
		var u=10;
		
		s.find(".bullet").each(function(t){
			var i=e(this);
			if(t==r.slideamount-1)i.addClass("last");
			if(t==0)i.addClass("first");
			i.width(r.thumbWidth);
			i.height(r.thumbHeight);
			if(u<i.outerHeight(true))u=i.outerHeight(true);//falsto
			i.click(function(){
				if(r.transition==0&&i.index()!=r.act){
					r.next=i.index();
					f(r,n)
				}
			})
		});
		var a=u*n.find(">ul:first >li").length;
		var l=s.parent().height();//falsto
		r.thumbHeight=u;//falsto
		
		/* 썸네일 마우스오버시 동작  */
		if(l<a&&r.navigationMouse=="on"){
			e(document).mousemove(function(t){e("body").data("mousey",t.pageY)});//falsto
			s.parent().mouseenter(function(){
				var t=e(this);
				t.addClass("over");
				var r=t.offset();
				//var i=e("body").data("mousex")-r.left;
				var i=e("body").data("mousey")-r.top;//falsto
				var s=t.height();//falsto
				var o=t.find(".bullet:first").outerHeight(true);//falsto
				var u=o*n.find(">ul:first >li").length;
				var a=u-s+15;
				var f=a/s;
				i=i-30;
				var l=0-i*f;
				if(l>0)l=0;
				if(l<0-u+s)l=0-u+s;
				h(t,l,200)
			});
			s.parent().mousemove(function(){
				var t=e(this);
				var r=t.offset();
				//var i=e("body").data("mousex")-r.left;
				var i=e("body").data("mousey")-r.top;//falsto
				var s=t.height();//falsto
				var o=t.find(".bullet:first").outerHeight(true);//falsto
				var u=o*n.find(">ul:first >li").length-1;
				var a=u-s+15;
				var f=a/s;
				i=i-3;
				if(i<6)i=0;
				if(i+3>s-6)i=s;
				var l=0-i*f;
				if(l>0)l=0;
				if(l<0-u+s)l=0-u+s;
				h(t,l,0)
			});
			s.parent().mouseleave(function(){
				var t=e(this);
				t.removeClass("over");
				c(n)
			})
		}
	}
	function c(e){
		var t=e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
		var n=t.parent();
		var r=n.offset();
		var i=n.find(".bullet:first").outerHeight(true);//falsto
		var s=n.find(".bullet.selected").index()*i;
		var o=n.height();//falsto
		var i=n.find(".bullet:first").outerHeight(true);//falsto
		var u=i*e.find(">ul:first >li").length;
		var a=u-o;
		var f=a/o;
		var l=0-s;
		if(l>0)l=0;
		if(l<0-u+o)l=0-u+o;
		if(!n.hasClass("over")){h(n,l,200)}
	}
	function h(e,t,n){
		//TweenLite.to(e.find(".tp-thumbcontainer"),.2,{left:t,ease:Power3.easeOut,overwrite:"auto"})
		TweenLite.to(e.find(".tp-thumbcontainer"),.2,{top:t,ease:Power3.easeOut,overwrite:"auto"})//falsto
	}
	function p(t,n){
		if(n.navigationType=="bullet"||n.navigationType=="both"){
			t.parent().append('<div class="tp-bullets simplebullets '+n.navigationStyle+'"></div>')
		}
		var r=t.parent().find(".tp-bullets");
		t.find(">ul:first >li").each(function(e){
			var n=t.find(">ul:first >li:eq("+e+") img:first").attr("src");
			r.append('<div class="bullet"></div>');
			var i=r.find(".bullet:first")
		});
		r.find(".bullet").each(function(r){
			var i=e(this);
			if(r==n.slideamount-1)i.addClass("last");
			if(r==0)i.addClass("first");
			i.click(function(){
				var e=false;
				if(n.navigationArrows=="withbullet"||n.navigationArrows=="nexttobullets"){
					if(i.index()-1==n.act)e=true
				}else{
					if(i.index()==n.act)e=true
				}
				if(n.transition==0&&!e){
					if(n.navigationArrows=="withbullet"||n.navigationArrows=="nexttobullets"){
						n.next=i.index()-1
					}else{
						n.next=i.index()
					}
					f(n,t)
				}
			})
		});
		r.append('<div class="tpclear"></div>');
		y(t,n)
	}
	function d(e,n){
		var r=e.find(".tp-bullets");
		var i="";
		var s=n.navigationStyle;
		if(n.navigationArrows=="none")i="visibility:hidden;display:none";
		n.soloArrowStyle="default";
		if(n.navigationArrows!="none"&&n.navigationArrows!="nexttobullets")s=n.soloArrowStyle;e.parent().append('<div style="'+i+'" class="tp-leftarrow tparrows '+s+'"></div>');
		e.parent().append('<div style="'+i+'" class="tp-rightarrow tparrows '+s+'"></div>');
		e.parent().find(".tp-rightarrow").click(function(){
			if(n.transition==0){
				if(e.data("showus")!=t&&e.data("showus")!=-1)n.next=e.data("showus")-1;
				else n.next=n.next+1;e.data("showus",-1);
				if(n.next>=n.slideamount)n.next=0;
				if(n.next<0)n.next=0;
				if(n.act!=n.next)f(n,e)
			}
		});
		e.parent().find(".tp-leftarrow").click(function(){
			if(n.transition==0){
				n.next=n.next-1;
				n.leftarrowpressed=1;
				if(n.next<0)n.next=n.slideamount-1;
				f(n,e)
			}
		});
		y(e,n)
	}
	function v(n,r){
		e(document).keydown(function(e){
			if(r.transition==0&&e.keyCode==39){
				if(n.data("showus")!=t&&n.data("showus")!=-1)r.next=n.data("showus")-1;
				else r.next=r.next+1;n.data("showus",-1);
				if(r.next>=r.slideamount)r.next=0;
				if(r.next<0)r.next=0;
				if(r.act!=r.next)f(r,n)
			}
			if(r.transition==0&&e.keyCode==37){
				r.next=r.next-1;
				r.leftarrowpressed=1;
				if(r.next<0)r.next=r.slideamount-1;
				f(r,n)
			}
		});
		y(n,r)
	}
	function m(e,t){
		if(t.touchenabled=="on")e.swipe({
			data:e,swipeRight:function(){
				if(t.transition==0){
					t.next=t.next-1;
					t.leftarrowpressed=1;
					if(t.next<0)t.next=t.slideamount-1;
					f(t,e)
				}
			},
			swipeLeft:function(){
				if(t.transition==0){
					t.next=t.next+1;
					if(t.next==t.slideamount)t.next=0;
					f(t,e)
				}
			},
			allowPageScroll:"auto"
		})
	}
	function g(e,t){
		var n=e.parent().find(".tp-bullets");
		var r=e.parent().find(".tparrows");
		if(n==null){
			e.append('<div class=".tp-bullets"></div>');
			var n=e.parent().find(".tp-bullets")
		}
		if(r==null){
			e.append('<div class=".tparrows"></div>');
			var r=e.parent().find(".tparrows")
		}
		e.data("hidethumbs",t.hideThumbs);
		n.addClass("hidebullets");
		r.addClass("hidearrows");
		n.hover(
			function(){
				n.addClass("hovered");
				clearTimeout(e.data("hidethumbs"));
				n.removeClass("hidebullets");
				r.removeClass("hidearrows")
			},
			function(){
				n.removeClass("hovered");
				if(!e.hasClass("hovered")&&!n.hasClass("hovered"))e.data("hidethumbs",setTimeout(function(){n.addClass("hidebullets");r.addClass("hidearrows")},t.hideThumbs))
			}
		);
		r.hover(
			function(){
				n.addClass("hovered");
				clearTimeout(e.data("hidethumbs"));
				n.removeClass("hidebullets");
				r.removeClass("hidearrows")
			},
			function(){
				n.removeClass("hovered")
			}
		);
		e.on("mouseenter",function(){
			e.addClass("hovered");
			clearTimeout(e.data("hidethumbs"));
			n.removeClass("hidebullets");
			r.removeClass("hidearrows")
		});
		e.on("mouseleave",function(){
			e.removeClass("hovered");
			if(!e.hasClass("hovered")&&!n.hasClass("hovered"))e.data("hidethumbs",setTimeout(
				function(){
					n.addClass("hidebullets");
					r.addClass("hidearrows")
				},
				t.hideThumbs
			))
		})
	}
	
	/* 썸 위치 설정 */
	function y(t,n){
		var r=t.parent();
		var i=r.find(".tp-bullets");
		if(n.navigationType=="thumb"){
			i.find(".thumb").each(function(t){
				var r=e(this);
				r.css({width:n.thumbWidth*n.bw+"px",height:n.thumbHeight*n.bh+"px"})
			});
			var s=i.find(".tp-mask");
			s.width(n.thumbWidth*n.bw);
			s.height(n.thumbHeight*n.thumbAmount*n.bh);
			s.parent().width(n.thumbWidth*n.bw);
			s.parent().height(n.thumbHeight*n.thumbAmount*n.bh)
		}
		var o=r.find(".tp-leftarrow");
		var u=r.find(".tp-rightarrow");
		if(n.navigationType=="thumb"&&n.navigationArrows=="nexttobullets")n.navigationArrows="solo";
		if(n.navigationArrows=="nexttobullets"){
			o.prependTo(i).css({"float":"left"});
			u.insertBefore(i.find(".tpclear")).css({"float":"left"})
		}
		var a=0;
		if(n.forceFullWidth=="on")a=0-n.container.parent().offset().left;
		if(n.navigationArrows!="none"&&n.navigationArrows!="nexttobullets"){
			o.css({position:"absolute"});
			u.css({position:"absolute"});
			if(n.soloArrowLeftValign=="center")o.css({top:"50%",marginTop:n.soloArrowLeftVOffset-Math.round(o.innerHeight()/2)+"px"});
			if(n.soloArrowLeftValign=="bottom")o.css({top:"auto",bottom:0+n.soloArrowLeftVOffset+"px"});
			if(n.soloArrowLeftValign=="top")o.css({bottom:"auto",top:0+n.soloArrowLeftVOffset+"px"});
			if(n.soloArrowLeftHalign=="center")o.css({left:"50%",marginLeft:a+n.soloArrowLeftHOffset-Math.round(o.innerWidth()/2)+"px"});
			if(n.soloArrowLeftHalign=="left")o.css({left:0+n.soloArrowLeftHOffset+a+"px"});
			if(n.soloArrowLeftHalign=="right")o.css({right:0+n.soloArrowLeftHOffset-a+"px"});
			if(n.soloArrowRightValign=="center")u.css({top:"50%",marginTop:n.soloArrowRightVOffset-Math.round(u.innerHeight()/2)+"px"});
			if(n.soloArrowRightValign=="bottom")u.css({top:"auto",bottom:0+n.soloArrowRightVOffset+"px"});
			if(n.soloArrowRightValign=="top")u.css({bottom:"auto",top:0+n.soloArrowRightVOffset+"px"});
			if(n.soloArrowRightHalign=="center")u.css({left:"50%",marginLeft:a+n.soloArrowRightHOffset-Math.round(u.innerWidth()/2)+"px"});
			if(n.soloArrowRightHalign=="left")u.css({left:0+n.soloArrowRightHOffset+a+"px"});
			if(n.soloArrowRightHalign=="right")u.css({right:0+n.soloArrowRightHOffset-a+"px"});
			if(o.position()!=null)o.css({top:Math.round(parseInt(o.position().top,0))+"px"});
			if(u.position()!=null)u.css({top:Math.round(parseInt(u.position().top,0))+"px"})
		}
		if(n.navigationArrows=="none"){
			o.css({visibility:"hidden"});
			u.css({visibility:"hidden"})
		}
		if(n.navigationVAlign=="center")i.css({top:"50%",marginTop:n.navigationVOffset-Math.round(i.innerHeight()/2)+"px"});
		if(n.navigationVAlign=="bottom")i.css({bottom:0+n.navigationVOffset+"px"});
		if(n.navigationVAlign=="top")i.css({top:0+n.navigationVOffset+"px"});
		if(n.navigationHAlign=="center")i.css({left:"50%",marginLeft:a+n.navigationHOffset-Math.round(i.innerWidth()/2)+"px"});
		if(n.navigationHAlign=="left")i.css({left:0+n.navigationHOffset+a+"px"});
		if(n.navigationHAlign=="right")i.css({right:0+n.navigationHOffset-a+"px"})
	}
	function b(n,r){
		r.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height:r.container.height()});
		r.container.closest(".rev_slider_wrapper").css({height:r.container.height()});
		r.width=parseInt(r.container.width(),0);
		r.height=parseInt(r.container.height(),0);
		r.bw=r.width/r.startwidth;
		r.bh=r.height/r.startheight;
		//if(r.bh>r.bw)r.bh=r.bw;//falsto
		if(r.bh<r.bw)r.bw=r.bh;
		if(r.bw<r.bh)r.bh=r.bw;
		if(r.bh>1){r.bw=1;r.bh=1}
		if(r.bw>1){r.bw=1;r.bh=1}
		r.height=Math.round(r.startheight*(r.width/r.startwidth));
		if(r.height>r.startheight&&r.autoHeight!="on")r.height=r.startheight;
		if(r.fullScreen=="on"){
			r.height=r.bw*r.startheight;
			var i=r.container.parent().width();
			var s=e(window).height();
			if(r.fullScreenOffsetContainer!=t){
				try{
					var o=r.fullScreenOffsetContainer.split(",");
					e.each(o,function(t,n){
						s=s-e(n).outerHeight(true)
					})
				}
				catch(u){}
			}
			r.container.parent().height(s);
			r.container.css({height:"100%"});
			r.height=s
		}else{
			r.container.height(r.height)
		}
		r.slotw=Math.ceil(r.width/r.slots);
		if(r.fullSreen=="on")r.sloth=Math.ceil(e(window).height()/r.slots);
		else r.sloth=Math.ceil(r.height/r.slots);
		if(r.autoHeight=="on")r.sloth=Math.ceil(n.height()/r.slots)
	}
	
	/* 화면 위치 크기 설정 */
	function w(n,r){
		n.find(".tp-caption").each(function(){
			e(this).addClass(e(this).data("transition"));
			e(this).addClass("start")
		});
		n.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:n.parent().css("maxHeight")});
		if(r.autoHeight=="on"){
			n.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"});
			n.css({maxHeight:"none"});
			n.parent().css({maxHeight:"none"})
		}
		n.find(">ul:first >li").each(function(n){
			var r=e(this);
			r.css({width:"100%",height:"100%",overflow:"hidden"});
			if(r.data("link")!=t){
				var i=r.data("link");
				var s="_self";
				var o=2;
				if(r.data("slideindex")=="back")o=0;var u=r.data("linktoslide");
				if(r.data("target")!=t)s=r.data("target");
				if(i=="slide"){
					r.append('<div class="tp-caption sft slidelink" style="z-index:'+o+';" data-x="0" data-y="0" data-linktoslide="'+u+'" data-start="0"><a><div></div></a></div>')
				}else{
					u="no";
					r.append('<div class="tp-caption sft slidelink" style="z-index:'+o+';" data-x="0" data-y="0" data-linktoslide="'+u+'" data-start="0"><a target="'+s+'" href="'+i+'"><div></div></a></div>')
				}
			}
		});
		n.parent().css({overflow:"visible"});
		n.find(">ul:first >li >img").each(function(n){
			var i=e(this);
			i.addClass("defaultimg");
			if(i.data("lazyload")!=t&&i.data("lazydone")!=1){
				
			}else{
				b(i,r)
			}
			i.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>');
			var s=i.attr("src");
			var o=i.data("lazyload");
			var u=i.data("bgfit");
			var a=i.data("bgrepeat");
			var f=i.data("bgposition");
			if(u==t)u="cover";
			if(a==t)a="no-repeat";
			if(f==t)f="center center";
			i.replaceWith(
				'<div class="tp-bgimg defaultimg" data-lazyload="'+
				i.data("lazyload")+
				'" data-bgfit="'+u+
				'"data-bgposition="'+
				f+'" data-bgrepeat="'+a+
				'" data-lazydone="'+
				i.data("lazydone")+
				'" data-src="'+s+
				'" style="background-color:'+
				i.css("backgroundColor")+
				";background-repeat:"+a+
				";background-image:url("+s+
				");background-size:"+u+
				";background-position:"+f+
				';width:100%;height:100%;"></div>'
			);
			i.css({opacity:0});
			i.data("li-id",n)
		})
	}
	function E(e,n,r,i){
		var s=e;
		var o=s.find(".defaultimg");
		b(o,n);
		var u=o.data("src");
		var a=o.css("background-color");
		var f=n.width;
		var l=n.height;
		if(n.autoHeight=="on")l=n.container.height();
		var c=o.data("fxof");
		if(c==t)c=0;
		fullyoff=0;
		var h=0;
		var p=o.data("bgfit");
		var d=o.data("bgrepeat");
		var v=o.data("bgposition");
		if(p==t)p="cover";
		if(d==t)d="no-repeat";
		if(v==t)v="center center";
		if(i=="horizontal"){
			if(!r)var h=0-n.slotw;
			for(var m=0;m<n.slots;m++)s.append(
				'<div class="slot" style="position:absolute;'+"top:"+(0+fullyoff)+"px;"+"left:"+(c+m*n.slotw)+"px;"+"overflow:hidden;width:"+n.slotw+"px;"+"height:"+l+'px">'
				+'<div class="slotslide" style="position:absolute;'+"top:0px;left:"+h+"px;"+"width:"+n.slotw+"px;"+"height:"+l+'px;overflow:hidden;">'
				+'<div style="background-color:'+a+";"+"position:absolute;top:0px;"+"left:"+(0-m*n.slotw)+"px;"+"width:"+f+"px;height:"+l+"px;"+"background-image:url("+u+");"+"background-repeat:"+d+";"+"background-size:"+p+";background-position:"+v+';">'
				+"</div></div></div>"
			)
		}else{
			if(!r)var h=0-n.sloth;
			for(var m=0;m<n.slots+2;m++)s.append(
				'<div class="slot" style="position:absolute;'+"top:"+(fullyoff+m*n.sloth)+"px;"+"left:"+c+"px;"+"overflow:hidden;"+"width:"+f+"px;"+"height:"+n.sloth+'px">'
				+'<div class="slotslide" style="position:absolute;'+"top:"+h+"px;"+"left:0px;width:"+f+"px;"+"height:"+n.sloth+"px;"+'overflow:hidden;">'
				+'<div style="background-color:'+a+";"+"position:absolute;"+"top:"+(0-m*n.sloth)+"px;"+"left:0px;"+"width:"+f+"px;height:"+l+"px;"+"background-image:url("+u+");"+"background-repeat:"+d+";"+"background-size:"+p+";background-position:"+v+';">'
				+"</div></div></div>"
			)
		}
	}
	function S(e,n,r){
		var i=e;
		var s=i.find(".defaultimg");
		b(s,n);
		var o=s.data("src");
		var u=s.css("backgroundColor");
		var a=n.width;
		var f=n.height;
		if(n.autoHeight=="on")f=n.container.height();
		var l=s.data("fxof");
		if(l==t)l=0;
		fullyoff=0;
		var c=0;
		var h=0;
		if(n.sloth>n.slotw)h=n.sloth;
		else h=n.slotw;
		if(!r){
			var c=0-h
		}
		n.slotw=h;
		n.sloth=h;
		var p=0;
		var d=0;
		var v=s.data("bgfit");
		var m=s.data("bgrepeat");
		var g=s.data("bgposition");
		if(v==t)v="cover";
		if(m==t)m="no-repeat";
		if(g==t)g="center center";
		for(var y=0;y<n.slots;y++){
			d=0;
			for(var w=0;w<n.slots;w++){
				i.append(
					'<div class="slot" '+'style="position:absolute;'+"top:"+(fullyoff+d)+"px;"+"left:"+(l+p)+"px;"+"width:"+h+"px;"+"height:"+h+"px;"+'overflow:hidden;">'
					+'<div class="slotslide" data-x="'+p+'" data-y="'+d+'" '+'style="position:absolute;'+"top:"+0+"px;"+"left:"+0+"px;"+"width:"+h+"px;"+"height:"+h+"px;"+'overflow:hidden;">'
					+'<div style="position:absolute;'+"top:"+(0-d)+"px;"+"left:"+(0-p)+"px;"+"width:"+a+"px;"+"height:"+f+"px;"+"background-color:"+u+";"+"background-image:url("+o+");"+"background-repeat:"+m+";"+"background-size:"+v+";background-position:"+g+';">'
					+"</div></div></div>"
				);
				d=d+h
			}
			p=p+h
		}
	}
	
	/* 클릭시 화면 전환 */
	function x(n,r,i){
		if(i==t)i==80;
		setTimeout(
			function(){
				n.find(".slotholder .slot").each(function(){
					clearTimeout(e(this).data("tout"));
					e(this).remove()
				});
				r.transition=0
			},i
		)
	}
	
	/* 메인화면 로드 */
	function T(e,n){
		try{
			var r=e.find(">ul:first-child >li:eq("+n.act+")")
		}
		catch(i){
			var r=e.find(">ul:first-child >li:eq(1)")
		}
		n.lastslide=n.act;
		var s=e.find(">ul:first-child >li:eq("+n.next+")");
		var o=s.find(".defaultimg");
		if(o.data("lazyload")!=t&&o.data("lazyload")!="undefined"&&o.data("lazydone")!=1){
			o.css({backgroundImage:'url("'+s.find(".defaultimg").data("lazyload")+'")'});
			o.data("src",s.find(".defaultimg").data("lazyload"));o.data("orgw",0);
			e.find(".tp-loader").css({display:"block"}).transition({opacity:1,duration:300});
			var f=new Image;
			f.onload=function(){
				setTimeout(function(){a(n,e)},180);
				s.waitForImages(function(){
					o.data("lazydone",1);
					setTimeout(function(){u(n,e)},190);
					b(o,n);
					y(e,n);
					b(o,n);
					N(e,n);
					e.find(".tp-loader").transition({opacity:0,duration:300});
					setTimeout(
						function(){
							e.find(".tp-loader").css({display:"none"})
						},
						2200
					)
				})
			};
			f.src=s.find(".defaultimg").data("lazyload")
		}else{
			N(e,n)
		}
	}
	
	/* 메인화면 화면전환 효과 */
	function N(n,r){
		function x(){
			e.each(
				v,function(e,t){
					if(t[0]==p||t[8]==p){l=t[1];d=t[2];y=b}b=b+1
				}
			)
		}
		n.trigger("revolution.slide.onbeforeswap");
		r.transition=1;
		r.videoplaying=false;
		try{
			var i=n.find(">ul:first-child >li:eq("+r.act+")")
		}catch(s){
			var i=n.find(">ul:first-child >li:eq(1)")
		}
		r.lastslide=r.act;
		var u=n.find(">ul:first-child >li:eq("+r.next+")");
		var a=i.find(".slotholder");
		var f=u.find(".slotholder");
		i.css({visibility:"visible"});
		u.css({visibility:"visible"});
		if(r.ie){
			if(p=="boxfade")p="boxslide";
			if(p=="slotfade-vertical")p="slotzoom-vertical";
			if(p=="slotfade-horizontal")p="slotzoom-horizontal"
		}
		if(u.data("delay")!=t){
			r.cd=0;
			r.delay=u.data("delay")
		}else{
			r.delay=r.origcd
		}
		i.css({left:"0px",top:"0px"});
		u.css({left:"0px",top:"0px"});
		if(u.data("differentissplayed")=="prepared"){
			u.data("differentissplayed","done");
			u.data("transition",u.data("savedtransition"));
			u.data("slotamount",u.data("savedslotamount"));
			u.data("masterspeed",u.data("savedmasterspeed"))
		}
		if(u.data("fstransition")!=t&&u.data("differentissplayed")!="done"){
			u.data("savedtransition",u.data("transition"));
			u.data("savedslotamount",u.data("slotamount"));
			u.data("savedmasterspeed",u.data("masterspeed"));
			u.data("transition",u.data("fstransition"));
			u.data("slotamount",u.data("fsslotamount"));
			u.data("masterspeed",u.data("fsmasterspeed"));
			u.data("differentissplayed","prepared")
		}
		var l=0;
		var c=u.data("transition").split(",");
		var h=u.data("nexttransid");
		if(h==t){
			h=0;
			u.data("nexttransid",h)
		}else{
			h=h+1;
			if(h==c.length)h=0;
			u.data("nexttransid",h)
		}
		var p=c[h];
		var d=0;
		if(p=="slidehorizontal"){
			p="slideleft";
			if(r.leftarrowpressed==1)p="slideright"
		}
		if(p=="slidevertical"){
			p="slideup";
			if(r.leftarrowpressed==1)p="slidedown"
		}
		var v=[
			["boxslide",0,1,10,0,"box",false,null,0],
			["boxfade",1,0,10,0,"box",false,null,1],
			["slotslide-horizontal",2,0,0,200,"horizontal",true,false,2],
			["slotslide-vertical",3,0,0,200,"vertical",true,false,3],
			["curtain-1",4,3,0,0,"horizontal",true,true,4],
			["curtain-2",5,3,0,0,"horizontal",true,true,5],
			["curtain-3",6,3,25,0,"horizontal",true,true,6],
			["slotzoom-horizontal",7,0,0,400,"horizontal",true,true,7],
			["slotzoom-vertical",8,0,0,0,"vertical",true,true,8],
			["slotfade-horizontal",9,0,0,500,"horizontal",true,null,9],
			["slotfade-vertical",10,0,0,500,"vertical",true,null,10],
			["fade",11,0,1,300,"horizontal",true,null,11],
			["slideleft",12,0,1,0,"horizontal",true,true,12],
			["slideup",13,0,1,0,"horizontal",true,true,13],
			["slidedown",14,0,1,0,"horizontal",true,true,14],
			["slideright",15,0,1,0,"horizontal",true,true,15],
			["papercut",16,0,0,600,"",null,null,16],
			["3dcurtain-horizontal",17,0,20,100,"vertical",false,true,17],
			["3dcurtain-vertical",18,0,10,100,"horizontal",false,true,18],
			["cubic",19,0,20,600,"horizontal",false,true,19],
			["cube",19,0,20,600,"horizontal",false,true,20],
			["flyin",20,0,4,600,"vertical",false,true,21],
			["turnoff",21,0,1,1600,"horizontal",false,true,22],
			["incube",22,0,20,600,"horizontal",false,true,23],
			["cubic-horizontal",23,0,20,500,"vertical",false,true,24],
			["cube-horizontal",23,0,20,500,"vertical",false,true,25],
			["incube-horizontal",24,0,20,500,"vertical",false,true,26],
			["turnoff-vertical",25,0,1,1600,"horizontal",false,true,27],
			["fadefromright",12,1,1,0,"horizontal",true,true,28],
			["fadefromleft",15,1,1,0,"horizontal",true,true,29],
			["fadefromtop",14,1,1,0,"horizontal",true,true,30],
			["fadefrombottom",13,1,1,0,"horizontal",true,true,31],
			["fadetoleftfadefromright",12,2,1,0,"horizontal",true,true,32],
			["fadetorightfadetoleft",15,2,1,0,"horizontal",true,true,33],
			["fadetobottomfadefromtop",14,2,1,0,"horizontal",true,true,34],
			["fadetotopfadefrombottom",13,2,1,0,"horizontal",true,true,35],
			["parallaxtoright",12,3,1,0,"horizontal",true,true,36],
			["parallaxtoleft",15,3,1,0,"horizontal",true,true,37],
			["parallaxtotop",14,3,1,0,"horizontal",true,true,38],
			["parallaxtobottom",13,3,1,0,"horizontal",true,true,39],
			["scaledownfromright",12,4,1,0,"horizontal",true,true,40],
			["scaledownfromleft",15,4,1,0,"horizontal",true,true,41],
			["scaledownfromtop",14,4,1,0,"horizontal",true,true,42],
			["scaledownfrombottom",13,4,1,0,"horizontal",true,true,43],
			["zoomout",13,5,1,0,"horizontal",true,true,44],
			["zoomin",13,6,1,0,"horizontal",true,true,45],
			["notransition",26,0,1,0,"horizontal",true,null,46]
		];
		var m=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
		var g=[16,17,18,19,20,21,22,23,24,25,26,27];
		var l=0;
		var d=1;
		var y=0;
		var b=0;
		var w=new Array;
		if(p=="random"){
			p=Math.round(Math.random()*v.length-1);
			if(p>v.length-1)p=v.length-1
		}
		if(p=="random-static"){
			p=Math.round(Math.random()*m.length-1);
			if(p>m.length-1)p=m.length-1;p=m[p]
		}
		if(p=="random-premium"){
			p=Math.round(Math.random()*g.length-1);
			if(p>g.length-1)p=g.length-1;
			p=g[p]
		}
		x();
		if(o(8)&&l>15&&l<28){
			p=Math.round(Math.random()*m.length-1);
			if(p>m.length-1)p=m.length-1;
			p=m[p];
			b=0;
			x()
		}
		var T=-1;
		if(r.leftarrowpressed==1||r.act>r.next)T=1;
		r.leftarrowpressed=0;
		if(l>26)l=26;
		if(l<0)l=0;
		var N=300;
		if(u.data("masterspeed")!=t&&u.data("masterspeed")>99&&u.data("masterspeed")<4001)N=u.data("masterspeed");
		w=v[y];
		n.parent().find(".bullet").each(function(){
			var t=e(this);
			t.removeClass("selected");
			if(r.navigationArrows=="withbullet"||r.navigationArrows=="nexttobullets"){
				if(t.index()-1==r.next)t.addClass("selected")
			}else{
				if(t.index()==r.next)t.addClass("selected")
			}
		});
		n.find(">li").each(function(){
			var t=e(this);
			if(t.index!=r.act&&t.index!=r.next)t.css({"z-index":16})
		});
		i.css({"z-index":18});
		u.css({"z-index":20});
		u.css({opacity:0});
		if(i.index()!=u.index()&&r.firststart!=1){H(i,r)}M(u,r);
		if(u.data("slotamount")==t||u.data("slotamount")<1){
			r.slots=Math.round(Math.random()*12+4);
			if(p=="boxslide")r.slots=Math.round(Math.random()*6+3);
			else if(p=="flyin")r.slots=Math.round(Math.random()*4+1)
		}else{
			r.slots=u.data("slotamount")
		}
		if(u.data("rotate")==t)r.rotate=0;
		else if(u.data("rotate")==999)r.rotate=Math.round(Math.random()*360);
		else r.rotate=u.data("rotate");
		if(!e.support.transition||r.ie||r.ie9)r.rotate=0;
		if(r.firststart==1){
			i.css({opacity:0});
			r.firststart=0
		}
		N=N+w[4];
		if((l==4||l==5||l==6)&&r.slots<3)r.slots=3;
		if(w[3]!=0)r.slots=Math.min(r.slots,w[3]);
		if(l==9)r.slots=r.width/20;
		if(l==10)r.slots=r.height/20;
		if(w[5]=="box"){
			if(w[7]!=null)S(a,r,w[7]);
			if(w[6]!=null)S(f,r,w[6])
		}else if(w[5]=="vertical"||w[5]=="horizontal"){
			if(w[7]!=null)E(a,r,w[7],w[5]);if(w[6]!=null)E(f,r,w[6],w[5])
		}
		if(l<12||l>16)u.css({opacity:1});
		if(l==0){
			f.find(".defaultimg").css({opacity:0});
			var k=Math.ceil(r.height/r.sloth);
			var L=0;f.find(".slotslide").each(function(t){
				var s=e(this);
				L=L+1;
				if(L==k)L=0;
				TweenLite.fromTo(
					s,N/600,{opacity:0,top:0-r.sloth,left:0-r.slotw,rotation:r.rotate},
					{opacity:1,transformPerspective:600,top:0,left:0,scale:1,rotation:0,delay:(t*15+L*30)/1500,ease:Power2.easeOut,onComplete:function(){if(t==r.slots*r.slots-1){C(n,r,f,a,u,i)}}}
				)
			})
		}
		if(l==1){
			f.find(".defaultimg").css({opacity:0});
			var A;f.find(".slotslide").each(function(t){
				var n=e(this);
				rand=Math.random()*N+300;
				rand2=Math.random()*500+200;
				if(rand+rand2>A)A=rand2+rand2;
				TweenLite.fromTo(n,rand/1e3,{opacity:0,transformPerspective:600,rotation:r.rotate},{opacity:1,ease:Power2.easeInOut,rotation:0,delay:rand2/1e3})
			});
			setTimeout(
				function(){
					C(n,r,f,a,u,i)
				},
				N+300
			)
		}
		if(l==2){
			f.find(".defaultimg").css({opacity:0});
			a.find(".slotslide").each(function(){
				var t=e(this);
				TweenLite.to(t,N/1e3,{left:r.slotw,rotation:0-r.rotate,onComplete:function(){C(n,r,f,a,u,i)}})
			});
			f.find(".slotslide").each(function(){
				var t=e(this);
				TweenLite.fromTo(t,N/1e3,{left:0-r.slotw,rotation:r.rotate,transformPerspective:600},{left:0,rotation:0,ease:Power2.easeOut,onComplete:function(){C(n,r,f,a,u,i)}})
			})
		}
		if(l==3){
			f.find(".defaultimg").css({opacity:0});
			a.find(".slotslide").each(function(){
				var t=e(this);
				TweenLite.to(t,N/1e3,{top:r.sloth,rotation:r.rotate,transformPerspective:600,onComplete:function(){C(n,r,f,a,u,i)}})
			});
			f.find(".slotslide").each(function(){
				var t=e(this);
				TweenLite.fromTo(t,N/1e3,{top:0-r.sloth,rotation:r.rotate,transformPerspective:600},{top:0,rotation:0,ease:Power2.easeOut,onComplete:function(){C(n,r,f,a,u,i)}})
			})
		}
		if(l==4||l==5){
			f.find(".defaultimg").css({opacity:0});
			setTimeout(
				function(){
					a.find(".defaultimg").css({opacity:0})
				},
				100
			);
			var O=N/1e3;
			var _=O;a.find(".slotslide").each(function(t){
				var n=e(this);
				var i=t*O/r.slots;
				if(l==5)i=(r.slots-t-1)*O/r.slots/1.5;
				TweenLite.to(n,O*3,{transformPerspective:600,top:0+r.height,opacity:.5,rotation:r.rotate,ease:Power2.easeInOut,delay:i})
			});
			f.find(".slotslide").each(function(t){
				var s=e(this);
				var o=t*O/r.slots;if(l==5)o=(r.slots-t-1)*O/r.slots/1.5;
				TweenLite.fromTo(
					s,O*3,{top:0-r.height,opacity:.5,rotation:r.rotate,transformPerspective:600},
					{top:0,opacity:1,rotation:0,ease:Power2.easeInOut,delay:o,onComplete:function(){if(t==r.slots-1){C(n,r,f,a,u,i)}}}
				)
			})
		}
		if(l==6){
			if(r.slots<2)r.slots=2;
			f.find(".defaultimg").css({opacity:0});
			setTimeout(
				function(){
					a.find(".defaultimg").css({opacity:0})
				},
				100
			);
			a.find(".slotslide").each(function(t){
				var n=e(this);
				if(t<r.slots/2)var i=(t+2)*60;
				else var i=(2+r.slots-t)*60;
				TweenLite.to(n,(N+i)/1e3,{top:0+r.height,opacity:1,rotation:r.rotate,transformPerspective:600,ease:Power2.easeInOut})
			});
			f.find(".slotslide").each(function(t){
				var s=e(this);
				if(t<r.slots/2)var o=(t+2)*60;
				else var o=(2+r.slots-t)*60;
				TweenLite.fromTo(
					s,(N+o)/1e3,{top:0-r.height,opacity:1,rotation:r.rotate,transformPerspective:600},
					{top:0,opacity:1,rotation:0,ease:Power2.easeInOut,onComplete:function(){if(t==Math.round(r.slots/2)){C(n,r,f,a,u,i)}}}
				)
			})
		}
		if(l==7){
			N=N*2;
			f.find(".defaultimg").css({opacity:0});
			setTimeout(
				function(){
					a.find(".defaultimg").css({opacity:0})
				},
				100
			);
			a.find(".slotslide").each(function(){
				var t=e(this).find("div");
				TweenLite.to(
					t,N/1e3,{left:0-r.slotw/2+"px",top:0-r.height/2+"px",width:r.slotw*2+"px",height:r.height*2+"px",opacity:0,rotation:r.rotate,transformPerspective:600,ease:Power2.easeOut}
				)
			});
			f.find(".slotslide").each(function(t){
				var s=e(this).find("div");
				TweenLite.fromTo(
					s,N/1e3,{left:0,top:0,opacity:0,transformPerspective:600},
					{left:0-t*r.slotw+"px",ease:Power2.easeOut,top:0+"px",width:r.width,height:r.height,opacity:1,rotation:0,delay:.1,onComplete:function(){C(n,r,f,a,u,i)}}
				)
			})
		}
		if(l==8){
			N=N*3;
			f.find(".defaultimg").css({opacity:0});
			a.find(".slotslide").each(function(){
				var t=e(this).find("div");
				TweenLite.to(t,N/1e3,{left:0-r.width/2+"px",top:0-r.sloth/2+"px",width:r.width*2+"px",height:r.sloth*2+"px",transformPerspective:600,opacity:0,rotation:r.rotate})
			});
			f.find(".slotslide").each(function(t){
				var s=e(this).find("div");
				TweenLite.fromTo(
					s,N/1e3,{left:0,top:0,opacity:0,transformPerspective:600},
					{left:0+"px",top:0-t*r.sloth+"px",width:f.find(".defaultimg").data("neww")+"px",height:f.find(".defaultimg").data("newh")+"px",opacity:1,rotation:0,onComplete:function(){C(n,r,f,a,u,i)}}
				)
			})
		}
		if(l==9||l==10){
			f.find(".defaultimg").css({opacity:0});
			var D=0;
			f.find(".slotslide").each(function(t){
				var n=e(this);D++;
				TweenLite.fromTo(n,N/1e3,{opacity:0,transformPerspective:600,left:0,top:0},{opacity:1,ease:Power2.easeInOut,delay:t*4/1e3})
			});
			setTimeout(
				function(){
					C(n,r,f,a,u,i)
				},
				N+D*4
			)
		}
		if(l==11||l==26){
			f.find(".defaultimg").css({opacity:0,position:"relative"});
			var D=0;
			if(l==26)N=0;
			f.find(".slotslide").each(function(t){
				var n=e(this);
				TweenLite.fromTo(n,N/1e3,{opacity:0},{opacity:1,ease:Power2.easeInOut})
			});
			setTimeout(
				function(){
					C(n,r,f,a,u,i)
				},
				N+15
			)
		}
		if(l==12||l==13||l==14||l==15){
			setTimeout(
				function(){
					a.find(".defaultimg").css({opacity:0})
				},
				100
			);
			f.find(".defaultimg").css({opacity:0});
			var P=r.width;
			var B=r.height;
			var j=f.find(".slotslide");
			if(r.fullWidth=="on"||r.fullSreen=="on"){
				P=j.width();
				B=j.height()
			}
			var F=0;
			var I=0;
			if(l==12)F=P;
			else if(l==15)F=0-P;
			else if(l==13)I=B;
			else if(l==14)I=0-B;
			var q=1;
			var R=1;
			var U=1;
			var z=Power2.easeInOut;
			var W=Power2.easeInOut;
			var X=N/1e3;
			var V=X;
			if(d==1)q=0;if(d==2)q=0;
			if(d==3){
				z=Power2.easeInOut;
				W=Power1.easeInOut;
				i.css({position:"absolute","z-index":20});
				u.css({position:"absolute","z-index":15});
				X=N/1200
			}
			if(d==4||d==5)R=.6;
			if(d==6)R=1.4;
			if(d==5||d==6){
				U=1.4;
				q=0;
				P=0;
				B=0;
				F=0;
				I=0
			}
			if(d==6)U=.6;
			TweenLite.fromTo(
				j,X,{left:F,top:I,scale:U,opacity:q,rotation:r.rotate},
				{opacity:1,rotation:0,left:0,top:0,scale:1,ease:W,onComplete:function(){C(n,r,f,a,u,i);i.css({position:"absolute","z-index":18});u.css({position:"absolute","z-index":20})}}
			);
			var $=a.find(".slotslide");
			if(d==4||d==5){
				P=0;
				B=0
			}
			if(d!=1){
				if(l==12)TweenLite.to($,V,{left:0-P+"px",scale:R,opacity:q,rotation:r.rotate,ease:z});
				else if(l==15)TweenLite.to($,V,{left:P+"px",scale:R,opacity:q,rotation:r.rotate,ease:z});
				else if(l==13)TweenLite.to($,V,{top:0-B+"px",scale:R,opacity:q,rotation:r.rotate,ease:z});
				else if(l==14)TweenLite.to($,V,{top:B+"px",scale:R,opacity:q,rotation:r.rotate,ease:z})
			}
			u.css({opacity:1})
		}
		if(l==16){
			i.css({position:"absolute","z-index":20});
			u.css({position:"absolute","z-index":15});
			i.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');
			i.find(".tp-half-one").clone(true).appendTo(i).addClass("tp-half-two");
			i.find(".tp-half-two").removeClass("tp-half-one");
			var P=r.width;
			var B=r.height;
			if(r.autoHeight=="on")B=n.height();
			i.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+P+"px;height:"+B+'px;"></div>');
			i.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+P+"px;height:"+B+'px;"></div>');
			i.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"});
			i.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>');
			TweenLite.set(
				i.find(".tp-half-two"),{width:P,height:B,overflow:"hidden",zIndex:15,position:"absolute",top:B/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}
			);
			TweenLite.set(
				i.find(".tp-half-one"),{width:P,height:B/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}
			);
			var J=i.find(".defaultimg");
			var K=Math.round(Math.random()*20-10);
			var Q=Math.round(Math.random()*20-10);
			var G=Math.round(Math.random()*20-10);
			var Y=Math.random()*.4-.2;
			var Z=Math.random()*.4-.2;
			var et=Math.random()*1+1;
			var tt=Math.random()*1+1;
			TweenLite.fromTo(
				i.find(".tp-half-one"),N/1e3,{width:P,height:B/2,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"},
				{scale:et,rotation:K,y:0-B-B/4,ease:Power2.easeInOut}
			);
			setTimeout(
				function(){
					TweenLite.set(i.find(".tp-half-one"),{overflow:"hidden"})
				},50
			);
			TweenLite.fromTo(i.find(".tp-half-one"),N/2e3,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:N/2e3});
			TweenLite.fromTo(
				i.find(".tp-half-two"),N/1e3,{width:P,height:B,overflow:"hidden",position:"absolute",top:B/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"},
				{scale:tt,rotation:Q,y:B+B/4,ease:Power2.easeInOut}
			);
			TweenLite.fromTo(i.find(".tp-half-two"),N/2e3,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:N/2e3});
			if(i.html()!=null)TweenLite.fromTo(
				u,(N-200)/1e3,{opacity:0,scale:.8,x:r.width*Y,y:B*Z,rotation:G,transformPerspective:600,transformOrigin:"center center"},
				{rotation:0,scale:1,x:0,y:0,opacity:1,ease:Power2.easeInOut}
			);
			f.find(".defaultimg").css({opacity:1});
			setTimeout(
				function(){
					i.css({position:"absolute","z-index":18});
					u.css({position:"absolute","z-index":20});
					f.find(".defaultimg").css({opacity:1});
					a.find(".defaultimg").css({opacity:0});
					if(i.find(".tp-half-one").length>0){
						i.find(".tp-half-one .defaultimg").unwrap();
						i.find(".tp-half-one .slotholder").unwrap()
					}
					i.find(".tp-half-two").remove();r.transition=0;
					r.act=r.next
				},
				N
			)
			;u.css({opacity:1})
		}
		if(l==17){
			f.find(".defaultimg").css({opacity:0});
			f.find(".slotslide").each(function(t){
				var s=e(this);
				TweenLite.fromTo(
					s,N/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,transformPerspective:600,transformOrigin:"center center"},
					{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:t*.06,onComplete:function(){if(t==r.slots-1)C(n,r,f,a,u,i)}}
				)
			})
		}
		if(l==18){
			f.find(".defaultimg").css({opacity:0});
			f.find(".slotslide").each(function(t){
				var s=e(this);
				TweenLite.fromTo(
					s,N/500,{opacity:0,rotationY:310,scale:.9,rotationX:10,transformPerspective:600,transformOrigin:"center center"},
					{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:t*.06,onComplete:function(){if(t==r.slots-1)C(n,r,f,a,u,i)}}
				)
			})
		}
		if(l==19||l==22){
			f.find(".defaultimg").css({opacity:0});
			setTimeout(
				function(){
					a.find(".defaultimg").css({opacity:0})
				},
				100
			);
			var nt=u.css("z-index");var rt=i.css("z-index");
			var it=90;
			var q=1;
			if(T==1)it=-90;
			if(l==19){
				var st="center center -"+r.height/2;
				q=0
			}else{
				var st="center center "+r.height/2
			}
			TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-40});
			TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:-40,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(N/4e3)});
			TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-40});
			TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:-40,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(N/4e3)});
			f.find(".slotslide").each(function(t){
				var s=e(this);
				TweenLite.fromTo(
					s,N/1e3,{left:0,rotationY:r.rotate,opacity:q,top:0,scale:.8,transformPerspective:600,transformOrigin:st,rotationX:it},
					{left:0,rotationY:0,opacity:1,top:0,z:0,scale:1,rotationX:0,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)C(n,r,f,a,u,i)}}
				);
				TweenLite.to(s,.1,{opacity:1,delay:t*50/1e3+N/3e3})
			});
			a.find(".slotslide").each(function(t){
				var s=e(this);
				var o=-90;if(T==1)o=90;
				TweenLite.fromTo(
					s,N/1e3,{opacity:1,rotationY:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:st,rotationX:0},
					{opacity:1,rotationY:r.rotate,top:0,scale:.8,rotationX:o,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)C(n,r,f,a,u,i)}}
				);
				TweenLite.to(s,.1,{opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)})
			})
		}
		if(l==20){
			f.find(".defaultimg").css({opacity:0});
			setTimeout(
				function(){
					a.find(".defaultimg").css({opacity:0})
				},
				100
			);
			var nt=u.css("z-index");
			var rt=i.css("z-index");
			if(T==1){
				var ot=-r.width;
				var it=70;
				var st="left center -"+r.height/2
			}else{
				var ot=r.width;
				var it=-70;
				var st="right center -"+r.height/2
			}
			f.find(".slotslide").each(function(t){
				var s=e(this);
				TweenLite.fromTo(s,N/1500,{left:ot,rotationX:40,z:-600,opacity:q,top:0,transformPerspective:600,transformOrigin:st,rotationY:it},{left:0,delay:t*50/1e3,ease:Power2.easeInOut});
				TweenLite.fromTo(
					s,N/1e3,{rotationX:40,z:-600,opacity:q,top:0,scale:1,transformPerspective:600,transformOrigin:st,rotationY:it},
					{rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)C(n,r,f,a,u,i)}}
					);
				TweenLite.to(s,.1,{opacity:1,delay:t*50/1e3+N/2e3})
			});
			a.find(".slotslide").each(function(t){
				var s=e(this);
				if(T!=1){
					var o=-r.width;
					var l=70;
					var c="left center -"+r.height/2
				}else{
					var o=r.width;
					var l=-70;
					var c="right center -"+r.height/2
				}
				TweenLite.fromTo(
					s,N/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,transformPerspective:600,transformOrigin:c,rotationY:0},
					{opacity:1,rotationX:40,top:0,z:-600,left:o,scale:.8,rotationY:l,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)C(n,r,f,a,u,i)}}
				);
				TweenLite.to(s,.1,{opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)})
			})
		}
		if(l==21||l==25){
			f.find(".defaultimg").css({opacity:0});
			setTimeout(
				function(){
					a.find(".defaultimg").css({opacity:0})
				},
				100
			);
			var nt=u.css("z-index");
			var rt=i.css("z-index");
			if(T==1){
				var ot=-r.width;
				var it=110;
				if(l==25){
					var st="center top 0";
					rot2=-it;
					it=r.rotate
				}else{
					var st="left center 0";
					rot2=r.rotate
				}
			}else{
				var ot=r.width;
				var it=-110;
				if(l==25){
					var st="center bottom 0";
					rot2=-it;
					it=r.rotate
				}else{
					var st="right center 0";
					rot2=r.rotate
				}
			}
			f.find(".slotslide").each(function(t){
				var s=e(this);
				TweenLite.fromTo(
					s,N/1500,{left:0,rotationX:rot2,z:0,opacity:0,top:0,scale:1,transformPerspective:600,transformOrigin:st,rotationY:it},
					{left:0,rotationX:0,top:0,z:0,scale:1,rotationY:0,delay:t*100/1e3+N/1e4,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)C(n,r,f,a,u,i)}}
				);
				TweenLite.to(s,.3,{opacity:1,delay:t*100/1e3+N*.2/2e3+N/1e4})
			});
			if(T!=1){
				var ot=-r.width;
				var it=90;
				if(l==25){
					var st="center top 0";
					rot2=-it;
					it=r.rotate
				}else{
					var st="left center 0";
					rot2=r.rotate
				}
			}else{
				var ot=r.width;
				var it=-90;
				if(l==25){
					var st="center bottom 0";
					rot2=-it;
					it=r.rotate
				}else{
					var st="right center 0";
					rot2=r.rotate
				}
			}
			a.find(".slotslide").each(function(t){
				var n=e(this);
				TweenLite.fromTo(n,N/3e3,{left:0,rotationX:0,z:0,opacity:1,top:0,scale:1,transformPerspective:600,transformOrigin:st,rotationY:0},{left:0,rotationX:rot2,top:0,z:0,scale:1,rotationY:it,delay:t*100/1e3,ease:Power1.easeInOut});
				TweenLite.to(n,.2,{opacity:0,delay:t*50/1e3+(N/3e3-N/1e4)})
			})
		}
		if(l==23||l==24){
			f.find(".defaultimg").css({opacity:0});
			setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);
			var nt=u.css("z-index");
			var rt=i.css("z-index");
			var it=-90;
			if(T==1)it=90;
			var q=1;
			if(l==23){
				var st="center center -"+r.width/2;
				q=0
			}else{
				var st="center center "+r.width/2
			}
			var ut=0;
			TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-90});
			TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:-90,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(N/4e3)});
			TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-90});
			TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:-90,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(N/4e3)});
			f.find(".slotslide").each(function(t){
				var s=e(this);
				TweenLite.fromTo(
					s,N/1e3,{left:ut,rotationX:r.rotate,opacity:q,top:0,scale:1,transformPerspective:600,transformOrigin:st,rotationY:it},
					{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)C(n,r,f,a,u,i)}}
				);
				TweenLite.to(s,.1,{opacity:1,delay:t*50/1e3+N/3e3})
			});
			it=90;
			if(T==1)it=-90;
			a.find(".slotslide").each(function(t){
				var s=e(this);
				TweenLite.fromTo(
					s,N/1e3,{left:0,opacity:1,rotationX:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:st,rotationY:0},
					{left:ut,opacity:1,rotationX:r.rotate,top:0,scale:1,rotationY:it,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)C(n,r,f,a,u,i)}}
				);
				TweenLite.to(s,.1,{opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)})
			})
		}
		var at={};
		at.slideIndex=r.next+1;
		n.trigger("revolution.slide.onchange",at);
		setTimeout(function(){n.trigger("revolution.slide.onafterswap")},N);
		n.trigger("revolution.slide.onvideostop")
	}
	
	/* 전에 메인이미지 지우기 */
	function C(e,t,n,r,i,s){
		x(e,t);
		n.find(".defaultimg").css({opacity:1});
		if(i.index()!=s.index())r.find(".defaultimg").css({opacity:0});
		t.act=t.next;
		c(e)
	}
	function k(t){
		var n=t.target.getVideoEmbedCode();
		var r=e("#"+n.split('id="')[1].split('"')[0]).closest(".tp-simpleresponsive");
		if(t.data==YT.PlayerState.PLAYING){
			var i=r.find(".tp-bannertimer");
			var s=i.data("opt");
			i.stop();
			s.videoplaying=true;
			s.videostartednow=1
		}else{
			var i=r.find(".tp-bannertimer");
			var s=i.data("opt");
			if(t.data!=-1){
				if(s.conthover==0)i.animate({width:"100%"},{duration:s.delay-s.cd-100,queue:false,easing:"linear"});
				s.videoplaying=false;
				s.videostoppednow=1
			}
		}
		if(t.data==0&&s.nextslideatend==true)s.container.revnext()
	}
	function L(e,t,n){
		if(e.addEventListener)e.addEventListener(t,n,false);
		else e.attachEvent(t,n,false)
	}
	function A(t,n){
		var r=$f(t);
		var i=e("#"+t).closest(".tp-simpleresponsive");
		r.addEvent("ready",function(e){
			if(n)r.api("play");
			r.addEvent("play",function(e){
				var t=i.find(".tp-bannertimer");
				var n=t.data("opt");
				t.stop();
				n.videoplaying=true
			});
			r.addEvent("finish",function(e){
				var t=i.find(".tp-bannertimer");
				var n=t.data("opt");
				if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});
				n.videoplaying=false;
				n.videostartednow=1;
				if(n.nextslideatend==true)n.container.revnext()
			});
			r.addEvent("pause",function(e){
				var t=i.find(".tp-bannertimer");
				var n=t.data("opt");
				if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});
				n.videoplaying=false;
				n.videostoppednow=1
			})
		})
	}
	function O(t){
		t.on("play",function(){
			var t=e("body").find(".tp-bannertimer");
			var n=t.data("opt");
			t.stop();
			try{n.videoplaying=true}catch(r){}
		});
		t.on("pause",function(){
			var t=e("body").find(".tp-bannertimer");
			var n=t.data("opt");
			if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});
			n.videoplaying=false;n.videostoppednow=1
		});
		t.on("ended",function(){
			var t=e("body").find(".tp-bannertimer");
			var n=t.data("opt");
			if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});
			n.videoplaying=false;
			n.videostoppednow=1;
			if(n.nextslideatend==true)n.container.revnext()
		})
	}
	
	/* 메인 부슬라이드 화면표시 */
	function M(n,r,i){
		var s=0;
		var o=0;
		n.find(".tp-caption").each(function(n){
			s=r.width/2-r.startwidth*r.bw/2;
			var u=r.bw;
			var a=r.bh;
			if(r.fullScreen=="on")o=r.height/2-r.startheight*r.bh/2;
			if(r.autoHeight=="on")o=r.container.height()/2-r.startheight*r.bh/2;
			if(o<0)o=0;
			var f=e(this);
			var l=0;
			if(r.width<r.hideCaptionAtLimit&&f.data("captionhidden")=="on"){
				f.addClass("tp-hidden-caption");
				l=1
			}else{
				if(r.width<r.hideAllCaptionAtLimit||r.width<r.hideAllCaptionAtLilmit){
					f.addClass("tp-hidden-caption");
					l=1
				}else{
					f.removeClass("tp-hidden-caption")
				}
			}
			if(l==0){
				if(f.data("linktoslide")!=t&&!f.hasClass("hasclicklistener")){
					f.addClass("hasclicklistener");
					f.css({cursor:"pointer"});
					if(f.data("linktoslide")!="no"){
						f.click(function(){
							var t=e(this);
							var n=t.data("linktoslide");
							if(n!="next"&&n!="prev"){
								r.container.data("showus",n);
								r.container.parent().find(".tp-rightarrow").click()
							}else if(n=="next")r.container.parent().find(".tp-rightarrow").click();
							else if(n=="prev")r.container.parent().find(".tp-leftarrow").click()
						})
					}
				}
				if(s<0)s=0;
				var c="iframe"+Math.round(Math.random()*1e3+1);
				if(f.find("iframe").length>0||f.find("video").length>0){
					if(f.data("autoplayonlyfirsttime")==true||f.data("autoplayonlyfirsttime")=="true"){
						f.data("autoplay",true)
					}f.find("iframe").each(function(){
						var n=e(this);
						r.nextslideatend=f.data("nextslideatend");
						if(f.data("thumbimage")!=t&&f.data("thumbimage").length>2&&f.data("autoplay")!=true&&!i){
							f.find(".tp-thumb-image").remove();
							f.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+f.data("thumbimage")+'); background-size:cover"></div>')
						}
						if(n.attr("src").toLowerCase().indexOf("youtube")>=0){
							if(!n.hasClass("HasListener")){
								try{
									n.attr("id",c);
									var s;
									if(f.data("autoplay")==true)s=new YT.Player(c,{events:{onStateChange:k,onReady:function(e){e.target.playVideo()}}});
									else s=new YT.Player(c,{events:{onStateChange:k}});
									n.addClass("HasListener");
									f.data("player",s)
								}
								catch(o){}
							}else{
								if(f.data("autoplay")==true){
									var s=f.data("player");
									f.data("timerplay",setTimeout(function(){s.playVideo()},f.data("start")))
								}
							}
							f.find(".tp-thumb-image").click(function(){
								TweenLite.to(e(this),.3,{opacity:0,ease:Power3.easeInOut,onComplete:function(){f.find(".tp-thumb-image").remove()}});
								var t=f.data("player");
								t.playVideo()
							})
						}else{
							if(n.attr("src").toLowerCase().indexOf("vimeo")>=0){
								if(!n.hasClass("HasListener")){
									n.addClass("HasListener");
									n.attr("id",c);
									var u=n.attr("src");
									var a={},l=u,h=/([^&=]+)=([^&]*)/g,p;
									while(p=h.exec(l)){
										a[decodeURIComponent(p[1])]=decodeURIComponent(p[2])
									}
									if(a["player_id"]!=t)u=u.replace(a["player_id"],c);
									else u=u+"&player_id="+c;
									try{
										u=u.replace("api=0","api=1")
									}
									catch(o){}
									u=u+"&api=1";
									n.attr("src",u);
									var s=f.find("iframe")[0];
									$f(s).addEvent("ready",function(){
										A(c,f.data("autoplay"))
									})
								}else{
									if(f.data("autoplay")==true){
										var n=f.find("iframe");
										var d=n.attr("id");
										var v=$f(d);
										f.data("timerplay",setTimeout(function(){v.api("play")},f.data("start")))
									}
								}
								f.find(".tp-thumb-image").click(function(){
									TweenLite.to(e(this),.3,{opacity:0,ease:Power3.easeInOut,onComplete:function(){f.find(".tp-thumb-image").remove()}});
									var t=f.find("iframe");
									var n=t.attr("id");
									var r=$f(n);
									r.api("play")
								})
							}
						}
					});
					if(f.find("video").length>0){
						f.find("video").each(function(n){
							var i=e(this).parent();
							if(i.hasClass("video-js")){
								r.nextslideatend=f.data("nextslideatend");
								if(!i.hasClass("HasListener")){
									i.addClass("HasListener");
									var s="videoid_"+Math.round(Math.random()*1e3+1);
									i.attr("id",s);
									videojs(s).ready(function(){
										O(this)
									})
								}else{
									s=i.attr("id")
								}
								if(f.data("autoplay")==true){
									var o=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");
									setTimeout(function(){
										o.stop();
										r.videoplaying=true
									},200);
									videojs(s).ready(function(){
										var e=this;
										i.data("timerplay",setTimeout(function(){e.play()},f.data("start")))
									})
								}
								if(i.data("ww")==t)i.data("ww",i.width());
								if(i.data("hh")==t)i.data("hh",i.height());
								videojs(s).ready(function(){
									if(!f.hasClass("fullscreenvideo")){
										var e=videojs(s);
										try{
											e.width(i.data("ww")*r.bw);e.height(i.data("hh")*r.bh)
										}
										catch(t){}
									}
								})
							}
						})
					}
					if(f.data("autoplay")==true){
						var h=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");
						setTimeout(function(){h.stop();r.videoplaying=true},200);
						r.videoplaying=true;
						if(f.data("autoplayonlyfirsttime")==true||f.data("autoplayonlyfirsttime")=="true"){
							f.data("autoplay",false);
							f.data("autoplayonlyfirsttime",false)
						}
					}
				}
				var p=0;
				var d=0;
				if(f.find("img").length>0){
					var v=f.find("img");
					if(v.data("ww")==t)v.data("ww",v.width());
					if(v.data("hh")==t)v.data("hh",v.height());
					var m=v.data("ww");
					var g=v.data("hh");
					v.width(m*r.bw);
					v.height(g*r.bh);
					p=v.width();
					d=v.height()
				}else{
					if(f.find("iframe").length>0){
						var v=f.find("iframe");
						v.css({display:"block"});
						if(f.data("ww")==t){
							f.data("ww",v.width())
						}
						if(f.data("hh")==t)f.data("hh",v.height());
						var m=f.data("ww");
						var g=f.data("hh");
						var y=f;
						if(y.data("fsize")==t)y.data("fsize",parseInt(y.css("font-size"),0)||0);
						if(y.data("pt")==t)y.data("pt",parseInt(y.css("paddingTop"),0)||0);
						if(y.data("pb")==t)y.data("pb",parseInt(y.css("paddingBottom"),0)||0);
						if(y.data("pl")==t)y.data("pl",parseInt(y.css("paddingLeft"),0)||0);
						if(y.data("pr")==t)y.data("pr",parseInt(y.css("paddingRight"),0)||0);
						if(y.data("mt")==t)y.data("mt",parseInt(y.css("marginTop"),0)||0);
						if(y.data("mb")==t)y.data("mb",parseInt(y.css("marginBottom"),0)||0);
						if(y.data("ml")==t)y.data("ml",parseInt(y.css("marginLeft"),0)||0);
						if(y.data("mr")==t)y.data("mr",parseInt(y.css("marginRight"),0)||0);
						if(y.data("bt")==t)y.data("bt",parseInt(y.css("borderTop"),0)||0);
						if(y.data("bb")==t)y.data("bb",parseInt(y.css("borderBottom"),0)||0);
						if(y.data("bl")==t)y.data("bl",parseInt(y.css("borderLeft"),0)||0);
						if(y.data("br")==t)y.data("br",parseInt(y.css("borderRight"),0)||0);
						if(y.data("lh")==t)y.data("lh",parseInt(y.css("lineHeight"),0)||0);
						var b=r.width;
						var w=r.height;
						if(b>r.startwidth)b=r.startwidth;
						if(w>r.startheight)w=r.startheight;
						if(!f.hasClass("fullscreenvideo"))f.css({
							"font-size":y.data("fsize")*r.bw+"px",
							"padding-top":y.data("pt")*r.bh+"px",
							"padding-bottom":y.data("pb")*r.bh+"px",
							"padding-left":y.data("pl")*r.bw+"px",
							"padding-right":y.data("pr")*r.bw+"px",
							"margin-top":y.data("mt")*r.bh+"px",
							"margin-bottom":y.data("mb")*r.bh+"px",
							"margin-left":y.data("ml")*r.bw+"px",
							"margin-right":y.data("mr")*r.bw+"px",
							"border-top":y.data("bt")*r.bh+"px",
							"border-bottom":y.data("bb")*r.bh+"px",
							"border-left":y.data("bl")*r.bw+"px",
							"border-right":y.data("br")*r.bw+"px",
							"line-height":y.data("lh")*r.bh+"px",
							height:g*r.bh+"px",
							"white-space":"nowrap"
						});
						else{s=0;o=0;f.data("x",0);f.data("y",0);var E=r.height;if(r.autoHeight=="on")E=r.container.height();f.css({width:r.width,height:E})}
						v.width(m*r.bw);
						v.height(g*r.bh);
						p=v.width();
						d=v.height()
					}else{
						f.find(".tp-resizeme, .tp-resizeme *").each(function(){
							P(e(this),r)
						});
						if(f.hasClass("tp-resizeme")){
							f.find("*").each(function(){
								P(e(this),r)
							})
						}
						P(f,r);
						d=f.outerHeight(true);
						p=f.outerWidth(true);
						var S=f.outerHeight();
						var x=f.css("backgroundColor");
						f.find(".frontcorner").css({borderWidth:S+"px",left:0-S+"px",borderRight:"0px solid transparent",borderTopColor:x});
						f.find(".frontcornertop").css({borderWidth:S+"px",left:0-S+"px",borderRight:"0px solid transparent",borderBottomColor:x});
						f.find(".backcorner").css({borderWidth:S+"px",right:0-S+"px",borderLeft:"0px solid transparent",borderBottomColor:x});
						f.find(".backcornertop").css({borderWidth:S+"px",right:0-S+"px",borderLeft:"0px solid transparent",borderTopColor:x})
					}
				}
				if(r.fullScreenAlignForce=="on"){
					u=1;
					a=1;
					s=0;
					o=0
				}
				if(f.data("voffset")==t)f.data("voffset",0);
				if(f.data("hoffset")==t)f.data("hoffset",0);
				var T=f.data("voffset")*u;
				var N=f.data("hoffset")*u;
				var C=r.startwidth*u;
				var L=r.startheight*u;
				if(r.fullScreenAlignForce=="on"){
					C=r.container.width();
					L=r.container.height()
				}
				if(f.data("x")=="center"||f.data("xcenter")=="center"){
					f.data("xcenter","center");
					f.data("x",(C/2-f.outerWidth(true)/2)/u+N)
				}
				if(f.data("x")=="left"||f.data("xleft")=="left"){
					f.data("xleft","left");
					f.data("x",0/u+N)
				}
				if(f.data("x")=="right"||f.data("xright")=="right"){
					f.data("xright","right");
					f.data("x",(C-f.outerWidth(true)+N)/u)
				}
				if(f.data("y")=="center"||f.data("ycenter")=="center"){
					f.data("ycenter","center");
					f.data("y",(L/2-f.outerHeight(true)/2)/a+T)
				}
				if(f.data("y")=="top"||f.data("ytop")=="top"){
					f.data("ytop","top");f.data("y",0/r.bh+T)
				}
				if(f.data("y")=="bottom"||f.data("ybottom")=="bottom"){
					f.data("ybottom","bottom");
					f.data("y",(L-f.outerHeight(true)+T)/u)
				}
				if(f.data("start")==t)f.data("start",1e3);
				var M=f.data("easing");
				if(M==t)M="Power1.easeOut";
				var D=f.data("start")/1e3;
				var H=f.data("speed")/1e3;
				var j=u*f.data("x")+s;
				var F=r.bh*f.data("y")+o;
				if(r.fullScreenAlignForce=="on")F=f.data("y")+o;
				TweenLite.killTweensOf(f,false);
				clearTimeout(f.data("reversetimer"));
				var I=0,q=j,R=F,U=2,z=1,W=0,X=1,V=1,$=1,J=0,K=0,Q=0,G=0,Y=0,Z=0,et=0,tt="center,center",nt=300,rt=0,it=false,st=0;
				if(f.data("repeat")!=t)rt=f.data("repeat");
				if(f.data("yoyo")!=t)it=f.data("yoyo");
				if(f.data("repeatdelay")!=t)st=f.data("repeatdelay");
				if(f.hasClass("customin")){
					var ot=f.data("customin").split(";");
					e.each(ot,function(e,t){
						t=t.split(":");
						var n=t[0],r=t[1];
						if(n=="rotationX")K=parseInt(r,0);
						if(n=="rotationY")Q=parseInt(r,0);
						if(n=="rotationZ")G=parseInt(r,0);
						if(n=="scaleX")V=parseFloat(r);
						if(n=="scaleY")$=parseFloat(r);
						if(n=="opacity")et=parseFloat(r);
						if(n=="skewX")Y=parseInt(r,0);
						if(n=="skewY")Z=parseInt(r,0);
						if(n=="x")q=j+parseInt(r,0);
						if(n=="y")R=F+parseInt(r,0);
						if(n=="z")U=parseInt(r,0);
						if(n=="transformOrigin")tt=r.toString();
						if(n=="transformPerspective")nt=parseInt(r,0)
					})
				}
				if(f.hasClass("randomrotate")){
					X=Math.random()*3+1;
					J=Math.round(Math.random()*200-100);
					q=j+Math.round(Math.random()*200-100);
					R=F+Math.round(Math.random()*200-100)
				}
				if(f.hasClass("lfr")||f.hasClass("skewfromright"))q=15+r.width;
				if(f.hasClass("lfl")||f.hasClass("skewfromleft"))q=-15-p;
				if(f.hasClass("sfl")|f.hasClass("skewfromleftshort"))q=j-50;
				if(f.hasClass("sfr")|f.hasClass("skewfromrightshort"))q=j+50;
				if(f.hasClass("lft"))R=-25-d;if(f.hasClass("lfb"))R=25+r.height;
				if(f.hasClass("sft"))R=F-50;if(f.hasClass("sfb"))R=F+50;
				if(f.hasClass("skewfromright")||f.hasClass("skewfromrightshort"))Y=-85;
				if(f.hasClass("skewfromleft")||f.hasClass("skewfromleftshort"))Y=85;
				if(_().toLowerCase()=="safari"){
					K=0;
					Q=0
				}
				q=Math.round(q);
				R=Math.round(R);
				j=Math.round(j);
				F=Math.round(F);
				if(f.hasClass("customin")){
					f.data("anim",TweenLite.fromTo(
						f,H,{scaleX:V,scaleY:$,rotationX:K,rotationY:Q,rotationZ:G,x:0,y:0,left:q,top:R,z:U,opacity:et,transformPerspective:nt,transformOrigin:tt,visibility:"hidden"},
						{left:j,top:F,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",opacity:1,delay:D,ease:M,overwrite:"all"}
					))
				}else{
					f.data("anim",TweenLite.fromTo(
						f,H,{scale:X,rotationX:0,rotationY:0,skewY:0,rotation:J,left:q+"px",top:R+"px",opacity:0,z:0,x:0,y:0,skewX:Y,transformPerspective:600,visibility:"visible"},
						{left:j+"px",top:F+"px",scale:1,skewX:0,rotation:0,z:0,visibility:"visible",opacity:1,delay:D,ease:M,overwrite:"all",yoyo:it,repeat:rt,repeatDelay:st}
					))
				}
				f.data("killall",setTimeout(
					function(){f.css({transform:"none","-moz-transform":"none","-webkit-transform":"none"})},H*1e3+D*1e3+20)
				);
				f.data("timer",setTimeout(
					function(){if(f.hasClass("fullscreenvideo"))f.css({display:"block"})},f.data("start"))
				);
				if(f.data("end")!=t)B(f,r,f.data("end")/1e3)
			}
		});
		var u=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");
		u.data("opt",r)
	}
	function _(){
		var e=navigator.appName,t=navigator.userAgent,n;
		var r=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
		if(r&&(n=t.match(/version\/([\.\d]+)/i))!=null)r[2]=n[1];r=r?[r[1],r[2]]:[e,navigator.appVersion,"-?"];
		return r[0]
	}
	function D(){
		var e=navigator.appName,t=navigator.userAgent,n;
		var r=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
		if(r&&(n=t.match(/version\/([\.\d]+)/i))!=null)r[2]=n[1];r=r?[r[1],r[2]]:[e,navigator.appVersion,"-?"];
		return r[1]
	}
	function P(e,n){
		if(e.data("fsize")==t)e.data("fsize",parseInt(e.css("font-size"),0)||0);
		if(e.data("pt")==t)e.data("pt",parseInt(e.css("paddingTop"),0)||0);
		if(e.data("pb")==t)e.data("pb",parseInt(e.css("paddingBottom"),0)||0);
		if(e.data("pl")==t)e.data("pl",parseInt(e.css("paddingLeft"),0)||0);
		if(e.data("pr")==t)e.data("pr",parseInt(e.css("paddingRight"),0)||0);
		if(e.data("mt")==t)e.data("mt",parseInt(e.css("marginTop"),0)||0);
		if(e.data("mb")==t)e.data("mb",parseInt(e.css("marginBottom"),0)||0);
		if(e.data("ml")==t)e.data("ml",parseInt(e.css("marginLeft"),0)||0);
		if(e.data("mr")==t)e.data("mr",parseInt(e.css("marginRight"),0)||0);
		if(e.data("bt")==t)e.data("bt",parseInt(e.css("borderTopWidth"),0)||0);
		if(e.data("bb")==t)e.data("bb",parseInt(e.css("borderBottomWidth"),0)||0);
		if(e.data("bl")==t)e.data("bl",parseInt(e.css("borderLeftWidth"),0)||0);
		if(e.data("br")==t)e.data("br",parseInt(e.css("borderRightWidth"),0)||0);
		if(e.data("lh")==t)e.data("lh",parseInt(e.css("lineHeight"),0)||0);
		if(e.data("minwidth")==t)e.data("minwidth",parseInt(e.css("minWidth"),0)||0);
		if(e.data("minheight")==t)e.data("minheight",parseInt(e.css("minHeight"),0)||0);
		if(e.data("maxwidth")==t)e.data("maxwidth",parseInt(e.css("maxWidth"),0)||"none");
		if(e.data("maxheight")==t)e.data("maxheight",parseInt(e.css("maxHeight"),0)||"none");
		e.css({
			"font-size":Math.round(e.data("fsize")*n.bw)+"px",
			"padding-top":Math.round(e.data("pt")*n.bh)+"px",
			"padding-bottom":Math.round(e.data("pb")*n.bh)+"px",
			"padding-left":Math.round(e.data("pl")*n.bw)+"px",
			"padding-right":Math.round(e.data("pr")*n.bw)+"px",
			"margin-top":e.data("mt")*n.bh+"px",
			"margin-bottom":e.data("mb")*n.bh+"px",
			"margin-left":e.data("ml")*n.bw+"px",
			"margin-right":e.data("mr")*n.bw+"px",
			borderTopWidth:Math.round(e.data("bt")*n.bh)+"px",
			borderBottomWidth:Math.round(e.data("bb")*n.bh)+"px",
			borderLeftWidth:Math.round(e.data("bl")*n.bw)+"px",
			borderRightWidth:Math.round(e.data("br")*n.bw)+"px",
			"line-height":Math.round(e.data("lh")*n.bh)+"px",
			"white-space":"nowrap",
			minWidth:e.data("minwidth")*n.bw+"px",
			minHeight:e.data("minheight")*n.bh+"px"
		});
		if(e.data("maxheight")!="none")e.css({maxHeight:e.data("maxheight")*n.bh+"px"});
		if(e.data("maxwidth")!="none")e.css({maxWidth:e.data("maxwidth")*n.bw+"px"})
	}
	function H(t,n){
		t.find(".tp-caption").each(function(t){
			var r=e(this);
			if(r.find("iframe").length>0){
				try{
					var i=r.find("iframe");
					var s=i.attr("id");
					var o=$f(s);
					o.api("pause");
					clearTimeout(r.data("timerplay"))
				}catch(u){}
				try{
					var a=r.data("player");
					a.stopVideo();
					clearTimeout(r.data("timerplay"))
				}catch(u){}
			}
			if(r.find("video").length>0){
				try{
					r.find("video").each(function(t){
						var n=e(this).parent();
						var r=n.attr("id");
						clearTimeout(n.data("timerplay"));
						videojs(r).ready(function(){var e=this;e.pause()})
					})
				}catch(u){}
			}
			try{B(r,n,0)}catch(u){}
		})
	}
	function B(n,r,i){
		var s=n.data("endspeed");
		if(s==t)s=n.data("speed");
		s=s/1e3;
		var o=n.data("endeasing");
		if(o==t)o=Power1.easeInOut;
		if(n.hasClass("ltr")||n.hasClass("ltl")||n.hasClass("str")||n.hasClass("stl")||n.hasClass("ltt")||n.hasClass("ltb")||n.hasClass("stt")||n.hasClass("stb")||n.hasClass("skewtoright")||n.hasClass("skewtorightshort")||n.hasClass("skewtoleft")||n.hasClass("skewtoleftshort")){
			S=0;
			if(n.hasClass("skewtoright")||n.hasClass("skewtorightshort"))S=35;
			if(n.hasClass("skewtoleft")||n.hasClass("skewtoleftshort"))S=-35;
			var u=n.position().left;
			var a=n.position().top;
			if(n.hasClass("ltr")||n.hasClass("skewtoright"))u=r.width+60;
			else if(n.hasClass("ltl")||n.hasClass("skewtoleft"))u=0-n.width()-60;
			else if(n.hasClass("ltt"))a=0-n.height()-60;
			else if(n.hasClass("ltb"))a=r.height+60;
			else if(n.hasClass("str")||n.hasClass("skewtorightshort")){u=u+50;oo=0}
			else if(n.hasClass("stl")||n.hasClass("skewtoleftshort")){u=u-50;oo=0}
			else if(n.hasClass("stt")){a=a-50;oo=0}
			else if(n.hasClass("stb")){a=a+50;oo=0}
			if(n.hasClass("skewtorightshort"))u=u+220;
			if(n.hasClass("skewtoleftshort"))u=u-220;
			n.data("outanim",TweenLite.to(
				n,s,{left:u,top:a,scale:1,rotation:0,skewX:S,opacity:0,delay:i,z:0,overwrite:"auto",ease:o,onStart:function(){if(n.data("anim")!=t)n.data("anim").pause()}}
			))
		}else if(n.hasClass("randomrotateout")){
			n.data("outanim",TweenLite.to(
				n,s,{left:Math.random()*r.width,top:Math.random()*r.height,scale:Math.random()*2+.3,rotation:Math.random()*360-180,z:0,opacity:0,delay:i,ease:o,onStart:function(){if(n.data("anim")!=t)n.data("anim").pause()}}
			))
		}else if(n.hasClass("fadeout")){
			n.data("outanim",TweenLite.to(
				n,s,{opacity:0,delay:i,ease:o,onStart:function(){if(n.data("anim")!=t)n.data("anim").pause()}}
			))
		}else if(n.hasClass("customout")){
			var f=0,l=0,c=0,h=2,p=1,d=0,v=1,m=1,g=1,y=0,b=0,w=0,E=0,S=0,x=0,T=0,N="center,center",C=300;
			var k=n.data("customout").split(";");
			e.each(k,function(e,t){t=t.split(":");
			var n=t[0],r=t[1];
			if(n=="rotationX")b=parseInt(r,0);
			if(n=="rotationY")w=parseInt(r,0);
			if(n=="rotationZ")E=parseInt(r,0);
			if(n=="scaleX")m=parseFloat(r);
			if(n=="scaleY")g=parseFloat(r);
			if(n=="opacity")T=parseFloat(r);
			if(n=="skewX")S=parseInt(r,0);
			if(n=="skewY")x=parseInt(r,0);
			if(n=="x")l=parseInt(r,0);
			if(n=="y")c=parseInt(r,0);
			if(n=="z")h=parseInt(r);
			if(n=="transformOrigin")N=r;
			if(n=="transformPerspective")C=parseInt(r,0)});
			n.data("outanim",TweenLite.to(
				n,s,{scaleX:m,scaleY:g,rotationX:b,rotationY:w,rotationZ:E,x:l,y:c,z:h,opacity:T,delay:i,ease:o,overwrite:"auto",onStart:function(){
					if(n.data("anim")!=t)n.data("anim").pause();
					TweenLite.set(n,{transformPerspective:C,transformOrigin:N,overwrite:"auto"})
				}}
			))
		}else{
			clearTimeout(n.data("reversetimer"));n.data("reversetimer",setTimeout(function(){n.data("anim").reverse()},i*1e3))
		}
	}
	function j(t,n){
		t.children().each(function(){
			try{e(this).die("click")}
			catch(t){}
			try{e(this).die("mouseenter")}
			catch(t){}
			try{e(this).die("mouseleave")}
			catch(t){}
			try{e(this).unbind("hover")}
			catch(t){}
		});
		try{t.die("click","mouseenter","mouseleave")}
		catch(r){}
		clearInterval(n.cdint);
		t=null
	}
	function F(n,r){
		r.cd=0;
		r.loop=0;
		if(r.stopAfterLoops!=t&&r.stopAfterLoops>-1)r.looptogo=r.stopAfterLoops;
		else r.looptogo=9999999;
		if(r.stopAtSlide!=t&&r.stopAtSlide>-1)r.lastslidetoshow=r.stopAtSlide;
		else r.lastslidetoshow=999;
		r.stopLoop="off";
		if(r.looptogo==0)r.stopLoop="on";
		if(r.slideamount>1&&!(r.stopAfterLoops==0&&r.stopAtSlide==1)){
			var i=n.find(".tp-bannertimer");
			if(i.length>0){
				i.css({width:"0%"});
				if(r.videoplaying!=true)i.animate({width:"100%"},{duration:r.delay-100,queue:false,easing:"linear"})
			}i.data("opt",r);
			r.cdint=setInterval(function(){
				if(e("body").find(n).length==0)j(n,r);
				if(n.data("conthover-changed")==1){
					r.conthover=n.data("conthover");
					n.data("conthover-changed",0)
				}
				if(r.conthover!=1&&r.videoplaying!=true&&r.width>r.hideSliderAtLimit){r.cd=r.cd+100}
				if(r.fullWidth!="on")if(r.width>r.hideSliderAtLimit)n.parent().removeClass("tp-hide-revslider");
				else n.parent().addClass("tp-hide-revslider");
				if(r.videostartednow==1){
					n.trigger("revolution.slide.onvideoplay");
					r.videostartednow=0
				}
				if(r.videostoppednow==1){
					n.trigger("revolution.slide.onvideostop");
					r.videostoppednow=0
				}
				if(r.cd>=r.delay){
					r.cd=0;
					r.act=r.next;
					r.next=r.next+1;
					if(r.next>n.find(">ul >li").length-1){
						r.next=0;
						r.looptogo=r.looptogo-1;
						if(r.looptogo<=0){r.stopLoop="on"}
					}
					if(r.stopLoop=="on"&&r.next==r.lastslidetoshow-1){
						clearInterval(r.cdint);
						n.find(".tp-bannertimer").css({visibility:"hidden"});
						n.trigger("revolution.slide.onstop")
					}
					T(n,r);
					if(i.length>0){
						i.css({width:"0%"});
						if(r.videoplaying!=true)i.animate({width:"100%"},{duration:r.delay-100,queue:false,easing:"linear"})
					}
				}
			},100);
			n.hover(function(){
				if(r.onHoverStop=="on"){
					r.conthover=1;
					i.stop();
					n.trigger("revolution.slide.onpause")
				}
			},
			function(){
				if(n.data("conthover")!=1){
					n.trigger("revolution.slide.onresume");
					r.conthover=0;
					if(r.onHoverStop=="on"&&r.videoplaying!=true){
						i.animate({width:"100%"},{duration:r.delay-r.cd-100,queue:false,easing:"linear"})
					}
				}
			})
		}
	}
	
	e.fn.extend({
		revolution:function(i){
			e.fn.revolution.defaults={
				delay:9e3,
				startheight:500,
				startwidth:960,
				fullScreenAlignForce:"off",
				autoHeight:"off",
				hideThumbs:200,
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,
				navigationType:"bullet",
				navigationArrows:"solo",
				hideThumbsOnMobile:"off",
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResoluition:0,
				navigationStyle:"round",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				keyboardNavigation:"on",
				touchenabled:"on",
				onHoverStop:"on",
				stopAtSlide:-1,
				stopAfterLoops:-1,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLimit:0,
				hideSliderAtLimit:0,
				shadow:0,
				fullWidth:"off",
				fullScreen:"off",
				fullScreenOffsetContainer:"",
				forceFullWidth:"off"
			};
			i=e.extend({},e.fn.revolution.defaults,i);
			return this.each(function(){
				var o=i;
				if(o.fullWidth!="on"&&o.fullScreen!="on")o.autoHeight="off";
				if(o.fullScreen=="on")o.autoHeight="on";
				if(o.fullWidth!="on"&&o.fullScreen!="on")forceFulWidth="off";
				var u=e(this);
				if(o.fullWidth=="on"&&o.autoHeight=="off")u.css({maxHeight:o.startheight+"px"});
				if(s()&&o.hideThumbsOnMobile=="on"&&o.navigationType=="thumb")o.navigationType="none";
				if(s()&&o.hideBulletsOnMobile=="on"&&o.navigationType=="bullet")o.navigationType="none";
				if(s()&&o.hideBulletsOnMobile=="on"&&o.navigationType=="both")o.navigationType="none";
				if(s()&&o.hideArrowsOnMobile=="on")o.navigationArrows="none";
				if(o.forceFullWidth=="on"){
					var a=u.parent().offset().left;
					var f=u.parent().css("marginBottom");
					var c=u.parent().css("marginTop");
					if(f==t)f=0;
					if(c==t)c=0;
					u.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+c+";margin-bottom:"+f+'" class="forcefullwidth_wrapper_tp_banner"></div>');
					u.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+u.height()+'px"></div>');
					u.css({backgroundColor:u.parent().css("backgroundColor"),backgroundImage:u.parent().css("backgroundImage")});
					u.parent().css({left:0-a+"px",position:"absolute",width:e(window).width()});
					o.width=e(window).width()
				}
				try{
					if(o.hideThumbsUnderResolution>e(window).width()&&o.hideThumbsUnderResolution!=0){
						u.parent().find(".tp-bullets.tp-thumbs").css({display:"none"})
					}else{
						u.parent().find(".tp-bullets.tp-thumbs").css({display:"block"})
					}
				}catch(h){}
				if(!u.hasClass("revslider-initialised")){
					u.addClass("revslider-initialised");
					if(u.attr("id")==t)u.attr("id","revslider-"+Math.round(Math.random()*1e3+5));
					o.firefox13=false;o.ie=!e.support.opacity;
					o.ie9=document.documentMode==9;
					var y=e.fn.jquery.split("."),b=parseFloat(y[0]),E=parseFloat(y[1]),S=parseFloat(y[2]||"0");
					if(b==1&&E<7){
						u.html(
							'<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+y+
							" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"
						)
					}
					if(b>1)o.ie=false;
					if(!e.support.transition)e.fn.transition=e.fn.animate;u.find(".caption").each(function(){e(this).addClass("tp-caption")});
					if(s()){u.find(".tp-caption").each(function(){
						if(e(this).data("autoplay")==true)e(this).data("autoplay",false)
					})}
					var x=0;
					var N=0;
					var C=0;
					u.find(".tp-caption iframe").each(function(t){
						try{
							if(e(this).attr("src").indexOf("you")>0&&x==0){
								x=1;
								var n=document.createElement("script");
								n.src="http://www.youtube.com/player_api";
								var r=document.getElementsByTagName("script")[0];
								var i=true;
								e("head").find("*").each(function(){if(e(this).attr("src")=="http://www.youtube.com/player_api")i=false});
								if(i)r.parentNode.insertBefore(n,r)
							}
						}catch(s){}
					});
					u.find(".tp-caption iframe").each(function(t){
						try{
							if(e(this).attr("src").indexOf("vim")>0&&N==0){
								N=1;
								var n=document.createElement("script");
								n.src="http://a.vimeocdn.com/js/froogaloop2.min.js";
								var r=document.getElementsByTagName("script")[0];
								var i=true;e("head").find("*").each(function(){
									if(e(this).attr("src")=="http://a.vimeocdn.com/js/froogaloop2.min.js")i=false
								});
								if(i)r.parentNode.insertBefore(n,r)
							}
						}catch(s){}
					});
					u.find(".tp-caption video").each(function(t){
						try{
							if(e(this).hasClass("video-js")&&C==0){
								C=1;
								var n=document.createElement("script");
								n.src=o.videoJsPath+"video.js";
								var r=document.getElementsByTagName("script")[0];
								var i=true;e("head").find("*").each(function(){
									if(e(this).attr("src")==o.videoJsPath+"video.js")i=false
								});
								if(i){
									r.parentNode.insertBefore(n,r);e("head").append('<link rel="stylesheet" type="text/css" href="'+o.videoJsPath+'video-js.min.css" media="screen" />');
									e("head").append('<script> videojs.options.flash.swf = "'+o.videoJsPath+'video-js.swf";</script>')
								}
							}
						}catch(s){}
					});
					if(o.shuffle=="on"){
						for(var k=0;k<u.find(">ul:first-child >li").length;k++){
							var L=Math.round(Math.random()*u.find(">ul:first-child >li").length);
							u.find(">ul:first-child >li:eq("+L+")").prependTo(u.find(">ul:first-child"))
						}
					}
					o.slots=4;
					o.act=-1;
					o.next=0;
					if(o.startWithSlide!=t)o.next=o.startWithSlide;
					var A=n("#")[0];
					if(A.length<9){
						if(A.split("slide").length>1){
							var O=parseInt(A.split("slide")[1],0);
							if(O<1)O=1;
							if(O>u.find(">ul:first >li").length)O=u.find(">ul:first >li").length;
							o.next=O-1
						}
					}
					o.origcd=o.delay;
					o.firststart=1;
					if(o.navigationHOffset==t)o.navOffsetHorizontal=0;
					if(o.navigationVOffset==t)o.navOffsetVertical=0;
					u.append('<div class="tp-loader"></div>');
					if(u.find(".tp-bannertimer").length==0)u.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
					var M=u.find(".tp-bannertimer");
					if(M.length>0){M.css({width:"0%"})}
					u.addClass("tp-simpleresponsive");
					o.container=u;
					o.slideamount=u.find(">ul:first >li").length;
					if(u.height()==0)u.height(o.startheight);
					if(o.startwidth==t||o.startwidth==0)o.startwidth=u.width();
					if(o.startheight==t||o.startheight==0)o.startheight=u.height();
					o.width=u.width();
					o.height=u.height();
					o.bw=o.startwidth/u.width();
					o.bh=o.startheight/u.height();					
					if(o.width!=o.startwidth){
						o.height=Math.round(o.startheight*(o.width/o.startwidth));
						u.height(o.height)
					}
					if(o.shadow!=0){
						u.parent().append('<div class="tp-bannershadow tp-shadow'+o.shadow+'"></div>');
						var a=0;
						if(o.forceFullWidth=="on")a=0-o.container.parent().offset().left;
						//u.parent().find(".tp-bannershadow").css({width:o.width,left:a})
						u.parent().find(".tp-bannershadow").css({width:"100px"})//falsto 그림자
					}
					u.find("ul").css({display:"none"});
					var _=u;
					if(o.lazyLoad=="on"){
						var D=u.find("ul >li >img").first();
						if(D.data("lazyload")!=t)D.attr("src",D.data("lazyload"));
						D.data("lazydone",1);
						_=D.parent()
					}
					_.waitForImages(function(){
						u.find("ul").css({display:"block"});
						w(u,o);
						if(o.slideamount>1)p(u,o);
						if(o.slideamount>1)l(u,o);
						if(o.slideamount>1)d(u,o);
						if(o.keyboardNavigation=="on")v(u,o);
						m(u,o);
						if(o.hideThumbs>0)g(u,o);
						u.waitForImages(function(){
							u.find(".tp-loader").fadeOut(600);
							setTimeout(function(){
								T(u,o);
								if(o.slideamount>1)F(u,o);
								u.trigger("revolution.slide.onloaded")
							},600)
						})
					});
					e(window).resize(function(){
						if(e("body").find(u)!=0)if(o.forceFullWidth=="on"){
							var t=o.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
							o.container.parent().css({left:0-t+"px",width:e(window).width()})
						}
						if(u.outerWidth(true)!=o.width){r(u,o)}
					});
					try{
						if(o.hideThumbsUnderResoluition!=0&&o.navigationType=="thumb"){
							if(o.hideThumbsUnderResoluition>e(window).width())e(".tp-bullets").css({display:"none"});
							else e(".tp-bullets").css({display:"block"})
						}
					}
					catch(h){}
					u.find(".tp-scrollbelowslider").on("click",function(){
						var t=0;
						try{
							t=e("body").find(o.fullScreenOffsetContainer).height()
						}
						catch(n){}
						try{
							t=t-e(this).data("scrolloffset")
						}
						catch(n){}
						e("body,html").animate({scrollTop:u.offset().top+u.find(">ul >li").height()-t+"px"},{duration:400})
					})
				}
			})
		},
		revscroll:function(t){
			return this.each(function(){
				var n=e(this);
				e("body,html").animate({scrollTop:n.offset().top+n.find(">ul >li").height()-t+"px"},{duration:400})
			})
		},
		revpause:function(t){
			return this.each(function(){
				var t=e(this);
				t.data("conthover",1);
				t.data("conthover-changed",1);
				t.trigger("revolution.slide.onpause");
				var n=t.parent().find(".tp-bannertimer");
				n.stop()
			})
		},
		revresume:function(t){
			return this.each(function(){
				var t=e(this);
				t.data("conthover",0);
				t.data("conthover-changed",1);
				t.trigger("revolution.slide.onresume");
				var n=t.parent().find(".tp-bannertimer");
				var r=n.data("opt");
				n.animate({width:"100%"},{duration:r.delay-r.cd-100,queue:false,easing:"linear"})
			})
		},
		revnext:function(t){
			return this.each(function(){
				var t=e(this);
				t.parent().find(".tp-rightarrow").click()
			})
		},
		revprev:function(t){
			return this.each(function(){
				var t=e(this);
				t.parent().find(".tp-leftarrow").click()
			})
		},
		revmaxslide:function(t){
			return e(this).find(">ul:first-child >li").length
		},
		revcurrentslide:function(t){
			var n=e(this);
			var r=n.parent().find(".tp-bannertimer");
			var i=r.data("opt");
			return i.act
		},
		revlastslide:function(t){
			var n=e(this);
			var r=n.parent().find(".tp-bannertimer");
			var i=r.data("opt");
			return i.lastslide
		},
		revshowslide:function(t){
			return this.each(function(){
				var n=e(this);
				n.data("showus",t);
				n.parent().find(".tp-rightarrow").click()
			})
		}
	})
})
(jQuery)