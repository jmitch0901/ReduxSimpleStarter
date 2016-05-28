import React, { Component } from 'react';
import VideoListItem from './video-list-item';


const VideoList = ({ videos, onVideoSelected }) => {

  const videoNodes = videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelected={onVideoSelected}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      { videoNodes }
    </ul>

  );
};

export default VideoList;
