//窗口加载事件

window.onload = function(){
    // 二级菜单效果 -- 移入时，显示二级菜单
    $('.btns>a').on('mouseover',function(){
        
       $('.btns>a').removeClass("on");//干掉所有on样式
       $(this).addClass("on");//给当前移入的添加on样式

       $(".wrap>.box1").hide();//二级菜单都隐藏
        
        //将所有盒子对应显示出来
        let index = $(this).index()
        $(".wrap>.box1").eq(index).show()
            
    });

    // 二级菜单效果 -- 移出一级菜单时，二级菜单隐藏
    $(".btns>a").on("mouseout",function(){
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
        $(".wrap>.box1").siblings().hide()
        
    });

    // 二级菜单效果 --- 移入二级菜单时，显示二级菜单
    $(".wrap>.box1").on("mouseover",function(){
         $(this).show()
         $(this).siblings().hide()
        
    })
    $(".wrap>.box1").on("mouseout",function(){
        $(this).hide()
        $(".btns>a").siblings().removeClass('on')
       
    })

    // 楼层效果
    $('.floor a').on('click',function(){
        // 获取每层楼层距离浏览器顶部的距离偏移量
        let t = $('.floor1').eq($(this).index()).offset().top;

        // 设置滚动条滚动的距离
        $('body,html').animate({"scrollTop":t},500);
        
        // 阻止a标签跳转
        return false;
    });

    // 回到顶部
    $(".totop").on("click",function(){
        // 获取到浏览器窗口的偏移量
        $("html,body").animate({"scrollTop":0},500);
        // 阻止默认的跳转
        return false;
    })
    
    // 手风琴效果
    $("#right li").on("mouseover",function(){
        // 鼠标移入，当前style1显示，style2隐藏
        $(this).find(".style1").removeClass("hide");
        $(this).find(".style2").addClass("hide");

        // 其它同级元素style1隐藏，style2显示
        $(this).siblings().find(".style1").addClass("hide");
        $(this).siblings().find(".style2").removeClass("hide");
    })

    // 领券二维码
    $("#preferential>img:nth-child(2)").on("mouseover",function(){
        //鼠标移入移除隐藏
        $("#preferential>img:nth-child(3)").removeClass("hide")
        
    })
    $("#preferential>img:nth-child(2)").on("mouseout",function(){
        //鼠标移出添加隐藏
        $("#preferential>img:nth-child(3)").addClass("hide");
        
    })

    // 监听浏览器滚动条
    $(window).scroll(function(){
        //获取滚动条数值
        let scroll = $("html,body").scrollTop();
        //判断数值达到500以上时显示副标题，否则隐藏
        if(scroll>500){
            $(".db").stop(true).fadeIn(100);
        }else{
            $(".db").hide()
        }
    })

    // 电子书选项卡
    // 注册点击事件
    $(".biaoti li").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on")
        // 获取当前索引值
        let index = $(this).index();
        // 显示对应盒子
        $("#book .box").hide()
        $("#book .box").eq(index).show()
    })


    // 服装
    // 注册点击事件
    $("#clothing .title2 li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
        // 获取当前索引值
        let index = $(this).index();
        // 显示对应盒子
        $("#clothing .menu").hide()
        $("#clothing .menu").eq(index).show()
    })

    // 户外运动
    // 注册点击事件
    $("#sport .title2 li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
        // 获取当前索引值
        let index = $(this).index();
        // 显示对应盒子
        $("#sport .menu").hide()
        $("#sport .menu").eq(index).show()
    })

    // 童装
    // 注册点击事件
    $("#fuzhuang .title2 li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
        // 获取当前索引值
        let index = $(this).index();
        // 显示对应盒子
        $("#fuzhuang .menu").hide()
        $("#fuzhuang .menu").eq(index).show()
    })

    // 产品详情页面
    // 选项卡
    // 注册事件
    $(".look .title2 li").on("click",function(){
        // 干掉兄弟，给当前的自己添加active样式
        $(this).addClass("active").siblings().removeClass("active")
        // 获取索引值
        let index = $(this).index();
        
        // 显示对应盒子的内容
        $(".look .big").hide()
        $(".look .big").eq(index).show()
    })

    // 种类选择
    $(".ztype div").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on"); 
        
    })

    // 蒙层模态框 点击加入购物车时，弹出模态框
    $(".jiaru").on("click",function(){
        $("#mask").show();
        $("#box").show();
    })

    //点击取消或者关闭按钮时候，就关闭模态框
    $("#box .xiao").on("click",function(){
        $("#mask").hide();
        $("#box").hide();
        return false;
    })

    // 购物车加减
    $("input[value='-']").click(function() {
        var $txt = $(this).next("input");
        // 全局对象，解析上一个输入框，并返回它的值
        var num = parseInt($txt.val());
        // 判断
        if(num - 1 >= 0) {
            $txt.val(num - 1);
        }
    });
    // 加
    $("input[value='+']").click(function() {
        var $txt = $(this).prev("input");
        var num = parseInt($txt.val());
        $txt.val(num + 1);
    });


    // 我的订单页面/结算中心页面
    // 蒙层模态框 点击提交订单时，弹出模态框
    $(".san a").on("click",function(){
        $("#mask").show();
        $("#box").show();
    })

    //点击取消或者关闭按钮时候，就关闭模态框
    $(".san .xiao").on("click",function(){
        $("#mask").hide();
        $("#box").hide();
        return false;
    })

    // 支付方式，选项卡
    $(".way div").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on");
    })



    // 收银台页面
    // 蒙层模态框 点击提交订单时，弹出模态框
    $(".four").on("click",function(){
        $("#mask").show();
        $("#box").show();
    })
    //点击取消或者关闭按钮时候，就显示付款失败
    $(".motai .xiao").on("click",function(){
        $("#mask").show();        
        $(".motai2").show()
        return false;
    })
    // 点击确定按钮时，显示支付成功
    $(".motai .ren").on("click",function(){
        $("#mask").show();        
        $(".motai1").show()
    })

    // 付款成功  点击叉叉或者确认，模态消失
   $(".motai1 .cg").on("click",function(){
    $("#mask").hide();        
    $(".motai1").hide();
    $(".motai").hide();
    return false;
})

    // 付款失败  点击叉叉或者确认模态消失
   $(".motai2 .del").on("click",function(){
        $("#mask").hide();        
        $(".motai2").hide();
        return false;
   })

    


    // 登录页面
    // 登录选项卡切换
    $(".dengluk li").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on"); 
        // 获取索引值
        let index = $(this).index();
        
        // 显示对应盒子的内容
        $(".dengluk .box").hide()
        $(".dengluk .box").eq(index).show()
    })


    // 注册界面
    //验证用户名格式是否正确
	var obj={username:false, pwd:false, pwd2:false, mobile:false};    
    $('#username').on('input', function(){
        if( $(this).val().length<6 ){
            obj.username=false;
            $(this).parent().css('border', '1px solid #f00');
        }else{
            obj.username=true;
            $(this).parent().css('border', '1px solid #0a0');
        }
    });
    //验证密码
    $('#pwd').on('input', function(){
        if( $(this).val().length<6 ){
            obj.pwd=false;
            $(this).parent().css('border', '1px solid #f00');
        }else{
            obj.pwd=true;
            $(this).parent().css('border', '1px solid #0a0');
        }
    });
    //确认密码，验证两次输入的密码是否一致
    $('#pwd2').on('input', function(){
        if( $(this).val() != $('#pwd').val() || $(this).val().length<6){
            obj.pwd2=false;
            $(this).parent().css('border', '1px solid #f00');
        }else{
            obj.pwd2=true;
            $(this).parent().css('border', '1px solid #0a0');
        }
    });
    //验证手机号：11位数字，必须1开头，第二位必须是356789
    $('#mobile').on('input', function(){
        var reg=/^1[356789]\d{9}$/;
        if( !reg.test( $(this).val() )){
            obj.mobile=false;
            $(this).parent().css('border', '1px solid #f00');
        }else{
            obj.mobile=true;
            $(this).parent().css('border', '1px solid #0a0');
        }
    });
    
    //点击提交按钮时再次进行验证
    $('.box form').on('submit', function(){
        //遍历全局对象进行二次验证
        for(var i in obj){
            if(obj[i]==false){
                $('#'+i).parent().css('border', '1px solid #f00');
                return false;
            }
        }
    });
    // 有bug，还在完善
    
   
}

