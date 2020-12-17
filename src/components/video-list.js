import React from "react";
const VideoList = (props) => {
  if (props.videos.length === 0) {
    return <div>Loading...</div>;
  }
  let lol = props.videos;

  const hola = lol.map((item) => {
    return (
      <li
        className="list-group-item"
        key={item.etag}
        onClick={() => {
          props.onVideoSelected(item);
          window.scroll({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="video-list-media">
          <div className="media-left">
            <img
              width="100%"
              className="media-object"
              src={item.snippet.thumbnails.default.url}
              alt="video"
            />
            <div style={{ marginTop: "15px" }} className="card w-75">
              <div className="card-body">
                <h5 className="card-title">{item.snippet.channelTitle}</h5>
                <p className="card-text">{item.snippet.title}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <ul data-testid="video-list" className="col-md-4">
      {hola}
    </ul>
  );
};

export default VideoList;
