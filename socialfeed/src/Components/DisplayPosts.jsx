import Post from "./Post";
const DisplayPosts = (props) => {
  return (
    <div>
      {props.displayPosts.map((post, index) => {
        return (
          <div key={index}>
            <div className="name">
              <p id="name">{post.name + " says:"}</p>
            </div>
            <p id="message">{'"' + post.message + '"'}</p>
            <Post />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
