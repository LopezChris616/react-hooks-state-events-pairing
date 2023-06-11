import React from "react";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";

function Video({ video, onUpvote, onDownvote, onCommentDisplay, upvotes, downvotes, comments }) {
    return (
        <>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <VideoInfo 
                video={video}
                onUpvote={onUpvote}
                onDownvote={onDownvote}
                upvotes={upvotes}
                downvotes={downvotes} 
            />
            <Comments video={video} onCommentDisplay={onCommentDisplay} comments={comments} />
        </>

    )
}

export default Video;