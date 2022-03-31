import React from 'react';

import './Components/CreatePost';
import CreatePost from './Components/CreatePost';
import './Components/DisplayPosts';
import Post from './Components/Post';
import NavBar from './Components/NavBar';
import DisplayPosts from './Components/DisplayPosts';

function App() {


  return (
    <div>
      <NavBar />
      <CreatePost />
      <Post />
      <DisplayPosts />

    </div>
  );
}

export default App;
