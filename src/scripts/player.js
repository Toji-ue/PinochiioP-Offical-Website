import $ from 'jquery';
var video_id;
var tag = document.createElement('script');
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayer;
var playerStatus = false;

$(function(){
    var videoLink = $(".youtube");
    var closeBtn = $("#close_player");

    videoLink.click(function(){
        $("#player").fadeIn(100);
        var video_id = $(this).data("video");
        setPlayer(video_id);
        return false;
    });
    closeBtn.click(function(){
        closePlayer();
    })
});

function setPlayer(video_id){
    if(playerStatus){
        resetPlayer(video_id);
        return;
    }
    ytPlayer = new YT.Player(
        'video_content',
        {
            width: 560,
            height: 315,
            videoId: video_id,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        }
    );
}

function onPlayerReady(event) {
    playerStatus = true;
    event.target.playVideo();
}
function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.BUFFERING){
        return;
    }
    if(event.data == YT.PlayerState.ENDED) {
        closePlayer();
    }
}

    function resetPlayer(video_id){
        ytPlayer.clearVideo();
        ytPlayer.loadVideoById(video_id);
        ytPlayer.playVideo();
    }

    function closePlayer(){
        ytPlayer.stopVideo();
        (function($){
            $("#player").fadeOut(500);
        })(jQuery);
    }