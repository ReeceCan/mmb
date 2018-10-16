// 功能1 导航栏渲染 
$(function () {
  
  // 获取地址栏参数 
  var obj = getUrlData();
  var titleid = obj.titleid;
  // 没有默认为0
  titleid = titleid || 0;

  // 标题栏渲染 
  $.ajax({
     type: "get",
     url: "http://192.168.43.151:9090/api/getbaicaijiatitle",
     dataType: "json",
     success: function (info) {
      //  console.log(info);
       info.titleid = titleid;
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
        totalWidth += $(this).innerWidth(); 
      });
      // 将总宽度赋值给ul 
      $ul.width(totalWidth);

      // 2: 区域滚动初始化 
      new IScroll(".ul-wapper", {
        // 开启水平区域滚动
        scrollX: true,
        scrollY: false
      });
     }
  });

  // 商品列表渲染 

  // 一进入页面默认渲染第一项商品
  renderList(titleid);
  //  商品列表渲染  
  // 将ajax请求商品信息渲染页面封装成一个函数
  function renderList(titleid) {
    titleid = titleid || 0;
    $.ajax({
      type: "get",
      url: "http://192.168.43.151:9090/api/getbaicaijiaproduct",
      data: {titleid: titleid},
      dataType: "json",
      success: function (info) {
        console.log(info);
        // // 绑定模板引擎
        var listStr = template("baicaijia_list_tmp",info);

        // 将数据渲染到页面中  
        $("#bcj_list").html(listStr);
      }
    });
  }
});


