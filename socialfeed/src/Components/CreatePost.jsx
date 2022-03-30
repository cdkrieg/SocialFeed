import React, { useState } from 'react';
import { MultilineInput } from 'react-input-multiline';
import "./CreatePost.css";

const CreatePost = (props) => {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      let newEntry = {
        message: message,
        name: name,
      };
      console.log(newEntry);
      props.addNewEntry(newEntry);
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
            />
        </div>
        <div className="form-group">
            <label>Message  </label>
            <br/>
            <MultilineInput
                className="form-control"
                value={message}
                id="multiline"
                onChange={(event) => setMessage(event.target.value)}
                
                
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