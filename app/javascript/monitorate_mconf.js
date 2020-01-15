const pattern = /mconf/i;
var original_bgcolor = true

import random_color from 'random_color'

// input: evento gerado por form fields (<input>, <select> e <textarea>)
$(document).on('turbolinks:load', function(){
    $( "#message_content" ).on("input",function(){
        var str = $("#message_content").val();
        if ( str.search(pattern) > -1 ) {
            if (original_bgcolor) {
                $("body").css( "background-color", random_color())
                original_bgcolor = false
            }
        }
        else {
            $("body").css("background-color", "white")
            original_bgcolor = true
        }     
    })
})

$(document).on('turbolinks:load', function(){
    $("#message_form").on("submit", function(){
            $("body").css( "background-color", "white" )
            original_bgcolor = true
    })
})

