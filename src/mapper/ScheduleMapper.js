import moment from "moment";
require("moment-recur");

export default class SceduleMapper {
  async toCalendarSchedule(scheduleList) {
    let calendarSchedule = [];
    for (const index in scheduleList) {
      this.sortByIntervalType(calendarSchedule, scheduleList[index]);
    }

    return calendarSchedule;
  }

  async sortByIntervalType(calendarSchedule, schedule) {
    let scheduleInfo = await JSON.parse(JSON.stringify(schedule));
    let startDateList = [];
    let recurrence = {};
    let scheTime = await this.getTime(schedule);

    switch (scheduleInfo.intervalType) {
      case "ONCE":
        if (scheduleInfo !== undefined)
          this.scheduleDtoToEvent(scheduleInfo).then((startDate) =>
            calendarSchedule.push(startDate)
          );
        break;

      case "DAILY":
        recurrence = moment()
          .recur(scheduleInfo.startDate, scheduleInfo.endDate)
          .every(scheduleInfo.intervalValue)
          .days();

        startDateList = recurrence.all("L").map((startDate) => {
          return moment(startDate)
            .add(scheTime.hours, "h")
            .add(scheTime.minutes, "m")
            .add(scheTime.seconds, "s")
            .toDate();
        });

        this.pushEventsInList(calendarSchedule, startDateList, scheduleInfo);
        break;

      case "WEEKLY":
        recurrence = moment()
          .recur(scheduleInfo.startDate, scheduleInfo.endDate)
          .every(moment(scheduleInfo.startDate).day())
          .daysOfWeek();

        startDateList = recurrence.all("L").map((startDate) => {
          return moment(startDate)
            .add(scheTime.hours, "h")
            .add(scheTime.minutes, "m")
            .add(scheTime.seconds, "s")
            .toDate();
        });

        this.getFilterdList(startDateList, scheduleInfo).then((list) => {
          this.pushEventsInList(calendarSchedule, list, scheduleInfo);
        });
        break;

      case "MONTHLY":
        recurrence = moment()
          .recur(scheduleInfo.startDate, scheduleInfo.endDate)
          .every(moment(scheduleInfo.startDate).date())
          .daysOfMonth();

        startDateList = recurrence.all("L").map((startDate) => {
          return moment(startDate)
            .add(scheTime.hours, "h")
            .add(scheTime.minutes, "m")
            .add(scheTime.seconds, "s")
            .toDate();
        });

        this.getFilterdList(startDateList, scheduleInfo).then((list) => {
          this.pushEventsInList(calendarSchedule, list, scheduleInfo);
        });
        break;

      case "ANNUAL":
        recurrence = moment()
          .recur(scheduleInfo.startDate, scheduleInfo.endDate)
          .every(moment(scheduleInfo.startDate).date())
          .daysOfMonth()
          .every(moment(scheduleInfo.startDate).month())
          .monthsOfYear();

        startDateList = recurrence.all("L").map((startDate) => {
          return moment(startDate)
            .add(scheTime.hours, "h")
            .add(scheTime.minutes, "m")
            .add(scheTime.seconds, "s")
            .toDate();
        });

        this.getFilterdList(startDateList, scheduleInfo).then((list) => {
          this.pushEventsInList(calendarSchedule, list, scheduleInfo);
        });
        break;
      default:
        console.log("스케쥴 형식이 다릅니다.");
    }
  }

  async scheduleDtoToEvent(schedule) {
    let convertedSchedule = JSON.parse(JSON.stringify(schedule));
    const startTime = new Date(schedule["startDate"]);
    Object.assign(convertedSchedule, { start: startTime });
    Object.assign(convertedSchedule, {
      end: new Date(startTime.getTime() + schedule["duration"] * 60000),
    });
    return convertedSchedule;
  }

  async getTime(schedule) {
    return {
      hours: moment(schedule.startDate).hours(),
      minutes: moment(schedule.startDate).minutes(),
      seconds: moment(schedule.startDate).seconds(),
    };
  }

  async getFilterdList(startDateList, scheduleInfo) {
    let filterdStartDateList = [];
    for (let i = 0; i < startDateList.length; i += scheduleInfo.intervalValue) {
      filterdStartDateList.push(startDateList.at(i));
    }
    return filterdStartDateList;
  }
  async pushEventsInList(calendarSchedule, startDateList, scheduleInfo) {
    for (const index in startDateList) {
      scheduleInfo.startDate = startDateList[index];
      this.scheduleDtoToEvent(scheduleInfo).then((event) => {
        calendarSchedule.push(event);
      });
    }
  }
}
