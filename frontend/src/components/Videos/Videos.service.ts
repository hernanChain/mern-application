import axios from 'axios';
import { Video } from "./Video";

const API = 'http://localhost:4000'
export const loadVideos = async ()=>{
    const getVideos = await axios.get<Video[]>(`${API}/getVideos`);
    return getVideos;
}

export const createVideo = async (video:Video)=>{
    const createVideo = await axios.post(`${API}/createVideo`, video);
    return createVideo;
}

export const getVideo = async (id:string) => {
    const getVideo = await axios.get<Video>(`${API}/getVideo/${id}`)
    return getVideo;
}

export const updateVideo = async (id:string, video:Video) =>{
    const updateVideo = await axios.patch<Video>(`${API}/updateVideo/${id}`,video)
    return updateVideo;
}