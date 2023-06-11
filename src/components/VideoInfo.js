import React from "react";

function VideoInfo({ video, onUpvote, onDownvote, upvotes, downvotes }) {
    return (
        <>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={onUpvote}>{upvotes} 👍</button>
            <button onClick={onDownvote}>{downvotes} 👎</button>
        </>
    )
}

export default VideoInfo;