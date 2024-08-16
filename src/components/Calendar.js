import React from 'react';
import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs'

function App() {

const localizer = dayjsLocalizer(dayjs);

const events = [
    {
        start: dayjs('2024-08-08 12:00 AM', 'YYYY-MM-DD hh:mm A').toDate(),
        end: dayjs('2024-08-08 03:00 PM', 'YYYY-MM-DD hh:mm A').toDate(),
        title: "Evento de Ejemplo"
    }
]

    return (
        <div style={{
            height: "95vh",
            width: "70vw",
        }}>
            <Calendar
            localizer={localizer}
            events={events}
            />
        </div>
    );
}

export default App;