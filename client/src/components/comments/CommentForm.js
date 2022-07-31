import { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

const CommentForm = ({
  // parentId,
  activeComment,
  handleSubmit,
  parentId = null,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialRating = 0,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const isTextareaDisabled = text.length === 0;

  //lỗi chỗ này
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text, parentId, rating);
    setText("");
    setRating(0);
  };
  return (
    <form onSubmit={onSubmit}>
      {/* {!parentId && ( */}
      <div className="star-rating">
        {[...Array(10)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              id="rated"
              className={[`${index <= (hover || rating) ? "on" : "off"}`]}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              {activeComment?.type !== "replying" && (
                <StarRateIcon className="star" />
              )}
            </button>
          );
        })}
      </div>
      {/* )} */}
      <div className="text-form">
        <textarea
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="comment-form-button" disabled={isTextareaDisabled}>
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-button comment-form-cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
