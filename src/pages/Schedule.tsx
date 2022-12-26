import "@fullcalendar/react/dist/vdom";

import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg,
} from "@fullcalendar/react";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { createEventId } from "../event-utils";

const events = [
  {
    title: "testShceduleTitle",
    start: "2022-09-11T19:35:49",
    end: "2022-09-11T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
  {
    title: "Once Schedule1",
    start: "2022-09-27T19:25:49",
    end: "2022-09-27T19:25:49",
  },
  {
    title: "Once Schedule2",
    start: "2022-09-27T19:30:49",
    end: "2022-09-27T19:30:49",
  },
  {
    title: "Daily Schedule1",
    start: "2022-09-10T19:35:49",
    end: "2022-09-15T19:30:49",
  },
  {
    title: "Daily Schedule2",
    start: "2022-09-25T19:15:49",
    end: "2022-10-15T19:30:49",
  },
  {
    title: "Weekly Schedule1",
    start: "2022-09-13T19:15:49",
    end: "2022-11-13T19:20:49",
  },
  {
    title: "Weekly Schedule2",
    start: "2022-09-12T19:15:49",
    end: "2022-11-12T19:20:49",
  },
  {
    title: "Monthly Schedule1",
    start: "2022-01-12T19:15:49",
    end: "2022-12-12T19:20:49",
  },
  {
    title: "Monthly Schedule2",
    start: "2022-01-13T19:15:49",
    end: "2022-12-13T19:20:49",
  },
  {
    title: "Annual Schedule1",
    start: "2020-11-12T19:15:49",
    end: "2023-11-12T19:20:49",
  },
  {
    title: "testShceduleTitle",
    start: "2022-09-01T19:30:49",
    end: "2022-09-05T19:30:49",
  },
];
const rootUrl = "/api/v1/schedule";

let eventList: any[] = [];
function Schedule() {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const handleEvents = useCallback(
    (events: EventApi[]) => setCurrentEvents(events),
    []
  );
  useEffect(() => {
    axios
      .get(rootUrl + "/getMySchedules")
      .then((response) => {
        response.data.map((x: any) => {
          console.log(x.title, x.startDate, x.endDate);
          eventList.push({
            title: x.title,
            start: x.startDate,
            end: x.endDate,
          });
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDateSelect = useCallback(async (selectInfo: DateSelectArg) => {
    let title = prompt(
      selectInfo.startStr +
        " ~ " +
        selectInfo.endStr +
        " 이벤트 제목을 입력하세요."
    )?.trim();
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
      // await axios
      // .post(rootUrl + "/storeSchedule", {title: "테스트에용~~", intervalType: "ONCE", startDate: "2022-12-21T10:58:45.264Z"})
      // .then()
      // .catch((error) => console.log(error));
    }
  }, []);

  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    if (
      window.confirm(
        `이 이벤트 '${clickInfo.event.title}' 를 삭제 하시겠습니까?`
      )
    ) {
      clickInfo.event.remove();
    }
  }, []);

  return (
    <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          // initialEvents={INITIAL_EVENTS}
          locales={allLocales}
          locale="ko"
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
          events={events}
        />
      </div>
    </div>
  );
}

export default Schedule;
