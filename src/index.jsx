import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App';
import BaseLayout from './components/layout/BaseLayout'
import Home from './components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <BaseLayout>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </BaseLayout>
    </Router>
);

