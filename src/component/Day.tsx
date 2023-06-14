import { useParams } from "react-router-dom";
import Word from "./Word";
import { useState, useEffect } from "react";

export default function Day() {
  const { day } = useParams() as { day: string };
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/words")
      .then((res) => {
        return res.json();
      })
      .then((data) => setWords(data));
  }, []);

  const wordList = words.filter((word) => {
    const numDay = parseInt(day, 10);
    return word.day === numDay;
  });

  return (
    <>
      <h2>Day {day}</h2>
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
