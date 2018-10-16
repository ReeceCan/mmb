$(function () {

  // 获取地址栏数据 
  var obj = getUrlData();
  // 获取shopid和areaid 
  var shopId = obj.shopId || 0;
  var areaId = obj.areaId || 0;

  // 京东等店铺数据渲染 
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getgsshop",
    dataType: "json",
    success: function (info) {
       console.log(info);
       info.areaId = areaId || 0;
       // 绑定模板 
       var shopStr = template("shop_tmp",info);
       // 渲染数据 
       $("#shop").html(shopStr);

      //  给导航添加点击事件,显示隐藏京东等店铺 
       $(".filter li a").eq(0).click(function () {
          // 切换类显示隐藏 
          $("#shop").toggleClass("visible").siblings(".popbox").removeClass("visible");
       });
    }
  });
  
  // 地区数据渲染 
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getgsshoparea",
    dataType: "json",
    success: function (info) {
       console.log(info);
       info.shopId = shopId || 0;
       // 绑定模板 
       var areaStr = template("area_tmp",info);
       // 渲染数据 
       $("#area").html(areaStr);

       //  给导航添加点击事件,显示隐藏地区选项
       $(".filter li a").eq(1).click(function () {
        // 切换类显示隐藏 
        $("#area").toggleClass("visible").siblings(".popbox").removeClass("visible");
     })
    }
  });

   //  给导航添加点击事件,显示价格选项   
   $(".filter li a").eq(2).click(function () {
    // 切换类显示隐藏 
    $("#price").toggleClass("visible").siblings(".popbox").removeClass("visible");
    
  });

  // 渲染页面 
  render(shopId,areaId);

  // 将商品数据渲染封装成一个函数 
  function render(shopid,areaid) {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getgsproduct",
      data: {shopid : shopid,
             areaid : areaid 
            },
      dataType: "json",
      success: function (info) {
        //  console.log(info);
         // 绑定模板 
         var htmlStr = template("gs_product_tmp",info);
         // 渲染数据 
         $("#gs_product").html(htmlStr);
      }
    });
  }
});