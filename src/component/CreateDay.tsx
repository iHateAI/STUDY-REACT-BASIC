import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  function addDay(e: any) {
    e.preventDefault();

    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다.");
        navigate("/");
      }
    });
  }

  return (
    <div>
      <h3>현재 일 수 : {days.length}일</h3>
      <button>Day 추가</button>
    </div>
  );
}
