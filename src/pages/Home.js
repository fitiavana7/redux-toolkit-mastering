import React from 'react';
import AddPlayer from '../components/Addplayer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import List from '../components/List';

const Home = (props) => {
    return (
        <>
            <Header/>
            <AddPlayer/>
            <List/>
            <Footer/>
        </>
    );
};

export default Home;