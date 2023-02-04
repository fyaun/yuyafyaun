
$(function() {

  // WebStorageAPIを使用。
  // ブラウザにデータを保存しておくことができる仕組みです。

  jQuery(function () {
    var webStorage = function () {
      //(sessionStorage)ページのセッション中の間、データを保存します。 ブラウザを閉じるまで
      // sessionStorage.getItem('key');
      if (sessionStorage.getItem('access')) {
        //2回目以降アクセス時の処理
      
        $(".loading-box").addClass('is-active');
        
      } else {
        //初回アクセス時の処理
        // sessionStorage.setItem('key', 'value');
        sessionStorage.setItem('access', 0);

          // ローディングアニメーション
        function loaded() {
          document.getElementById("loading").classList.remove("active");

              //扉が開くように
          $(".line").animate({"width" : "100%"},3000,function() {
              $(".line").css("right",0)

              $(".line").animate({"width" : "0%"},function() {
                  $(".right").animate({"left" :"100%"});
                  $(".left").animate({"left":"-100%"});
          
              });

              $(".loading").addClass("is-done");


                // wowの初期化を設定する
                new WOW().init();
          })

        
    }

      setTimeout(loaded, 5000)


      }
    }
    webStorage();

    

  });


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: "fade", //フェードのエフェクト
    // 切り替える時にふわっと表示
    speed: 2000,
    autoplay: {
      delay: 5000, //４秒後に次の画像へ
      disableOnInteraction: false //ユーザー操作後に自動再生を再開する
    },
  
  
  });


  // wowの初期化を設定する
  new WOW().init();


  // 自動で画像が流れるアニメーション
    const swiper_container = new Swiper('.swiper-container', {
        // Optional parameters
        speed: 8000,
        slidesPerView: '1.2',
        loop: true,
        allowTouchMove: false, // スワイプ操作をできないようにする
        autoplay: {
          delay: 0,　// 1にすることで流れ続けるようになる
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: '2.5',
          }
        }
      
  
      });

//header

   // header スクロールしたらheaderに色をつける
  $(window).on('scroll', function() {
    if( $(this).scrollTop() > $('#js-top').outerHeight() ) {
      $('body').addClass('add-scrolled');
    } else {
      $('body').removeClass('add-scrolled');
    }
  });


    // ハンバーガー
    $('.drawer-icon').on('click', function(e) {
      e.preventDefault();

      $('.drawer-icon').toggleClass('is-active');
      $('.drawer-contents').toggleClass('is-active');
      $('.drawer-background').toggleClass('is-active');
      $('.drawer-bg').toggleClass('is-active');

      return false;
    });

    // 下線をつける
    $('.header-nav li a').on('click', function() {
      $('.header-nav li a').removeClass('is-action');
      $(this).addClass('is-action');
    });



//header

  // ページネーション
  $('.page-number').on('click', function() {
      $('.page-number').removeClass('is-action');
      $(this).addClass('is-action');
  });

  //トップページに戻る

  // スムーススクロール
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });

  
// ページ内リンク
  $('a[href^="#"]').on('click', function(){

    //headerの高さを取得
    let header = $('.header').innerHeight();
    // idを取得
    let id = $(this).attr('href');
    // 位置を取得
    let position = $(id).offset().top - header;

      $("html, body").animate({
          scrollTop: position
      }, 500);
  });

//トップページに戻る



//スクロールするとふわっと表示 fadeIn

//スクロールのたびに実行する
  $(window).scroll(function () {

    $('.fadein').each(function () {

      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
       if (scroll > targetElement - windowHeight + 100) {
         $(this).addClass('scrollin');
       }
    })
    $('.fadein_bottom').each(function () {

      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
       if (scroll > targetElement - windowHeight + 100) {
         $(this).addClass('scrollin');
       }
    })

    $('.fadein_left').each(function () {

      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
       if (scroll > targetElement - windowHeight + 100) {
         $(this).addClass('scrollin');
       }
    })

    $('.fadein_right').each(function () {

      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
       if (scroll > targetElement - windowHeight + 100) {
         $(this).addClass('scrollin');
       }
    })

  });




  //アコーディオン
$('.faq-item-question').on('click', function(){
  $(this).next().slideToggle();
  $(this).children('.faq-box-icon').toggleClass('is-open');
});






});

