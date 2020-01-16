import consumer from "./consumer"
import append_msg from 'append_msg'
consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("Yay, we are connected!")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },
  
  received(data) {
    // Called when there's incoming data on the websocket for this channel
    append_msg(data)
  }
});
