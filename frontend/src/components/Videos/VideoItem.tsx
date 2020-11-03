import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import {useHistory} from 'react-router-dom';
import "./VideoItem.css";

interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => {
    const history = useHistory();
  return (
    <div className="col-md-4" key={video._id}>
      <div
        className="card card-body video-card"
        onClick={() => history.push(`/update/${video._id}`)}
      >
        <div className="d-flex justify-content-between">
          <h1>{video.title}</h1>
          <span className="text-danger">X</span>
        </div>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
