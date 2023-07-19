import { createSlice } from "@reduxjs/toolkit";


export const videosSlice = createSlice({
    name : "videos" , 
    initialState : {
        player : [] ,
        videos : [] ,
        audios : [] ,
        audioToPlay : [] ,
        recentAudio : [] ,
        videoToPlay : {} ,
    } , 
    reducers : {
        setPlayerData : (state ,action) =>{
            state.player = action.payload
        } ,
        addPlayerData : (state , action) => {
            state.player.push(action.payload)
        } ,
        deletePLayer : (state , action) =>{
            state.player = state.player.filter((player)=> player.id !== action.payload)
        } ,
        setVideosData : (state , action) => {
            state.videos = action.payload 
        } ,
        setVideoToPlay : (state , action) => {
            state.videoToPlay = action.payload 
        } ,
        setAudioData : (state , action) => {
            state.audios = action.payload
        } ,
        setAudioToPlay : (state , action) =>{
            state.audioToPlay = action.payload
        } ,
        setRecentAudio : (state , action) =>{
            let nb = 0;
            for (let i = 0; i < state.recentAudio.length; i++) {
                if (state.recentAudio[i].id == action.payload.id) {
                    nb ++
                }
            }
            if (nb == 0){
                state.recentAudio = [action.payload , ...state.recentAudio]
            }
        } ,
    } ,
}) ;

export const {setPlayerData , setRecentAudio , addPlayerData , setVideosData , setVideoToPlay , deletePLayer , setAudioData ,setAudioToPlay  } = videosSlice.actions ;
export default videosSlice.reducer ;