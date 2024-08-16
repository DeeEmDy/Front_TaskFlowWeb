import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/Calendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </Router>
);

reportWebVitals();
