window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset;

    if (document.getElementById('hero').getBoundingClientRect().bottom < 0) {
        document.getElementById('header').classList.add('active');
    } else {
        document.getElementById('header').classList.remove('active');   
    }


    const targetElement = document.querySelectorAll(".animationTarget");
    const showElements = document.querySelectorAll(".animation-target");
    

    // スクロールするときにjavascriptを動かす処理
    for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top 
    + targetElement[i].clientHeight * 0.6;
    // window.innerHeightは現在のブラウザの高さを
    
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
         } else {
            targetElement[i].classList.remove("show");
         }
    }
    
    for (let i = 0; i < showElements.length; i++) {
        const getElementDistanceA = showElements[i].getBoundingClientRect().top;

        if (window.innerHeight > getElementDistanceA) {
            showElements[i].classList.add("show");
        } else {
            showElements[i].classList.remove("show");
        }
    }

});

    // htmlの内容を全て読み込んだら何かしらの機能を実行すると言う意味
    document.addEventListener('DOMContentLoaded', function() {
    // htmlのmenuButtonからidを取得
    // addEventListenerでクリックしたら機能を実行する
    document.getElementById('menuButton').addEventListener('click', function() {
    // activeに切り替え
        this.classList.toggle('active');
        document.getElementById('nav').classList.toggle('active');
        document.getElementById('mask').classList.toggle('active');

        
    })
    document.getElementById("modalOpen").addEventListener("click",function() {
        document.getElementById("modal").classList.add("active");
        document.getElementById("modalMask").classList.add("active");
    
    })
    document.getElementById("modalOpen2").addEventListener("click",function() {
        document.getElementById("modal2").classList.add("active");
        document.getElementById("modalMask").classList.add("active");
    
    })
    document.getElementById("modalOpen3").addEventListener("click",function() {
        document.getElementById("modal3").classList.add("active");
        document.getElementById("modalMask").classList.add("active");
    
    })
    document.getElementById("modalClose").addEventListener("click",function() {
        document.getElementById("modal").classList.remove("active");
        document.getElementById("modalMask").classList.remove("active");

    })
    
 });







