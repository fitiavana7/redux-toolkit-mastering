import { configureStore } from "@reduxjs/toolkit";
import VideosReducer from '../feature/videos.slice' ;

export default configureStore({
    reducer : VideosReducer ,
}) ;