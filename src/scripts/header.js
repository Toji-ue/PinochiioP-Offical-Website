
import $ from 'jquery';
$(function(){
    var thisSection = $("section").attr("id");
    var wrapper = $("#wrapper");
    var menuBtn = $("#menu_btn");
    var menuWrap = $("#menu_wrapper");
    wrapper.addClass(thisSection);
    $(window).on('load', function(){
        $("#loading").fadeOut(500);
    })
    $(window).on('load resize', function(){
        var wH = $(this).height();
        wrapper.css("min-height", wH);

        menuBtn.removeClass("show");
        if(menuBtn.css("display")=="block"){
            menuWrap.css("display", "none");
        }else{
            menuWrap.css("display", "block");
        }
    })
    menuBtn.click(function(){
        menuBtn.toggleClass("show");
        menuWrap.slideToggle(300);
    })
})