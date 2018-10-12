// 利用js给html设置根字体大小 
// 公式 ： 当前屏宽 /设计图尺寸 = 根字体大小 / 基准值

var design = 750;  //设计图尺寸
var base = 100; //基准值 

// 一进入页面调用一次 
responsive();

// 检测屏幕宽度变化 
window.addEventListener("resize",responsive);


// 将根字体大小自适应封装成一个函数 
function responsive() {
  var pageWidth = window.innerWidth;  //获取当前屏宽 
  
  // 设置最大最小值 限制 
  if(pageWidth < 320) {
    pageWidth = 320;
  }
  if(pageWidth < 750) {
    pageWidth = 750;
  }

  // 根据公式计算根字体大小  
  var size = pageWidth / design * base;

  // 将根字体大小 设置给html
  document.documentElement.style.fontSize = size + "px";
}
