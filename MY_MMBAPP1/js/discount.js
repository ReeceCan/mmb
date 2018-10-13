// 功能 进行商品渲染 
$(function () {

  // 获取地址栏id 
  var search = location.search;
  // 截取字符串
  search = search.slice(1);
  // 转成数组 
  var arr = search.split("&");
  var productid;  //用来存储id
  // 遍历数组 
  arr.forEach(function ( v,i ) {
    productid = v.split("=")[1];
  });
  // console.log(productid);
  

   $.ajax({
     type: "get",
     url: "http://127.0.0.1:9090/api/getdiscountproduct",
     data: {productid: productid},
     dataType: "json",
     success: function (info) {
        console.log(info);
         // 绑定模板
        var htmlStr = template("discount_tmp",info);
        // 将数据渲染到页面中  
        $("#discount_product").html(htmlStr);
     }
   })
})