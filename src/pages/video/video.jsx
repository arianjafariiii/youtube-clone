import React from 'react'
import './video.css'
import VideoPlayer from '../../components/play-video/video-player'
import Recommended from '../../components/recommended/recommended'
import { useParams } from 'react-router-dom'



const Video = () => {
  const {categoryId, videoId} = useParams();
  return (
    <div className='play-container'>
      <VideoPlayer  videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video