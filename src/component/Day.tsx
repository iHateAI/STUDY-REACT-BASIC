import { useParams } from "react-router-dom";
import Word, { IWord } from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams<{ day: string }>();
  const words: IWord[] = useFetch("http://localhost:3001/words");

  const wordList = words.filter((word) => {
    return word.day === day;
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
