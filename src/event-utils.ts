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
];
