$(function(){
    var url = "rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov";//rtsp视频
    url = "rtmp://live.hkstv.hk.lxdns.com/live/hks";//rtmp视频
    if(url){
        theHtml = '<object type="application/x-vlc-plugin" pluginspage="http://www.videolan.org/" id="vlc" events="false" width="480" height="300">'+
            '<param name="mrl" value="' + url + '" />'+
            '<param name="volume" value="50" />'+
            '<param name="autoplay" value="true" />'+
            '<param name="loop" value="false" />'+
            '<param name="play" id="isPlay" value="true" />'+
            '<param name="fullscreen" value="false" />'+
            '<param name="controls" value="false" />'+
            '</object>';
    }else{
        theHtml = "暂无视频连接";
    }
    document.getElementById("player").innerHTML = theHtml;
    $("#vlc").css("width","480");
    $("#vlc").css("height","300");
})