
$(window).load(function() {


	 $(".top_arrow_r_wrap, .top_arrow_l_wrap").height(jakeheight);

	 if (window.matchMedia( "(max-width: 768px)" ).matches) {
	 $(".top_left, .top_right").height(jakeheight);
	  };


    //768以上
    if (window.matchMedia( "(min-width: 769px)" ).matches) {

		 var jakeheight = $(".top_jacket_wrap_wrap").height();

	    //リサイズしたとき用
	    var timer2 = false;
	    $(window).resize(function() {
	        if (timer2 !== false) {
	            clearTimeout(timer2);
	        }
	        timer2 = setTimeout(function() {
	            // リサイズが終了した時点で行う処理または関数を記述

	         var jakeheight2 = $(".top_jacket_wrap_wrap").height();
	         $(".top_arrow_r_wrap, .top_arrow_l_wrap").height(jakeheight2);   
	        }, 200);

	    });
	};


    //768以下
    if (window.matchMedia( "(max-width: 768px)" ).matches) {

         var jakeheight4 = $(".top_jacket_wrap_wrap").height();
		 $(".top_left, .top_right").height(jakeheight4);

		var timer3 = false;
	    $(window).resize(function() {
	        if (timer3 !== false) {
	            clearTimeout(timer3);
	        }
	        timer3 = setTimeout(function() {
	            // リサイズが終了した時点で行う処理または関数を記述

		        var jakeheight5 = $(".top_jacket_wrap_wrap").height();
				$(".top_left, .top_right, .top_arrow_r_wrap, .top_arrow_l_wrap").height(jakeheight5);

	        }, 200);
	    });
	};


	// ためしよみ

	$(".loading").fadeOut();
	// $(".page_text").text("せつめい1");



	$('.page:nth-child(1)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(1)").fadeOut();
			$(".page_text span:eq(1)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(2)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(0)").fadeOut();
			$(".page_text span:eq(0)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(3)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(2)").fadeOut();
			$(".page_text span:eq(2)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(4)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(1)").fadeOut();
			$(".page_text span:eq(1)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(5)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(3)").fadeOut();
			$(".page_text span:eq(3)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(6)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(2)").fadeOut();
			$(".page_text span:eq(2)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(7)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(4)").fadeOut();
			$(".page_text span:eq(4)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(8)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(3)").fadeOut();
			$(".page_text span:eq(3)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(9)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(5)").fadeOut();
			$(".page_text span:eq(5)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(10)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(4)").fadeOut();
			$(".page_text span:eq(4)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(11)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(6)").fadeOut();
			$(".page_text span:eq(6)").delay(400).fadeIn();
			};
	});

	$('.page:nth-child(12)').on('click',function(){
			$(this).addClass('kirikae');
			 if ($(this).hasClass("kirikae")){
			$(".page_text span").not(".page_text span:eq(5)").fadeOut();
			$(".page_text span:eq(5)").delay(400).fadeIn();
			};
	});




	// $('.page:nth-child(1)').on('click',function(){
	// 		$(this).addClass('kirikae');
	// 		 if ($(this).hasClass("kirikae")){
	// 		$(".page_text:eq(1)").show();
	// 		};
	// });
	// $('.page:nth-child(2)').on('click',function(){
	// 		$(this).addClass('kirikae');
	// 		 if ($(this).hasClass("kirikae")){
	// 		$(".page_text").text("ひょうし");
	// 		};
	// });

	// $('.page:nth-child(3)').on('click',function(){
	// 		$(this).addClass('kirikae');
	// 		 if ($(this).hasClass("kirikae")){
	// 		$(".page_text").text("せつめい2");
	// 		};
	// });
	// $('.page:nth-child(4)').on('click',function(){
	// 		$(this).addClass('kirikae');
	// 		 if ($(this).hasClass("kirikae")){
	// 		$(".page_text").text("せつめい1");
	// 		};
	// });

	// $('.page:nth-child(5)').on('click',function(){
	// 		$(this).addClass('kirikae');
	// 		 if ($(this).hasClass("kirikae")){
	// 		$(".page_text").text("せつめい3");
	// 		};
	// });
	// $('.page:nth-child(6)').on('click',function(){
	// 		$(this).addClass('kirikae');
	// 		 if ($(this).hasClass("kirikae")){
	// 		$(".page_text").text("せつめい2");
	// 		};
	// });

	// $('.page:nth-child(7)').on('click',function(){
	// 		$(this).addClass('kirikae');
	// 		 if ($(this).hasClass("kirikae")){
	// 		$(".page_text").text("せつめい4");
	// 		};
	// });
	// $('.page:nth-child(8)').on('click',function(){
	// 		$(this).addClass('kirikae');
	// 		 if ($(this).hasClass("kirikae")){
	// 		$(".page_text").text("せつめい3");
	// 		};
	// });

	// ためしよみ

	$(".top_left").animate({
		"left": "0px",
		opacity: "1"
	},2600, "easeOutQuint");

	$(".top_right").animate({
		"right": "0px",
		opacity: "1"
	},2600, "easeOutQuint");

	$(".top_jacket_wrap_wrap").delay(2800).animate({
		opacity: "1"
	},800, "easeOutQuint");


	$(".top_left, .top_right").delay(2600).queue(function(next) {
		$(".top_left, .top_right").addClass("blur");
		next();
	 });

	$(".top_icon_wrap, .top_release").delay(3100).animate({
		opacity:"show"
	},800, "easeOutQuint");


	$(".top_arrow_r, .top_arrow_l").delay(2800).queue(function(next) {
		$(this).fadeToggle();
		next();
	 });




	var stopAnime = 0;
	var stopAnime2 = 0;

	// var loop = setInterval(function() {
		 	
	// 		//li先頭要素のクローンを作成
	// 		var newleft = $(".top_jacket_wrap").width() / 5 * 2 * -1;
	// 	    var clone = $(".top_jacket_wrap div:eq(1)").clone(true);

	// 		if( stopAnime == 0 && stopAnime2 == 0){
	// 			// 1. 1の間矢印効かない
	// 			stopAnime = 1;
	// 				// console.log(stopAnime);

	// 			// 2. 処理
	// 		    $(".top_back div").fadeToggle();
	// 		    $(".top_jacket_wrap div:first").animate({
	// 			    marginLeft : newleft
	// 			    }, {
	// 			    duration : 1000,
	// 			    easing: 'easeOutQuint'
	// 			    }).delay(0).queue(function(next) {
	// 			        //処理完了時に先頭要素を削除
	// 			        $(".top_jacket_wrap div:first").remove();
	// 			        //クローンをliの最後に追加
	// 			        clone.insertAfter($(".top_jacket_wrap div:last"));
	// 			    next();
	// 			 });//animate

	// 			// 3. 処理が終わったらstopAnimeをおろす（0に戻す）
	// 			setTimeout(function(){
	// 				stopAnime = 0;
	// 				// console.log(stopAnime);
	// 			},1000);//setTimeout

	// 		};//if

 //    }, 5000);//loop



	// *スライダー
	//スタートを２枚目にする
	var clone1st = $(".top_jacket_wrap div:last").clone(true);
	clone1st.insertBefore($(".top_jacket_wrap div:first"));

	var newleft = $(".top_jacket_wrap").width() / 5 * -1;
    $(".top_jacket_wrap").css({"marginLeft":newleft});	






	var jakeheight = $(".top_jacket_wrap_wrap").height();
	$(".top_arrow_r_wrap, .top_arrow_l_wrap").height(jakeheight);

    //リサイズしたとき用
    var timer = false;
    $(window).resize(function() {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            // リサイズが終了した時点で行う処理または関数を記述
		var newleft = $(".top_jacket_wrap").width() / 5 * -1;
    	$(".top_jacket_wrap").css({"marginLeft":newleft});	
    	});
    });


    //*みぎボタン
	$('.top_arrow_r').on('click',function(){

		if( stopAnime == 0 && stopAnime2 == 0){

			//1の間スライドしない
			stopAnime2 = 1;
			// console.log(stopAnime2);

		    //li先頭要素のクローンを作成
			var newleft1 = $(".top_jacket_wrap").width() / 5 * 2 * -1;
		    var clone2 = $(".top_jacket_wrap div:eq(1)").clone(true);
		    var clone2back = $(".top_back_wrap div:first").clone(true);

	        //背景の最初削除
		    $(".top_back_wrap div:first").remove();
	        //背景クローンを最後に追加
		    clone2back.insertAfter($(".top_back_wrap div:last"));
		    $(".top_back_wrap div:first").fadeIn();
		    $(".top_back_wrap div:last").fadeOut();

		    //li先頭要素のマージントップにマイナスを指定しアニメーションさせる
		    $(".top_jacket_wrap div:first").animate({
		    marginLeft : newleft1
		    }, {
		    duration : 500,
		    easing: 'easeOutCubic'
		    }).delay(0).queue(function(next) {
		        //処理完了時に先頭要素を削除
		        $(".top_jacket_wrap div:first").remove();

		        //クローンをliの最後に追加
		        clone2.insertAfter($(".top_jacket_wrap div:last"));
		    next();
		    });
		    
		    // 3. 処理が終わったらstopAnimeをおろす（0に戻す）
			setTimeout(function(){
				stopAnime2 = 0;
				// console.log(stopAnime2);
			},1000);//setTimeout

		};//if

	});//onclick

	//*ひだりボタン
	$('.top_arrow_l').on('click',function(){

		if( stopAnime == 0 && stopAnime2 == 0){

			//1の間スライドしない
			stopAnime2 = 1;
			console.log(stopAnime2);

		    //li先頭要素のクローンを作成
		    var newleft2 = $(".top_jacket_wrap").width() / 5 * 2 * -1;
		    var clone3 = $(".top_jacket_wrap div:eq(3)").clone(true);
		    var clone3back = $(".top_back_wrap div:last").clone(true);
		   
	        //背景の最初削除
		    $(".top_back_wrap div:last").remove();
	        //背景クローンを最後に追加
		    clone3back.insertBefore($(".top_back_wrap div:first"));
		    $(".top_back_wrap div:first").fadeIn();
		    $(".top_back_wrap div:eq(1)").fadeOut();

		    //li先頭要素のマージントップにマイナスを指定しアニメーションさせる
		    $(".top_jacket_wrap div:last").animate({
		    marginRight : newleft2
		    }, {
		    duration : 500,
		    easing: 'easeOutCubic'
		    }).delay(0).queue(function(next) {
		        //処理完了時に先頭要素を削除
		        $(".top_jacket_wrap div:last").remove();
		        //クローンをliの最後に追加
		        clone3.insertBefore($(".top_jacket_wrap div:first"));
		    next();
		    });

		    // 3. 処理が終わったらstopAnimeをおろす（0に戻す）
			setTimeout(function(){
				stopAnime2 = 0;
				console.log(stopAnime2);
			},1000);//setTimeout

		};//if
	});



	// スライダーここまで
	$(".top_effect, .top_hana").delay(1800).queue(function(next) {$(this).show();
	    next();
    });

	$(".top_effect").animate({
		"width": "100%",
		opacity:0
	},1800, "easeOutCubic")

	$(".top_effect").delay(0).queue(function(next) {$(this).hide();
	    next();
    });
	$(".top_hana").delay(3600).queue(function(next) {$(this).hide();
	    next();
    });



    var angle = 0;
	setInterval(function(){
				angle+=1.2;
			 $(".top_icon_haguruma").rotate(angle);
	},200);





	$('.list_nana img').on('click',function(){
		$(".modal_nana_wrap").fadeIn();
		$(".modal_nana_img").addClass("modal_nana_img_on");
	});
	$('.modal_bg').on('click',function(){
		$(".modal").fadeOut();
		$(".modal_nana_img").removeClass("modal_nana_img_on");
		$(".modal_lili_img").removeClass("modal_lili_img_on");
		$(".modal_macaron_img").removeClass("modal_macaron_img_on");
		$(".modal_gohan_img").removeClass("modal_gohan_img_on");
	});

	$('.list_lili img').on('click',function(){
		$(".modal_lili_wrap").fadeIn();
		$(".modal_lili_img").addClass("modal_lili_img_on");
	});

	$('.list_macaron').on('click',function(){
		$(".modal_macaron_wrap").fadeIn();
		$(".modal_macaron_img").addClass("modal_macaron_img_on");
	});


	$('.top_icon_wrap').on('click',function(){
		$(".modal_gohan_wrap").fadeIn();
		$(".modal_gohan_img").addClass("modal_gohan_img_on");
	});

	$('.ouen_click').on('click',function(){
		$(".modal_ouen_wrap").fadeIn();
	});






  var top = $("body").position().top;

  $(window).scroll(function(){
    $('.fade, .fade_50per, .fade_nana, .fade_lili').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + (windowHeight / 4)){
              $(this).addClass('show');

              	if($(this).hasClass("list_nana")){
              		$(this).addClass('nana_on');	
              	}

              	if($(this).hasClass("list_lili")){
              		$(this).addClass('lili_on');	
              	}

              	if($(this).hasClass("list_macaron")){
              		$(this).addClass('macaron_on');	
              	}
          }
    });
  });





