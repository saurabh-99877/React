import React, { useState } from 'react'
import Form from './components/Form.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

const videoNames = Object.keys(videos);
export default function App(){
  const [videoSrc, setVideo] = useState(videos.cat);
  
  function onSelectVideo(video){
  const videoSrc = videos[video];
  setVideo(videoSrc);
  }
  return(
 <div className='w-[50%] mx-auto text-center'>
  <h1 className='text-3xl my-4'>Video Player</h1>
  <Form onSelectVideo={onSelectVideo} videoValues={videoNames}/>
  <VideoPlayer videoSrc = {videoSrc}/>
 </div>
  );
}