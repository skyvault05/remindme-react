import "./App.css";

import MyCalendar from "./calendar/Calendar";
import Main from "./main/Main";

const App = () => {
  return (
    <div>
      <MyCalendar />
      {/* <ScheduleCard /> */}
      <Main />
      <hr />
      {/* <ScheduleDetails /> */}
    </div>
  );
};

export default App;
