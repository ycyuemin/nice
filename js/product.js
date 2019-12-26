//窗口加载事件

window.onload = function(){
    //手风琴
    $(".right li").on("mouseover",function(){
        // 鼠标移入，当前style1显示，style2隐藏
        $(this).find(".style1").removeClass("no");
        $(this).find(".style2").addClass("no");

        // 其它同级元素style1隐藏，style2显示
        $(this).siblings().find(".style1").addClass("no");
        $(this).siblings().find(".style2").removeClass("no");
    })

    //手风琴2
    $(".newBook>.right li").on("mouseover",function(){
        // 鼠标移入，当前style1显示，style2隐藏
        $(this).find(".style1").removeClass("hide");
        $(this).find(".style2").addClass("hide");

        // 其它同级元素style1隐藏，style2显示
        $(this).siblings().find(".style1").addClass("hide");
        $(this).siblings().find(".style2").removeClass("hide");
    })

    // 独家提供
    // 上边选项卡效果
    $("#only .productTitle li").on("click",function(){
        // 干掉兄弟，给当前的自己添加active样式
        $(this).addClass("active").siblings().removeClass("active")
        // 获取索引值
        let index = $(this).index()
        //显示对应盒子
        $("#only .pic").hide()
        $("#only .pic").eq(index).show()
        // 下边翻页选项卡对应索引添加active其他兄弟级移除active
        $("#only>.page>li").eq(index).addClass("active").siblings().removeClass("active");
    })

    // 下边选项卡效果
    $("#only>.page>li").on("click",function(){
        // 干掉兄弟，给当前的自己添加active样式
        $(this).addClass("active").siblings().removeClass("active")
        // 获取索引值
        let index = $(this).index()
        //显示对应盒子
        $("#only .pic").hide()
        $("#only .pic").eq(index).show()
        // 与上边选项卡索引对应达到同步效果
        $("#only .productTitle li").eq(index).addClass("active").siblings().removeClass("active");
    });

    // 轮播效果
    
}