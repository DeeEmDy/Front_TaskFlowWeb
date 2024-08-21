import React, { useState } from 'react';
import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import Modal from 'react-modal';
import './Calendar.css';
import { showAlert } from './Alert.js';

Modal.setAppElement('#root');

function App() {
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
    description: '',
    userId: '',
    taskProgress: '',
    taskCompletionDate: '',
    score: ''
  });

  const handleSlotClick = (slotInfo) => {
    if (slotInfo.view === Views.MONTH) return; // Evita abrir el modal en la vista de mes
    setSelectedSlot(slotInfo);
    setModalIsOpen(true);
    setNewEvent({
      ...newEvent,
      start: slotInfo.start,
      end: slotInfo.start
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
    showAlert('Evento agregado con éxito!');
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSlotClick}
        onSelectEvent={event => showAlert(event.title)}
        style={{ height: 'calc(100vh - 20px)', width: '80vw', margin: '10px auto', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
      />

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="event-modal">
        <h2 className="modal-title">Agregar Nuevo Evento</h2>
        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label>Título:</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Inicio:</label>
            <input
              type="datetime-local"
              name="start"
              value={dayjs(newEvent.start).format('YYYY-MM-DDTHH:mm')}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Fin:</label>
            <input
              type="datetime-local"
              name="end"
              value={dayjs(newEvent.end).format('YYYY-MM-DDTHH:mm')}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>ID Usuario:</label>
            <input
              type="text"
              name="userId"
              value={newEvent.userId}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Progreso de Tarea (%):</label>
            <input
              type="number"
              name="taskProgress"
              value={newEvent.taskProgress}
              onChange={handleInputChange}
              min="0"
              max="100"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Fecha Finalización de Tarea:</label>
            <input
              type="date"
              name="taskCompletionDate"
              value={newEvent.taskCompletionDate}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Puntaje:</label>
            <input
              type="number"
              name="score"
              value={newEvent.score}
              onChange={handleInputChange}
              min="0"
              max="100"
              required
              className="form-input"
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button">Agregar Evento</button>
            <button type="button" onClick={() => setModalIsOpen(false)} className="cancel-button">Cancelar</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;
