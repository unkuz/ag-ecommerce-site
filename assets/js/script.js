(function() {
    var $;
    $ = this.jQuery || window.jQuery;
    win = $(window), body = $('body'), doc = $(document);

    $.fn.hc_accordion = function() {
        var acd = $(this);
        acd.find('ul>li').each(function(index, el) {
            if ($(el).find('ul li').length > 0) $(el).prepend('<button type="button" class="acd-drop"></button>');
        });
        acd.on('click', '.acd-drop', function(e) {
            e.preventDefault();
            var ul = $(this).nextAll("ul");
            if (ul.is(":hidden") === true) {
                ul.parent('li').parent('ul').children('li').children('ul').slideUp(180);
                ul.parent('li').parent('ul').children('li').children('.acd-drop').removeClass("active");
                $(this).addClass("active");
                ul.slideDown(180);
            } else {
                $(this).removeClass("active");
                ul.slideUp(180);
            }
        });
    }

    $.fn.hc_menu = function(options) {
        var settings = $.extend({
                open: '.open-mnav',
            }, options),
            this_ = $(this);
        var m_nav = $('<div class="m-nav"><button class="m-nav-close">&times;</button><div class="nav-ct"></div></div>');
        body.append(m_nav);

        m_nav.find('.m-nav-close').click(function(e) {
            e.preventDefault();
            mnav_close();
        });

        m_nav.find('.nav-ct').append(this_.children().clone());

        var mnav_open = function() {
            m_nav.addClass('active');
            body.append('<div class="m-nav-over"></div>').css('overflow', 'hidden');
        }
        var mnav_close = function() {
            m_nav.removeClass('active');
            body.children('.m-nav-over').remove();
            body.css('overflow', '');
        }

        doc.on('click', settings.open, function(e) {
            e.preventDefault();
            if (win.width() <= 991) mnav_open();
        }).on('click', '.m-nav-over', function(e) {
            e.preventDefault();
            mnav_close();
        });

        m_nav.hc_accordion();
    }

    $.fn.hc_countdown = function(options) {
        var settings = $.extend({
                date: new Date().getTime() + 1000 * 60 * 60 * 24,
            }, options),
            this_ = $(this);

        var countDownDate = new Date(settings.date).getTime();

        var count = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this_.html('<div class="item"><span>' + days + '</span> ngày</div>' +
                '<div class="item"><span>' + hours + '</span> giờ</div>' +
                '<div class="item"><span>' + minutes + '</span> phút </div>' +
                '<div class="item"><span>' + seconds + '</span> giây </div>'
            );
            if (distance < 0) {
                clearInterval(count);
            }
        }, 1000);
    }

    //Upload_img

    $.fn.hc_upload = function(options) {
        var settings = $.extend({
                multiple: false,
                result: '.hc-upload-pane',
            }, options),
            this_ = $(this);

        var input_name = this_.attr('name');
        this_.removeAttr('name');

        this_.change(function(e) {
            if ($(settings.result).length > 0) {
                var files = event.target.files;
                if (settings.multiple) {
                    for (var i = 0, files_len = files.length; i < files_len; i++) {
                        var path = URL.createObjectURL(files[i]);
                        var name = files[i].name;
                        var size = Math.round(files[i].size / 1024 / 1024 * 100) / 100;
                        var type = files[i].type.slice(files[i].type.indexOf('/') + 1);

                        var img = $('<img src="' + path + '">');
                        var input = $('<input type="hidden" name="' + input_name + '[]"' +
                            '" value="' + path +
                            '" data-name="' + name +
                            '" data-size="' + size +
                            '" data-type="' + type +
                            '" data-path="' + path +
                            '">');
                        var elm = $('<div class="hc-upload"><button type="button" class="hc-del smooth">&times;</button></div>').append(img).append(input);
                        $(settings.result).append(elm);
                    }
                } else {
                    var path = URL.createObjectURL(files[0]);
                    var img = $('<img src="' + path + '">');
                    var elm = $('<div class="hc-upload"><button type="button" class="hc-del smooth">&times;</button></div>').append(img);
                    $(settings.result).html(elm);
                }
            }
        });

        body.on('click', '.hc-upload .hc-del', function(e) {
            e.preventDefault();
            this_.val('');
            $(this).closest('.hc-upload').remove();
        });
    }

}).call(this);


