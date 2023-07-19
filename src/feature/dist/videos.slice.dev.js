"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setAudioToPlay = exports.setAudioData = exports.deletePLayer = exports.setVideoToPlay = exports.setVideosData = exports.addPlayerData = exports.setRecentAudio = exports.setPlayerData = exports.videosSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var videosSlice = (0, _toolkit.createSlice)({
  name: "videos",
  initialState: {
    player: [],
    videos: [],
    audios: [],
    audioToPlay: [],
    recentAudio: [],
    videoToPlay: {}
  },
  reducers: {
    setPlayerData: function setPlayerData(state, action) {
      state.player = action.payload;
    },
    addPlayerData: function addPlayerData(state, action) {
      state.player.push(action.payload);
    },
    deletePLayer: function deletePLayer(state, action) {
      state.player = state.player.filter(function (player) {
        return player.id !== action.payload;
      });
    },
    setVideosData: function setVideosData(state, action) {
      state.videos = action.payload;
    },
    setVideoToPlay: function setVideoToPlay(state, action) {
      state.videoToPlay = action.payload;
    },
    setAudioData: function setAudioData(state, action) {
      state.audios = action.payload;
    },
    setAudioToPlay: function setAudioToPlay(state, action) {
      state.audioToPlay = action.payload;
    },
    setRecentAudio: function setRecentAudio(state, action) {
      var nb = 0;

      for (var i = 0; i < state.recentAudio.length; i++) {
        if (state.recentAudio[i].id == action.payload.id) {
          nb++;
        }
      }

      if (nb == 0) {
        state.recentAudio = [action.payload].concat(_toConsumableArray(state.recentAudio));
      }
    }
  }
});
exports.videosSlice = videosSlice;
var _videosSlice$actions = videosSlice.actions,
    setPlayerData = _videosSlice$actions.setPlayerData,
    setRecentAudio = _videosSlice$actions.setRecentAudio,
    addPlayerData = _videosSlice$actions.addPlayerData,
    setVideosData = _videosSlice$actions.setVideosData,
    setVideoToPlay = _videosSlice$actions.setVideoToPlay,
    deletePLayer = _videosSlice$actions.deletePLayer,
    setAudioData = _videosSlice$actions.setAudioData,
    setAudioToPlay = _videosSlice$actions.setAudioToPlay;
exports.setAudioToPlay = setAudioToPlay;
exports.setAudioData = setAudioData;
exports.deletePLayer = deletePLayer;
exports.setVideoToPlay = setVideoToPlay;
exports.setVideosData = setVideosData;
exports.addPlayerData = addPlayerData;
exports.setRecentAudio = setRecentAudio;
exports.setPlayerData = setPlayerData;
var _default = videosSlice.reducer;
exports["default"] = _default;