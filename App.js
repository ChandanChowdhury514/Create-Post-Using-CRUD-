
import React, { Component } from 'react';
import AllPost from './AllPost/AllPostForm';
import PostForm from './PostForm/PostForm';

 class App extends Component {
  render() {
    return (
    <div>

      <PostForm />
      <AllPost />
    </div>

    )
  }
}

export default App;
