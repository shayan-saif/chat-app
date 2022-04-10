import Message from "components/Message";
import React from "react";

export default function Messages(props) {
  const { messages } = props;

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <Message body={message} key={index} />
          // <li key={index}>
          //   {user} says {message}
          // </li>
        ))}
      </ul>
    </div>
  );
}
