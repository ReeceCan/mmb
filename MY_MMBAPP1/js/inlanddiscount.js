// 功能 折扣商品渲染 
$(function () {
   $.ajax({
     type: "get",
     url: "http://127.0.0.1:9090/api/getinlanddiscount",
     dataType: "json",
     success: function (info) {
        console.log(info);
        // 绑定模板 
        var htmlStr = template("discount_product_tmp",info);
        // 渲染数据 
        $("#discount_product").html(htmlStr);
     }
   })
})