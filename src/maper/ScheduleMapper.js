import React from "react";

export default class SceduleMapper {
  toCalendarSchedule(schedule, currentMonth) {
    switch (schedule.intervalType) {
      case "ONCE":
        break;
      case "DAILY":
        break;
      case "WEEKLY":
        break;
      case "MONTHLY":
        break;
      case "ANNUAL":
        break;
      default:
        console.log("스케쥴 형식이 다릅니다.");
    }
    return null;
  }
}
