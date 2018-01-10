define(function(require,exports) {//dedine闭包  
var data=require("./Data.js");
var manifest;
exports.preload="";

//定义相关JSON格式文件列表
function setupManifest() {
    
    onemf= [
        {id: "logo",src: "images/logo.png"},
        {id: "allbg",src: "images/allbg.png"},

        {id: "indexicon",src: "images/footicon/indexicon.png"},
        {id: "indexiconOn",src: "images/footicon/indexiconOn.png"},
        {id: "myicon",src: "images/footicon/myicon.png"},
        {id: "myiconOn",src: "images/footicon/myiconOn.png"},
        {id: "othericon",src: "images/footicon/othericon.png"},
        {id: "othericonOn",src: "images/footicon/othericonOn.png"},
        {id: "schoolicon",src: "images/footicon/schoolicon.png"},
        {id: "schooliconOn",src: "images/footicon/schooliconOn.png"}
    ];
    //从data那拿过icon图标的路径，进行加装在要加载的列表里
    var distsrc="images/icon/";
    for(var key in data){
        for(var i=0;i<data[key].length;i++){
            var ll={id:"",src:""};
            ll.id=data[key][i].appid;
            ll.src=distsrc+data[key][i].appicon;
            onemf.push(ll);
        }
    } 
    
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