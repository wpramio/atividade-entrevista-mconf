
$(document).on('turbolinks:load', function(){
    $(".msg:contains('Mconf')").each(function(){
        var random_number = Math.round(Math.random()*6)   
        $(this).addClass("color-"+random_number+" bold")
    })
})