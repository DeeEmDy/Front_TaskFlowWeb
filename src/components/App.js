import './App.css'
import React from 'react'; 
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import AppContent from './AppContent';

function App() {
    const navigate = useNavigate();

    const goToCalendar = () => {
        navigate('/calendar');
    };

    return (
        <div>
            <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <AppContent />
                        {/* Aquí está el botón para navegar al calendario */}
                        <button onClick={goToCalendar} className="btn btn-primary mt-3">Go to Calendar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
