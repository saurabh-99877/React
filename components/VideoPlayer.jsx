import React from 'react'

export default function VideoPlayer({videoSrc}) {
  return (
    <video loop controls autostart="true" autoPlay muted src={videoSrc} width="800px"/>
  );
}
 