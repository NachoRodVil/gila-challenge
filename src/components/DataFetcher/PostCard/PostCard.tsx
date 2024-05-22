import { PostData } from "../../utils/fetchHandler";

function PostCard(props : PostData) {
    const {title, body, userId} = props
    return (
      <div className="post-card">
        <div className="post-card-title-section">
            <h3>{title}</h3>
            <p>User #{userId}</p>
        </div>
        <p className="post-card-body">{body}</p>
      </div>
    );
  }
  
  export default PostCard;