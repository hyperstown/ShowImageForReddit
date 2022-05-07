// ==UserScript==
// @name         ShowImageForReddit
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Images are always fully shown. No annoying see full image button!
// @author       hyperstown
// @match        https://www.reddit.com/*
// ==/UserScript==

(function() {
    window.addEventListener('scroll', throttle(callback, 300));

    function callback() {
        let card = document.getElementsByClassName('_1oQyIsiPHYt6nx7VOmd1sz');
        // _3-miAEojrCvx_4FQ8x3P-s

        for(let i = 0; i < card.length; i++){
            let button = card[i].querySelector('._3hUbl08LBz2mbXjy0iYhOS')
            if(button){
                button.style.display = 'none'
                let wrapper1 = card[i].querySelector('._3Oa0THmZ3f5iZXAQ0hBJ0k')
                let wrapper2 = card[i].querySelector('.m3aNC6yp8RrNM_-a0rrfa');
                let navButtons = card[i].querySelector('.STit0dLageRsa2yR4te_b')

                if(wrapper1){
                    wrapper1.style.maxHeight = "unset";
                }

                if(wrapper2){
                    let height = wrapper2.querySelector('img')?.height || null;
                    if(height){
                        wrapper2.style.maxHeight = height + "px";
                        card[i].style.paddingRight = "40px";
                        card[i].style.height = (height + 115) + "px";
                        navButtons.style.height = height + "px";
                    }
                    else {
                        wrapper2.style.maxHeight = "unset";
                    }
                }
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