import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams() as { day: string };
  const words = useFetch("http://localhost:3001/words");

  const wordList = words.filter((word) => {
    const numDay = parseInt(day, 10);
    return word.day === numDay;
  });

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {wordList.map((word) => {
            return <Word word={word} key={word.id} />;
          })}
        </tbody>
      </table>
    </>
  );
}
