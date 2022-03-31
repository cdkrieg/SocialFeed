import React, { useState } from 'react';
import CustomButtons from './CustomButtons';
import { Container } from 'react-bootstrap';


const Post = (props) => {
    return ( 
        <div>
            <p className="name">{props.name}</p>
            <p className="message">{props.message}</p>
            <CustomButtons />
            <hr />
        </div>
     );
}
 
export default Post;
