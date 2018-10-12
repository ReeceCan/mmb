
//功能1 通过地址栏参数动态获取数据  渲染页面  
$(function () {
  // 获取地址栏参数 
  var search = decodeURI(location.search);
  // 截取参数
  var search = search.slice(1);
  // 将参数转成数组 
  var arr = search.split("&");//["categoryid=0", "category=电视", "pageid=1"]
  // 遍历数组  取出键和值,存储到对象中 
  var obj = {}; //用来存储参数 
  arr.forEach(function ( v,i ) {
     var key = v.split("=")[0];//键
     var value = v.split("=")[1];//值
     obj[key] = value;

  })
  // console.log(obj);
  var categoryid = obj.categoryid;
  var pageid = obj.pageid;
  
  // 已进入页面渲染一次 
  render(categoryid,pageid);

  // 功能2 根据下拉选项跳转到对应页面 
  // 检测select框的变化 
  // 获取值
  // 通过获取的值渲染页面   
  
  var page = $("#selectPage").val();
  console.log(page);
  

  // 功能3 点击上一页 跳转到上一页面  点击下一页 跳转到下一页面 
  $("#back").click(function () {
     
  })
  
  


  // 将渲染页面功能封装成一个函数 
  function render(categoryid,pageid) {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getproductlist",
      data: {
        categoryid: categoryid,
        pageid: pageid
      },
      dataType: "json",
      success: function (info) {
         console.log(info);
        // 绑定模板引擎
        var htmlStr = template("product_list_tmp",info);
        // 将数据渲染到页面中  
        $("#product").html(htmlStr);
      }
    });
  }
  
})