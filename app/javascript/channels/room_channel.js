import consumer from "./consumer"
import random_color from 'random_color'
consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("Yay, we are connected!")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },
  
  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#messages_list').append('<li class="msg">' + data.timestamp + ':  ' + data.content + '</li>')
    if (data.contains_mconf){
      $(".msg").last().css("color", random_color())
      $(".msg").last().css("font-weight", "bold")
    }
    $('#message_content').val('')
    console.log(data)
  }
});
