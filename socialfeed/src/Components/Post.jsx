import React from 'react';
import CustomButtons from './CustomButtons';


const Post = (props) => {
    return ( 
        <div>
            <p className="name">{props.name}</p>
            <p className="message">{props.message}</p>
            <CustomButtons />
            
        </div>
     );
}
 
export default Post;
