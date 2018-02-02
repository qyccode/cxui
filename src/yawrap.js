/**
 * Yawrap v1.0.0
 * http://yawrap.yawzhou.com
 *
 * Author: Yaw Zhou
 * https://www.yawzhou.com
 *
 * Copyright © 2018 Yaw Zhou,admin@yawzhou.com
 * Released under the MIT License
 * https://opensource.org/licenses/MIT
 *
 * Date: 2018.2.1 17:25
 */
;(function(global,undefined){
    'use strict' 
    window.addEventListener("load",function(){
        if(window.console&&window.console.log){
            console.log("%c Yawrap 1.0.0 By YawZhou http://yawrap.yawzhou.com ","background:#2196f3;color:#fff;padding:2px;border-radius:20px;");
        };
        var yaw = document.querySelectorAll('*');
        for (var i = 0; i < yaw.length; i++) {
            var yawrap = function(w,h,mw,mh,lh,fs,cl,bg,t,r,b,l,mg,mgt,mgr,mgb,mgl,pd,pdt,pdr,pdb,pdl,bd,bdt,bdr,bdb,bdl,ra,zi,space){
                yaw[i].style.width = isNaN(w)?w:w + 'px';
                yaw[i].style.height = isNaN(h)?h:h + 'px';
                yaw[i].style.maxWidth = isNaN(mw)?mw:mw + 'px';
                yaw[i].style.maxHeight = isNaN(mh)?mh:mh + 'px';
                yaw[i].style.lineHeight = lh;
                yaw[i].style.fontSize = isNaN(fs)?fs:fs + 'px';
                yaw[i].style.color = cl;
                yaw[i].style.background = bg;
                yaw[i].style.top = isNaN(t)?t:t + 'px';
                yaw[i].style.right = isNaN(r)?r:r + 'px';
                yaw[i].style.bottom = isNaN(b)?b:b + 'px';
                yaw[i].style.left = isNaN(l)?l:l + 'px';
                yaw[i].style.margin = isNaN(mg)?mg:mg + 'px';
                yaw[i].style.marginTop = isNaN(mgt)?mgt:mgt + 'px';
                yaw[i].style.marginRight = isNaN(mgr)?mgr:mgr + 'px';
                yaw[i].style.marginBottom = isNaN(mgb)?mgb:mgb + 'px';
                yaw[i].style.marginLeft = isNaN(mgl)?mgl:mgl + 'px';
                yaw[i].style.padding = isNaN(pd)?pd:pd + 'px';
                yaw[i].style.paddingTop = isNaN(pdt)?pdt:pdt + 'px';
                yaw[i].style.paddingRight = isNaN(pdr)?pdr:pdr + 'px';
                yaw[i].style.paddingBottom = isNaN(pdb)?pdb:pdb + 'px';
                yaw[i].style.paddingLeft = isNaN(pdl)?pdl:pdl + 'px';
                yaw[i].style.border = bd;
                yaw[i].style.borderTop = bdt;
                yaw[i].style.borderRight = bdr;
                yaw[i].style.borderBottom = bdb;
                yaw[i].style.borderLeft = bdl;
                yaw[i].style.borderRadius = isNaN(ra)?ra:ra + 'px';
                yaw[i].style.zIndex = zi;
                yaw[i].style.letterSpacing = isNaN(space)?space:space + 'px'
            }
            yawrap(yaw[i].getAttribute('w')||undefined,yaw[i].getAttribute('h')||undefined,yaw[i].getAttribute('mw')||undefined,yaw[i].getAttribute('mh')||undefined,yaw[i].getAttribute('lh')||undefined,yaw[i].getAttribute('fs')||undefined,yaw[i].getAttribute('cl')||undefined,yaw[i].getAttribute('bg')||undefined,yaw[i].getAttribute('t')||undefined,yaw[i].getAttribute('r')||undefined,yaw[i].getAttribute('b')||undefined,yaw[i].getAttribute('l')||undefined,yaw[i].getAttribute('mg')||undefined,yaw[i].getAttribute('mgt')||undefined,yaw[i].getAttribute('mgr')||undefined,yaw[i].getAttribute('mgb')||undefined,yaw[i].getAttribute('mgl')||undefined,yaw[i].getAttribute('pd')||undefined,yaw[i].getAttribute('pdt')||undefined,yaw[i].getAttribute('pdr')||undefined,yaw[i].getAttribute('pdb')||undefined,yaw[i].getAttribute('pdl')||undefined,yaw[i].getAttribute('bd')||undefined,yaw[i].getAttribute('bdt')||undefined,yaw[i].getAttribute('bdr')||undefined,yaw[i].getAttribute('bdb')||undefined,yaw[i].getAttribute('bdl')||undefined,yaw[i].getAttribute('ra')||undefined,yaw[i].getAttribute('zi')||undefined,yaw[i].getAttribute('space')||undefined);
            if (document.body.clientWidth > 1180) {
                yawrap(yaw[i].getAttribute('pc-w')||undefined,yaw[i].getAttribute('pc-h')||undefined,yaw[i].getAttribute('pc-mw')||undefined,yaw[i].getAttribute('pc-mh')||undefined,yaw[i].getAttribute('pc-lh')||undefined,yaw[i].getAttribute('pc-fs')||undefined,yaw[i].getAttribute('pc-cl')||undefined,yaw[i].getAttribute('pc-bg')||undefined,yaw[i].getAttribute('pc-t')||undefined,yaw[i].getAttribute('pc-r')||undefined,yaw[i].getAttribute('pc-b')||undefined,yaw[i].getAttribute('pc-l')||undefined,yaw[i].getAttribute('pc-mg')||undefined,yaw[i].getAttribute('pc-mgt')||undefined,yaw[i].getAttribute('pc-mgr')||undefined,yaw[i].getAttribute('pc-mgb')||undefined,yaw[i].getAttribute('pc-mgl')||undefined,yaw[i].getAttribute('pc-pd')||undefined,yaw[i].getAttribute('pc-pdt')||undefined,yaw[i].getAttribute('pc-pdr')||undefined,yaw[i].getAttribute('pc-pdb')||undefined,yaw[i].getAttribute('pc-pdl')||undefined,yaw[i].getAttribute('pc-bd')||undefined,yaw[i].getAttribute('pc-bdt')||undefined,yaw[i].getAttribute('pc-bdr')||undefined,yaw[i].getAttribute('pc-bdb')||undefined,yaw[i].getAttribute('pc-bdl')||undefined,yaw[i].getAttribute('pc-ra')||undefined,yaw[i].getAttribute('pc-zi')||undefined,yaw[i].getAttribute('pc-space')||undefined);
            }else if (document.body.clientWidth > 640 && document.body.clientWidth < 1180) {
                yawrap(yaw[i].getAttribute('pad-w')||undefined,yaw[i].getAttribute('pad-h')||undefined,yaw[i].getAttribute('pad-mw')||undefined,yaw[i].getAttribute('pad-mh')||undefined,yaw[i].getAttribute('pad-lh')||undefined,yaw[i].getAttribute('pad-fs')||undefined,yaw[i].getAttribute('pad-cl')||undefined,yaw[i].getAttribute('pad-bg')||undefined,yaw[i].getAttribute('pad-t')||undefined,yaw[i].getAttribute('pad-r')||undefined,yaw[i].getAttribute('pad-b')||undefined,yaw[i].getAttribute('pad-l')||undefined,yaw[i].getAttribute('pad-mg')||undefined,yaw[i].getAttribute('pad-mgt')||undefined,yaw[i].getAttribute('pad-mgr')||undefined,yaw[i].getAttribute('pad-mgb')||undefined,yaw[i].getAttribute('pad-mgl')||undefined,yaw[i].getAttribute('pad-pd')||undefined,yaw[i].getAttribute('pad-pdt')||undefined,yaw[i].getAttribute('pad-pdr')||undefined,yaw[i].getAttribute('pad-pdb')||undefined,yaw[i].getAttribute('pad-pdl')||undefined,yaw[i].getAttribute('pad-bd')||undefined,yaw[i].getAttribute('pad-bdt')||undefined,yaw[i].getAttribute('pad-bdr')||undefined,yaw[i].getAttribute('pad-bdb')||undefined,yaw[i].getAttribute('pad-bdl')||undefined,yaw[i].getAttribute('pad-ra')||undefined,yaw[i].getAttribute('pad-zi')||undefined,yaw[i].getAttribute('pad-space')||undefined);
            }else if (document.body.clientWidth < 640) {
                yawrap(yaw[i].getAttribute('m-w')||undefined,yaw[i].getAttribute('m-h')||undefined,yaw[i].getAttribute('m-mw')||undefined,yaw[i].getAttribute('m-mh')||undefined,yaw[i].getAttribute('m-lh')||undefined,yaw[i].getAttribute('m-fs')||undefined,yaw[i].getAttribute('m-cl')||undefined,yaw[i].getAttribute('m-bg')||undefined,yaw[i].getAttribute('m-t')||undefined,yaw[i].getAttribute('m-r')||undefined,yaw[i].getAttribute('m-b')||undefined,yaw[i].getAttribute('m-l')||undefined,yaw[i].getAttribute('m-mg')||undefined,yaw[i].getAttribute('m-mgt')||undefined,yaw[i].getAttribute('m-mgr')||undefined,yaw[i].getAttribute('m-mgb')||undefined,yaw[i].getAttribute('m-mgl')||undefined,yaw[i].getAttribute('m-pd')||undefined,yaw[i].getAttribute('m-pdt')||undefined,yaw[i].getAttribute('m-pdr')||undefined,yaw[i].getAttribute('m-pdb')||undefined,yaw[i].getAttribute('m-pdl')||undefined,yaw[i].getAttribute('m-bd')||undefined,yaw[i].getAttribute('m-bdt')||undefined,yaw[i].getAttribute('m-bdr')||undefined,yaw[i].getAttribute('m-bdb')||undefined,yaw[i].getAttribute('m-bdl')||undefined,yaw[i].getAttribute('m-ra')||undefined,yaw[i].getAttribute('m-zi')||undefined,yaw[i].getAttribute('m-space')||undefined);
            }
        }
    })
}(window));
/* Define your website's primary and secondary colors as well as secondary colors */
window.yawColor = function(main,second,third){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.append('.yawmain,.hv-yawmain:hover{color: ' + main + '}.bg-yawmain,.hv-bg-yawmain:hover{background-color:' + main + '}.yawsec,.hv-yawsec:hover{color: ' + second + '}.bg-yawsec,.hv-bg-yawsec:hover{background-color:' + second + '}.yawthr,.hv-yawthr:hover{color: ' + third + '}.bg-yawthr,.hv-bg-yawthr:hover{background-color:' + third + '}');
    document.querySelector('head').appendChild(style);
}