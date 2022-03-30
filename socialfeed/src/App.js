import React from 'react';

import './Components/CreatePost';
import CreatePost from './Components/CreatePost';
// import './Components/DisplayPosts';
// import './Components/Post';
import CustomButtons from './Components/CustomButtons';
import NavBar from './Components/NavBar';

function App() {


  return (
    <div>
      <NavBar />
      <CreatePost />
      <CustomButtons /> 

    </div>
  );
}

export default App;
