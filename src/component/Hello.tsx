import { useState } from "react";
import UserName from "./UserName";

const Hello = ({ age }: any) => {
  const [name, setName] = useState("mike");
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  // function changeName() {
  //   const newName = name === "mike" ? "jane" : "mike";
  //   setName(newName);
  // }
  return (
    <>
      <h1>state</h1>
      <h2>
        {name} ({age}) : {msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "mike" ? "jane" : "mike");
        }}
      >
        Change
      </button>
    </>
  );
};

export default Hello;
