import logo from "./logo.svg";
import "./App.css";
import MyCalendar from "./calendar/calendar";
import RecipeReviewCard from "./card/RecipeReviewCard";
import ScheduleDetails from "./schedule/ScheduleDetails";

const App = () => {
  return (
    <div>
      {/* <MyCalendar />
      <RecipeReviewCard /> */}
      <ScheduleDetails />
    </div>
  );
};

export default App;
