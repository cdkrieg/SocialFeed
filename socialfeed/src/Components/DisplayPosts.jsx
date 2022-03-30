import React, { useState } from 'react';


const DisplayPosts = (props) => {
    const [posts, setPosts] = useState([])

    function displayPosts({nameMessage}){
        setPosts(
            posts.push({nameMessage})
        );
        return posts;
}

    return ( 
        <div className="container">
            <p></p>
        </div>

     );
}
 
export default DisplayPosts;