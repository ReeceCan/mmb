//功能 商品渲染 
$(function () {

  // 获取地址栏参数 pageid
  var obj = getUrlData();
  var pageid = obj.pageid;

  // 渲染页面 
  render(pageid);

  // 将ajax请求封装成一个函数
  function render(pageid) {
    pageid = pageid || 0; 
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getmoneyctrl",
      data: {pageid: pageid},
      dataType: "json",
      success: function (info) {
        console.log(info);
        // 获取最大页面 
        var page = Math.ceil(info.totalCount / info.pagesize);
        // console.log(page);
        
        info.page = page;
        info.pageid = Number(pageid);

        // 绑定模板 
        var htmlStr = template("product_money_tmp",info);
        $("#mmb_content_money").html(htmlStr);
        
        //select中值改变时,跳转到对应页面 
        pagination();
            
        // 将分页功能封装成一个函数 
        function pagination() {  
          $("#select").change(function () {   
            // pageid改变 
            pageid = $(this).val();
            // 跳转到对应页面
            location.href = "moneyctrl.html?pageid=" + pageid;
          });
        }      
      }
    });
  }
});