

// 功能1 导航栏渲染 
$(function () {
  
  $.ajax({
     type: "get",
     url: "http://192.168.43.151:9090/api/getbaicaijiatitle",
     dataType: "json",
     success: function (info) {
       console.log(info);
       // 绑定模板引擎
       var headStr = template("baicaijia_head_tmp",info);
       // 将数据渲染到页面中  
       $("#bcj_head_ul").html(headStr);


      // 功能2 动态设置ul宽度  并实现导航区域滚动
        //  1 根据li的数量计算ul的宽度 
      var $ul = $(".bcj_head .ul-wapper ul");
      var $li = $ul.children();

      // 遍历所有的li,计算li宽度的总和

      var totalWidth = 1;
      $li.each(function ( v, i) {
        // innerWidth 获取的盒子的 content 和 padding
        // outerWidth 获取 content + padding + border
        // outerWidth(true) 获取 content + padding + border + margin
        totalWidth += $(this).innerWidth();
        
      });
      // console.log(totalWidth);
      // 将总宽度赋值给ul 
      $ul.width(totalWidth);

      // 2: 区域滚动初始化 
      new IScroll(".ul-wapper", {
        // 开启水平区域滚动
        scrollX: true,
        scrollY: false
      });
  

      // 一进入页面默认渲染第一项商品
      renderList();
      // 给导航标题注册点击事件,点击时渲染对应页面的数据 
      
      $("#bcj_head_ul").on("click","li",function () {
        // console.log($(this));
        var titleid = $(this).data("id");
        // 当前元素高亮
        $(this).children("a").css({
          color: "#e4393c",
          borderBottom: "2px solid #e4393c"
        });
        // 其他兄弟元素恢复默认样式
       $(this).siblings().children("a").css({
          color: "#333",
          borderBottom: "none"
       });
        // 渲染对应商品.
        renderList(titleid);

      })

      // 功能3   商品列表渲染
      // 获取id值 
     
      // 将ajax请求商品信息渲染页面封装成一个函数
      function renderList(titleid) {
        $.ajax({
          type: "get",
          url: "http://192.168.43.151:9090/api/getbaicaijiaproduct",
          data: {titleid: titleid || 0},
          dataType: "json",
          success: function (info) {
            // console.log(info);
            // // 绑定模板引擎
            var listStr = template("baicaijia_list_tmp",info);
  
            // 将数据渲染到页面中  
            $("#bcj_list").html(listStr);
          }
        });
      }
      
     }
  });
 
});


