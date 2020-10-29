import React, { useState,ChangeEvent } from "react";
import { Video } from "./Video";

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const [video, setVideo] = useState<Video>({
    url: "",
    title: "",
    description: "",
  });
  const handleInputChange = (e: inputChange)=>{
setVideo({...video,[e.target.name]:e.target.value})
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>
            <form action="" method="post">
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Title of video"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="http://www.youtube.com/video"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  placeholder="Description of video"
                  rows={3}
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
              <button className="btn btn-primary">Create Video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
