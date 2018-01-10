define(function(require,exports) {//dedine闭包  
    var myDate = new Date();
    var toy=myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var tom=myDate.getMonth();       //获取当前月份(0-11,0代表1月)
	var tod=myDate.getDate();        //获取当前日(1-31)
	var th=myDate.getHours();       //获取当前小时数(0-23)
	var tm=myDate.getMinutes();     //获取当前分钟数(0-59)
	var ts=myDate.getSeconds();     //获取当前秒数(0-59)
	var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
	exports.ipad=function(d){
		var times=setInterval(function(){
			$("#time").html(th+":"+tm);
			tm++;if(tm>=60){tm=0; th++;if(th>=24)th=0;}
		},60000);

		$("#date").html(dayNames[myDate.getDay()]+"  "+toy+"-"+(tom+1)+"-"+tod);
		drawDom(d);
		var des=new Swiper(".ipad-des",{
			//initialSlide :1,
			onSlideChangeEnd: function(swiper){
				$(".qkyh5_footbg a").removeClass("cur").eq(swiper.activeIndex).addClass("cur");
				isOne(swiper.activeIndex);
			}
		});
		$(".qkyh5_footbg a").click(function(){
			des.slideTo($(this).index(),500);
			$(this).addClass("cur").siblings().removeClass("cur");
			isOne($(this).index());
		});

		var st=exports.getUrl("st");
		if(exports.isNull(st)=="kong")st=1;
		des.slideTo(st);

		$("#toindex").click(function(){
			des.slideTo(1);
		})
	}

function drawDom(d){
	for(var key in d){
		for(var i=0;i<d[key].length;i++){
			$("#"+key).append(
				'<a href="'+d[key][i].href+'" class="app-list '+d[key][i].appclass+'">'+
				'<label class="'+d[key][i].appid+'"></label>'+
				'<span>'+d[key][i].appname+'</span>'+
				'</a>'
			);
		}
	}
}
	function isOne(i){
		if(i<=0){
			$(".qkyh5_footbg").addClass("hide");
			$(".allbg").addClass("blur");
		}else{
			$(".qkyh5_footbg").removeClass("hide");
			$(".allbg").removeClass("blur");
		}
	}
	//辅助函数
	exports.isNull=function (data){ 
    	return (data == "" || data == undefined || data == null) ? "kong" : data; 
	}
	exports.selectDraw=function (id,data,fun){
		var optionHtml="";
		for(var i=0;i<data.length;i++){
			optionHtml+='<option value="'+data[i][1]+'" uid="'+data[i][0]+'">'+data[i][1]+'</option>';
		}
		id.html(optionHtml);
		id.change(function(){
			var onse=$(this).find("option:selected");
			fun(onse.attr("value"),onse.attr("uid"));  
		});
	}
	exports.setSelect=function(id,toid){
		id.find("option[uid='"+toid+"']").attr("selected",true);
	}
	exports.getUrl=function(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	}
	
});