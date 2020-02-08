import React from "react";
import config from "../config";

let { URL } = config.youtube;

const VideoDisplay = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `${URL}${videoId}`;

  return (
    <div data-testid="video-display">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="video-frame"
          className="embed-responsive-item"
          src={url}
        ></iframe>
      </div>
      <div style={{ marginTop: "15px" }} className="card w-75">
        <div className="card-body">
          <h3 className="card-text">{video.snippet.title}</h3>
          <p className="card-text">{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};
export default VideoDisplay;
