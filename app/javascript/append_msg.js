export default function append_msg(data){
    $('#messages_list').append('<li class="msg">' + data.timestamp + ':  ' + data.content + '</li>')
    if (data.contains_mconf){
        var random_number = Math.round(Math.random()*6)
        $(".msg").last().addClass("color-"+random_number+" bold")
    }
    $('#message_content').val('')
    console.log(data)
}