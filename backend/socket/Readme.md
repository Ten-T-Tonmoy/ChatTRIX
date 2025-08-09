

* On **server**: you install `socket.io`
* On **client**: you install `socket.io-client` (or use CDN)

---

## **Why `emit` sometimes and `on` sometimes**

They’re **two halves** of a conversation:

| Method                      | What it does                                        | Where used                          |
| --------------------------- | --------------------------------------------------- | ----------------------------------- |
| `.emit(eventName, data...)` | **Send** a message on a specific event channel      | Can be used by client **or** server |
| `.on(eventName, callback)`  | **Listen** for messages on a specific event channel | Can be used by client **or** server |

---

### Example: Both can talk

**Server → Client**

```js
// server.js
io.on("connection", (socket) => {
  socket.emit("greet", "Hello client!");
});
```

**Client**

```js
socket.on("greet", (msg) => {
  console.log(msg); // "Hello client!"
});
```

---

**Client → Server**

```js
// client.js
socket.emit("greetServer", "Hello server!");
```

**Server**

```js
socket.on("greetServer", (msg) => {
  console.log(msg); // "Hello server!"
});
```

---

💡 Both **client** and **server** can:

* **Emit** an event to send data
* **Listen** to an event with `.on()` to receive data

---

### Why it’s like this

**In a normal Socket.IO app, you usually have only one io.on("connection", …) for the entire server lifetime.**


💯  Socket.IO events are basically a **two-way walkie-talkie system**:

---

## **1. Event names are just labels**

* You pick a name (e.g., `"chat message"`, `"joinRoom"`, `"playerMove"`)
* Both **client** and **server** agree on it.
* One side **emits** the event, the other side **listens** for it.

---

## **2. One side emits**

```js
// CLIENT → sends message
socket.emit("chat message", "Hello from client");
```

```js
// SERVER → sends message
socket.emit("welcome", "Welcome to the server");
```

---

## **3. The other side listens**

```js
// SERVER listens for client message
socket.on("chat message", (msg) => {
  console.log("Client says:", msg);
});
```

```js
// CLIENT listens for server message
socket.on("welcome", (msg) => {
  console.log(msg); // "Welcome to the server"
});
```

---

## **4. Both sides can be emitter or listener**

It’s **not** one-way like HTTP.

* Client can `emit` → Server `on`
* Server can `emit` → Client `on`
* You can even `emit` back immediately in the same event callback.

Example:

```js
socket.on("pingServer", () => {
  socket.emit("pongClient");
});
```

---

## **Cheat Sheet**

| Action                    | Who Calls It? | Who Receives It?    | Scope                  |
| ------------------------- | ------------- | ------------------- | ---------------------- |
| `socket.emit()`           | One side      | The other side      | One connection         |
| `io.emit()`               | Server        | All clients         | Broadcast              |
| `socket.broadcast.emit()` | Server        | All *other* clients | Everyone except sender |
| `io.to(room).emit()`      | Server        | All in room         | Room only              |

---

---

## **Socket.IO Reserved Events**

| Event name                   | Where it’s used           | Triggered when…                                              | Listener arguments                                          |
| ---------------------------- | ------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| `"connection"` / `"connect"` | **Server side** (`io.on`) | A client successfully connects to the server                 | `socket` object                                             |
| `"connect"`                  | **Client side**           | Client connects to the server                                | None                                                        |
| `"disconnect"`               | **Both sides**            | Connection is closed                                         | Reason string (`"transport close"`, `"ping timeout"`, etc.) |
| `"disconnecting"`            | **Server side**           | Just before the socket disconnects                           | Reason string, plus you can check rooms via `socket.rooms`  |
| `"error"`                    | **Both sides**            | A connection or transport error occurs                       | Error object                                                |
| `"connect_error"`            | **Client side**           | Client fails to connect or gets disconnected due to an error | Error object                                                |
| `"connect_timeout"`          | **Client side**           | Connection attempt took longer than `timeout` option         | None                                                        |
| `"reconnect"`                | **Client side**           | Automatic reconnection succeeded                             | Attempt number (int)                                        |
| `"reconnect_attempt"`        | **Client side**           | Trying to reconnect                                          | Attempt number (int)                                        |
| `"reconnect_error"`          | **Client side**           | Error during reconnection attempt                            | Error object                                                |
| `"reconnect_failed"`         | **Client side**           | Gave up trying to reconnect                                  | None                                                        |
| `"ping"`                     | **Both sides**            | Ping packet is sent                                          | None                                                        |
| `"pong"`                     | **Both sides**            | Pong packet received (in reply to a ping)                    | Latency in ms                                               |

---

### **Example: Server side**

```js
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", (reason) => {
    console.log(`User disconnected: ${reason}`);
  });
});
```

---

### **Example: Client side**

```js
socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("disconnect", (reason) => {
  console.log("Disconnected:", reason);
});
```

---