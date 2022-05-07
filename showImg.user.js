// ==UserScript==
// @name         ShowImageForReddit
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Images are always fully shown. No annoying see full image button!
// @author       hyperstown
// @match        https://www.reddit.com/*
// ==/UserScript==

(function() {
    window.addEventListener('scroll', throttle(callback, 300));

    function callback() {
        let buttons = document.getElementsByClassName('_3hUbl08LBz2mbXjy0iYhOS');
        let wrapper1 = document.getElementsByClassName('_3Oa0THmZ3f5iZXAQ0hBJ0k');
        let wrapper2 = document.getElementsByClassName('m3aNC6yp8RrNM_-a0rrfa');

        for(let i = 0; i < buttons.length; i++){
            buttons[i].style.display = 'none';
        }

        for(let i = 0; i < wrapper1.length; i++){
            wrapper1[i].style.maxHeight = "unset";
        }

        for(let i = 0; i < wrapper2.length; i++){
            let height = wrapper2[i].querySelector('img')?.height || null;
            if(height){
                wrapper2[i].style.maxHeight = height + "px";
            }
            else {
                wrapper2[i].style.maxHeight = "unset";
            }
        }
    }

    function throttle(fn, wait) {
        var time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        }
    }
})();