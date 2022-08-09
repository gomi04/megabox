//배너 이미지 슬라이드
var mySwiper = new Swiper ('.swiper-container',{
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
    },
    pagination : {
        el : '.swiper-pagination',
        type : 'bullets',
    },
    autoplay: {
        delay : 4000,
    },
});

//영화차트 이미지 슬라이드
var mySwiper = new Swiper('.swiper-container2', {
    slidesPerView : 4,
    spaceBetween: 24,
});


//영화 차트 탭 메뉴
var movBtn = $(".movie_title > ul > li");
var movCont = $(".movie_chart > div");

movCont.hide().eq(0).show();

movBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    movBtn.removeClass("active");
    target.addClass("active");
    movCont.css("display","none");
    movCont.eq(index).css("display","block");
});
