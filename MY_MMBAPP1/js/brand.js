// 功能 获取地址栏参数 渲染页面 
$(function () {
  var obj = getUrlData();
  var brandtitleid = obj.brandTitleId;
  

  // 根据地址栏参数 发送ajax请求 
  // 1. 渲染品牌模块
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbrand",
    data: {brandtitleid: brandtitleid},
    dataType: "json",
    success: function (info) {
       console.log(info);
       // 绑定模板 
       var htmlStr = template("brand_list_tmp",info);
       // 渲染数据 
       $("#brand_list").html(htmlStr);
    }
  });

  // 2.渲染销量模块
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbrandproductlist",
    data: {brandtitleid: brandtitleid},
    dataType: "json",
    success: function (info) {
       console.log(info);
       // 绑定模板 
       var htmlStr = template("product_list_tmp",info);
       // 渲染数据 
       $("#product_list").html(htmlStr);
    }
  });

  // 评论渲染 
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getproductcom",
    data: {productid : 0},
    dataType: "json",
    success: function (info) {
       console.log(info);
       // 绑定模板 
       var htmlStr = template("product_com_tmp",info);
       // 渲染数据 
       $("#product_com").html(htmlStr);
    }
  });
})