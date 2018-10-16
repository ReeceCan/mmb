// 功能1 菜单栏渲染  

$(function () {
  getData({
    url: "http://192.168.43.151:9090/api/getindexmenu",
    success: function (info) {
      //  console.log(info);
      var htmlStr = template("menu_tmp",info);
      $("#menu").html(htmlStr);  
    }
  });

  //需求 默认显示前两行  点击更多显示全部 
  $("#menu").on("click","#580831702bcccb2c22ed4779",function () {
     $(".menu_item").toggleClass("visible");
  })

});

// 功能2 折扣商品渲染  
$(function () {
   getData({
    url: "http://192.168.43.151:9090/api/getmoneyctrl",
    success: function (info) {
      console.log(info);
      // 绑定模板引擎 
      var htmlStr = template("product_tmp",info);
      $("#zhekou").html(htmlStr);
    }
   });
});

// 功能3 返回顶部 
// (2) 点击返回顶部  scrolltop
$("#toTop").click(function () {
  toTop();
});