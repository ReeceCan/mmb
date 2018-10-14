// 功能1 获取地址栏参数 并转成对象 
function getUrlData() {
   // 得到参数 
  var search = location.search;
  // 截取字符串 
  search = search.slice(1);
  // 将参数转成数组 
  var arr = search.split("&");
  var obj = {}; //用来存储参数的值 
  // 遍历数组 将键和值存储到对象中 
  arr.forEach(function ( v, i ) {
  var key = v.split("=")[0];
  var value = v.split("=")[1];
  obj[key] = value;
  })
  return obj;
}

