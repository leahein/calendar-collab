import React from "react";
import "./App.css";
import { format, lastDayOfMonth } from "date-fns";

const App = () => {
  const currentDate = new Date();
  const firstOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const dayInWeek = firstOfMonth.getDay();
  const startAt = 0 - dayInWeek;
  const lastDay = lastDayOfMonth(currentDate);
  const numberOfDays = lastDay.getDate();

  return (
    <>
      <h2>
        {format(currentDate, "MMMM")} - {startAt}
      </h2>
      <div className="App grid-container">
        {Array.from(Array(42).keys()).map((i) => {
          const dateIndex = i + 1 + startAt;
          return (
            <div className="row" key={i}>
              {dateIndex > 0 && dateIndex <= numberOfDays ? dateIndex : ""}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
