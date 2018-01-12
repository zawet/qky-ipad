define(function(require,exports) {//dedine闭包  
	$(".qkyh5_footbg a").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		
	});
	exports.index=function(){
	
		
	}
	exports.app=function(){
	
	
	}


	//辅助函数
	exports.isNull=function (data){ 
    	return (data == "" || data == undefined || data == null) ? "kong" : data; 
	}

	
});