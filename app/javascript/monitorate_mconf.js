var original_bgcolor = true

// input: evento gerado por form fields (<input>, <select> e <textarea>)
$(document).on('turbolinks:load', function(){
    $( "#message_content" ).on("input",function(){
        var val = $("#message_content").val();
        const pattern = /mconf/i;
        if ( val.search(pattern) > -1 ) {
            if (original_bgcolor) {
                var random_number = Math.round(Math.random()*6)      
                $("body").removeClass("whitebg").addClass("bgcolor-"+random_number)
                original_bgcolor = false
            }
        }
        else if (!original_bgcolor){
            $("body").removeClass().addClass("whitebg")
            original_bgcolor = true
        }     
    })
})

$(document).on('turbolinks:load', function(){
    $("#message_form").on("submit", function(){
        if (!original_bgcolor){
            $("body").removeClass().addClass("whitebg")
            original_bgcolor = true
        }
    })
})

