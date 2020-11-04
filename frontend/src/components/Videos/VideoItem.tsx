import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import { XCircleFillIcon, PencilIcon } from "@primer/octicons-react";
import * as videoServices from './Videos.service';
import "./VideoItem.css";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video,loadVideos}: Props) => {
  const history = useHistory();

  const handleDelete = async (id:string)=>{
    await videoServices.deleteVideo(id);
    loadVideos()
  }
  return (
    <div className="col-md-4 general-card" key={video._id} >
      <div
        className="card card-body video-card"
      >
        <div className="d-flex justify-content-between">
          <h3>{video.title}</h3>
          <div className="d-flex justify-content-end">
            <div className="edit-button" onClick={() => history.push(`/update/${video._id}`)}>
              <PencilIcon size="small" />
            </div>
            <div className="close-button" onClick={() => video._id && handleDelete(video._id)}>
              <XCircleFillIcon size="small" />
            </div>
          </div>
        </div>
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={video.url}
          width='100%'
          height='100%'
        />
      </div>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
