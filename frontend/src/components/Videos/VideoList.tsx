import React, { useEffect ,useState} from 'react'
import {useParams} from 'react-router';
import {Video} from './Video';
import VideoItem from './VideoItem';
import * as videoService from './Videos.service';

interface Params{
    id:string;
}
const VideoList = () => {
    const [videos, setVideos] = useState<Video[]>([])

    const params:Params = useParams();

    const loadVideos = async ()=>{
        const getVideos = await videoService.loadVideos();
        const sortedVideos = getVideos.data.map(video => {
            return{
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
            }
        }).sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime())

        setVideos(sortedVideos)
    }
    const deleteVideo = async (id:string)=>{
        await videoService.deleteVideo(id);
    }

    useEffect(()=>{
        if (params.id) {
            deleteVideo(params.id)
          }
        loadVideos()
    },[params.id])

    return (
        <div className="row">
            {videos.map((video)=>{
               return <VideoItem key={video._id} video={video}></VideoItem>
            })}
        </div>
    )
}

export default VideoList

