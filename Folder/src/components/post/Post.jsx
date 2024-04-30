import { MoreVert } from '@mui/icons-material';
import './post.css';
import { Posts, Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({ Post }) => {
  // Initialize 'like' and 'isLiked' state
  const [like, setLike] = useState(Post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    // Toggle like and update state
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="Post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.find((u) => u.id === Post?.userId)?.profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.find((u) => u.id === Post?.userId)?.username}
            </span>
            <span className="postDate">{Post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{Post?.desc}</span>
          <img src={Post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* Use onClick handler for like */}
            <img
              className="likeIcon"
              src="src/assets/person/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="src/assets/person/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{Post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
