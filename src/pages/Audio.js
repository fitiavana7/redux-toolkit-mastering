import React from 'react';
import AudioPlayer from '../components/AudioPlayer';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Audio = (props) => {
    return (
        <>
            <Header/>
            <AudioPlayer/>
            <Footer/>
        </>        
    );
};

export default Audio;