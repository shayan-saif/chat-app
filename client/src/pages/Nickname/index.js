import Button from "components/Button";
import Input from "components/Input";
import React, { useState } from "react";

export default function Nickname(props) {
  const [userInput, setUserInput] = useState("");

  const onChoose = (e) => {
    e.preventDefault();
    props.onChoose(userInput);
  };

  return (
    <div>
      <div>Select a nickname</div>
      <form onSubmit={onChoose}>
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button>Choose</Button>
      </form>
    </div>
  );
}
