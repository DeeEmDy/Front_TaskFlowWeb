import React, { useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import Modal from 'react-modal';
import'./Calendar.css';

Modal.setAppElement('#root'); // Ensure the modal is attached to the correct element

function App() { // Function component naming convention
  const localizer = dayjsLocalizer(dayjs);

  const [events, setEvents] = useState([
    {
      start: dayjs('2024-08-08 12:00 AM', 'YYYY-MM-DD hh:mm A').toDate(),
      end: dayjs('2024-08-08 03:00 PM', 'YYYY-MM-DD hh:mm A').toDate(),
      title: "Evento de Ejemplo"
    }
  ]);

  const [, setSelectedSlot] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    description: ''
  });

  const handleSlotClick = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setModalIsOpen(true);
    setNewEvent({
      ...newEvent,
      start: slotInfo.start,
      end: slotInfo.start // Adjust default duration here if needed
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);
    setModalIsOpen(false);
  };

  return (
    <div style={{ height: "95vh", width: "70vw" }}>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSlotClick}
        onSelectEvent={event => alert(event.title)}
        style={{ height: 500 }}
      />

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Agregar Nuevo Evento">
        <h2>Agregar Nuevo Evento</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Inicio:</label>
            <input
              type="datetime-local"
              name="start"
              value={dayjs(newEvent.start).format('YYYY-MM-DDTHH:mm')}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Fin:</label>
            <input
              type="datetime-local"
              name="end"
              value={dayjs(newEvent.end).format('YYYY-MM-DDTHH:mm')}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Agregar Evento</button>
          <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;