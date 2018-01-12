define(function(require,exports) {//dedine闭包  
var manifest;
exports.preload="";

//定义相关JSON格式文件列表
function setupManifest() {
    var distsrc="images/icon/";
    onemf= [
        {id: "list01",src: "images/list01.png"},
        {id: "list02",src: "images/list02.png"},
        {id: "list03",src: "images/list01.png"},
        {id: "applist01",src: "images/list01.png"},
        {id: "applist02",src: "images/list02.png"},
        {id: "applist03",src: "images/list01.png"},
        {id: "applist04",src: "images/list01.png"},

        {id: "new",src: "images/footicon/new.png"},
        {id: "new_b",src: "images/footicon/new_b.png"},
        {id: "newtit",src: "images/footicon/new_b.png"},
        {id: "mine",src: "images/footicon/mine.png"},
        {id: "mine_b",src: "images/footicon/mine_b.png"},
        {id: "minetit",src: "images/footicon/mine_b.png"},
        {id: "apps",src: "images/footicon/apps.png"},
        {id: "apps_b",src: "images/footicon/apps_b.png"},
        {id: "apptit",src: "images/footicon/shop.png"}
        //{id: "list3",src: "images/list3.jpg"}

    ];
    
}


//开始预加载
function startPreload() {
    exports.preload = new createjs.LoadQueue(true);
    //preload.on("fileload", handleFileLoad);
    exports.preload.on("progress", handleFileProgress);
    //exports.preload.on("complete", loadComplete);
    exports.preload.on("error", loadError);
    exports.preload.loadManifest(onemf);

}

//处理单个文件加载
function handleFileLoad(event) {
    console.log("文件类型: " + event.item.type);
    if (event.item.id == "logo") {
        console.log("logo图片已成功加载");
    }
}

//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
    console.log("加载出错！", evt.text);
}

//已加载完毕进度 
function handleFileProgress(event) {
    var p=exports.preload.progress * 100 | 0;
    //$(".bf").html(p + "%");
    var bf=document.getElementById("bf");
    bf.innerHTML=p+"%";
    if(p<=50){
        document.getElementById("rb").style.transform="rotateZ("+(p*3.6+225)+"deg)";
         //$(".pro.proright b").css("transform","rotateZ("+(p*3.6+225)+"deg)");
     }else{
        //$(".pro.proright b").css("transform","rotateZ(405deg)");
         //$(".pro.proleft b").css("transform","rotateZ("+(p*3.6+45)+"deg)");
         document.getElementById("rb").style.transform="rotateZ(405deg)";
         document.getElementById("lb").style.transform="rotateZ("+(p*3.6+45)+"deg)";
    }
    
}

//全度资源加载完毕
 exports.loadComplete=function(event) {
    //$(".loadprogress").fadeOut(200);
    document.getElementById("loadprogress").style.display="none";
    var imgids=exports.preload._loadItemsById;
    setImg(imgids);
    //console.log(event,preload);
}

 exports.setImg =function(obj){
    for(var key in obj){
        $("."+key).html(exports.preload.getResult(key));   
    }
}


setupManifest();
startPreload();

});