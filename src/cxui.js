/**
 * CXUI v0.1.0 beta
 * https://ui.chinsea.net
 *
 * Author: Yawee
 * https://yaw.ee
 *
 * Copyright (c) 2017-2020 Yawee,zhou@yaw.ee
 * Released under the MIT License.
 * https://opensource.org/licenses/MIT
 *
 * Start Date: 2017.09.18
 * Last Update : 2018.04.01 16:52
 */

;(function(window, undefined){'use strict';
    window.addEventListener('load',function(){
        var projectName = 'CXUI';
        var version = 'v0.1.0b';
        var cardMedia = document.querySelectorAll('.card-media');
        for (let yawee = 0; yawee < cardMedia.length; yawee++) {
            cardMedia[yawee].style.height = cardMedia[yawee].clientWidth / 16 * 9 + 'px';
        }
        var cxuiURL = 'https://ui.chinsea.net';
        var author = 'Chinsea';
        window.console.log("%c " + projectName + " " + version + " by " + author + " %c " + cxuiURL + " ", "background:#2196f3;color:#fff;padding:2px;border-radius:20px;","background:#fff;padding:2px;");
    },true);
})(window);
