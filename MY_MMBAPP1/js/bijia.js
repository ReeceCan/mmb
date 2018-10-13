
$(function () {
  // 获取地址栏参数 
  var search = location.search;//"?productId=0"
  // 截取字符串
  search = search.slice(1); //"productId=0"
  // 转成数组 
  var arr = search.split("&");
  // 遍历数组 获取参数 id
  var productid; //用来存储id
  arr.forEach(function ( v, i ) {
    productid = v.split("=")[1];
  })
  console.log(productid);
  
// 功能 动态渲染路径导航 
  // $.ajax({
  //   type: "get",
  //   url: "http://127.0.0.1:9090/api/getproduct",
  //   data: {productid: productid},
  //    dataType: "json",
  //    success: function (info) {
  //       //  console.log(info);
         
  //    }
  //   })

  // 功能2 商品详情渲染 

   $.ajax({
     type: "get",
     url: "http://127.0.0.1:9090/api/getproduct",
     data: {productid: productid},
     dataType: "json",
     success: function (info) {
        // console.log(info);
        // 绑定模板 
        var htmlStr = template("productInfo_tmp",info);
        // 渲染数据 
        $("#product_info").html(htmlStr);
     }
   })


    // 功能3  商品评论数据渲染 
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getproductcom",
      data: {productid: productid},
      dataType: "json",
      success: function (info) {
         console.log(info);
         // 绑定模板 
         var htmlStr = template("product_com_tmp",info);
         // 渲染数据 
         $("#product_comment").html(htmlStr);
      }
    })

})


