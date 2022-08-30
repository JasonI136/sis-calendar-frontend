import React from 'react';
import './calendar-view.scss';
import { Scheduler, Editing } from 'devextreme-react/scheduler';

export default function calendarView() {

  const views = ['week', 'timelineMonth', 'agenda'];

  return (
    <Scheduler id="scheduler" views={views} currentView="week">
      {
        <Editing allowDragging={false}/>
      }
      
    </Scheduler>
  );

}
  
