import React from 'react';
import CustomButtons from './CustomButtons';
import './Post.css'

const Post = (props) => {
    return ( 
        <div>
            <p id="name">{props.name}</p>
            <p id="message">{props.message}</p>
            <CustomButtons />
            <hr />
            
        </div>
     );
}
 
export default Post;
