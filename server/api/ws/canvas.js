const room = [];

export default defineWebSocketHandler({
  open(peer) {
    console.log("WebSocket opened");
    peer.subscribe(room);
  },
  closed(peer) {
    console.log("WebSocket closed");
  },
  message(peer, data) {
    const stringifiedData = data.toString();
    console.log("WebSocket message:", stringifiedData);
    peer.publish(room, stringifiedData);
  },
});
