import World from "./World";
import styles from './Hello.module.css'

const Hello = () => {
  return (
    <>
      <h1
        style={{
          color: "#f00",
          borderRight: "2px solid #000",
          marginBottom: "50px",
          opacity: 0.5,
        }}
      >
        Hello
      </h1>
      <div className={styles.box}></div>
      <World />
    </>
  );
};

export default Hello;
