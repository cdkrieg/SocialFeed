import React, { useState } from "react";
import "../App";

const CustomButtons = () => {
  const [likeButtonState, setLikeButtonState] = useState("inactive");
  const [dislikeButtonState, setDislikeButtonState] = useState("inactive");
  const handleClick = (event) => {
    switch (event.target.name) {
      case "likeButton":
        if (likeButtonState === "inactive") {
          setLikeButtonState("active");
          setDislikeButtonState("inactive");
        } else if (likeButtonState === "active") {
          setLikeButtonState("inactive");
        }
        break;
      case "dislikeButton":
        if (dislikeButtonState === "inactive") {
          setDislikeButtonState("active");
          setLikeButtonState("inactive");
        } else if (dislikeButtonState === "active") {
          setDislikeButtonState("inactive");
        }
        break;
      default:
        break;
    }
    console.log(event.target.name + likeButtonState);
  };

  return (
    <div>
      <button
        className={likeButtonState}
        onClick={handleClick}
        name="likeButton"
      >
        Like
      </button>

      <button
        className={dislikeButtonState}
        onClick={handleClick}
        name="dislikeButton"
      >
        Dislike
      </button>
    </div>
  );
};

export default CustomButtons;
