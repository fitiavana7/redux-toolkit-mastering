import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import monLogo from '../assets/pics/panda-player.jpeg' ;
import { setAudioData, setAudioToPlay, setRecentAudio } from '../feature/videos.slice';
import './audio.scss' ;

const AudioPlayer = (props) => {
    let [isPlayingAudio , setIsPlayingAudio] = useState(false)
    let dispatch = useDispatch()
    let audioData = useSelector(state=>state.audios)
    let [showRecent , setShowRecent] = useState(false)
    let recentAudio = useSelector(state=>state.recentAudio)

    useEffect(()=>{
        axios.get('http://localhost:5000/audio')
        .then((res)=>{dispatch(setAudioData(res.data))})
    },[])

    return (
        <div className='audio'>
        {isPlayingAudio ? 
            < div className='lecteur'>
                <Lecteur/>
                <i className="exitAudio fa fa-remove" onClick={()=>{setIsPlayingAudio(false)}}></i>
            </div>
             : ''}
            <div className="audio-header">
                <div className="audio-logo">
                    <img src={monLogo} alt="mon logo le panda" />
                    <h2 className='audio-title'><b>W</b>ELCOME TO PANDA PLAYER</h2>
                </div>
                <div className="audio-recent">
                    <h4 onClick={()=>{setShowRecent(!showRecent)}} className='audio-recent-title'>RECENT AUDIO <i  className={showRecent ? "fa fa-arrow-up" :  "fa fa-arrow-down"}></i></h4>
                    {showRecent ? <div className="audio-recent-list">
                        {recentAudio.filter((audio)=>{return audio}).map((audio)=>{
                            return(
                                <div key={audio.id} className="item" onClick={()=>{
                                    setIsPlayingAudio(!isPlayingAudio)
                                    dispatch(setAudioToPlay(audio))
                                    dispatch(setRecentAudio(audio))

                                }}>
                                    <h4>{audio.singer}</h4>
                                    <h6>{audio.title}</h6>
                                </div>
                            );
                        })}
                    </div> : ''}
                </div>
                <div className="audio-list">
                    {
                        audioData.map((audio)=>{
                            return(
                            <div key={audio.id} className="audio-list-item" onClick={()=>{
                                    setIsPlayingAudio(false)
                                    dispatch(setAudioToPlay(audio))
                                    dispatch(setRecentAudio(audio))
                                    setTimeout(()=>{
                                       setIsPlayingAudio(true)
                                    },100  )
                                }}>
                                <div className="img">
                                    <img src={audio.poster} alt="" />
                                </div>
                                <div className="title">
                                    <h4>{audio.singer}</h4>
                                    <h6>{audio.title}</h6>
                                </div>
                            </div>            
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

const Lecteur = ()=>{
    let audioplaying =  useSelector(state=>state.audioToPlay)
    return(
        <>
            <div className="lecteur-poster">
                <img src={audioplaying.poster} alt="mon poster de audio" />
            </div>
            <div className="lecteur-audio">
                <h3>{audioplaying.singer} - {audioplaying.title}</h3>
                <audio autoPlay controls preload='auto'>
                    <source src={audioplaying.source}></source>
                </audio>
            </div>
        </>
    );
} ;

export default AudioPlayer;