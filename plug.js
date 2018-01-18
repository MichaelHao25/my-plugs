[].forEach.call($$("*"), function(a) {
    a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
});


body.active
position fixed


function fix_screen(hide) {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (hide == 'hide') {
        document.documentElement.style.overflow = 'hidden';
        $('body').addClass('active').css('top', '-' + top + 'px');
    } else {
        $('body').removeClass('active');
        document.documentElement.style.overflow = 'auto';
        document.documentElement.scrollTop = -parseInt($('body').css('top'));
        document.body.scrollTop = -parseInt($('body').css('top'));
    }
}



// .s451d2sa84dsa-nice{
//     position: absolute;
//     font-size: 18px;
//     color: #fbcd33;
// }
// .s451d2sa84dsa-nice.active{
//     -webkit-animation: fadeout 0.5s linear forwards;
//             animation: fadeout 0.5s linear forwards;
// }
// @-webkit-keyframes fadeout{
//     form{
//         -webkit-transform: translate(0, 0);
//                 transform: translate(0, 0);
//         opacity: 1;
//     }
//     to{
//         -webkit-transform: translate(20%, -100%);
//                 transform: translate(20%, -100%);
//         opacity: 0;
//     }
// }
// @keyframes fadeout{
//     form{
//         -webkit-transform: translate(0, 0);
//                 transform: translate(0, 0);
//         opacity: 1;
//     }
//     to{
//         -webkit-transform: translate(20%, -100%);
//                 transform: translate(20%, -100%);
//         opacity: 0;
//     }
// }


var niceAnimation = function() {
    var that = this;
    that.getAttr = function(target, aegs) {
        return $(target).attr(aegs);
    }
    that.createElemtents = function(text) {
        var none = '<div class="s451d2sa84dsa-nice ' + that.className + '">' + text + '</div>';
        $('body').append(none);
    }
    that.setStyle = function(style) {
        (style) && $('.s451d2sa84dsa-nice').css(style);
    }
    that.copyJson = function() {
        var temp = {};
        for (var i = 0; i < arguments.length; i++) {
            if (typeof(arguments[i]) == 'string') {
                var c = JSON.parse(arguments[i]);
            } else {
                var c = arguments[i];
            }
            for (var attr in c) {
                temp[attr] = c[attr];
            }
        }
        return temp;
        //相同的数据后面替换前面
    }
    that.offset = function(dom) {
        var temp = {};
        temp.top = parseInt($(dom).offset().top) - $(dom).height() * 0.2 + 'px';
        temp.left = parseInt($(dom).offset().left) + $(dom).width() * 1.2 + 'px';
        return temp;
    }
    that.kill = function() {
        setTimeout(function() {
            $('.' + that.className).remove();

        }, 2000)
    }
    that.init = function(dom, e) {
        $(dom).removeClass('aGVsbG93b3Jk');
        that.className = 'ani-' + (e.timeStamp).toString().replace(/\./g, '-');
        that.createElemtents(that.getAttr(dom, 'data-text'));
        var c = that.copyJson(that.offset(dom), that.getAttr(dom, 'data-style'));
        that.setStyle(c);
        $('.s451d2sa84dsa-nice').addClass('active');
        that.kill(dom);
    }
}

$('body').on('click', '.aGVsbG93b3Jk', function(e) {
    console.log(1);
    var c = new niceAnimation;
    c.init(this, e);
});



(function() {
    function style() {
        var style = '.ripple{position:relative;overflow:hidden}.ripple>.hcl-animation{position:absolute;background:#666;border-radius:50%;-webkit-animation:hclkeyframe 2s;animation:hclkeyframe 2s;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@-webkit-keyframes hclkeyframe{0%{opacity:.5;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0)}to{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}}@keyframes hclkeyframe{0%{opacity:.5;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0)}to{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}}'
        var media = document.createElement('style')
        media.innerHTML = style;
        document.getElementsByTagName('head')[0].appendChild(media);
    }
    style();
    $('.ripple').on('click', function(event) {
        var info = {};
        info.x = event.pageX - $(this).offset().left;
        info.y = event.pageY - $(this).offset().top;
        info.width = $(this).width();
        info.height = $(this).height();
        info.max = info.width > info.height ? info.width : info.height;
        info.className = 'ani-' + (event.timeStamp).toString().replace(/\./g, '-');
        info.animationName = 'hcl-animation';
        info.dom = '<div class="' + info.animationName + ' ' + info.className + '" style="left:' + info.x + 'px;top:' + info.y + 'px;width:' + info.max * 2 + 'px;height:' + info.max * 2 + 'px"></div>'
        $(this).append(info.dom);
        clear(this, info.className);
    });

    function clear(obj, className) {
        setTimeout(function() {
            $(obj).find('.' + className).remove();
        }, 2000)
    }
})();



