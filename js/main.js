/*--------------------------------------------------
Project:        jetrip
Version:        1.0
Author:         Company Name
-----------------------------------------------------
    JS INDEX
    ================================================
    * preloader js
    * sticky menu js
    * slick nav 
    * slick icon slider
    * counter
    * testimonial slider
    * slick icon slider
    * bottom to top
    * Isotop with ImagesLoaded
    * ACCORDION WITH TOGGLE ICONS
    * Google-Map
    ================================================*/

    (function ($) {
        "use strict";
        var $main_window = $(window);
        /*====================================
            preloader js
          ======================================*/
        $main_window.on('load', function () {
            $('#preloader').fadeOut('slow');
        });
        /*====================================
            sticky menu js
          ======================================*/
        var windows = $(window);
        var sticky = $('.header-fixed');
        windows.on('scroll', function () {
            var scroll = windows.scrollTop();
            if (scroll < 50) {
                sticky.removeClass('stick');
            } else {
                sticky.addClass('stick');
            }
        });
        /*====================================
            slick nav
        ======================================*/
        var logo_path = $('.mobile-menu').data('logo');
        $('.navbar-nav').slicknav({
            appendTo: '.mobile-menu',
            removeClasses: true,
            label: '',
            closedSymbol: '<i class="fa fa-angle-right"><i/>',
            openedSymbol: '<i class="fa fa-angle-down"><i/>',
            brand: '<img src="' + logo_path + '" class="img-fluid" alt="logo">'
        });
        /*====================================
            slick  slider
        ======================================*/
        $('.hero-slide').slick({
            infinite: true,
            dots: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        $('.hero-slide-three').slick({
            infinite: true,
            dots: true,
            speed: 3000,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        /*====================================
                Desination slider
            ======================================*/
        $('.destination-slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
			autoplay: true,
			speed: 300,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        $('.testi-slide-one').slick({
            centerMode: true,
			 infinite: true,
            slidesToShow: 3,
			 slidesToScroll: 1,
            dots: true,
			autoplay:true,
			speed:500,
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }, {
                breakpoint: 500,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }]
        });
        $('.client-slide').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            }]
        });
		$('md_cont').slick({
			  infinite: true,
			  autoplay: true,
			  autoplaySpeed: 2000,
		});
        $('.testi-slide-two').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });
        //Date Time Picker 
        $("#datepicker").datepicker({
            autoclose: true,
            todayHighlight: true
        }).datepicker('update', new Date());
        $("#datepicker-2").datepicker();
        $("#datepicker-3").datepicker();
        /*====================================
            counter
        ======================================*/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        /*====================================
            Isotop with ImagesLoaded
        ======================================*/
        var isotopFilter = $('.isotop-filter');
        var isotopGrid = $('.isotop-grid');
        var isotopGridMasonry = $('.isotop-grid-masonry');
        var isotopGridItem = '.isotop-item';
        /*-- Images Loaded --*/
        isotopGrid.imagesLoaded(function () {
            /*-- Filter List --*/
            isotopFilter.on('click', 'button', function () {
                isotopFilter.find('button').removeClass('active');
                $(this).addClass('active');
                var filterValue = $(this).attr('data-filter');
                isotopGrid.isotope({
                    filter: filterValue
                });
            });
            /*-- Filter Grid Layout FitRows --*/
            isotopGrid.isotope({
                itemSelector: isotopGridItem,
                layoutMode: 'fitRows',
                masonry: {
                    columnWidth: '.isotop-grid',
                }
            });
            /*-- Filter Grid Layout Masonary --*/
            isotopGridMasonry.isotope({
                itemSelector: isotopGridItem,
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: 1,
                }
            });
        });
        /*====================================
            masonry-item
        ======================================*/
        $('.masonry-item').imagesLoaded(function () {
            $('.masonry-item').isotope({
                itemSelector: '.masonry',
                percentPosition: true,
                masonry: {
                    columnWidth: '.masonry'
                }
            });
        });
        /*====================================
            ACCORDION WITH TOGGLE ICONS
        ======================================*/
        function toggleIcon(e) {
            $(e.target).prev('.panel-heading').find(".more-less").toggleClass('fa-angle-down fa-angle-up');
        }
        $('.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.panel-group').on('shown.bs.collapse', toggleIcon);
        // go to top
        
    })(jQuery);
    /*------------------ Google-Map --------------------*/
    
$(function(){
    var boxTop = $('.bg-img-counter').offset().top;
    
    $(window).scroll(function(){
      if($(document).scrollTop() >= boxTop ){
       $('.back').fadeIn();
     }else{
        $('.back').fadeOut();
     };
   });
   //返回顶部
   $('.back').click(function(){
     //给html和body元素做动画
     $('body,html').stop().animate({
       scrollTop:0
     })
   });
   //图片懒加载

   $(".lazy").lazyload({
    placeholder : "", // 用图片提前占位
       effect: "fadeIn",// 载入使用何种效果，effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等
       threshold: 200, // 提前开始加载
       failurelimit : 10// 图片排序混乱时，值为数字
    });
});
   

   