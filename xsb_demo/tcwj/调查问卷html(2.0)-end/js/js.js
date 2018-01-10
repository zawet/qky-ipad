/**
 * Created by Alice(hhf) on 2016/7/11 0008.
 * for 全课云-调查问卷
 * 有些函数写得有点白痴,哈哈哈,见笑啦! 欢迎赐教!
 */
function resizeWin(){};
$(window).load(function(){resizeWin();popZise()});
$(window).resize(function(){resizeWin();popZise()});

function TxtOF(o){if(o.value==o.defaultValue){o.value='';o.style.color='#333'}};
function TxtOB(o){if(o.value==''){o.value=o.defaultValue;o.style.color='#666'}};

function PassOF(o){$(o).hide();$(o).prev('input').focus();};
function PassOB(o){if(o.value==''){$(o).next('b').show();}};
// pop-up
function popOut(i){$(i).fadeOut('fast')};
function popIn(i){$(i).fadeIn('fast')};
function popZise(){$(".pop_bg").height($(window).height() > $(document.body).height() ? $(window).height() : ($(document.body).height())+40);};


$(document).ready(function(){
    var lineIndex = 0;
    var lineHtml = new Array();
    lineHtml[0] = $(
        "<div class='wrap c-f'>" +
        " <a  class='dcwj-btn-blue b-r'>16</a>"+
        " <a  class='dcwj-btn-blue b-r'>17</a>"+
        " <a  class='dcwj-btn-blue b-r'>18</a>"+
        " <a  class='dcwj-btn-blue b-r'>19</a>"+
        " <a  class='dcwj-btn-blue b-r'>20</a>"+
        " <a  class='dcwj-btn-blue b-r'>21</a>"+
        " <a  class='dcwj-btn-blue b-r'>22</a>"+
        " <a  class='dcwj-btn-blue b-r'>23</a>"+
        " <a  class='dcwj-btn-blue b-r'>24</a>"+
        " <a  class='dcwj-btn-blue b-r'>25</a>"+
        " <a  class='dcwj-btn-blue b-r'>26</a>"+
        " <a  class='dcwj-btn-blue b-r'>27</a>"+
        " <a  class='dcwj-btn-blue b-r'>28</a>"+
        " <a  class='dcwj-btn-blue b-r'>29</a>"+
        " <a  class='dcwj-btn-blue b-r'>30</a>"+
        "</div>"
    );

    lineHtml[1] = $(
        "<div class='wrap c-f '>" +
        " <a  class='dcwj-btn-blue b-r'>31</a>"+
        " <a  class='dcwj-btn-blue b-r'>32</a>"+
        " <a  class='dcwj-btn-blue b-r'>33</a>"+
        " <a  class='dcwj-btn-blue b-r'>34</a>"+
        " <a  class='dcwj-btn-blue b-r'>35</a>"+
        " <a  class='dcwj-btn-blue b-r'>36</a>"+
        " <a  class='dcwj-btn-blue b-r'>37</a>"+
        " <a  class='dcwj-btn-blue b-r'>38</a>"+
        " <a  class='dcwj-btn-blue b-r'>39</a>"+
        " <a  class='dcwj-btn-blue b-r'>40</a>"+
        " <a  class='dcwj-btn-blue b-r'>41</a>"+
        " <a  class='dcwj-btn-blue b-r'>42</a>"+
        " <a  class='dcwj-btn-blue b-r'>43</a>"+
        " <a  class='dcwj-btn-blue b-r'>44</a>"+
        " <a  class='dcwj-btn-blue b-r'>45</a>"+
        "</div>"
    );

    lineHtml[2] = $(
        "<div class='wrap c-f'>" +
        " <a  class='dcwj-btn-blue b-r'>46</a>"+
        " <a  class='dcwj-btn-blue b-r'>47</a>"+
        " <a  class='dcwj-btn-blue b-r'>48</a>"+
        " <a  class='dcwj-btn-blue b-r'>49</a>"+
        " <a  class='dcwj-btn-blue b-r'>50</a>"+
        " <a  class='dcwj-btn-blue b-r'>51</a>"+
        " <a  class='dcwj-btn-blue b-r'>52</a>"+
        " <a  class='dcwj-btn-blue b-r'>53</a>"+
        " <a  class='dcwj-btn-blue b-r'>54</a>"+
        " <a  class='dcwj-btn-blue b-r'>55</a>"+
        " <a  class='dcwj-btn-blue b-r'>56</a>"+
        " <a  class='dcwj-btn-blue b-r'>57</a>"+
        " <a  class='dcwj-btn-blue b-r'>58</a>"+
        " <a  class='dcwj-btn-blue b-r'>59</a>"+
        " <a  class='dcwj-btn-blue b-r'>60</a>"+
        "</div>"
    );

    lineHtml[3] = $(
        "<div class='wrap c-f '>" +
        " <a  class='dcwj-btn-blue b-r'>61</a>"+
        " <a  class='dcwj-btn-blue b-r'>62</a>"+
        " <a  class='dcwj-btn-blue b-r'>63</a>"+
        " <a  class='dcwj-btn-blue b-r'>64</a>"+
        " <a  class='dcwj-btn-blue b-r'>65</a>"+
        " <a  class='dcwj-btn-blue b-r'>66</a>"+
        " <a  class='dcwj-btn-blue b-r'>67</a>"+
        " <a  class='dcwj-btn-blue b-r'>68</a>"+
        " <a  class='dcwj-btn-blue b-r'>69</a>"+
        " <a  class='dcwj-btn-blue b-r'>70</a>"+
        " <a  class='dcwj-btn-blue b-r'>71</a>"+
        " <a  class='dcwj-btn-blue b-r'>72</a>"+
        " <a  class='dcwj-btn-blue b-r'>73</a>"+
        " <a  class='dcwj-btn-blue b-r'>74</a>"+
        " <a  class='dcwj-btn-blue b-r'>75</a>"+
        "</div>"
    );

    lineHtml[4] = $(
        "<div class='wrap c-f '>" +
        "  <a  class='dcwj-btn-blue b-r'>91</a>"+
        "  <a  class='dcwj-btn-blue b-r'>92</a>"+
        "  <a  class='dcwj-btn-blue b-r'>93</a>"+
        "  <a  class='dcwj-btn-blue b-r'>94</a>"+
        "  <a  class='dcwj-btn-blue b-r'>95</a>"+
        "  <a  class='dcwj-btn-blue b-r'>96</a>"+
        "  <a  class='dcwj-btn-blue b-r'>97</a>"+
        "  <a  class='dcwj-btn-blue b-r'>98</a>"+
        "  <a  class='dcwj-btn-blue b-r'>99</a>"+
        "</div>"
    );


    $(".select4_1").click(function(){
    $(".list4_1").slideToggle("1000");
});
$(".select4_2").click(function(){
    $(".list4_2").slideToggle("1000");
});
$(".select4_3").click(function(){
    $(".list4_3").slideToggle("1000");
});
$(".select4_4").click(function(){
    $(".list4_4").slideToggle("1000");
});
$(".select2_1").click(function(){
    $(".list2_1").slideToggle("1000");
});
$(".select2_2").click(function(){
    $(".list2_2").slideToggle("1000");
});
$(".select6_1").click(function(){
    $(".list6_1").slideToggle("1000");
});
    $(".select5_1").click(function(){
        $(".list5_1").slideToggle("1000");
    });
    $(".export").click(function(){
        $(".list5_2").slideToggle("1000");
    });

$(".list4_1 li").click(function(){
        var chirl_name=$(this).text();
        $(".list4_1").hide();
        $(".select4_1").children("input").val(chirl_name);
    });

    $(".list5_1 li").click(function(){
        var chirl_name=$(this).text();
        $(".list5_1").hide();
        $(".select5_1").children("input").val(chirl_name);
    });
    $(".list5_2 li").click(function(){
        $(".list5_2").hide();
    });

$(".list4_2 li").click(function(){
    var chirl_name=$(this).text();
    $(".list4_2").hide();
    $(".select4_2").children("input").val(chirl_name);
});
$(".list4_3 li").click(function(){
    var chirl_name=$(this).text();
    $(".list4_3").hide();
    $(".select4_3").children("input").val(chirl_name);
});
$(".list4_4 li").click(function(){
    var chirl_name=$(this).text();
    $(".list4_4").hide();
    $(".select4_4").children("input").val(chirl_name);
});

$(".list2_1 li").click(function(){
    var chirl_name=$(this).text();
    $(".list2_1").hide();
    $(".select2_1").children("input").val(chirl_name);
});
$(".list6_1 li").click(function(){
    var chirl_name=$(this).text();
    $(".list6_1").hide();
    $(".select6_1").children("input").val(chirl_name);
});
$(".list2_2 li").click(function(){
    var chirl_name=$(this).text();
    $(".list2_2").hide();
    $(".select2_2").children("input").val(chirl_name);
});


    $(".report-sj .btn a").click(function() {
        $(this).toggleClass('published');
        $(this).parent(".btn").toggleClass("stop-sj");
        return false;
    });

    $(" a.stop").click(function() {
        $(this).toggleClass('published');
        $(this).toggleClass("stop-st");
        return false;
    });


    $(function(){
        $(".choice-lb  li").each(function(index){
            $(this).click(function(){
                $(".choice-lb li").removeClass("cur");
                $(this).addClass("cur");
            })
        })
    });
    //单选
    $(function(){
        $(".type_1 ul.item li").click(function(){
            var num=$(this).index();
            var cont=$("<span class='fl'><input type='radio'/></span>"+"<div class='input-box fl w-3'><i class='qkyicon co2'>&#xe606;</i> "+ "<input type='text' class='input-box'></div>"+ "<div class='fl c-f item'>"+ "<a href='javascript:void(0)' class='edit fl' onclick='popIn('#m-2')'><i class='qkyicon co1'>&#xe611;</i> </a>"+
                " <a class='dcwj-btn-blue num b-r'><i class='qkyicon'>&#xe613;</i> </a>"+
                "<a class='dcwj-btn-blue num b-r'><i class='qkyicon'>&#xe610;</i> </a>"+
                "<a class='del fl'><i class='qkyicon co1'>&#xe62c;</i></a>"+
                "</div>"
            )
            if(num>0){
                $(this).html(cont);
            } else {
                return false;
            }

        })
    });
    //多选
    $(function(){
        $(".type_2 ul.item li").click(function(){
            var num=$(this).index();
            var cont=$("<span class='fl'><input type='checkbox'/></span>"+"<div class='input-box fl w-3'><i class='qkyicon co2'>&#xe606;</i> "+ "<input type='text' class='input-box'></div>"+ "<div class='fl c-f item'>"+ "<a href='javascript:void(0)' class='edit fl' onclick='popIn('#m-2')'><i class='qkyicon co1'>&#xe611;</i> </a>"+
                " <a class='dcwj-btn-blue num b-r'><i class='qkyicon'>&#xe613;</i> </a>"+
                "<a class='dcwj-btn-blue num b-r'><i class='qkyicon'>&#xe610;</i> </a>"+
                "<a class='del fl'><i class='qkyicon co1'>&#xe62c;</i></a>"+
                "</div>"
            )
            if(num>0){
                $(this).html(cont);
            } else {
                return false;
            }

        })
    });
    //填空
    $(function(){
        $(".type_3 ul.item li").click(function(){
            var num=$(this).index();
            var cont=$("<div class='input-box fl w-3'><i class='qkyicon co2'>&#xe606;</i> "+ "<input type='text' class='input-box'></div>"+ "<div class='fl c-f item'>"+ "<a href='javascript:void(0)' class='edit fl' onclick='popIn('#m-2')'><i class='qkyicon co1'>&#xe611;</i> </a>"+
                " <a class='dcwj-btn-blue num b-r'><i class='qkyicon'>&#xe613;</i> </a>"+
                "<a class='dcwj-btn-blue num b-r'><i class='qkyicon'>&#xe610;</i> </a>"+
                "<a class='del fl'><i class='qkyicon co1'>&#xe62c;</i></a>"+
                "</div>"
            )
            if(num>0){
                $(this).html(cont);
            } else {
                return false;
            }

        })
    });

    $(function(){
        $(".tm-class ul li").each(function(index){
            $(this).click(function(){
                var num_tm=$(this).index();
                $(".tm-class ul li").children("a").removeClass("cur");
                $(this).children("a").addClass("cur");
                $(".tm-th-num").find(".wrap").children("a:eq(0)").addClass("finished");
                $(".tm-th-num").find(".wrap").children("a:eq(1)").addClass("onedit");
                switch (num_tm)
                {
                    case 0:
                        $(".type_2").slideUp(300);
                        $(".type_3").slideUp(300);
                        $(".type_1").slideDown(500);
                        break;
                    case 1:
                        $(".type_2").slideDown(500);
                        $(".type_1").slideUp(300);
                        $(".type_3").slideUp(300);

                        //$(".type_2").css('display','none');
                        break;
                    case 2:
                        $(".type_3").slideDown(500);
                        $(".type_1").slideUp(300);
                        $(".type_2").slideUp(300);
                        //$(".type_2").css('display','none');
                        break;
                }

            })
        })
    });

    $(".wjdx-n li a").click(function(){
        $(this).parent().hide();
    });

    $(".list-name ul li i").click(function(){
        $(this).parent().hide();
    });



    $(".edit-wj .tit-t-r input").focus(function(){
            $(this).toggleClass("edit-n");
            $(this).attr("readonly",false);
        });

    $(function() {
        ai_1 = 5;
        ai_2 = 15;
        $(".report-fx .qs").hover(function(e) {
            otitle = this.title;
            this.title = "";
            var ndiv = "<div id='showtit'>" + otitle + "</div>";
            $("body").append(ndiv);
            $("#showtit").css({
                "top" : (e.pageY + ai_2) + "px",
                "left" : (e.pageX + ai_1) + "px"
            }).show(2000);
            $(this).mousemove(function(e) {
                $("#showtit").css({
                    "top" : (e.pageY + ai_2) + "px",
                    "left" : (e.pageX +ai_1) + "px"
                }).show(1000);
            });
        }, function() {
            this.title = otitle;
            $("#showtit").remove();
        });
    });


    $(".wjbt input").focus(function(){
        $(this).parent().children("i").hide(300);
        $(".wjbt").parent().children("span").hide(300);
    });

    $("#choice-lb .title-b a").click(function() {
		$(this).toggleClass('published');
		return false;	
    });


    $("a.add-num").click(function() {
		if(lineIndex<5){
            $(".tm-th-num").find("div:last").after(lineHtml[lineIndex]);
			lineIndex++;
		} else {
            return false;
		}

    });











});
