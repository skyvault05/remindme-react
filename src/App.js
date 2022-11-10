import logo from "./logo.svg";
import "./App.css";
import MyCalendar from "./calendar/calendar";

function App() {
  const list = [1, 2, 3, 4, 6, 7];
  return (
    <div>
      <MyCalendar />
      {list.map((a, index) => (
        <span key={index}>{a.label}</span>
      ))}
    </div>
  );

  // const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // return (
  //   <div>
  //     {weekArr.map((week, index) => (
  //       <span key={index}>
  //         {week}
  //         {" / "}
  //       </span>
  //     ))}
  //   </div>
  // );
}

export default App;
