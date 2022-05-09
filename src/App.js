import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Home from './components/Home';

import './App.css';

const App = () => {
  return (
    <Router>
        <BaseLayout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BaseLayout>
    </Router>
  )
}

export default App
