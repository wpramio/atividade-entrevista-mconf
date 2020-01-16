import random_color from 'random_color'
export default function append_msg(data){
    $('#messages_list').append('<li class="msg">' + data.timestamp + ':  ' + data.content + '</li>')
    if (data.contains_mconf){
        $(".msg").last().css("color", random_color())
        $(".msg").last().css("font-weight", "bold")
    }
    $('#message_content').val('')
    console.log(data)
}