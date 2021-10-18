$('.btn-see-menu').on('click', function(){
    $('.left-page').addClass ('left-page2')

    setTimeout(function(){

        $('.right-page').addClass ('right-page2')
    },400)
   
})

$('.btn-close').on('click', function(){
     $('.right-page').removeClass ('right-page2')

    setTimeout(function(){
        $('.left-page').removeClass ('left-page2')
    },600)
   
})