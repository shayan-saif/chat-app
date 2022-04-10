import React from "react";

export default function Message({ body }) {
  const { user, message } = body;

  return (
    <li>
      {user} said {message}
    </li>
  );
}
