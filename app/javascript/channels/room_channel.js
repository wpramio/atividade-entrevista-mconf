import consumer from "./consumer"
var id_number = 0
consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("Yay, we are connected!")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },
  
  received(data) {
    // Called when there's incoming data on the websocket for this channel
    ++id_number;
    $('#messages_list').append('<li id="msg_' + id_number + '">' + data.timestamp + ':  ' + data.content + '</li>')
    $('#message_content').val('')
    console.log(data)
  }
});
