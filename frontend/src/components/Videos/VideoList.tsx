import React, { useEffect ,useState} from 'react'
import {Video} from './Video';
import VideoItem from './VideoItem';
import * as videoService from './Videos.service';

const VideoList = () => {
    const [videos, setVideos] = useState<Video[]>([])

    const loadVideos = async ()=>{
        const getVideos = await videoService.loadVideos();
        setVideos(getVideos.data)
    }

    useEffect(()=>{
        loadVideos()
    },[])

    return (
        <div>
            {videos.map((video)=>{
               return <VideoItem key={video._id} video={video}></VideoItem>
            })}
        </div>
    )
}

export default VideoList

