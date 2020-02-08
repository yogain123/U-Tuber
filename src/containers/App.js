import React, { Component } from "react";
import SearchBar from "../components/search_bar.js";
import VideoList from "../components/video-list.js";
import VideoDisplay from "../components/video-display.js";
import Search from "../controller";
import config from "../config";
import VideoListExtra from "../components/video-list-extra.js";
import Header from "../components/header.js";

let { API } = config.youtube;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      videos: [],
      selectedVideo: null
    };

    this.apiRequest(this.state.term);
  }

  apiRequest(term) {
    Search({ key: API, term: term }, data => {
      this.setState({
        term: term,
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <>
        <Header></Header>
        <div className="container" data-testid="container">
          <div className="row">
            <SearchBar
              searchText={this.state.term}
              onSearchTermChange={term => this.apiRequest(term)}
            />
          </div>
          <div className="row">
            <div className="col-md-8">
              <VideoDisplay video={this.state.selectedVideo} />
              <VideoListExtra
                videos={this.state.videos}
                onVideoSelected={video =>
                  this.setState({ selectedVideo: video })
                }
              ></VideoListExtra>
            </div>
            <VideoList
              videos={this.state.videos}
              onVideoSelected={video => this.setState({ selectedVideo: video })}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
