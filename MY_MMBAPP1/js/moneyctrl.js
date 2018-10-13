//功能 商品渲染 
$(function () {
   $.ajax({
     type: "get",
     url: "http://127.0.0.1:9090/api/getmoneyctrl",
     data: {pageid: 0},
     dataType: "json",
     success: function (info) {
        console.log(info);
        // 绑定模板 
        var htmlStr = template("product_money_tmp",info);
        $("#mmb_content_money").html(htmlStr);
     }
   })
})