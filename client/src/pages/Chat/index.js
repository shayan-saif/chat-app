import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Button from "components/Button";
import Messages from "components/Messages";
import Input from "components/Input";

export default function Chat(props) {
  const { nickname } = props;

  const [socket, setSocket] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { user: "someone", message: "Hello World" },
    { user: "someone", message: "A second message" },
  ]);

  useEffect(() => {
    const newSocket = io("http://localhost:4200");
    setSocket(newSocket);

    newSocket.on("chat-message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      setSocket(null);
    };
  }, []);

  const onSend = (e) => {
    e.preventDefault();
    socket.emit("chat-message", { user: nickname, message: userInput });
    setUserInput("");
  };

  return (
    <div>
      <div className="chat-window">
        <Messages messages={messages} />
        <form onSubmit={onSend}>
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button>Send</Button>
        </form>
      </div>
    </div>
  );
}
