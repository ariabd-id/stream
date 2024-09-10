// components/VideoPlayer.js
import React from 'react'
import HlsPlayer from 'react-hls-player'

const VideoPlayer = ({ src }) => {
  return (
    <div>
      <HlsPlayer
        src={src}
        autoPlay={false}
        controls={true}
        width='100%'
        height='auto'
      />
    </div>
  )
}

export default VideoPlayer
