import "./App.css";

import MyCalendar from "./calendar/Calendar";
import RecipeReviewCard from "./card/RecipeReviewCard";
import ScheduleDetails from "./schedule/ScheduleDetails";

const App = () => {
  return (
    <div>
      <MyCalendar />
      <RecipeReviewCard />
      <hr />
      {/* <ScheduleDetails /> */}
    </div>
  );
};

export default App;
