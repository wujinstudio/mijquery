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
    let re=$(".fix .one")
    re.click(function () {
        $(document.body,{scrollTop:0});
        $(document.documentElement,{scrollTop:0});
    })

}


    

