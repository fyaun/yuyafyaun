
window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset;

    if (document.getElementById('hero').getBoundingClientRect().bottom < 0) {
        document.getElementById('header').classList.add('active');
    } else {
        document.getElementById('header').classList.remove('active');   
    }

    // querySelectorはcssのセレクタの指定・ALLはセレクタの要素全てを指定
    // liをALLで指定したら全てのli要素を指定することになる
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
window.addEventListener('DOMContentLoaded', function() {
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

    //送信ボタンの要素を取得
    const submit = document.querySelector('.submit');

    //送信ボタンの要素にクリックイベントを設定する
    //eはeventの略
    //preventDefault()はデフォルトアクションをキャンセルするメソッド
    //上記を書かなかった場合バリデーションを行う前に指定したURLに送信されてしまう！
    submit.addEventListener('click', (e) =>{
        //デフォルトアクションをキャンセル
        e.preventDefault();

        //名前の入力チェック
        // フォームの要素を取得
        const name = document.querySelector('#name');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('.err-msg-name');

        if (!name.value) {
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'お名前が入力されていません';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            return;
        } else {
            // エラーメッセージのテキストに空白文字を代入
            errMsgName.textContent = '';
            // クラスを削除
            name.classList.remove('input-invalid');
            //何もなければ送信する
            
        }

        //メアドの入力チェック
        //フォームの要素を取得
        const email = document.querySelector('#email');
        //エラーメッセージを表示させる要素を取得
        const errMsgEmail = document.querySelector('.err-msg-email');

        if (!email.value) {
            //クラスを追加（エラーメッセージを表示する）
            errMsgEmail.classList.add('form-invalid');
            //エラーメッセージのテキスト
            errMsgEmail.textContent = 'メールアドレスがありません';
            // クラスを追加（フォームの枠線を赤くする）
            email.classList.add('input-invalid');
            // 後続の処理を止める
            return;
        } else if (!email.value.match(/.+@.+\..+/)){
            //クラスを追加（エラーメッセージを表示する）
            errMsgEmail.classList.add('form-invalid');
            //エラーメッセージのテキスト
            errMsgEmail.textContent = 'メールアドレスが正しくありません';
            // クラスを追加（フォームの枠線を赤くする）
            email.classList.add('input-invalid');
            // 後続の処理を止める
            return;
        } else {
            //エラーメッセージのテキスト
            errMsgEmail.textContent = '';
            //クラスを削除
            email.classList.remove('input-invalid');
        }

        //　コメントの入力チェック
        // フォームの要素を取得
        const content = document.querySelector('#content');
        // エラーメッセージを表示させる要素を取得
        const errMsgContent = document.querySelector('.err-msg-content');

        if (!content.value) {
            //クラスを追加（エラーメッセージを表示する）
            errMsgContent.classList.add('form-invalid');
            //エラーメッセージのテキスト
            errMsgContent.textContent = 'コメントされていません';
            // クラスを追加（フォームの枠線を赤くする）
            content.classList.add('input-invalid');
            //後続の処理を止める
            return;
        } else if (content.value.length > 40) {
            //クラスを追加（エラーメッセージを表示する）
            errMsgContent.classList.add('form-invalid');
            //エラーメッセージのテキスト
            errMsgContent.textContent = '40文字以内でコメントしてください';
            // クラスを追加（フォームの枠線を赤くする）
            content.classList.add('input-invalid');
            //後続の処理を止める
            return;
        } else {
            // エラーメッセージのテキスト
            errMsgContent.textContent = '';
            //クラス削除
            content.classList.remove('input-invalid');
        }

       alert('送信しました');

    })
    
 });

const mySwiper = new Swiper('.swiper-container', {

    // 画像の残像を消す方法
    fadeEffect: {
        crossFade: true
    },


    // Optional parameters
     loop: true,
    // スピード調整
    speed: 2000,
    // 一度に表示するスライド画像の枚数
    slidesPerView: 1,
    // 現在のスライドを真ん中に表示
    centeredSlides: true,

    // 2秒　オートに
    autoplay: {
        delay: 3000
    },

     // スワイパーレスポンシブ対応
    breakpoints: {
        769: {
          slidesPerView: '3',
        },
      },

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
    },

  
  });




