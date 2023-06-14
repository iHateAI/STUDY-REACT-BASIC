import dummy from "../db/data.json";

export default function Day() {
  const day = 1;
  const wordList = dummy.words.filter((word) => {
    return word.day === 1;
  });
  return (
    <>
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
