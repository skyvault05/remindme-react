import '@fullcalendar/react/dist/vdom';

import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg
} from "@fullcalendar/react";
import { useCallback, useEffect, useState } from "react";
import { createEventId, INITIAL_EVENTS } from "./event-utils";
import ScheduleRepository from './ScheduleRepository';

function Schedule() {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const handleEvents = useCallback(
    (events: EventApi[]) => setCurrentEvents(events),
    []
  );

  useEffect(() => {
    const scheduleRepository = new ScheduleRepository();
    scheduleRepository.getMySchedules();
  },[])
  
  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    let title = prompt(selectInfo.startStr+" ~ "+selectInfo.endStr+" 이벤트 제목을 입력하세요.")?.trim();
    // console.log('selectInfo', selectInfo)
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }, []);
  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    if (
      window.confirm(`이 이벤트 '${clickInfo.event.title}' 를 삭제 하시겠습니까?`)
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
          initialEvents={INITIAL_EVENTS}
          locales={allLocales}
          locale="ko"
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventColor="#378006"
        />
      </div>
    </div>
  );
}

export default Schedule;
