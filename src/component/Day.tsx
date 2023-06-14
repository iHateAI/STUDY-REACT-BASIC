import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {
  const { day } = useParams() as { day: string };
  const wordList = dummy.words.filter((word) => {
    const numDay = parseInt(day, 10);
    return word.day === numDay;
  });

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => {
            return (
              <tr>
                <td>{word.eng}</td>
                <td>{word.kor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
