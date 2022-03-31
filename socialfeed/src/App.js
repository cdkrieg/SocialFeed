import React, { useState } from 'react';

import './Components/CreatePost';
import CreatePost from './Components/CreatePost';
import './Components/DisplayPosts';
import Post from './Components/Post';
import NavBar from './Components/NavBar';
import DisplayPosts from './Components/DisplayPosts';

function App() {
  const [posts, setPosts] = useState([{name: "Chris Krieg", message: "This is a test message!"}]);
    function addNewPost(post) {
      let tempPosts = [...posts, post];
      setPosts(tempPosts);
    }

  return (
    <div className="container-sm">
      <NavBar />
      <CreatePost addNewPost={addNewPost}/>
      <DisplayPosts displayPosts={posts}/>

    </div>
  );
}

export default App;
