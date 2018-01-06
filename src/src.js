/**
 * Yawrap v1.0.0
 * http://yawrap.yawzhou.com
 *
 * Author: Yaw Zhou
 * http://yawzhou.com
 *
 * Copyright © 2018 YawZhou,admin@yawzhou.com
 * Released under the MIT License
 * https://opensource.org/licenses/MIT
 *
 * Date: 2018.2.16 08:21
 */
(function($){
    $.fn.yawrap = function(w,h,mw,mh,lh,fs,cl,bg,t,r,b,l,mg,mgt,mgr,mgb,mgl,pd,pdt,pdr,pdb,pdl,bd,bdt,bdr,bdb,bdl,ra,zi,space){
        this.css({
            width:w,
            height:h,
            maxWidth:mw,
            maxHeight:mh,
            lineHeight:lh,
            fontSize:fs,
            color:cl,
            background:bg,
            top:t,
            right:r,
            bottom:b,
            left:l,
            margin:mg,
            marginTop:mgt,
            marginRight:mgr,
            marginBottom:mgb,
            marginLeft:mgl,
            padding:pd,
            paddingTop:pdt,
            paddingRight:pdr,
            paddingBottom:pdb,
            paddingLeft:pdl,
            border:bd,
            borderTop:bdt,
            borderRight:bdr,
            borderBottom:bdb,
            borderLeft:bdl,
            borderRadius:ra,
            zIndex:zi,
            letterSpacing:space
        });
        return this;
    }
})(jQuery);
if(window.console&&window.console.log){
    console.log("%c Yawrap 1.0.0 By YawZhou http://yawrap.yawzhou.com ","background:#2196f3;color:#fff;padding:2px;border-radius:20px;");
};
$(function(){
    $('.yaw,.yaw-in,.yaw-bl,yaw,yaw-in,yaw-bl,.yaw-pc,.yaw-pc-in,.yaw-pc-bl,yaw-pc,yaw-pc-in,yaw-pc-bl,.yaw-pad,.yaw-pad-in,.yaw-pad-bl,yaw-pad,yaw-pad-in,yaw-pad-bl,.yaw-m,.yaw-m-in,.yaw-m-bl,yaw-m,yaw-m-in,yaw-m-bl').each(function() {
        $(this).yawrap($(this).data('w'),$(this).data('h'),$(this).data('mw'),$(this).data('mh'),$(this).data('lh'),$(this).data('fs'),$(this).data('cl'),$(this).data('bg'),$(this).data('t'),$(this).data('r'),$(this).data('b'),$(this).data('l'),$(this).data('mg'),$(this).data('mgt'),$(this).data('mgr'),$(this).data('mgb'),$(this).data('mgl'),$(this).data('pd'),$(this).data('pdt'),$(this).data('pdr'),$(this).data('pdb'),$(this).data('pdl'),$(this).data('bd'),$(this).data('bdt'),$(this).data('bdr'),$(this).data('bdb'),$(this).data('bdl'),$(this).data('ra'),$(this).data('zi'),$(this).data('space'));
        if ($(window).width() > 1180) {
            $(this).yawrap($(this).data('pc-w'),$(this).data('pc-h'),$(this).data('pc-mw'),$(this).data('pc-mh'),$(this).data('pc-lh'),$(this).data('pc-fs'),$(this).data('pc-cl'),$(this).data('pc-bg'),$(this).data('pc-t'),$(this).data('pc-r'),$(this).data('pc-b'),$(this).data('pc-l'),$(this).data('pc-mg'),$(this).data('pc-mgt'),$(this).data('pc-mgr'),$(this).data('pc-mgb'),$(this).data('pc-mgl'),$(this).data('pc-pd'),$(this).data('pc-pdt'),$(this).data('pc-pdr'),$(this).data('pc-pdb'),$(this).data('pc-pdl'),$(this).data('pc-bd'),$(this).data('pc-bdt'),$(this).data('pc-bdr'),$(this).data('pc-bdb'),$(this).data('pc-bdl'),$(this).data('pc-ra'),$(this).data('pc-zi'),$(this).data('pc-space'));
        }else if ($(window).width() > 640 && $(window).width() < 1180) {
            $(this).yawrap($(this).data('pad-w'),$(this).data('pad-h'),$(this).data('pad-mw'),$(this).data('pad-mh'),$(this).data('pad-lh'),$(this).data('pad-fs'),$(this).data('pad-cl'),$(this).data('pad-bg'),$(this).data('pad-t'),$(this).data('pad-r'),$(this).data('pad-b'),$(this).data('pad-l'),$(this).data('pad-mg'),$(this).data('pad-mgt'),$(this).data('pad-mgr'),$(this).data('pad-mgb'),$(this).data('pad-mgl'),$(this).data('pad-pd'),$(this).data('pad-pdt'),$(this).data('pad-pdr'),$(this).data('pad-pdb'),$(this).data('pad-pdl'),$(this).data('pad-bd'),$(this).data('pad-bdt'),$(this).data('pad-bdr'),$(this).data('pad-bdb'),$(this).data('pad-bdl'),$(this).data('pad-ra'),$(this).data('pad-zi'),$(this).data('pad-space'));
        }else if ($(window).width() < 640) {
            $(this).yawrap($(this).data('m-w'),$(this).data('m-h'),$(this).data('m-mw'),$(this).data('m-mh'),$(this).data('m-lh'),$(this).data('m-fs'),$(this).data('m-cl'),$(this).data('m-bg'),$(this).data('m-t'),$(this).data('m-r'),$(this).data('m-b'),$(this).data('m-l'),$(this).data('m-mg'),$(this).data('m-mgt'),$(this).data('m-mgr'),$(this).data('m-mgb'),$(this).data('m-mgl'),$(this).data('m-pd'),$(this).data('m-pdt'),$(this).data('m-pdr'),$(this).data('m-pdb'),$(this).data('m-pdl'),$(this).data('m-bd'),$(this).data('m-bdt'),$(this).data('m-bdr'),$(this).data('m-bdb'),$(this).data('m-bdl'),$(this).data('m-ra'),$(this).data('m-zi'),$(this).data('m-space'));
        }
    })
});