import axios from 'axios';

export const loadVideos = async ()=>{
    const getVideos = await axios.get('http://localhost:4000/getVideos');
    return getVideos;
}