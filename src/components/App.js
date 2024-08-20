

import React from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
    const navigate = useNavigate();

    const goToCalendar = () => {
        navigate('/calendar');
    };

    return (
        <div>
            <button onClick={goToCalendar}>Go to Calendar</button>
        </div>
    );
}

export default App;