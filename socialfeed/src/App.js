import React, { useState } from "react";
import "./App.css";
import "./Components/CreatePost";
import CreatePost from "./Components/CreatePost";
import "./Components/DisplayPosts";
import NavBar from "./Components/NavBar";
import DisplayPosts from "./Components/DisplayPosts";


function App() {
  const [posts, setPosts] = useState([
    { name: "Chris Krieg", message: "Welcome to my App!" },
  ]);
  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <NavBar className="navbar" />
      <div className="borders">
        <CreatePost addNewPost={addNewPost} />
        <DisplayPosts displayPosts={posts} />
      </div>
    </div>
  );
}

export default App;
