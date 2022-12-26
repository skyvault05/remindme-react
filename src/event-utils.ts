import { EventInput } from "@fullcalendar/react";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
export const createEventId = () => String(eventGuid++);
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
  {
    id: createEventId(),
    title: "event 1",
    start: "2022-12-01",
    end: "2022-12-10",
  },
  { id: createEventId(), title: "event 2", date: "2022-12-02" },
  { id: createEventId(), title: "테스트", date: "2022-12-13" },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-11T19:35:49",
  //   end: "2022-09-11T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
  // {
  //   title: "Once Schedule1",
  //   start: "2022-09-27T19:25:49",
  //   end: "2022-09-27T19:25:49",
  // },
  // {
  //   title: "Once Schedule2",
  //   start: "2022-09-27T19:30:49",
  //   end: "2022-09-27T19:30:49",
  // },
  // {
  //   title: "Daily Schedule1",
  //   start: "2022-09-10T19:35:49",
  //   end: "2022-09-15T19:30:49",
  // },
  // {
  //   title: "Daily Schedule2",
  //   start: "2022-09-25T19:15:49",
  //   end: "2022-10-15T19:30:49",
  // },
  // {
  //   title: "Weekly Schedule1",
  //   start: "2022-09-13T19:15:49",
  //   end: "2022-11-13T19:20:49",
  // },
  // {
  //   title: "Weekly Schedule2",
  //   start: "2022-09-12T19:15:49",
  //   end: "2022-11-12T19:20:49",
  // },
  // {
  //   title: "Monthly Schedule1",
  //   start: "2022-01-12T19:15:49",
  //   end: "2022-12-12T19:20:49",
  // },
  // {
  //   title: "Monthly Schedule2",
  //   start: "2022-01-13T19:15:49",
  //   end: "2022-12-13T19:20:49",
  // },
  // {
  //   title: "Annual Schedule1",
  //   start: "2020-11-12T19:15:49",
  //   end: "2023-11-12T19:20:49",
  // },
  // {
  //   title: "testShceduleTitle",
  //   start: "2022-09-01T19:30:49",
  //   end: "2022-09-05T19:30:49",
  // },
];
