import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video";

function App() {
  console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [comments, setComments] = useState(true);

  function handleComments() {
    setComments(prevState => !prevState);
  }

  function handleUpvotes() {
    setUpvotes(prevState => prevState += 1);
  }

  function handleDownvotes() {
    setDownvotes(prevState => prevState += 1);
  }

  return (
    <div className="App">
      <Video 
        video={video} 
        onUpvote={handleUpvotes}
        onDownvote={handleDownvotes}
        upvotes={upvotes}
        downvotes={downvotes}
        onCommentDisplay={handleComments}
        comments={comments}
      />
    </div>
  );
}

export default App;
