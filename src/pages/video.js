import dynamic from 'next/dynamic'
import React from 'react'

// Import komponen secara dinamis untuk memastikan hanya dijalankan di sisi klien
const VideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
  ssr: false,
})
function video() {
  return (
    <div>
      <h1>Stream Video</h1>
      <VideoPlayer src='https://lebo.huminbird.cn/live/ballbar_23170.m3u8' />
    </div>
  )
}

export default video
