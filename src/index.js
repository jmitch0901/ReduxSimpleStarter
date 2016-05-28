import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YoutubeSeach from 'youtube-api-search';
import VideoList from './components/video-list'
import VideoDetails from './components/video-details';
const API_KEY = 'AIzaSyB6Iu1nX4l6gqA5qt-Vfn8gqDRUftn9BhU';



/*

I'd say use a class based component given the following:

If you expect to have a lot of logic in the component
If you need access to component level state
If you need access to component lifecycle methods


*/

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null
    };

    this._videoSearch('surfboards');

  }

  _videoSearch(term){
    YoutubeSeach({key: API_KEY, term:term}, (videos) => {
      this.setState({ videos:videos,selectedVideo:videos[0] });
      //this.setState({videos:videos}); <- identical!
    });
  }

  render(){

    const videoSearch = _.debounce((term) => { this._videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChanged={videoSearch}/>
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelected={selectedVideo=>this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
};


ReactDOM.render(<App />,document.getElementById('root-mount'));
