import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export interface IDay {
  id: number;
  day: string;
}

export default function DayList() {
  const days: IDay[] = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <ul className="list_day">
        {days.map((day: any): any => {
          return (
            <li key={day.id}>
              <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
