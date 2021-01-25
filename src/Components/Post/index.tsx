import React from "react";
import { PostsProps } from "../../types";

const Posts: React.FC<PostsProps> = ({id,post,likes,username}) => {
  return (
    <div key={id}>
      <h1>{username}</h1>
      <p>{post}</p>
      <p>{likes}</p>
    </div>
  );
};
export default Posts;