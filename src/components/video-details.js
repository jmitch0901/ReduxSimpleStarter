import React from 'react';

const VideoDetail = (props) => {

  if(!props.video){
    return <div className="col-md-8">Loading...</div>;
  }


  const { video } = props;
  const videoUrl = `http://www.youtube.com/embed/${video.id.videoId}`;

  return(

    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16bh9">
        <iframe className="embed-responsive-item" src={videoUrl}></iframe>
      </div>
      <div className="detail">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>


  );


};

export default VideoDetail;
