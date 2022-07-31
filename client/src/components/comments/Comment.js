import CommentForm from "./CommentForm";
// import { makeStyles } from '@material-ui/core';z
import { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { getComments } from './../../api';

const Comment = ({
  comment,
  replies,
  rating,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  // const [listUser,setListUser]=useState([])
  const [username, setUsername] = useState("");
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/" + comment.userID
        );

        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        // setLoadedReviews(responseData.reviews);
        setUsername(responseData.username);
      } catch (err) {}
    };
    sendRequest();
  }, []);

  // const NewComment = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const responseData = await sendRequest(
  //       "http://localost:5000/api/review",
  //       "POST",
  //       JSON.stringify({
  //         title: comment.body,
  //         username: username,
  //         rating: comment.rating,
  //       }),
  //       {
  //         "Content-Type": "application/json",
  //       }
  //     );
  //     // console.log(responseData)
  //     {responseData.getComments}
  //   } catch (err) {}
  // };
  return (
    <div key={comment.id} className="comment">
      <div className="comment-right-part">
        <div className="comment-parent">
          {!parentId && <div className="comment-rating">{comment.rating}</div>}
          <div className="comment-content">
            <div className="author-date">
              <div className="comment-author">{username}</div>
              <div className="comment-date">{createdAt}</div>
            </div>
            {!isEditing && <div className="comment-text">{comment.title}</div>}
          </div>
        </div>
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialRating={comment.rating}
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            activeComment={activeComment}
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                // parentId={reply.parentId}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
