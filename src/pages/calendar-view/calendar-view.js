import React from 'react';
import './calendar-view.scss';
import { Scheduler, Editing } from 'devextreme-react/scheduler';
import { data } from './data.js';

const currentDate = new Date(2021, 2, 28);
export default function calendarView() {

  const views = ['day', 'week', 'month'];

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Tasks</h2>
      
      <Scheduler 
        id="scheduler" 
        views={views} 
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        startDayHour={9}
        dataSource={data}
      >
        
        {
          <Editing allowDragging={true}/>
        }
        
      </Scheduler>
    </React.Fragment>
  );

}
  
