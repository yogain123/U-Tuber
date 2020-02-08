import React from "react";
const VideoListExtra = props => {
  if (props.videos.length === 0) {
    return <div>Loading...</div>;
  }
  let lol = props.videos;

  const hola = lol.map(item => {
    return (
      <img
        src={item.snippet.thumbnails.default.url}
        alt="video"
        width="40%"
        height="250px"
        key={item.etag}
        onClick={() => props.onVideoSelected(item)}
        style={{ marginBottom: "25px" }}
      />
    );
  });

  return (
    <div
      data-testid="video-list-extra"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "stretch",
        justifyContent: "space-evenly"
      }}
    >
      {hola}
    </div>
  );
};

export default VideoListExtra;
