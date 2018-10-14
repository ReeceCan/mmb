//功能 向后台获取数据, 渲染优惠券导航列表 
$(function () {
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcoupon",
    dataType: "json",
    success: function (info) {
       console.log(info);
       // 绑定模板 
       var htmlStr = template("coupon_nav_tmp",info);
       // 渲染数据 
       $("#coupon_nav").html(htmlStr);
    }
  })
})