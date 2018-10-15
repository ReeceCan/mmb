
$(function () {

  // 获取地址栏参数 
  var obj = getUrlData();

  // 得到分类id
  var categoryid = obj.categoryId;
  // 得到产品id 
  var productid = obj.productid;

  // 功能 动态渲染路径导航 

  //  发送ajax请求获取分类名称 
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcategorybyid",
    data: { categoryid: categoryid },
    dataType: "json",
    success: function (info) {
      // console.log(info);
      // 得到分类名称
      category = info.result[0].category;      
      $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getproduct",
        data: { productid: productid },
        dataType: "json",
        success: function (info) {
          // console.log(info);

          //  获取商品名称 
          var productName = info.result[0].productName;
          // 转成数组 
          // console.log(productName);
          var proName = productName.split(" ")[0];

          // 存储分类和商品名到info中 
          info.category = category;
          info.proName = proName;

          // 绑定模板 
          var htmlStr = template("listNav_tmp", info);
          // 渲染数据 
          $("#title_nav").html(htmlStr);
        }
      });
    }
  });





  // 功能2 商品详情渲染 

  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getproduct",
    data: { productid: productid },
    dataType: "json",
    success: function (info) {
      // console.log(info);
      // 绑定模板 
      var htmlStr = template("productInfo_tmp", info);
      // 渲染数据 
      $("#product_info").html(htmlStr);
    }
  })


  // 功能3  商品评论数据渲染 
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getproductcom",
    data: { productid: productid },
    dataType: "json",
    success: function (info) {
      console.log(info);
      // 绑定模板 
      var htmlStr = template("product_com_tmp", info);
      // 渲染数据 
      $("#product_comment").html(htmlStr);
    }
  })

})


