//功能 向后台获取数据, 渲染,产品列表
$(function () {
  // 获取地址栏参数 
  var obj = getUrlData();
  var couponid = obj.couponId || 0;

  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcouponproduct",
    data: {couponid: couponid},
    dataType: "json",
    success: function (info) {
       console.log(info);
       // 绑定模板 
       var htmlStr = template("coupon_product_tmp",info);
       // 渲染数据 
       $("#coupon_product").html(htmlStr);
    }
  })
})