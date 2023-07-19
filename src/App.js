import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Audio from './pages/Audio';
import Videos from './pages/Videos';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/videos' element={<Videos />} />
                <Route path='/pictures' element={<Audio />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;