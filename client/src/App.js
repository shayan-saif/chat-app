import logo from "./logo.svg";
import "./App.css";
import Chat from "pages/Chat";
import Nickname from "pages/Nickname";
import { useState } from "react";

function App() {
  const [nickname, setNickname] = useState("");

  if (nickname.trim() !== "") {
    return <Chat nickname={nickname} />;
  } else {
    <Nickname onChoose={(n) => setNickname(n)} />;
  }

  return (
    <div className="App">
      {/* <Chat /> */}
      {nickname}
      <Nickname onChoose={(n) => setNickname(n)} />
    </div>
  );
}

export default App;