jQuery(function($) {
    var win = $(window),
        body = $('body'),
        doc = $(document);

    var FU = {
        get_Ytid: function(url) {
            var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
            if (url) var arr = url.match(rx);
            if (arr) return arr[1];
        },
        get_currency: function(str) {
            if (str) return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        animate: function(elems) {
            var animEndEv = 'webkitAnimationEnd animationend';
            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        },
    };

    var UI = {
        mMenu: function() {

        },
        header: function() {
            var elm = $('header'),
                h = elm.innerHeight(),
                offset = 200,
                mOffset = 0;
            var fixed = function() {
                elm.addClass('fixed');
                body.css('margin-top', h);
            }
            var unfixed = function() {
                elm.removeClass('fixed');
                body.css('margin-top', '');
            }
            var Mfixed = function() {
                elm.addClass('m-fixed');
                body.css('margin-top', h);
            }
            var unMfixed = function() {
                elm.removeClass('m-fixed');
                body.css('margin-top', '');
            }
            if (win.width() > 991) {
                win.scrollTop() > offset ? fixed() : unfixed();
            } else {
                win.scrollTop() > mOffset ? Mfixed() : unMfixed();
            }
            win.scroll(function(e) {
                if (win.width() > 991) {
                    win.scrollTop() > offset ? fixed() : unfixed();
                } else {
                    win.scrollTop() > mOffset ? Mfixed() : unMfixed();
                }
            });
        },
        backTop: function() {
            var back_top = $('.back-to-top'),
                offset = 800;

            back_top.click(function() {
                $("html, body").animate({ scrollTop: 0 }, 800);
                return false;
            });

            if (win.scrollTop() > offset) {
                back_top.fadeIn(200);
            }

            win.scroll(function() {
                if (win.scrollTop() > offset) back_top.fadeIn(200);
                else back_top.fadeOut(200);
            });
        },
        slider: function() {
            /*$('.slider-cas').slick({
            	nextArrow: '<img src="images/next.png" class="next" alt="Next">',
            	prevArrow: '<img src="images/prev.png" class="prev" alt="Prev">',
            })
            FU.animate($(".slider-cas .slick-current [data-animation ^= 'animated']"));
            $('.slider-cas').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            	if(currentSlide!=nextSlide){
            		var aniElm = $(this).find('.slick-slide').find("[data-animation ^= 'animated']");
            		FU.animate(aniElm);
            	}
            });*/

            /*$('.pro-cas').slick({
	            slidesToShow: 4,
	            slidesToScroll: 1,
	            nextArrow: '<i class="cas-arrow smooth next"></i>',
	            prevArrow: '<i class="cas-arrow smooth prev"></i>',
	            dots: true,
	            autoplay: true,
	            swipeToSlide: true,
	            autoplaySpeed: 4000,
	            responsive: [
	            {
	                breakpoint: 1199,
	                settings: {
	                    slidesToShow: 3,
	                }
	            },
	            {
	                breakpoint: 991,
	                settings: {
	                    slidesToShow: 3,
	                }
	            },
	            {
	                breakpoint: 700,
	                settings: {
	                    slidesToShow: 2,
	                }
	            },
	            {
	                breakpoint: 480,
	                settings: {
	                    slidesToShow: 1,
	                }
	            }
	            ],
	        })*/

            /*$('.pro-cas').owlCarousel({
		        loop: true,
		        margin: 30,
		        responsiveClass:true,
		        nav: true,
		        smartSpeed: 800,
		        navText: ["<span class='smooth arrow-cas prev'></span>", "<span class='smooth arrow-cas next'></span>"],
		        responsive:{
		            992:{
		                items: 3,
		            },
		            768:{
		                items: 2,
		            },
		            0:{
		                items: 1,
		            }
		        }
		    })*/
        },
        input_number: function() {
            doc.on('keydown', '.numberic', function(event) {
                if (!(!event.shiftKey &&
                        !(event.keyCode < 48 || event.keyCode > 57) ||
                        !(event.keyCode < 96 || event.keyCode > 105) ||
                        event.keyCode == 46 ||
                        event.keyCode == 8 ||
                        event.keyCode == 190 ||
                        event.keyCode == 9 ||
                        event.keyCode == 116 ||
                        (event.keyCode >= 35 && event.keyCode <= 39)
                    )) {
                    event.preventDefault();
                }
            });
            doc.on('click', '.i-number .up', function(e) {
                e.preventDefault();
                var input = $(this).parents('.i-number').children('input');
                var max = Number(input.attr('max')),
                    val = Number(input.val());
                if (!isNaN(val)) {
                    if (!isNaN(max) && input.attr('max').trim() != '') {
                        if (val >= max) {
                            return false;
                        }
                    }
                    input.val(val + 1);
                    input.trigger('number.up');
                }
            });
            doc.on('click', '.i-number .down', function(e) {
                e.preventDefault();
                var input = $(this).parents('.i-number').children('input');
                var min = Number(input.attr('min')),
                    val = Number(input.val());
                if (!isNaN(val)) {
                    if (!isNaN(min) && input.attr('max').trim() != '') {
                        if (val <= min) {
                            return false;
                        }
                    }
                    input.val(val - 1);
                    input.trigger('number.down');
                }
            });
        },
        yt_play: function() {
            doc.on('click', '.yt-box .play', function(e) {
                var id = FU.get_Ytid($(this).closest('.yt-box').attr('data-url'));
                $(this).closest('.yt-box iframe').remove();
                $(this).closest('.yt-box').append('<iframe src="https://www.youtube.com/embed/' + id + '?rel=0&amp;autoplay=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
            });
        },
        psy: function() {
            var btn = '.psy-btn',
                sec = $('.psy-section'),
                pane = '.psy-pane';
            doc.on('click', btn, function(e) {
                e.preventDefault();
                $(this).closest(pane).find(btn).removeClass('active');
                $(this).addClass('active');
                $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 40 }, 600);
            });

            var section_act = function() {
                sec.each(function(index, el) {
                    if (win.scrollTop() + (win.height() / 2) >= $(el).offset().top) {
                        var id = $(el).attr('id');
                        $(pane).find(btn).removeClass('active');
                        $(pane).find(btn + '[href="#' + id + '"]').addClass('active');
                    }
                });
            }
            section_act();
            win.scroll(function() {
                section_act();
            });
        },
        toggle: function() {
            var ani = 100;
            $('[data-show]').each(function(index, el) {
                var ct = $($(el).attr('data-show'));
                $(el).click(function(e) {
                    e.preventDefault();
                    ct.fadeToggle(ani);
                });
            });
            win.click(function(e) {
                $('[data-show]').each(function(index, el) {
                    var ct = $($(el).attr('data-show'));
                    if (ct.has(e.target).length == 0 && !ct.is(e.target) && $(el).has(e.target).length == 0 && !$(el).is(e.target)) {
                        ct.fadeOut(ani);
                    }
                });
            });
        },
        uiCounterup: function() {
            var item = $('.hc-couter'),
                flag = true;
            if (item.length > 0) {
                run(item);
                win.scroll(function() {
                    if (flag == true) {
                        run(item);
                    }
                });

                function run(item) {
                    if (win.scrollTop() + 70 < item.offset().top && item.offset().top + item.innerHeight() < win.scrollTop() + win.height()) {
                        count(item);
                        flag = false;
                    }
                }

                function count(item) {
                    item.each(function() {
                        var this_ = $(this);
                        var num = Number(this_.text().replace(".", ""));
                        var incre = num / 80;

                        function start(counter) {
                            if (counter <= num) {
                                setTimeout(function() {
                                    this_.text(FU.get_currency(Math.ceil(counter)));
                                    counter = counter + incre;
                                    start(counter);
                                }, 20);
                            } else {
                                this_.text(FU.get_currency(num));
                            }
                        }
                        start(0);
                    });
                }
            }
        },
        ready: function() {
            // UI.mMenu();
            // UI.header();
            // UI.slider();
            // UI.backTop();
            // // UI.toggle();
            // UI.input_number();
            // UI.uiCounterup();
            // UI.yt_play();
            // UI.psy();
        },
    }


    UI.ready();


    /*custom here*/


    //Hover_show_categories

    $(document).ready(function() {
        $(".show_categories").hover(function() {
            $(".hide_categories").toggle();
        });
    });


    //slide_banner_top

    $('.slide_banner_top').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        // autoplay: true,
        autoplayTimeout: 5000,
        navClass: ["slide-prev", "slide-next"],
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        responsive: {
            1199: {
                items: 1,
            },
            991: {
                items: 1,
            },
            768: {
                items: 1,
            },
            479: {
                items: 1,
            },
            0: {
                items: 1,
            }
        }
    });




    //slide_similar_product

    $('.slide_similar_product').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        // autoplay: true,
        autoplayTimeout: 5000,
        navClass: ["slide-prev", "slide-next"],
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        responsive: {
            1199: {
                items: 4,
            },
            991: {
                items: 4,
            },
            768: {
                items: 3,
            },
            479: {
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });


    //slide_categoriesTop

    $('.slide_categoriesTop').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        // autoplay: true,
        autoplayTimeout: 5000,
        navClass: ["slide-prev", "slide-next"],
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        responsive: {
            1199: {
                items: 3,
            },
            991: {
                items: 3,
            },
            768: {
                items: 3,
            },
            479: {
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });


    //slide_products

    $('.products_slide').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        // autoplay: true,
        autoplayTimeout: 5000,
        navClass: ["slide-prev", "slide-next"],
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        responsive: {
            1199: {
                items: 4,
            },
            991: {
                items: 3,
            },
            768: {
                items: 3,
            },
            479: {
                items: 2,
            },
            0: {
                items: 2,
            }
        }
    });



    //slide_category

    $('.slide_category_').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        // autoplay: true,
        autoplayTimeout: 5000,
        navClass: ["slide-prev", "slide-next"],
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        responsive: {
            1199: {
                items: 10,
            },
            991: {
                items: 8,
            },
            768: {
                items: 6,
            },
            479: {
                items: 4,
            },
            0: {
                items: 2,
            }
        }
    });


    //slide_flash

    $('.slide_flash').owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        // autoplay: true,
        autoplayTimeout: 5000,
        navClass: ["slide-prev", "slide-next"],
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        responsive: {
            1199: {
                items: 6,
            },
            991: {
                items: 5,
            },
            768: {
                items: 4,
            },
            479: {
                items: 3,
            },
            0: {
                items: 2,
            }
        }
    });



    //slide_friend_suggestions

    $('.slide_fr_sug').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        // autoplay: true,
        autoplayTimeout: 5000,
        navClass: ["slide-prev", "slide-next"],
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        responsive: {
            1199: {
                items: 6,
            },
            991: {
                items: 5,
            },
            768: {
                items: 4,
            },
            479: {
                items: 3,
            },
            0: {
                items: 2,
            }
        }
    });






    //topbar_slide

    $('.topbar_slide').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        // autoplay: true,
        autoplayTimeout: 5000,
        navClass: ["slide-prev", "slide-next"],
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        responsive: {
            1199: {
                items: 7,
            },
            991: {
                items: 5,
            },
            768: {
                items: 4,
            },
            479: {
                items: 3,
            },
            0: {
                items: 2,
            }
        }
    });





    //friend_suggestions

    $('button').click(function() {
            var $this = $(this);
            $this.toggleClass('following')
            if ($this.is('.following')) {
                $this.addClass('wait');
            }
        })
        .on('mouseleave', function() {
            $(this).removeClass('wait');
        })




    ///ReadMore_texts

    $(function() {

        var minimized_elements = $('p.minimize');

        minimized_elements.each(function() {
            var t = $(this).text();
            if (t.length < 600) return;

            $(this).html(
                t.slice(0, 600) + '<span>... </span><a href="#" class="more" style="color:#f26522;">Xem thêm</a>' +
                '<span style="display:none;">' + t.slice(600, t.length) + ' <a href="#" class="less"></a></span>'
            );

        });

        $('a.more', minimized_elements).click(function(event) {
            event.preventDefault();
            $(this).hide().prev().hide();
            $(this).next().show();
        });

        $('a.less', minimized_elements).click(function(event) {
            event.preventDefault();
            $(this).parent().hide().prev().show().prev().show();
        });

    });




    ///ShowMore_comments

    var $clickme = $('.clickmore'),
        $box = $('.box');

    $box.hide();

    $clickme.click(function(e) {
        $(this).text(($(this).text() === 'Ẩn bình luận' ? 'Xem thêm bình luận' : 'Ẩn bình luận')).next('.box').slideToggle();;
        e.preventDefault();
    });







    ///ReadMore_texts_comments

    $(function() {

        var minimized_elements = $('p.minimize_2');

        minimized_elements.each(function() {
            var t = $(this).text();
            if (t.length < 200) return;

            $(this).html(
                t.slice(0, 200) + '<span>... </span><a href="#" class="more" style="color:#f26522;">Xem thêm</a>' +
                '<span style="display:none;">' + t.slice(200, t.length) + ' <a href="#" class="less"></a></span>'
            );

        });

        $('a.more', minimized_elements).click(function(event) {
            event.preventDefault();
            $(this).hide().prev().hide();
            $(this).next().show();
        });

        $('a.less', minimized_elements).click(function(event) {
            event.preventDefault();
            $(this).parent().hide().prev().show().prev().show();
        });

    })





    //likes
    $('.btn-counter_like').on('click', function(event, count) {
        event.preventDefault();
        var $this = $(this),
            count = $this.attr('data-count'),
            active = $this.hasClass('active'),
            multiple = $this.hasClass('multiple-count');
        // Second method, use when ... I dunno when but it looks cool and that's why it is here
        $.fn.noop = $.noop;
        $this.attr('data-count', !active || multiple ? ++count : --count)[multiple ? 'noop' : 'toggleClass']('active');

    });



    //drop_content_user
    $(document).ready(function() {
        $("#drop_user").click(function() {
            $(".dropcontent_user").toggleClass("open", 1000)
        })

    });




    // Scroll to TOP

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    });

    $('.scroll_top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 500) {
            $(".intro").hide();
            $(".scroll_down").hide();
        }
    });



    //active_view_priority_category

    $(function() {
        $('ul.nav li').on('click', function() {
            $(this).parent().find('li.active_').removeClass('active_');
            $(this).addClass('active_');
        });
    });



    //carousel_products_detail

    ////////slide_product_detail

    $(document).ready(function() {

        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        var slidesPerPage = 4; //globaly define number of elements per page
        var syncedSecondary = true;

        sync1.owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            // autoplay: false,
            dots: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsiveRefreshRate: 200,
            navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        }).on('changed.owl.carousel', syncPosition);

        sync2
            .on('initialized.owl.carousel', function() {
                sync2.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: slidesPerPage,
                dots: true,
                nav: true,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100
            }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;

            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }

            //end block

            sync2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();

            if (current > end) {
                sync2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }

        sync2.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            sync1.data('owl.carousel').to(number, 300, true);
        });
    });

    ////////end_slide_product_detail


    //click_active_colors_productsdetail

    $(document).ready(function() {
        $('.nav-list button').click(function(e) {
            $('.nav-list button').removeClass('active');
            var $this = $(this);
            if (!$this.hasClass('active')) {
                $this.addClass('active');
            }
        });
    });



    ////Number_quantity_product

    $('.qty-input span').click(function() {
        val = parseInt($('.qty-input input').val());

        if ($(this).hasClass('less')) {
            val = val - 1;
        } else if ($(this).hasClass('more')) {
            val = val + 1;
        }

        if (val < 1) {
            val = 1;
        }

        $('.qty-input input').val(val);
    })


    ////Vote

    setTimeout(function() {
        $('.bar').each(function(i) {
            var $bar = $(this);
            setTimeout(function() {
                $bar.css('width', $bar.attr('data-percent'));
            }, i * 100);
        });

    }, 1000)




    $(document).ready(function() {

        //Default Action
        $(".tab_content").hide(); //Hide all content
        $("ul.tabs li:first").addClass("active").show(); //Activate first tab
        $(".tab_content:first").show(); //Show first tab content

        //On Click Event
        $("ul.tabs li").click(function() {
            $("ul.tabs li").removeClass("active"); //Remove any "active" class
            $(this).addClass("active"); //Add "active" class to selected tab
            $(".tab_content").hide(); //Hide all tab content
            var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
            $(activeTab).fadeIn(); //Fade in the active content
            return false;
        });

    });



    $(function() {

        $(".tab-opt ul li a").on('click', function(e) {
            e.preventDefault(); // prenvent default anchor behavier

            $(".tab-opt ul li").removeClass('active'); // remove ative class from all li elements
            $(this).parent().addClass('active'); // add active class to current clicked li element

            $(".tabs-content > div").hide(); // hide all content
            var hrefId = $(this).attr('href'); // get id from href attrbute of clicked anchor tag
            $(hrefId).show(); // show id's content        
        });

    });


    //yes_btn_active

    $('.yes_btn').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
    })



    //btn_code_sale and show div
    var $clickme = $('.sale_code_btn'),
        $box = $('.sale_code_content');

    $box.hide();

    $clickme.click(function(e) {
        $(this).next('.sale_code_content').slideToggle();;
        e.preventDefault();
    });

    //click_btn_hide div
    $('.cancel_btn').click(function() {
        $('.sale_code_content').hide();
    });


    $(document).ready(function() {
        $('.change_btn').click(function() {
            $('.over_lay').show();
        });

        $('.back').click(function() {
            $('.over_lay').hide();
        });
    });



    //fllow_shop

    $('.follow_btn').click(function(e) {
        $(this).text(($(this).text() === 'Theo dõi' ? 'Đã theo dõi' : 'Theo dõi'));;
        e.preventDefault();
    });


    // .text(($(this).text() === 'Trở lại' ? 'Chọn mã vận chuyển/Giảm giá' : 'Trở lại'))



    //data_count_product_cart
    $(document).ready(function() {
        $('.minus').click(function() {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function() {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });




    //click_show chat box //store

    $(document).ready(function() {
        $('.chat_btn').click(function() {
            $('.overlay').show();
            $('body').addClass('overflow');
        });

        $('.lnr-cross').click(function() {
            $('.overlay').hide();
            $('body').removeClass('overflow');
        });

    });





    //check_box_side/show_sell_home

    $(function() {
        $("#chkPassport").click(function() {
            if ($(this).is(":checked")) {
                $("#dvPassport").hide();
                $("#AddPassport").show();
            } else {
                $("#dvPassport").show();
                $("#AddPassport").hide();
            }
        });
    });

    $(function() {
        $("#chkPassport2").click(function() {
            if ($(this).is(":checked")) {
                $("#dvPassport2").hide();
                $("#AddPassport").show();
            } else {
                $("#dvPassport2").show();
                $("#AddPassport").hide();
            }
        });
    });




    //click_showProduct__type_

    $(document).ready(function() {
        $('.cTGRLeft_lv1').click(function() {
            $('.prtypes_CTGRCenter').show();
        });

        $('.cTGRcenter_lv2').click(function() {
            $('.prtypes_CTGRRight').show();
        });

        $('.btn_pc').click(function() {
            $('.prtypes_CTGRLeft').show();
        });


    });



    $(".trigger_pro").click(function() {
        $(".list_CTCTGR").toggle();
    });


    //Btn closed banner

    $(function() {
        $('#btn_closed').click(function() {
            $('.leftFixedBanner').fadeOut()
        });
        $('#btn_closed_2').click(function() {
            $('.rightFixedBanner').fadeOut()
        });
    });

    ///slide_category_5

    $('.slide_category_5').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        // autoplay: true,
        autoplayTimeout: 5000,
        navClass: ["slide-prev", "slide-next"],
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        responsive: {
            1199: {
                items: 4,
            },
            991: {
                items: 5,
            },
            768: {
                items: 2,
            },
            479: {
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });



    // window.onscroll = function() {myFunction()};

    // var header = document.getElementById("myHeader");
    // var sticky = header.offsetTop;

    // function myFunction() {
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky");
    //   } else {
    //     header.classList.remove("sticky");
    //   }
    // }



    $(document).ready(function() {
        $(".tabs-menu a").click(function(event) {
            event.preventDefault();
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            var tab = $(this).attr("href");
            $(".tab-content").not(tab).css("display", "none");
            $(tab).fadeIn();
        });
    });


    //btn_Popup
    $(function() {
        $('.btn_showSharebox').click(function() {
            $('.share_box').show();
            $('body').addClass("overflow")
        });
        $('.closedBtn_2').click(function() {
            $('.share_box').hide();
            $('body').removeClass("overflow")
        });
    });
})


//copy_link
$('.copy_btn').click(function(e) {
    $(this).text(($(this).text() === 'Sao chép' ? 'Đã sao chép' : 'Đã sao chép'));;
    e.preventDefault();
});



(function($) {
    // $('.accordion_menuBar > li:eq(0) .title_pri').addClass('active').next().slideDown();

    $('.accordion_menuBar .title_pri').click(function(j) {
        var dropDown = $(this).closest('li').find('.menuBarList');

        $(this).closest('.accordion_menuBar').find('.menuBarList').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion_menuBar').find('.title_pri.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

//menuMobile_Login
$(function() {
    $(".menu_btn").click(function() {
        $(".left_accInfo").show();
        $("body").addClass("overflow").addClass("ovl_");
    });
    $(".closeBtn").click(function() {
        $(".left_accInfo").hide();
        $("body").removeClass("overflow").removeClass("ovl_");
    });
});

//PopUp_Question_video_training

$(document).ready(function() {
    $('.btn_showPopup').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.popUp_ques').show();
        $('body').addClass('hidden');
    });
    $('.popUp_ques').click(function(e) {
        e.stopPropagation();
    });
    $('.closed_popUp').click(function() {
        $('.popUp_ques').hide();
        $('body').removeClass('hidden');
    });
});



///course_tabs

$(document).ready(function() {
    $(".tabs_menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".course-tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});



///course_accordion
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.article-title');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.course-accordion-content').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('.course_accordion'), false);
});


