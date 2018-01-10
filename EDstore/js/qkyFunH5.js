

define(function(require,exports) {//dedine闭包
 exports.qkyli_but=function(){
		$(".qkyli_but").click(function(){
			var opens=$(this).attr("opens");
			$(this).addClass("active").siblings().removeClass("active");
			$(".qkyli_page").removeClass("open");
			$(".qkyli_page."+opens).addClass("open");
		});
}
//自动变化以头部的距离，i为想离头部有多远，可以负数
exports.qkyh5_topa_header=function (i,jq){
	if(jq==1){
	var titHeight = $('.qkyh5_header').height()+i;
	}else{
	var titHeight = $('.qkyh5_header').offset().height+i;}
	//console.log(titHeight);
	$(".qkyh5_main").css({"paddingTop":titHeight+"px"});
}

exports.htmlajax=function(url,sucfun){
		var urlhtml="";
		$.ajax({
		  url: url,
		  cache: false,
		  success: function(html){
			 sucfun(html);
		  }
		});	
}

exports.getUrl=function(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
}
exports.isNull=function (data){ 
    	return (data == "" || data == undefined || data == null) ? "kong" : data; 
	}

//获取两日期间的所有日期
	 exports.getAll=function(begin, end) {
		var dates=[];  
		var ab = begin.split("-");  
		var ae = end.split("-");  
		var db = new Date();  
		db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);  
		var de = new Date();  
		de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);  
		var unixDb = db.getTime();  
		var unixDe = de.getTime();  
		for (var k = unixDb; k <= unixDe;) {  
		   dates.push((new Date(parseInt(k))).format());  
			k = k + 24 * 60 * 60 * 1000;  
		}  
		return dates;
	} 
	Date.prototype.format = function() {  
		var s = '';  
		var mouth = (this.getMonth() + 1)>=10?(this.getMonth() + 1):('0'+(this.getMonth() + 1));  
		var day = this.getDate()>=10?this.getDate():('0'+this.getDate());  
		s += this.getFullYear() + '-'; // 获取年份。  
		s += mouth + "-"; // 获取月份。  
		s += day; // 获取日。  
		return (s); // 返回日期。  
	};  

	 exports.indexOf=function(arr, str){
		// 如果可以的话，调用原生方法
		if(arr && arr.indexOf){
			return arr.indexOf(str);
		}
		 
		var len = arr.length;
		for(var i = 0; i < len; i++){
			// 定位该元素位置
			if(arr[i] == str){
				return i;
			}
		}
		 
		// 数组中不存在该元素
		return -1;
	}
	


});