
//功能1 通过地址栏参数动态获取数据  渲染页面  
$(function () {

  // 获取地址栏参数 
  var obj = getUrlData();

  var categoryid = Number(obj.categoryid);
  var pageid = Number(obj.pageid);
  console.log(obj);
  
  // 路径导航渲染 
  // 发送ajax请求 
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcategorybyid",
    data: { categoryid: categoryid },
    dataType: "json",
    success: function (info) {
      console.log(info);

      // 绑定模板
      var htmlStr = template("nav_tmp", info);
      // 将数据渲染到页面中  
      $("#nav").html(htmlStr);

      // 商品渲染  
      // 一进入页面渲染一次 商品数据
      render(categoryid, pageid);

      // 将渲染页面功能封装成一个函数 
      function render(categoryid, pageid) {

        categoryid = categoryid || 0;
        pageid = pageid || 1;

        $.ajax({
          type: "get",
          url: "http://127.0.0.1:9090/api/getproductlist",
          data: {
            categoryid: categoryid,
            pageid: pageid
          },
          dataType: "json",
          success: function (info) {
            var pageTotal = Math.ceil(info.totalCount / info.pagesize);
            // 将参数存储在对info中  用于地址栏传参
            info.pageToatal = pageTotal;
            info.pageid = pageid;
            info.categoryid = categoryid;
            // 绑定模板
            var htmlStr = template("product_list_tmp", info);
            // 将数据渲染到页面中  
            $("#product").html(htmlStr);
            
            pagination();
            
            // 分页功能 封装成函数 
            function pagination() {  
              $("#selectPage").change(function () {   
                // pageid改变 
                pageid = $(this).val();
                // 跳转到对应页面
                location.href = "productlist.html?categoryid=" + categoryid + "&pageid=" + pageid;
              });
            }
            

            // 功能3 分页效果 
            // (1) 点击上下页 pageid改变 select框值改变 (方法1  直接在模板引擎中渲染 方法2 直接添加selected属性 attr)  重新渲染页面 
            // (2) 第一页时 上一页无效  最后一页时 下一页无效 
            // (3) 当selected中值改变时 pageid改变  重新渲染页面 
            // 点击上一页 

            //改为地址栏传参
            // $("#product").on("click", "#back a", function () {

            //   // 判断当前页为第一页时 不做跳转
            //   if (pageid <= 1) {
            //     return false;
            //   }
            //   // 分页减1 
            //   pageid--;

            //   //  重新渲染页面 
            //   render(categoryid, pageid);
            // });
          }
        });
      }
    }
  });
})