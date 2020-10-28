import React, { useEffect ,useState} from 'react'
import {Video} from './Video';
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
               return 
            })}
        </div>
    )
}

export default VideoList

