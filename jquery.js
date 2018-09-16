window.onload=function () {
    $(".cart").mouseenter(function () {
        $(".whitea").clearQueue().slideDown();
    })
    $(".cart").mouseleave(function () {
        $(".whitea").clearQueue().slideUp();
    })

    //轮播
    let img=$(".banner .container .imgs img");
    let pointer=$(".banner .pager ul li");
    // let right=$(".banner .container .btnright");
    // let left=$(".banner .container .btnleft");
    console.log(img,pointer);
    let now=0;
    img.first().css("z-index","10");
    pointer.eq(0).addClass("active");
    t=setInterval(move,2000);
    function move() {
        now++;
        if (now==img.length){
            now=0;
        }
        img.css("z-index","5").eq(now).css("z-index","10");
        pointer.removeClass("active").eq(now).addClass("active")
    }
    function movel() {
        now--;
        if (now<0){
            now=img.length-1;
        }
        img.css("z-index","5").eq(now).css("z-index","10");
        pointer.removeClass("active").eq(now).addClass("active")
    }
   $(".btnleft").click(function () {
       movel();
    })
    $(".btnright").click(function () {
        move();
    })
    //
    // $(".banner").mouseenter=function () {
    //     clearInterval(t);
    // }
    //侧边栏
    let lis=$(".banner ul li a");
    let adc=$(".banner ul .asidebox");
    console.log(lis,adc);
    lis.mouseenter=function () {
        $("lis").mouseenter(function () {
            $("adc").css("display","none");
            $(this).children("adc").css("display","flex");
        })
        $("lis").mouseleave(function () {
            $("adc").css("display","none");
        })
    }
    //家电选项卡
    let xxk=$(".tab-list ul li");
    let lieb=$(".page-home .bottom ul .two");
    console.log(xxk,lieb);
    xxk.mouseenter(function () {
        let i=$(this).index();
        lieb.css("display","none").eq(i).css("display","block");
        xxk.removeClass("active");
        // $(this).removeClass("active");
        $(this).addClass("active");

        // alj.addClass("active");
        // $(this).addClass("active");

    })
    xxk.triggerHandler("mouseenter");
    //小米闪购
    let b=$(".xm-plain-box .before");
    let r=$(".xm-plain-box .after");
    let liebiao=$(".xm-plain-box .list")
    let time=0;
    r.click(function(){
        time++;
        if(time==2){
            time=1;
        }
        else{
            liebiao.css("transform","translate("+(-720*time)+"px"+")");
        }
    })
    b.click(function(){
        time--;
        if(time==-1){
            time=0;
        }
        else{
            liebiao.css("transform","translate("+(-720*time)+"px"+")");
        }
    })
    // 为你推荐
    let zuo=$(".box-hd .top .liftlight .after");
    let you=$(".box-hd .top .liftlight .before");
    let pic=$(".box-hd .bottom ul");
    let times=0;
    zuo.click(function(){
        times++;
        if(times==3){
            times=2;
        }
        pic.css("transform","translate("+(-1200*times)+"px"+")");
    })
    you.click(function(){
        times--;
        if(times==-1){
            times=0;
        }
        pic.css("transform","translate("+(-1200*times)+"px"+")");
    })
    //图书
    function tushu(dot,look,Lbut, Rbut) {
        let nows=0;
        let next=0;
        dot.eq(0).addClass("activd");
        look.eq(0).css("left","0");
        dot.click(function () {
            if($(this).index()>nows){
                next++;
                dot.eq(nows).removeClass("activd");
                dot.eq(next).addClass("activd");
                look.eq(nows).animate({left: '-294px'});
                look.eq(next).css("left","294px");
                look.eq(next).animate({left: '0'});
            }else if($(this).index()<nows){
                next--;
                dot.eq(nows).removeClass("activd");
                dot.eq(next).addClass("activd");
                look.eq(nows).animate({left: '294px'});
                look.eq(next).css("left","-294px");
                look.eq(next).animate({left: '0'});
            }
            nows=next;
        })
        Rbut.click(function () {
            next++;
            if(next>=2){
                next=2;
            }
            look.eq(nows).animate({left: '-294px'});
            look.eq(next).css("left","294px");
            look.eq(next).animate({left: '0'});
            dot.eq(nows).removeClass("activd");
            dot.eq(next).addClass("activd");
            nows=next;
        })
        Lbut.click(function () {
            next--;
            if(next<0){
                next=0;
            }
            look.eq(nows).animate({left: '294px'});
            look.eq(next).css("left","-294px");
            look.eq(next).animate({left: '0'});
            dot.eq(nows).removeClass("activd");
            dot.eq(next).addClass("activd");
            nows=next;
        })
    }
    // console.log($(".contento .control-right.kp"));
    tushu($(".contento .ctrile.bh"),$(".contento .book.xaa .ab"),$(".contento .control-left.kp"),$(".contento .control-right.kp"));
    tushu($(".contento .ctrile.bb"),$(".contento .book.bb .abcd"),$(".contento .control-left.bb"),$(".contento .control-right.bb"));
    tushu($(".contento .ctrile.nn"),$(".contento .book.nn .adcde"),$(".contento .control-left.nn"),$(".contento .control-right.nn"));
    tushu($(".contento .ctrile.ll"),$(".contento .book.ll .abc"),$(".contento .control-left.ll"),$(".contento .control-right.ll"));
    //顶部选项卡

    // let mi=$(".head .nav .item .text.xm");
    // let mix=mi.parent().siblings().slice(10, 18);
    // mi.mouseenter(function () {
    //     mix.clearQueue().slideDown();
    //     mix.css("z-index",999);
    //     $(this).children(".hezi").css("z-index","0");
    // })
    // mi.mouseleave(function () {
    //     mix.slideUp();
    // })
    // console.log(mix);
    // mi.mouseenter(function () {
    //     mi.mouseenter(function () {
    //         let i=$(this).index();
    //         mix.eq(i).css("zIndex","999");
    //         mix.slideDown("slow");
    //         mi.mouseleave(function () {
    //             mix.slideUp("slow");
    //             // $(this).parent().siblings().slice(9, 17).css("zIndex","0");
    //         })
    //     })
    // })
    let back=$(".fix .one");
    console.log(back);
    back.css("display","none");
    back.click(function(){
        $('html , body').animate({scrollTop: 0},'slow');
    })
    $(window).scroll(function () {
        if($(this).scrollTop()>600){
            back.fadeIn();
        }else{
            back.fadeOut();
        }
    })
    //倒计时
    let span = document.querySelectorAll(".num");
    setdate();
    setInterval(setdate,1000);
    function setdate(){
        let arr=fn();
        span.forEach((v, i) => {
            v.innerHTML = arr[i];
        });

    }
    function fn() {
        let arr = [];
        let now = new Date();
        let future = new Date(2018, 8, 25,12,12);
        let time = Math.floor((future.getTime() - now.getTime()) / 1000);
        let hour = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60));
        arr.push(hour);
        let m = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / 60);
        arr.push(m);
        let s = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % 60);
        arr.push(s);
        return arr;
    }
}


    

