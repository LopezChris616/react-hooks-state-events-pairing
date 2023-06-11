import React from "react";

function Comments({ video, onCommentDisplay, comments }) {
    const commentsDisplay = video.comments.map(comment => {
        return (
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>           
            </div>
        )
    });

    function commentRender() {
        if(comments) {
            return (
                <>
                    <h2 id="comments">{video.comments.length} Comments</h2>
                    {commentsDisplay}        
                </>
            )
        } else return null;
    }


    return (
        <>
            <button id="view-comments" onClick={onCommentDisplay}>{comments ? "Hide Comments" : "Show Comments"}</button>
            {commentRender()}
        </>
    )
}

export default Comments;