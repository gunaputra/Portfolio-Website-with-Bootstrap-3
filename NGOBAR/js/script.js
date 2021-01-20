// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll dengan animasi
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    //menghilangkan href
    e.preventDefault();

   });


//parallax
//about

$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
 var wScroll = $(this).scrollTop();
//atur pergerakan sumbu x dan y (horizontal dan vertical)

//jumbotron
$('.jumbotron img').css({
    'transform' : 'translate(0px,'+ wScroll/4 +'%)'
});

$('.jumbotron h1').css({
    'transform' : 'translate(0px,'+ wScroll/2 +'%)'
});

$('.jumbotron p').css({
    'transform' : 'translate(0px,'+ wScroll/1 +'%)'
});

//portfolio menampilkan gambar satu per satu sesuai waktu
if ( wScroll > $('.portfolio').offset().top - 200){
    $('.portfolio .thumbnail').each(function(i){
        setTimeout(function(){
            $('.portfolio .thumbnail').eq(i).addClass('muncul');
        }, 300 * (i + 1));
    });
}

});