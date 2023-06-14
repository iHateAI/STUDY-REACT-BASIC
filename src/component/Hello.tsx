const Hello = () => {
  function showName() {
    alert("Mike");
  }

  function showText(e: any) {
    console.log(e.target.value);
  }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button onClick={() => alert(30)}>Show age</button>
      <input type="text" onChange={showText} />
    </>
  );
};

export default Hello;
