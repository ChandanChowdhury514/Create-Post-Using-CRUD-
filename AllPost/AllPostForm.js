import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditComponent from '../EditComponent';

import Post from '../Post';


class AllPost extends Component {
  render() {
    return (
    <div>
      <h1>All Posts</h1>
      
      {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}

     { console.log(this.props.posts)}
     </div>

     ))}
            
        
    </div>
    );
   }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);

