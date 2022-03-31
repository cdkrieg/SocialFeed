import React, { useState } from 'react';
import "./CreatePost.css";

const CreatePost = (props) => {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      let newPost = {
        name: name,
        message: message
      };
      console.log(newPost);
      props.addNewPost(newPost);
      setName(" ");
      setMessage(" ");
    }

  
    return (
      <form onSubmit={handleSubmit} className='form-grid'>
        <div className="form-group">
            <label>Name  </label>
            <br/>
            <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                id="name"
            />
        </div>
        <div className="form-group">
            <label>Message  </label>
            <br/>
            <input
                type="text"
                className="form-control"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                id="message"
                
                
            />
        </div>
  
        <button
          type="submit"
          className="btn btn-primary"
          style={{ "marginTop": "1em" }}
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default CreatePost;