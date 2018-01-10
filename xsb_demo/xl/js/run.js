define(function(require,exports) {//dedine闭包
	var Data=require("./Data.js");//数据总成
	var qkyselect=require("./qkySelect.js");//下拉选择总成
	var fun=require("./qkyFunH5.js");//函数总成
	var cal=require("./cal.js");//日历总成
	exports.run=function(){
		$(".qkyh5_header_main").qkySelect({
			values:Data.xqQS.values,
			valuesActive:Data.xqQS.valuesActive,
			changefun:function(txt){
				var i=fun.indexOf(Data.xqQS.values[0],txt);
				if(i==-1)i=0;
				$("#xqcont").html(txt);
				$("#sedata").html(Data.se[i][0]+"~"+Data.se[i][1]);
				$(".xlxr").html("");
				cal.xlDraw(Data.se[i][0],Data.se[i][1],"-",$(".xlxr"),Data.sjData);	
			}
		});
		
		
	}
	exports.runCont=function(){
		var myDates = new Date();
		var toyy=myDates.getFullYear();    //获取完整的年份(4位,1970-????)
		var tomm=myDates.getMonth();       //获取当前月份(0-11,0代表1月)
		var todd=myDates.getDate();        //获取当前日(1-31)

		var xrdate=fun.getUrl("date");
		var today=toyy+"-"+(tomm+1)+"-"+todd;
		if(xrdate == "" || xrdate == undefined || xrdate == null)  xrdate=today; //没传日期进去的话，就渲染今天的日期
		else xrdate=xrdate;
		$(".today-date").html(xrdate);
		fun.xrCont(Data.sjData,$(".qkyh5_main"),xrdate);	
	}

	

});