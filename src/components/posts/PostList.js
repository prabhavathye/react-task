import React, { Component } from 'react';
import PostData from '../../profiles/profiles.json';
import { Link, Route } from 'react-router-dom';
import Profile from '../profile';

class PostList extends Component {
  constructor(props){
    super(props);
    this.state = {
      PostData : []
    }
  }
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        {PostData.map((postDetail,index) => {
          return <div className="container" key={postDetail.guid}>
          <div className="row">
            <div className = "col-sm-9">
              <img src = {postDetail.picture} />
              <Link to={`/profile/${postDetail.guid}`}>{postDetail.name}</Link>
            </div>
          </div>
          </div>
        })}
      </div>
    );
  }
}

export default PostList;
