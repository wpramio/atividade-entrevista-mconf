const random_colors = ["#481E9D", "#8D74C0", "#CA4B57", "#2B2D42", "#1C77C3", "#81B29A", "#E98039"];
const pattern = /mconf/i;

var original_bgcolor = true

// input: evento gerado por form fields (<input>, <select> e <textarea>)
$(document).on('turbolinks:load', function(){
    $( "#message_content" ).on("input",function(){
        var str = $("#message_content").val();
        if ( str.search(pattern) > -1 ) {
            if (original_bgcolor) {
                var random_number = Math.round(Math.random()*(random_colors.length-1))
                $("body").css( "background-color", random_colors[random_number] )
                original_bgcolor = false
            }
        }
        else {
            $("body").css( "background-color", "white" )
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