function _scale() {
    if (window.outerWidth < 600) {
        document.querySelector('meta[name=viewport]').content = 'width=device-width,minimum-scale=0.6,maximum-scale=0.6,user-scalable=no';
    } else {
        document.querySelector('meta[name=viewport]').content = 'width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no';
    }
}


var browser = {
    versions: function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return { //移动终端浏览器版本信息  
            trident: u.indexOf('Trident') > -1, //IE内核  
            presto: u.indexOf('Presto') > -1, //opera内核  
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器  
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器  
            iPad: u.indexOf('iPad') > -1, //是否iPad  
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (browser.versions.mobile) { //判断是否是移动设备打开。browser代码在下面  
    /* var ua = navigator.userAgent.toLowerCase();//获取判断用的对象 
        	if (ua.match(/MicroMessenger/i) == "micromessenger") { 
        	//在微信中打开 
        	setInterval(WeixinJSBridge.call('closeWindow'),2000); 
        	} 
        	if (ua.match(/WeiBo/i) == "weibo") { 
        	//在新浪微博客户端打开 
        	} 
        	if (ua.match(/QQ/i) == "qq") { 
        	//在QQ空间打开 
        	} 
        	if (browser.versions.ios) { 
        	//是否在IOS浏览器打开 
        	}  
        	if(browser.versions.android){ 
        	//是否在安卓浏览器打开 
        }*/
    window.location.href = "http://www.baidu.com/wap";
}
/*else { 
        //否则就是PC浏览器打开 
        window.close(); 
    }    */



(function() {
    var srreen = window.innerHeight;
    var list = []
    $.each($('*[data-anim]'), function(index, val) {
        // console.log(val);
        $(val).addClass('opacity');
        var dom = {};
        dom.index = index;
        dom.val = val;
        dom.top = $(val).offset().top;
        dom.left = $(val).offset().left;
        dom.ani = $(val).attr('data-anim') || 'fadeIn';
        dom.height = $(val).innerHeight();
        dom.width = $(val).innerWidth();
        dom.is = 0;
        // console.log(dom);
        list.push(dom);
        // console.log(list);
    });

    var animate = (function animate() {
        var scrollTop = $(window).scrollTop();
        var length = list.length
        for (var i = 0; i < length; i++) {

            if (list[i].top + list[i].height < scrollTop || scrollTop + srreen < list[i].top) {
                $(list[i].val).addClass('opacity').removeClass('animated ' + list[i].ani)
            }
            // 在屏幕之外的隐藏

            if ((list[i].top - scrollTop) > 0 && (list[i].top - scrollTop) < srreen - srreen / 5) {
                $(list[i].val).removeClass('opacity').addClass('animated ' + list[i].ani)
            }
            // if (list[i].top+srreen/2 >  scrollTop&&list[i].top <  scrollTop+srreen) {

            // 	$(list[i].val).removeClass('opacity').addClass('animated '+list[i].ani)
            // }
            // }else{
            // 	if (list[i].top+list[i].height < scrollTop) {
            // 		$(list[i].val).addClass('opacity').removeClass('animated '+list[i].ani)
            // 	}
            // }
        }
        return animate;
    })()
    $(window).scroll(function(event) {
        animate()
    });
    $(window).resize(function() {
        srreen = window.innerHeight;
    });
})()
//animate



var browser = {
    versions: function() {
        var u = navigator.userAgent;
        if (u.indexOf('Trident') > -1) {
            return '-ms-';
        }
        if (u.indexOf('Presto') > -1) {
            return '-o-';
        }
        if (u.indexOf('AppleWebKit') > -1) {
            return '-webkit-';
        }
        if (u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1) {
            return '-moz-';
        }
    }(),
}


function console.log(str) {
    console.log(srt, "color:#1dacf9;text-shadow:0 0 2px rgba(29,172,249,.5);")
}


<script language="JavaScript" type="text/javascript">
        var browser = {
          versions: function () {
             var u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息 
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        } (),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
    document.writeln("内核: " + browser.versions.webKit);//可修改
    document.writeln("语言版本: " + browser.language);
    document.writeln(" 是否为移动终端: " + browser.versions.mobile);
    document.writeln(" ios终端: " + browser.versions.ios);
    document.writeln(" android终端: " + browser.versions.android);
    document.writeln(" 是否为iPhone: " + browser.versions.iPhone);
    document.writeln(" 是否iPad: " + browser.versions.iPad);
    document.writeln(navigator.userAgent);
    </script>
//////////////////////
// jQuery.fn.jquery //
//////////////////////


$('*[data-js-fadeIn]').on('click', function() {
    var fadeIn_obj = $(this).attr('data-js-fadeIn');
    $(fadeIn_obj).fadeIn();
});


$('*[data-js-fadeOut]').on('click', function() {
    var fadeOut_obj = $(this).attr('data-js-fadeOut');
    $(fadeOut_obj).fadeOut();
});


$('*[data-js-tabs]').children().on('click', function() {
    var tabs_obj = $(this).parent().attr('data-js-tabs');
    $(tabs_obj).children().eq($(this).index()).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
});
$.each($('*[data-js-tabs]'), function(index, el) {
    var arg = window.location.search;
    if (arg != '') {
        arg = arg.split('?')[1].split('=')[1];
        console.log(arg);
        $(el).children().eq(arg - 1).trigger('click');

    } else {
        $(el).children().first().addClass('active');
        $($(el).attr('data-js-tabs')).children().eq(0).show().siblings().hide();;
    }
});



function ShowCountDown(obj) {
    a();
    setInterval(a, 1000);

    function a() {
        var now = new Date();
        var str = $(obj).attr('end-time').split(',');
        var endDate = new Date(str[0], str[1] - 1, str[2], str[3], str[4]);
        var leftTime = endDate.getTime() - now.getTime();
        var leftsecond = parseInt(leftTime / 1000);
        var day1 = Math.floor(leftsecond / (60 * 60 * 24));
        var hour = addZero(Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600));
        var minute = addZero(Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60));
        var second = addZero(Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60));

        function addZero(num) {
            return num < 10 ? '0' + num : num;
        }
        $('.page1 .gift .time .house').eq(0).text(minute.toString().charAt(0));
        $('.page1 .gift .time .house').eq(1).text(minute.toString().charAt(1));
        $('.page1 .gift .time .minute').eq(0).text(second.toString().charAt(0));
        $('.page1 .gift .time .minute').eq(1).text(second.toString().charAt(1));
    }
}
//new version counddown
(function(target) {
    var length = target.length;
    for (var i = 0; i < length; i++) {
        b(target[i]);
    }

    function b(target) {
        a();
        setInterval(a, 1000);

        function a() {
            var now = new Date();
            var str = target.getAttribute('end-time');
            var endDate = new Date(Date.parse(str.replace(/-/g, "/")));
            var leftTime = endDate.getTime() - now.getTime();
            var leftsecond = parseInt(leftTime / 1000);
            var day = Math.floor(leftsecond / (60 * 60 * 24));
            var hour = addZero(Math.floor((leftsecond - day * 24 * 60 * 60) / 3600));
            var minute = addZero(Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60));
            var second = addZero(Math.floor(leftsecond - day * 24 * 60 * 60 - hour * 3600 - minute * 60));

            function addZero(num) {
                return num < 10 ? '0' + num : num;
            }
            target.getElementsByClassName('house')[0].innerHTML = hour;
            target.getElementsByClassName('minute')[0].innerHTML = minute;
            target.getElementsByClassName('second')[0].innerHTML = second;
        }
    }
})([document.getElementById('timer'), document.getElementById('timer2')]);

