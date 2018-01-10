/*
 2017-9-20 yhc
*/

$(window).load(function(){
	resizeWin();
	popZise();
	$("#liulan_file").change(function(){  // 当 id 为 file 的对象发生变化时
		$("#lilan_txt").val($("#liulan_file").val());  //将 #file 的值赋给 #a 
 	});
	footinbottom();
});
$(window).resize(function(){resizeWin();footinbottom();popZise()});


// 输入框提示
function TxtOF(o){if(o.value==o.defaultValue){o.value='';o.style.color='#333'}};
function TxtOB(o){if(o.value==''){o.value=o.defaultValue;o.style.color='#666'}};

function PassOF(o){$(o).hide();$(o).prev('input').focus();};
function PassOB(o){if(o.value==''){$(o).next('b').show();}};


// 弹窗
function popOut(i){$(i).fadeOut('fast')};
function popIn(i){$(i).fadeIn('fast')};
function popZise(){$(".pop_bg").height($(window).height() > $(document.body).height() ? $(window).height() : ($(document.body).height())+40);};


// 站点设置
$(document).ready(function(){
  $('.stop li').click(function(){$(this).siblings().removeClass('cur');$(this).addClass('cur');})
});



function manage_close(){
	$(".edit_close").each(function(i) {
        $(this).click(function(){
			$(this).parents("li").addClass("fadeOutLeft").addClass("animated");
			$(this).parents("li").hide(400);	
		});
    });
	}
//改变框框大小执行函数
$(window).on('resize',function(){
	initPageSize();
});

//随时调整大小函数
function initPageSize(){
		var _vs = getViewSize();
		var tW =  _vs.width;
	
			var tW =  _vs.width;
		
		$('.main').css({
			width : tW +'px',
			height :  _vs.height-$(".top").outerHeight()-5+'px'
		});
}

//获取视口尺寸
function getViewSize(){
	var w = 0, h = 0, o, d = document;
	if (window.innerWidth) {	
		o = window;		
		w = o.innerWidth;
		h = o.innerHeight;
	} else if (d.documentElement && d.documentElement.clientWidth) {
		o = d.documentElement;
		w = o.clientWidth;
		h = o.clientHeight;
	}
	return {width: w, height: h};
}

/*返回top*/
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

/**定位跳转**/
$(function(){
	$('.stu_inf-guide .nav li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		
		console.log($('.title').eq($(this).index()).offset().top);
		
		
		$('body,html').stop(true,true).animate({
			'scrollTop':$('.title').eq($(this).index()).offset().top-50
		},1000);
	})
})
/*tab*/
function selectTag(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("tags").getElementsByTagName("label");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	// 操作内容
	for(i=0; j=document.getElementById("tagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
	
}


$(document).ready(function(){$(".show_s_list").click(function(){$(this).children(".arrow-down").toggleClass("arrow-up",1000);$(".names_list").slideToggle("1000")});$("a.head").click(function(){$(this).toggleClass("head-hid");$(".r-s-list").slideToggle("1000")})});



//展开收起-详情
$(document).ready(function(){
  $('.rep_more-btn').each(function (index){    
    $('.rep_more-btn0'+index).click(function(){
      $('.rep_more-con0'+index).slideToggle('fast');
    });
  });
  });
function changeVal(obj){
    val=obj.value; 
    if(val=="点击查看详情"){
        obj.value="收起详情";
    }else if(val=="收起详情"){
        obj.value="点击查看详情";
    }
}
/*年级-三级*/
$(function() {$('#menu').metisMenu({toggle: false});});