function btfry(){


  	$('.butterfly6').on('click',function(){

		$('.modal6_wrap').show().delay(300).queue(function(next) {
	    	$(this).addClass('modal_on');
	    	next();
		});

		$('.iosicon').delay(500).queue(function(next) {
	    	$(this).addClass('iosicon_on');
	    	next();
	    });
	});

	$('.modal6_bg, .modal_close').on('click',function(){

		$('.modal6_wrap').removeClass('modal_on').delay(300).queue(function(next) {
	    	$(this).hide();
	    	next();
	    });

	});

	$('.iosicon').on('click',function(){
		$('.dl').toggleClass('dl_on');
	});

};









  $(function infi_do(){

      $('.infi_wrap').infinitescroll({
          navSelector   : ".navigation",
          nextSelector  : ".navigation a",
          itemSelector  : ".infi_item",
          maxPage : 3,
          dataType      : "html",

          // hideNav: '.navigation', //ページネーションのセレクタ

          animate:true,
          extraScrollPx: 10,
          history:false,
          scrollThreshold: true, //自動で次のページを読み込まないようにする
          loading : {
              // img : "img/loading.gif",
              msgText: "Loading...", //ローディング中表示テキスト
              // finishedMsg : "LODING END"
          }
      },

          function() {
            // 読み込んだ後の処理
              lazyload();
              btfry();
              // ft();
              // ft_resize();
          }

          // function(newElements) {
          //     $(newElements).hide().delay(100).fadeIn(600); // フェードイン処理
          //     $(".navigation").appendTo(".infi_wrap").delay(300).fadeIn(600); // ナヴィゲーションボタンの移動
          // }
          );
          // クリックしてスクロールする場合必須
          // $('.infi_wrap').infinitescroll('unbind'); // 初期化
          // $(".navigation a").click(function(){
          // $('.infi_wrap').infinitescroll('retrieve');
          // return false;
          // });
  });










  var headerHight = 50;
  $(document).on("click", "a[href^=#]", function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
       $("html, body").animate({scrollTop:position}, 1000, "easeOutCubic");
        return false;
  });

});