pop_message({
    content: '您未同意参与规则<br>请您选择后再继续',
});

function pop_message(options) {
    var defaultOptions = {
        time: 3000,
        title: '非常抱歉',
        content: 'error'
    }
    var opac = 0;

    function init() {
        var media = document.createElement('style')
        media.innerHTML = "#layout-box{  position: fixed;  top: 0;  bottom: 0;  left: 0;  right: 0;  background: rgba(0,0,0,0.6);   display: none;  opacity: 0;}#layout-box .wrap{  position: absolute;  left: 50%;  top: 50%;  -webkit-transform: translate(-50%, -50%);  -ms-transform: translate(-50%, -50%);  -o-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);  width: 70%;  background: #fff;  text-align: center;  border-radius: 8px;  padding-bottom: 20px;}#layout-box .wrap h3{  padding: 20px 0 10px;  margin: 0 auto;  width: 80%;  font-size: 16px;  color: #000;  font-weight: bold;}#layout-box .wrap p{  margin: 0 auto;  width:80%;  font-size: 14px;  display: -webkit-flex;  display: -moz-flex;  display: -ms-flex;  display: -o-flex;  display: flex;  align-items: center;  justify-content: center;}"
        document.getElementsByTagName('head')[0].appendChild(media);

        var elements = document.createElement('div')
        elements.innerHTML = "<div class='wrap'><h3></h3><p></p></div>"
        elements.id = 'layout-box';
        document.getElementsByTagName('body')[0].appendChild(elements);

        source = getid('layout-box')
    }

    function getTag(tag, obj) {
        if (obj == null) {
            return document.getElementsByTagName(tag)
        } else {
            return obj.getElementsByTagName(tag)
        }
    }

    function getid(id) {
        return document.getElementById(id)
    }

    function alpha(obj, n) {
        if (document.all) {
            obj.style.filter = "alpha(opacity=" + n + ")";
        } else {
            obj.style.opacity = (n / 100);
        }
    }
    var fadeon = function(obj, callback) {
        opac += 5;
        alpha(obj, opac);
        if (opac < 100) {
            timer = setTimeout(
                function() {
                    fadeon(obj, function() {
                        setTimeout(function() {
                            fadeout(obj)
                        }, 1000);
                    })
                }, 10)
        } else {
            callback && callback();
        }
    }

    var fadeout = function(obj) {
        opac -= 5;
        alpha(obj, opac);
        if (opac > 0) {
            timer = setTimeout(function() {
                fadeout(obj)
            }, 10)
        } else {
            source.style.display = "none";
        }
    }

    function obj_replace() {
        if (options) {
            for (let attr in options) {
                options[attr] != '' && (defaultOptions[attr] = options[attr]);
            }
        }
    }

    var source = getid('layout-box');
    !(source) && init();

    obj_replace()

    getTag('h3', source)[0].innerHTML = defaultOptions.title;
    getTag('p', source)[0].innerHTML = defaultOptions.content;
    source.style.display = "block"
    fadeon(source);
}


