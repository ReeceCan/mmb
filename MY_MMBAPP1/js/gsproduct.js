

$(function () {

  // 京东等店铺数据渲染 
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getgsshop",
    dataType: "json",
    success: function (info) {
       console.log(info);
       // 绑定模板 
       var shopStr = template("shop_tmp",info);
       // 渲染数据 
       $("#shop").html(shopStr);
    }
  });

  // 地区数据渲染 
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getgsshoparea",
    dataType: "json",
    success: function (info) {
       console.log(info);
       // 绑定模板 
       var areaStr = template("area_tmp",info);
       // 渲染数据 
       $("#area").html(areaStr);
    }
  });

})

//功能 注册点击事件 获取商店和区域id  向后台获取数据, 渲染产品列表
$(function () {
  $(".filter a").click(function () {
    //  $(this).show();
    console.log();
    
  })

  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getgsproduct",
    data: {shopid : 0,
           areaid : 0 
          },
    dataType: "json",
    success: function (info) {
       console.log(info);
       // 绑定模板 
       var htmlStr = template("gs_product_tmp",info);
       // 渲染数据 
       $("#gs_product").html(htmlStr);
    }
  })
})