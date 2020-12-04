$(function(){
			//navigation
			var gnb=$("nav#gnb li");
			var lnb=$("nav#lnb li");
			var back_bg=$("div.modal_back_bg");
			//contents
			var homeCon=$(".home_content");
			var homeBall=$(".colra_con_ball");
			var brandCon=$(".contents_bra");
			var eventCon=$(".event_content");
			var eventCon02=$(".event_content02");
			var produCon=$(".tab_content")
			var cfCon=$(".cf_content");
			var movieCf=$(".cf_movie");
			var clickCf=$(".click4");
			var logoCon=$(".logo_content");
			var	go_clothing=$(".go_clothing");
			var review=$(".review");
			var eventC0n3=$(".event03");
			var play_btn=$(".cf_playBtn");
			var cf_movie=$(".cf_movie");

			//scroll

			var ht= 980;

			// balckbg

			back_bg.hide();
           
           // 모달창구현

           	//home content
           	homeCon.hide();
           	homeBall.click(function(){
           		homeCon.fadeIn(500);
           		back_bg.show();
           		$('html, body').css({'overflow': 'hidden', 'height': '100%'}); 
				// 모달팝업 중 html,body의 scroll을 hidden시킴
				$('.modal').on('scroll touchmove mousewheel', function(event) { 
				// 터치무브와 마우스휠 스크롤 방지
				    event.preventDefault();
				    event.stopPropagation();
				    return false;
				});
           	})
           	$(".x_btn_home").click(function(){
           		homeCon.fadeOut(500);
           		back_bg.hide();
           		$('html, body').css({'overflow-y': 'auto', 'height': '100%'}); 
				//scroll hidden 해제
				$('.modal').off('scroll touchmove mousewheel');           		
           	})
			// brand content
			brandCon.hide();
			$(".brand_machine").click(function(){
				brandCon.show();
				back_bg.show();
				$('html, body').css({'overflow': 'hidden', 'height': '100%'}); 
				// 모달팝업 중 html,body의 scroll을 hidden시킴
				$('.modal').on('scroll touchmove mousewheel', function(event) { 
				// 터치무브와 마우스휠 스크롤 방지
				    event.preventDefault();
				    event.stopPropagation();
				    return false;
				});
				
			})
			$(".x_btn_bra").click(function(){
				brandCon.hide();
				back_bg.hide();
				$('html, body').css({'overflow-y': 'auto', 'height': '100%'}); 
				//scroll hidden 해제
				$('.modal').off('scroll touchmove mousewheel');   
				
			})
			logoCon.hide();
			$(".brand_monster1").click(function(){
				logoCon.fadeIn(500);
				back_bg.show();
				$('html, body').css({'overflow': 'hidden', 'height': '100%'}); 
				// 모달팝업 중 html,body의 scroll을 hidden시킴
				$('.modal').on('scroll touchmove mousewheel', function(event) { 
				// 터치무브와 마우스휠 스크롤 방지
				    event.preventDefault();
				    event.stopPropagation();
				    return false;
				});
				
			})
			$(".x_btn_logo").click(function(){
				logoCon.fadeOut(500);
				back_bg.hide();
				$('html, body').css({'overflow-y': 'auto', 'height': '100%'}); 
				//scroll hidden 해제
				$('.modal').off('scroll touchmove mousewheel');
				
			})
			// product content
			produCon.hide();
			$(".pro_machine").click(function(){
				produCon.fadeIn(500);
				back_bg.show();
				$('html, body').css({'overflow': 'hidden', 'height': '100%'}); 
				// 모달팝업 중 html,body의 scroll을 hidden시킴
				$('.modal').on('scroll touchmove mousewheel', function(event) { 
				// 터치무브와 마우스휠 스크롤 방지
				    event.preventDefault();
				    event.stopPropagation();
				    return false;
				});
				
			})
			$(".x_btn_pro").click(function(){
				produCon.fadeOut(500);
				back_bg.hide();
				$('html, body').css({'overflow-y': 'auto', 'height': '100%'}); 
				//scroll hidden 해제
				$('.modal').off('scroll touchmove mousewheel');
				
			})
			go_clothing.click(function(){
				produCon.hide();
				homeCon.show();
			})
			review.hide();
			$(".pro_dog").click(function(){
				review.fadeIn(500);
				back_bg.show();
				$('html, body').css({'overflow': 'hidden', 'height': '100%'}); 
				// 모달팝업 중 html,body의 scroll을 hidden시킴
				$('.modal').on('scroll touchmove mousewheel', function(event) { 
				// 터치무브와 마우스휠 스크롤 방지
				    event.preventDefault();
				    event.stopPropagation();
				    return false;
				});
			})
			review.click(function(){
				review.fadeOut(500);
				back_bg.hide();
				$('html, body').css({'overflow-y': 'auto', 'height': '100%'}); 
				//scroll hidden 해제
				$('.modal').off('scroll touchmove mousewheel');

			})
			
			// event content
			eventCon.hide();
			$(".evc_cher_mon").click(function(){
				eventCon.fadeIn(500);
				back_bg.show();
				$('html, body').css({'overflow': 'hidden', 'height': '100%'}); 
				// 모달팝업 중 html,body의 scroll을 hidden시킴
				$('.modal').on('scroll touchmove mousewheel', function(event) { 
				// 터치무브와 마우스휠 스크롤 방지
				    event.preventDefault();
				    event.stopPropagation();
				    return false;
				});
				
			})
			$(".x_btn_event").click(function(){
				eventCon.fadeOut(500);
				eventCon02.fadeOut(500);
				back_bg.hide();
				$('html, body').css({'overflow-y': 'auto', 'height': '100%'}); 
				//scroll hidden 해제
				$('.modal').off('scroll touchmove mousewheel');
				
			})
			eventCon02.hide();
			$(".go_event").click(function(){
				eventCon02.fadeIn(500);
			})
			$(".x_btn_event02").click(function(){
				eventCon02.fadeOut(500);
				eventCon.fadeOut(500);
				back_bg.hide();
				$('html, body').css({'overflow-y': 'auto', 'height': '100%'}); 
				//scroll hidden 해제
				$('.modal').off('scroll touchmove mousewheel');
			})
			$(".go").click(function(){
				alert("응모되었습니다 게임에 접속해서 확인해주세요.")
			})
			eventC0n3.hide();
			$(".F_click").click(function(){
				eventC0n3.fadeIn(500);
			})
			$(".x_btn_event03").click(function(){
				eventC0n3.fadeOut(500);
			})

			// cf content
			cfCon.hide();
			movieCf.hide();
			$(".evc_beam").click(function(){
				cfCon.fadeIn(500);
				back_bg.show();
				eventCon02.fadeOut(500);
				eventCon.fadeOut(500);
				movieCf.fadeIn(500);
				clickCf.hide();
				$('html, body').css({'overflow': 'hidden', 'height': '100%'}); 
				// 모달팝업 중 html,body의 scroll을 hidden시킴
				$('.modal').on('scroll touchmove mousewheel', function(event) { 
				// 터치무브와 마우스휠 스크롤 방지
				    event.preventDefault();
				    event.stopPropagation();
				    return false;
				});
				
			})
			$(".x_btn_cf").click(function(){
				cfCon.fadeOut(500);
				back_bg.hide();
				movieCf.hide();
				clickCf.show();
				play_btn.show();
				$(".cf_move").css("animation-play-state","running");
				$('html, body').css({'overflow-y': 'auto', 'height': '100%'}); 
				//scroll hidden 해제
				$('.modal').off('scroll touchmove mousewheel');
				
			})
			cfCon.click(function(){
				back_bg.hide();
				cfCon.hide();
				movieCf.hide();
				clickCf.show();
				play_btn.show();
				$(".cf_move").css("animation-play-state","running");
			})

		
			//modal_back_bg click hide
			back_bg.click(function(){
				$(".modal").hide();
				$(".click4").show();
				back_bg.hide();
				movieCf.hide();
				play_btn.show();
				$(".cf_move").css("animation-play-state","running");
				$('html, body').css({'overflow-y': 'auto', 'height': '100%'}); 
				//scroll hidden 해제
				$('.modal').off('scroll touchmove mousewheel');
				
			})

			//scroll nav 움직임
			//nav#gnb active 효과

			gnb.click(function(){
				var tg=$(this);
				var i=tg.index();
				var nowTop=ht*i;

				gnb.removeClass("active");
				tg.addClass("active");

				$("html,body").animate({scrollTop:nowTop},400,"linear");

			})
			$(window).resize(function(){
				ht=980;
			})

			$(window).scroll(function(){
				back_bg.hide();
				$(".modal").hide();
			})
			$(window).scroll(function(){
				var myscrollTop=$(window).scrollTop();

				if(myscrollTop>=0 && myscrollTop<ht){
					gnb.removeClass("active");
					gnb.eq(0).addClass("active");
				}else if(myscrollTop>=ht && myscrollTop<ht*2){
					gnb.removeClass("active");
					gnb.eq(1).addClass("active");
				}else if(myscrollTop>=ht*2 && myscrollTop<ht*3){
					gnb.removeClass("active");
					gnb.eq(2).addClass("active");
				}else{
					gnb.removeClass("active");
					gnb.eq(3).addClass("active");
				}
			})



			$("section").on("mousewheel",function(event,delta){
				if(delta>0){
					var prev= $(this).prev().offset().top;
					$("html,body").stop().animate({"scrollTop":prev},400,"linear");
				}else if(delta<0){
					var next= $(this).next().offset().top;
					$("html,body").stop().animate({"scrollTop":next},400,"linear");
				}
			})


			//동영상재생
			play_btn.click(function(){
				$(this).hide();
				$(this).parent().hide();
				$("iframe.cf_movie")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
				$(".cf_move").css("animation-play-state","paused");
			})
			
			// carouesl 구현

			//home carousel

			var home_image=$(".home_image li");
			var home_btn=$(".home_btn li");
			var current_h = 0;

			home_btn.click(function(){
				var i=$(this).index();
				home_btn.removeClass("active_Con");
				$(this).addClass("active_Con");
			})
			
			home_btn.click(function(){
				var tg_h = $(this);
				var i_h = tg_h.index();
				

				if(current_h==i_h) return 0;

				move(i_h);

				function move(i_h){
					var h_currentImg = home_image.eq(current_h);
					var h_nextImg = home_image.eq(i_h);
					h_currentImg .stop().css("left",0).animate({"left":"-100%"});
					h_nextImg.stop().css("left","100%").animate({"left":0});
					current_h = i_h;
				}
			})
			//product carousel

			var tab_btn=$(".tab_menu li");
			var tab_content=$(".tab_content .tab_con");

			go_clothing.hide();

			tab_btn.eq(0).click(function(){
				go_clothing.hide();
			})

			tab_btn.eq(1).click(function(){
				go_clothing.show();
			})

			tab_content.hide();
			tab_content.eq(0).fadeIn(500);

			tab_btn.click(function(){
				var i =$(this).index();
				tab_content.fadeOut(500);

				tab_content.eq(i).fadeIn(500);

				tab_btn.removeClass("active_pro");
				tab_btn.eq(i).addClass("active_pro");
			})


			var pro_carouselImg = $("ol.pro_carou li")
			var pro_pevBtn = $(".slide_left_pro");
			var pro_nextBtn = $(".slide_right_pro");
			var current = 0;
			
			pro_pevBtn.click(function(){
				var currentImg = pro_carouselImg.eq(current);
				var nextImg = pro_carouselImg.eq(current=current-1);
				currentImg.stop().css("left",0).animate({"left":"100%"});
				nextImg.stop().css("left","-100%").animate({"left":0});

				if(current==-1){
					current = 5;
				}
			})
			pro_nextBtn.click(function(){
				var currentImg = pro_carouselImg.eq(current);
				var nextImg = pro_carouselImg.eq(current=current+1);
				currentImg.stop().css("left",0).animate({"left":"-100%"});
				nextImg.stop().css("left","100%").animate({"left":0});

				if(current==6){
					current = -1;
					var currentImg = pro_carouselImg.eq(current);
					var nextImg = pro_carouselImg.eq(current=current+1);
					currentImg.stop().css("left",0).animate({"left":"-100%"});
					nextImg.stop().css("left","100%").animate({"left":0});
				}
			})

			var pro_carouselImg02 = $("ol.pro_carou02 li")
			var pro_pevBtn02 = $(".slide_left_pro_02");
			var pro_nextBtn02 = $(".slide_right_pro_02");
			var current02 = 0;
			
			pro_pevBtn02.click(function(){
				var currentImg02 = pro_carouselImg02.eq(current02);
				var nextImg02 = pro_carouselImg02.eq(current02=current02-1);
				currentImg02.stop().css("left",0).animate({"left":"100%"});
				nextImg02.stop().css("left","-100%").animate({"left":0});

				if(current02==-1){
					current02 = 5;
				}
			})
			pro_nextBtn02.click(function(){
				var currentImg02 = pro_carouselImg02.eq(current02);
				var nextImg02 = pro_carouselImg02.eq(current02=current02+1);
				currentImg02.stop().css("left",0).animate({"left":"-100%"});
				nextImg02.stop().css("left","100%").animate({"left":0});

				if(current02==6){
					current02 = -1;
					var currentImg02 = pro_carouselImg02.eq(current02);
					var nextImg02 = pro_carouselImg02.eq(current02=current02+1);
					currentImg02.stop().css("left",0).animate({"left":"-100%"});
					nextImg02.stop().css("left","100%").animate({"left":0});
				}
			})
		})