// 锚点
var $anchor = $(this);
var nav = $($anchor.attr('href'));
if (nav.length) {
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');

    event.preventDefault();
}


var media = document.createElement('style')
media.innerHTML = ".cp{cursor: pointer;}";
document.getElementsByTagName('head')[0].appendChild(media);
$('body *[href]').addClass('cp');
$('body *[href]').on('click', function() {
    if ($(this).attr('target')) {
        window.open($(this).attr('href'));
    } else {
        window.location.href = $(this).attr('href');
    }
});



function tabs(click, tabs, clickType) {
    if (!clickType) {
        clickType = 'click';
    }
    $(tabs).children().hide().eq($(click + '.active').index()).fadeIn();
    $(click).on(clickType, function() {
        $(this).addClass('active').siblings().removeClass('active');
        $(tabs).children().fadeOut().eq($(this).index()).fadeIn();
    });
}

function fullScreen(obj) {
    $(obj).css('height', window.innerHeight);
}


$.fn.setSelection = function(selectionStart, selectionEnd) {
    if (this.length == 0) return this;
    input = this[0];
    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }
    return this;
}

function rand(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

$(function() {

    (function steps() {
        $('.steps .tabs').first().siblings().hide();
        $('.register li').on('click', function() {
            $(this).parents('.register').removeClass().addClass('register').addClass('register' + ($(this).index() + 1));
            $('.steps .tabs').eq($(this).index()).show().siblings().hide();
        });
        $('.recom1 ul li.phone input').on('focusout', function() {
            var re = /^1[3|4|5|7|8][0-9]\d{8}$/;
            var str = $(this).val();
            if (re.test(str)) {
                $(this).parents('li').removeClass('error').addClass('sucess');
            } else {
                $(this).parents('li').removeClass('sucess').addClass('error');
                $(this).parents('li').find('h6').text('请输入正确的手机号');
            }
            checkclass()
        });
        $('.recom1 ul li.code input[type=text]').on('focusout', function() {
            var re = /^\d{6}$/;
            var str = $(this).val();
            if (re.test(str)) {
                $(this).parents('li').removeClass('error').addClass('sucess');
            } else {
                $(this).parents('li').removeClass('sucess').addClass('error');
                $(this).parents('li').find('h6').text('验证码不正确，请重新输入');
            }
            checkclass()

        });
        $('.recom1 ul li.password input').on('focusout', function() {
            var str = $(this).val();
            var re = /^(\w){6,12}$/;
            if (re.test(str)) {
                $(this).parents('li').removeClass('error').addClass('sucess');
            } else {
                $(this).parents('li').removeClass('sucess').addClass('error');
                $(this).parents('li').find('h6').text('密码过于简单');
            }
            checkclass()

        });
        $('.recom1 ul li.enterpassword input').on('focusout', function() {
            var re = $('.recom1 ul li.password input').val()
            var str = $(this).val();
            if (re == str) {
                $(this).parents('li').removeClass('error').addClass('sucess');
            } else {
                $(this).parents('li').removeClass('sucess').addClass('error');
                $(this).parents('li').find('h6').text('密码不一致');
            }
            checkclass()

        });

        function checkclass() {
            var dom = $('.recom1 ul li').not(':first').not(':last');
            for (var i = 0; i < dom.length; i++) {
                if (!(dom.eq(i).hasClass('sucess'))) {
                    return false;
                }
            }
            $('.intp4').val('STEPS2');
            return true;
        }

        $('.recom1 ul li .intp3').on('click', wait);

        function wait() {
            $(this).off('click', wait);
            var i = 60;
            var id = ''
            $('.recom1 ul li .intp3').val('已发送请等待(' + i + ')秒。');
            id = setInterval(function() {
                i--;
                $('.recom1 ul li .intp3').val('已发送请等待(' + i + ')秒。');
                if (i == 0) {
                    $('.recom1 ul li .intp3').on('click', wait)
                    $('.recom1 ul li .intp3').val('获取短信验证码');
                    clearInterval(id);
                }
            }, 1000)
        }

        $('.identity input[type=text],.identity input[type=password]').on('focusout', function() {
            var re = $(this).val();
            if (re == '') {
                $(this).parents('li').removeClass('sucess').addClass('error');
            } else {
                $(this).parents('li').removeClass('error').addClass('sucess');
            }
        });
    })();
})



//货币取整
formatMyCurrency = function(number, decimals, spliter, dot) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    //为什么number要+‘’ ？因为replace只处理string，所以number + ''将number强转成字符串。
    //replace(/[^0-9+\-Ee.]/g, '')    这个正则表达式的意思是过滤0-9以及E和e除了这些全转成空。
    //
    var n = !isFinite(+number) ? 0 : +number; //判断是否是无穷数，不是无穷数n赋值为0
    //isFinite函数是判断参数是否是无穷数的。number前有一个加号，这个加号是为了防止number是undifind的，如果是underfind则number会被转换成NaN，如果不判断则会发生异常。
    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = (typeof spliter === 'undefined') ? ',' : spliter;
    var dec = (typeof dot === 'undefined') ? '.' : dot;
    var s = '';
    var toFixedFix = function(n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
    };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function rand(max, min) {
    return (Math.random(max - min) + min).toFixed(2);
}

function money_switch(obj) {

    setInterval(function() {
        // var money = (parseFloat($(obj).text().replace(/[^0-9+\-Ee.]/g, ''))+1.11).toFixed(2);
        // var money = parseFloat($(obj).text().replace(/[^0-9+\-Ee.]/g, ''))).toFixed(2)+rand(50,10);
        var money = (parseFloat($(obj).text().replace(/[^0-9+\-Ee.]/g, '')) + parseFloat(rand(50, 10))).toFixed(2);
        // console.log(money);
        $(obj).text(formatMyCurrency(money, 2));
    }, 200)
}
