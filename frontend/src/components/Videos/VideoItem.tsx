import React from 'react'
import { Video } from './Video'

interface Props{
    video: Video
}

const VideoItem = ({video}:Props) => {
    return (
        <div key={video._id}>
                    <h1>{video.title}</h1>
                    <p>{video.description}</p>
                </div>
    )
}

export default VideoItem
