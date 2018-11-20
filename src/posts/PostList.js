import React, { Component } from 'react';
import PostData from '../profiles/profiles.json';

class PostList extends Component {
  render() {
    return (
      <div>
      <h1>Profile Page</h1>
      {PostData.map((postDetail,index) => {
        return <div className="container">
        <div className="row">
        <div className = "col-sm-9">
        <img src = {postDetail.picture} />
        <p>{postDetail.name}</p>
        </div>
        </div>
        </div>
      })}
        
      </div>
    );
  }
}

export default PostList;
