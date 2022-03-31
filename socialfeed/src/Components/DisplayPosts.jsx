import Post from "./Post";
const DisplayPosts = (props) => {

    return ( 
        <div>
            {props.displayPosts.map((post,index)=>{
                return(
                    <div key={index}>
                        <p id="name">{post.name + " says:"}</p>
                        <p id="message">{'"' + post.message + '"'}</p>
                        <Post />
                    </div>
                )
            })}
        </div>
     );
}
 
export default DisplayPosts;