import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVideosData, setVideoToPlay } from '../feature/videos.slice';
import './tube.scss' ;

const Tube = (props) => {
    let dispatch = useDispatch()
    let [valeur , setValeur] = useState('') 
    let [isPlayingVideo , setIsPlayingVideo] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:5000/video')
        .then((res)=> {dispatch(setVideosData(res.data))})
    },[])
    let videos = useSelector(state=>state.videos)
    let videoToPlay = useSelector(state=> state.videoToPlay)

    function handleChange(e) {
        setValeur(e.target.value)
    }
    function handleClick(e) {
        setDonnee(e)
    }
    
    return (
        <div className='tube'>
            <form action="">
                <div className="input-groupe">
                    <input placeholder='entrer qlq chose ...' onChange={handleChange} value={valeur} className='form-control' type="text" name="" id="" />
                    <button className="btn btn-warning"><i className="fa fa-search"></i></button>
                </div>
            </form>
            <div className="tube-container">
            <div className="video-side">
                {isPlayingVideo ? <VideoPlayer/> : 
                    <div className='welcome-video-player'>
                        <h3><i className="fa fa-film"></i> VIDEO PLAYER</h3>
                        <h6> <i className="fa fa-info"></i> Cliquer sur le video à lire</h6>
                    </div>}
                <div className="side-content">
                    <div className="post-share" id="post-share">
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google"></i></a>
                        <a href=""><i className="fa fa-envelope"></i></a>
                        <a href=""><i className="fa fa-instagram"></i></a>
                    </div>
                    <form className="post-comment" action="" method="post" id="post-comment">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="votre commentaire" />
                            <button type="submit" className="btn btn-primary"><i className="fa fa-send"></i></button>
                        </div>
                    </form>
                    <div className="like-nombre">
                        <h5>1,4k likes |  200 comments | 980 shares</h5>
                    </div>
                </div>
                <div className="side-comment">
                    <div className="comment-box">
                        <i className="fa fa-user"></i>
                        <div className="comment-content">
                            <a href="">Roni Aveiro</a>
                            <p>ur adipisicing elit. M Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime delectus possimus. Quia consectetur, possimus non eveniet autem dolorem? Minima dolorum repudiandae obcaecati, magni quasi omnis officia dolores odio nihil. agni neque harum veniam dignissimos ab iste. Dignissimos!</p>
                        </div>
                    </div>
                    <div className="comment-box">
                        <i className="fa fa-user"></i>
                        <div className="comment-content">
                            <a href="">Andriaherilanto</a>
                            <p>ur adipisicing elit. Magni neque harum veniam dignissimos ab iste. Dignissimos!</p>
                        </div>
                    </div>
                    <div className="comment-box">
                        <i className="fa fa-user"></i>
                        <div className="comment-content">
                            <a href="">Aina Fitiavana</a>
                            <p> Magni neque harum veniam dignissimos ab iste. Dignissimos!</p>
                        </div>
                    </div>
                    <div className="comment-box">
                        <i className="fa fa-user"></i>
                        <div className="comment-content">
                            <a href="">Cristiano Ronaldo</a>
                            <p> sit amet consectetur adipisicing elit. Magni neque harum veniam dignissimos ab iste. Dignissimos!</p>
                        </div>
                    </div>
                    <div className="comment-box">
                        <i className="fa fa-user"></i>
                        <div className="comment-content">
                            <a href="">Georgina Rodriguez</a>
                            <p>Lnsectetur adipisicing elit. Magni neque harum veniam dignissimos ab iste. Dignissimos!</p>
                        </div>
                    </div>
            </div>
            
            </div>
                <div className="video-list">
                    {
                        videos.filter((data)=>{return data.title.toLowerCase().includes(valeur.toLowerCase())}).map((video , index)=>{
                            return (
                                <button onClick={()=>{  
                                        setIsPlayingVideo(false) 
                                        dispatch(setVideoToPlay(video))
                                        setTimeout(()=>{
                                            setIsPlayingVideo(true)
                                        },100)
                                    }} key={index} className="btn btn-warning video-box">
                                    <video controls="controls" preload='auto' poster={video.poster}>
                                        <source src={video.source}></source>
                                    </video>
                                    <div className="box-info">
                                        <h4>{video.title.toUpperCase()}</h4>
                                        <h6>{video.author}</h6>
                                    </div>
                                </button> 
                            ) ;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

const VideoPlayer = () => {
    let videoToPlay = useSelector(state=> state.videoToPlay)
    return (
        <>
            <video controls="controls" autoPlay='autoplay' preload='auto' poster={videoToPlay.poster}>
                <source src={videoToPlay.source}></source>
            </video>
            <div className="video-info">
                <h3>{videoToPlay.title.toUpperCase()}</h3>
                <h5>{videoToPlay.author}</h5>
            </div>
        </> 
    ) ;
} ;

export default Tube;