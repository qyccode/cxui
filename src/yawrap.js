/**
 * Yawrap v0.3.1
 * http://yawrap.yawzhou.com
 *
 * Author: YawZhou
 * https://www.yawzhou.com
 *
 * Copyright (c) 2018 YawZhou,admin@yawzhou.com
 * Released under the MIT License.
 * https://opensource.org/licenses/MIT
 *
 * Start Date: 2017.09.18
 * Last Update : 2018.03.09 17:10
 */
;(function(window, undefined){'use strict';
    window.addEventListener("load",function(){
        console.log("%c Yawrap v0.3.1 By YawZhou && FanyXu http://yawrap.yawzhou.com ","background:#2196f3;color:#fff;padding:2px;border-radius:20px;");
        document.body.style.display = 'block';
        var yaw = document.querySelectorAll('*');
        for (var i = 0; i < yaw.length; i++) {
            // noinspection JSAnnotator
            function yawrap(w, h, maw, mah, miw, mih, lh, fs, cl, bg, ti, t, r, b, l, mg, mgt, mgr, mgb, mgl, pd, pdt, pdr, pdb, pdl, bd, bdt, bdr, bdb, bdl, br, zi, ls) {
                yaw[i].style.width = isNaN(w) ? w : w + 'px';
                yaw[i].style.height = isNaN(h) ? h : h + 'px';
                yaw[i].style.maxWidth = isNaN(maw) ? maw : maw + 'px';
                yaw[i].style.maxHeight = isNaN(mah) ? mah : mah + 'px';
                yaw[i].style.minWidth = isNaN(miw) ? miw : miw + 'px';
                yaw[i].style.minHeight = isNaN(mih) ? mih : mih + 'px';
                yaw[i].style.lineHeight = lh;
                yaw[i].style.fontSize = isNaN(fs) ? fs : fs + 'px';
                yaw[i].style.color = cl;
                yaw[i].style.background = bg;
                yaw[i].style.textIndent = isNaN(ti) ? ti : ti + 'px';
                yaw[i].style.top = isNaN(t) ? t : t + 'px';
                yaw[i].style.right = isNaN(r) ? r : r + 'px';
                yaw[i].style.bottom = isNaN(b) ? b : b + 'px';
                yaw[i].style.left = isNaN(l) ? l : l + 'px';
                yaw[i].style.margin = isNaN(mg) ? mg : mg + 'px';
                yaw[i].style.marginTop = isNaN(mgt) ? mgt : mgt + 'px';
                yaw[i].style.marginRight = isNaN(mgr) ? mgr : mgr + 'px';
                yaw[i].style.marginBottom = isNaN(mgb) ? mgb : mgb + 'px';
                yaw[i].style.marginLeft = isNaN(mgl) ? mgl : mgl + 'px';
                yaw[i].style.padding = isNaN(pd) ? pd : pd + 'px';
                yaw[i].style.paddingTop = isNaN(pdt) ? pdt : pdt + 'px';
                yaw[i].style.paddingRight = isNaN(pdr) ? pdr : pdr + 'px';
                yaw[i].style.paddingBottom = isNaN(pdb) ? pdb : pdb + 'px';
                yaw[i].style.paddingLeft = isNaN(pdl) ? pdl : pdl + 'px';
                yaw[i].style.border = bd;
                yaw[i].style.borderTop = bdt;
                yaw[i].style.borderRight = bdr;
                yaw[i].style.borderBottom = bdb;
                yaw[i].style.borderLeft = bdl;
                yaw[i].style.borderRadius = isNaN(br) ? br : br + 'px';
                yaw[i].style.zIndex = zi;
                yaw[i].style.letterSpacing = isNaN(ls) ? ls : ls + 'px';
            }
            yawrap(yaw[i].getAttribute('w')||undefined,yaw[i].getAttribute('h')||undefined,yaw[i].getAttribute('maw')||undefined,yaw[i].getAttribute('mah')||undefined,yaw[i].getAttribute('miw')||undefined,yaw[i].getAttribute('mih')||undefined,yaw[i].getAttribute('lh')||undefined,yaw[i].getAttribute('fs')||undefined,yaw[i].getAttribute('cl')||undefined,yaw[i].getAttribute('bg')||undefined,yaw[i].getAttribute('ti')||undefined,yaw[i].getAttribute('t')||undefined,yaw[i].getAttribute('r')||undefined,yaw[i].getAttribute('b')||undefined,yaw[i].getAttribute('l')||undefined,yaw[i].getAttribute('mg')||undefined,yaw[i].getAttribute('mgt')||undefined,yaw[i].getAttribute('mgr')||undefined,yaw[i].getAttribute('mgb')||undefined,yaw[i].getAttribute('mgl')||undefined,yaw[i].getAttribute('pd')||undefined,yaw[i].getAttribute('pdt')||undefined,yaw[i].getAttribute('pdr')||undefined,yaw[i].getAttribute('pdb')||undefined,yaw[i].getAttribute('pdl')||undefined,yaw[i].getAttribute('bd')||undefined,yaw[i].getAttribute('bdt')||undefined,yaw[i].getAttribute('bdr')||undefined,yaw[i].getAttribute('bdb')||undefined,yaw[i].getAttribute('bdl')||undefined,yaw[i].getAttribute('br')||undefined,yaw[i].getAttribute('zi')||undefined,yaw[i].getAttribute('ls')||undefined);
            yaw[i].removeAttribute('w');yaw[i].removeAttribute('h');yaw[i].removeAttribute('maw');yaw[i].removeAttribute('mah');yaw[i].removeAttribute('miw');yaw[i].removeAttribute('mih');yaw[i].removeAttribute('lh');yaw[i].removeAttribute('fs');yaw[i].removeAttribute('cl');yaw[i].removeAttribute('bg');yaw[i].removeAttribute('ti');yaw[i].removeAttribute('t');yaw[i].removeAttribute('r');yaw[i].removeAttribute('b');yaw[i].removeAttribute('l');yaw[i].removeAttribute('mg');yaw[i].removeAttribute('mgt');yaw[i].removeAttribute('mgr');yaw[i].removeAttribute('mgb');yaw[i].removeAttribute('mgl');yaw[i].removeAttribute('pd');yaw[i].removeAttribute('pdt');yaw[i].removeAttribute('pdr');yaw[i].removeAttribute('pdb');yaw[i].removeAttribute('pdl');yaw[i].removeAttribute('bd');yaw[i].removeAttribute('bdt');yaw[i].removeAttribute('bdr');yaw[i].removeAttribute('bdb');yaw[i].removeAttribute('bdl');yaw[i].removeAttribute('br');yaw[i].removeAttribute('zi');yaw[i].removeAttribute('ls');
            /* Resolve the page as soon as the problem of opening the display is out of order
               Replace the text */
            var yawText = yaw[i].getAttribute('text');
            if (yawText === '') {
                yaw[i].innerHTML = '<p style="color:red;font-size:12px"><strong>Yawrap提示：</strong>text属性值不可以为空</p>';
            }else if (yawText != null) {
                yaw[i].innerHTML = yawText;
                yaw[i].removeAttribute('text');
            }
            /* Replace the picture */
            var yawImg = yaw[i].getAttribute('yawsrc');
            if (yawImg != null){
                yaw[i].setAttribute('src',yawImg);
                yaw[i].removeAttribute('yawsec');
            }
            if (document.body.clientWidth > 1180) {
                yawrap(yaw[i].getAttribute('pc-w')||undefined,yaw[i].getAttribute('pc-h')||undefined,yaw[i].getAttribute('pc-maw')||undefined,yaw[i].getAttribute('pc-mah')||undefined,yaw[i].getAttribute('pc-miw')||undefined,yaw[i].getAttribute('pc-mih')||undefined,yaw[i].getAttribute('pc-lh')||undefined,yaw[i].getAttribute('pc-fs')||undefined,yaw[i].getAttribute('pc-cl')||undefined,yaw[i].getAttribute('pc-bg')||undefined,yaw[i].getAttribute('pc-ti')||undefined,yaw[i].getAttribute('pc-t')||undefined,yaw[i].getAttribute('pc-r')||undefined,yaw[i].getAttribute('pc-b')||undefined,yaw[i].getAttribute('pc-l')||undefined,yaw[i].getAttribute('pc-mg')||undefined,yaw[i].getAttribute('pc-mgt')||undefined,yaw[i].getAttribute('pc-mgr')||undefined,yaw[i].getAttribute('pc-mgb')||undefined,yaw[i].getAttribute('pc-mgl')||undefined,yaw[i].getAttribute('pc-pd')||undefined,yaw[i].getAttribute('pc-pdt')||undefined,yaw[i].getAttribute('pc-pdr')||undefined,yaw[i].getAttribute('pc-pdb')||undefined,yaw[i].getAttribute('pc-pdl')||undefined,yaw[i].getAttribute('pc-bd')||undefined,yaw[i].getAttribute('pc-bdt')||undefined,yaw[i].getAttribute('pc-bdr')||undefined,yaw[i].getAttribute('pc-bdb')||undefined,yaw[i].getAttribute('pc-bdl')||undefined,yaw[i].getAttribute('pc-br')||undefined,yaw[i].getAttribute('pc-zi')||undefined,yaw[i].getAttribute('pc-ls')||undefined);
                yaw[i].removeAttribute('pc-w');yaw[i].removeAttribute('pc-h');yaw[i].removeAttribute('pc-maw');yaw[i].removeAttribute('pc-mah');yaw[i].removeAttribute('pc-miw');yaw[i].removeAttribute('pc-mih');yaw[i].removeAttribute('pc-lh');yaw[i].removeAttribute('pc-fs');yaw[i].removeAttribute('pc-cl');yaw[i].removeAttribute('pc-bg');yaw[i].removeAttribute('pc-ti');yaw[i].removeAttribute('pc-t');yaw[i].removeAttribute('pc-r');yaw[i].removeAttribute('pc-b');yaw[i].removeAttribute('pc-l');yaw[i].removeAttribute('pc-mg');yaw[i].removeAttribute('pc-mgt');yaw[i].removeAttribute('pc-mgr');yaw[i].removeAttribute('pc-mgb');yaw[i].removeAttribute('pc-mgl');yaw[i].removeAttribute('pc-pd');yaw[i].removeAttribute('pc-pdt');yaw[i].removeAttribute('pc-pdr');yaw[i].removeAttribute('pc-pdb');yaw[i].removeAttribute('pc-pdl');yaw[i].removeAttribute('pc-bd');yaw[i].removeAttribute('pc-bdt');yaw[i].removeAttribute('pc-bdr');yaw[i].removeAttribute('pc-bdb');yaw[i].removeAttribute('pc-bdl');yaw[i].removeAttribute('pc-br');yaw[i].removeAttribute('pc-zi');yaw[i].removeAttribute('pc-ls');
            }else if (document.body.clientWidth > 640 && document.body.clientWidth < 1180) {
                yawrap(yaw[i].getAttribute('pad-w')||undefined,yaw[i].getAttribute('pad-h')||undefined,yaw[i].getAttribute('pad-maw')||undefined,yaw[i].getAttribute('pad-mah')||undefined,yaw[i].getAttribute('pad-miw')||undefined,yaw[i].getAttribute('pad-mih')||undefined,yaw[i].getAttribute('pad-lh')||undefined,yaw[i].getAttribute('pad-fs')||undefined,yaw[i].getAttribute('pad-cl')||undefined,yaw[i].getAttribute('pad-bg')||undefined,yaw[i].getAttribute('pad-ti')||undefined,yaw[i].getAttribute('pad-t')||undefined,yaw[i].getAttribute('pad-r')||undefined,yaw[i].getAttribute('pad-b')||undefined,yaw[i].getAttribute('pad-l')||undefined,yaw[i].getAttribute('pad-mg')||undefined,yaw[i].getAttribute('pad-mgt')||undefined,yaw[i].getAttribute('pad-mgr')||undefined,yaw[i].getAttribute('pad-mgb')||undefined,yaw[i].getAttribute('pad-mgl')||undefined,yaw[i].getAttribute('pad-pd')||undefined,yaw[i].getAttribute('pad-pdt')||undefined,yaw[i].getAttribute('pad-pdr')||undefined,yaw[i].getAttribute('pad-pdb')||undefined,yaw[i].getAttribute('pad-pdl')||undefined,yaw[i].getAttribute('pad-bd')||undefined,yaw[i].getAttribute('pad-bdt')||undefined,yaw[i].getAttribute('pad-bdr')||undefined,yaw[i].getAttribute('pad-bdb')||undefined,yaw[i].getAttribute('pad-bdl')||undefined,yaw[i].getAttribute('pad-br')||undefined,yaw[i].getAttribute('pad-zi')||undefined,yaw[i].getAttribute('pad-ls')||undefined);
                yaw[i].removeAttribute('pad-w');yaw[i].removeAttribute('pad-h');yaw[i].removeAttribute('pad-maw');yaw[i].removeAttribute('pad-mah');yaw[i].removeAttribute('pad-miw');yaw[i].removeAttribute('pad-mih');yaw[i].removeAttribute('pad-lh');yaw[i].removeAttribute('pad-fs');yaw[i].removeAttribute('pad-cl');yaw[i].removeAttribute('pad-bg');yaw[i].removeAttribute('pad-ti');yaw[i].removeAttribute('pad-t');yaw[i].removeAttribute('pad-r');yaw[i].removeAttribute('pad-b');yaw[i].removeAttribute('pad-l');yaw[i].removeAttribute('pad-mg');yaw[i].removeAttribute('pad-mgt');yaw[i].removeAttribute('pad-mgr');yaw[i].removeAttribute('pad-mgb');yaw[i].removeAttribute('pad-mgl');yaw[i].removeAttribute('pad-pd');yaw[i].removeAttribute('pad-pdt');yaw[i].removeAttribute('pad-pdr');yaw[i].removeAttribute('pad-pdb');yaw[i].removeAttribute('pad-pdl');yaw[i].removeAttribute('pad-bd');yaw[i].removeAttribute('pad-bdt');yaw[i].removeAttribute('pad-bdr');yaw[i].removeAttribute('pad-bdb');yaw[i].removeAttribute('pad-bdl');yaw[i].removeAttribute('pad-br');yaw[i].removeAttribute('pad-zi');yaw[i].removeAttribute('pad-ls');
            }else if (document.body.clientWidth < 640) {
                yawrap(yaw[i].getAttribute('m-w')||undefined,yaw[i].getAttribute('m-h')||undefined,yaw[i].getAttribute('m-maw')||undefined,yaw[i].getAttribute('m-mah')||undefined,yaw[i].getAttribute('m-miw')||undefined,yaw[i].getAttribute('m-mih')||undefined,yaw[i].getAttribute('m-lh')||undefined,yaw[i].getAttribute('m-fs')||undefined,yaw[i].getAttribute('m-cl')||undefined,yaw[i].getAttribute('m-bg')||undefined,yaw[i].getAttribute('m-ti')||undefined,yaw[i].getAttribute('m-t')||undefined,yaw[i].getAttribute('m-r')||undefined,yaw[i].getAttribute('m-b')||undefined,yaw[i].getAttribute('m-l')||undefined,yaw[i].getAttribute('m-mg')||undefined,yaw[i].getAttribute('m-mgt')||undefined,yaw[i].getAttribute('m-mgr')||undefined,yaw[i].getAttribute('m-mgb')||undefined,yaw[i].getAttribute('m-mgl')||undefined,yaw[i].getAttribute('m-pd')||undefined,yaw[i].getAttribute('m-pdt')||undefined,yaw[i].getAttribute('m-pdr')||undefined,yaw[i].getAttribute('m-pdb')||undefined,yaw[i].getAttribute('m-pdl')||undefined,yaw[i].getAttribute('m-bd')||undefined,yaw[i].getAttribute('m-bdt')||undefined,yaw[i].getAttribute('m-bdr')||undefined,yaw[i].getAttribute('m-bdb')||undefined,yaw[i].getAttribute('m-bdl')||undefined,yaw[i].getAttribute('m-br')||undefined,yaw[i].getAttribute('m-zi')||undefined,yaw[i].getAttribute('m-ls')||undefined);
                yaw[i].removeAttribute('m-w');yaw[i].removeAttribute('m-h');yaw[i].removeAttribute('m-maw');yaw[i].removeAttribute('m-mah');yaw[i].removeAttribute('m-miw');yaw[i].removeAttribute('m-mih');yaw[i].removeAttribute('m-lh');yaw[i].removeAttribute('m-fs');yaw[i].removeAttribute('m-cl');yaw[i].removeAttribute('m-bg');yaw[i].removeAttribute('m-ti');yaw[i].removeAttribute('m-t');yaw[i].removeAttribute('m-r');yaw[i].removeAttribute('m-b');yaw[i].removeAttribute('m-l');yaw[i].removeAttribute('m-mg');yaw[i].removeAttribute('m-mgt');yaw[i].removeAttribute('m-mgr');yaw[i].removeAttribute('m-mgb');yaw[i].removeAttribute('m-mgl');yaw[i].removeAttribute('m-pd');yaw[i].removeAttribute('m-pdt');yaw[i].removeAttribute('m-pdr');yaw[i].removeAttribute('m-pdb');yaw[i].removeAttribute('m-pdl');yaw[i].removeAttribute('m-bd');yaw[i].removeAttribute('m-bdt');yaw[i].removeAttribute('m-bdr');yaw[i].removeAttribute('m-bdb');yaw[i].removeAttribute('m-bdl');yaw[i].removeAttribute('m-br');yaw[i].removeAttribute('m-zi');yaw[i].removeAttribute('m-ls');
            }
        }
    },true);
})(window);
//Define your website's primary and secondary colors as well as secondary colors
window.yawColor = function(main,second,third){
    var yawStyle = document.createElement('style');
    yawStyle.type = 'text/css';
    yawStyle.append('.yawmain,.hv-yawmain:hover{color: ' + main + '}.bg-yawmain,.hv-bg-yawmain:hover{background-color:' + main + '}.yawaux,.hv-yawaux:hover{color: ' + second + '}.bg-yawaux,.hv-bg-yawaux:hover{background-color:' + second + '}.yawspa,.hv-yawspa:hover{color: ' + third + '}.bg-yawspa,.hv-bg-yawspa:hover{background-color:' + third + '}');
    document.querySelector('head').appendChild(yawStyle);
};