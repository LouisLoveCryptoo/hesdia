const room = {
  name: "room1",
  users: [],
  messages: [],
  drawings: [],
};

export default defineWebSocketHandler({
  open(peer) {
    peer.subscribe(room);
    room.users.push(peer);
    console.log("WebSocket open:", peer);
    peer.publish(
      room,
      JSON.stringify({
        pseudo: "Server",
        content: `${peer} joined the room`,
        color: "red",
      })
    );
  },
  close(peer) {
    peer.publish(
      room,
      JSON.stringify({
        pseudo: "Server",
        content: `${peer.pseudo} left the room`,
        color: "red",
      })
    );
  },
  message(peer, data) {
    const parsedData = JSON.parse(data);
    if(parsedData.content = '') return;
    peer.publish(
      room,
      JSON.stringify({
        pseudo: parsedData.pseudo,
        content: parsedData.content,
        color: parsedData.color,
      })
    );
  },
  error(peer, error) {
    console.log("[ws] error", peer, error);
  },
});