//btn_popUp_course
$(function() {
    $(".btn_popUp_courde").click(function() {
        $(".overlay_course").show();
        $("body").addClass("hidden");
    });
    $(".btn_hideCourse").click(function() {
        $(".overlay_course").hide();
        $("body").removeClass("hidden");
    })
});



///vote

$(function() {
    var star = '.star',
        selected = '.selected';

    $(star).on('click', function() {
        $(selected).each(function() {
            $(this).removeClass('selected');
        });
        $(this).addClass('selected');
    });

});

//activate_course_ 
$(function() {
    $('.btnShowAcBox').click(function() {
        $('.activate_course').show();
        $("body").addClass("overflow");
    });

    $('.closedBtnAcBox').click(function() {
        $('.activate_course').hide();
        $("body").removeClass("overflow");
    });
});

//pushmenu_study
$(function() {
    $('.pushMenu').click(function() {
        $('.pushLeftMenu').show();
        $("body").addClass("overflow ovl_");
    });

    $('.pushmenuBtn').click(function() {
        $('.pushLeftMenu').hide();
        $("body").removeClass("overflow ovl_");
    });
});


//btn_show_chapter_Study
$(function() {
    var $clickme = $('.chapter_num'),
        $box = $('.chapter_hide');

    $box.hide();

    $clickme.click(function(e) {
        $(this).next('.chapter_hide').slideToggle();;
        e.preventDefault();
    });

});



