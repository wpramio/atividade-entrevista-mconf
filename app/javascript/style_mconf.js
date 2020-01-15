import random_color from 'random_color'

$(document).on('turbolinks:load', function(){
    $(".msg:contains('Mconf')").each(function(){
        $(this).css("color", random_color())
        $(this).css("font-weight", "bold")
    })
})