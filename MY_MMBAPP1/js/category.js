
// 功能1  大标题渲染 
$(function () {
   $.ajax({
      type: "get",
      url: "http://192.168.43.151:9090/api/getcategorytitle",
      dataType: "json",
      success: function (info) {
        // console.log(info);
        // 绑定模板引擎
        var htmlStr = template("category_title_tmp",info);
        // 将数据渲染到页面中  
        $("#row").html(htmlStr);
      }
   });
});

// 功能2  大标题对应分类渲染   
// 点击大标题 获取对应id值 进行渲染  

$(function () {

   // 给大标题注册点击事件 事件委托 获取大标题对应的id值 
  $("#row").on("click",".category_title>li>a",function () {
    
    $(this).siblings(".category_content").toggleClass("visible");
    // 获取对应id值 
    var id = $(this).data("id");
    var $that = $(this);    
    
    // 根据id发送ajax请求  并进行动态渲染 
    $.ajax({
      type: "get",
      url: "http://192.168.43.151:9090/api/getcategory",
      data: {titleid: id},
      dataType: "json",
      success: function (info) {
        console.log(info);
        // 绑定模板引擎
        var htmlStr = template("category_content_tmp",info);
        // 将数据渲染到页面中  
        $that.siblings(".category_content").html(htmlStr);   
      }
    });
   })
   
});