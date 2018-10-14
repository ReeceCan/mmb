//功能 品牌分类渲染 
$(function () {
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbrandtitle",
    dataType: "json",
    success: function (info) {
       console.log(info);
       // 绑定模板 
       var htmlStr = template("brand_title_tmp",info);
       // 渲染数据 
       $("#brand_title").html(htmlStr);
    }
  })
})