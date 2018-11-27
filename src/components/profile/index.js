import React from 'react';
import PostData from '../../profiles/profiles.json';

export default class Profile extends React.Component {
  render() {
    
    console.log(this.props);
    return (
       <div>
       <h1>Profile Page</h1>
       {PostData.map((postDetail,index) => {
         
         console.log(this.props.match.params);
         return <div className="container" key={postDetail.index}>
         <div className="row">
           <div className = "col-sm-9">
            <div> 
            <p> Name: {postDetail.name} </p>
            <p>Age:{postDetail.age} </p>
            <p>Gender:{postDetail.gender}</p>
             </div>
           </div>
         </div>
         </div>
       })}
     </div>
     
    )
  }
}
