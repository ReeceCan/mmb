// 功能 渲染页面数据
$(function () {
   $.ajax({
     type: "get",
     url: "http://127.0.0.1:9090/api/getsitenav",
     dataType: "json",
     success: function (info) {
        // console.log(info);
        // 绑定模板
        var htmlStr = template("mmb_sitenav_tmp",info);
        // 渲染数据 
        $("#mmb_sitenav").html(htmlStr);
     }
   })
})