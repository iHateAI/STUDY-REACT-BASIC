import { useState } from "react";

const Hello = () => {
  const [name, setName] = useState("mike");

  function changeName() {
    const newName = name === "mike" ? "jane" : "mike";
    setName(newName);
  }
  return (
    <>
      <h1>state</h1>
      <h2>{name}</h2>
      <button onClick={changeName}>Change</button>
    </>
  );
};

export default Hello;
