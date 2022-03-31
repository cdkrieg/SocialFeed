import Post from "./Post";
const DisplayPosts = (props) => {

    return ( 
        <div>
            {props.displayPosts.map((post,index)=>{
                return(
                    <div key={index}>
                        <p>{post.name}</p>
                        <p>{post.message}</p>
                        <Post />
                    </div>
                )
            })}
        </div>
     );
}
 
export default DisplayPosts;