/////////tabs_study_detail
$(function() {

    $('.tabs_studyDetail li').click(function() {

        var tab_id = $(this).attr('data-tab');

        $('.tabs_studyDetail li').removeClass('current');

        $('.study_tab_ct').removeClass('current');

        $(this).addClass('current');

        $("#" + tab_id).addClass('current');

    })

})

//show_replyBox study_detail
$(function() {
    var cmtBox = $(".myCmtBox");
    cmtBox.hide();

    $(".closedIMG").click(function() {
        $(".imgFeedback").hide(300);
    });

    $(".repFeedbackBtn").click(function(e) {

        cmtBox.hide();

        var commentboxId = $(this).attr("data-commentbox");

        $("#" + commentboxId).slideDown(250);

        $(".textBox input").focus();
    });

});


//Study_leftBox <= 991
$(function() {
    $(".btnShowLeftStudy").click(function() {
        $(".study_List").show();
        $("body").addClass("overflow ovl_");
    });

    $(".closedBtnLeftStudy").click(function() {
        $(".study_List").hide();
        $("body").removeClass("overflow ovl_");
    });
});


//accodion_sell_home

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.article-title');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('.accordion-sell'), false);
});


$('.showMenuLeft_').click(function() {
    $('.col-left ').show()
});
$('.colosed_leftMenu_2').click(function() {
    $('.col-left ').hide()
});