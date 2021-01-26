import React from "react";
import ContentMedia from "../ContentMedia/index";
import { Card } from "@material-ui/core";
import { PostsProps } from "../../types";

const Posts: React.FC<PostsProps> = ({ post }) => {
  return (
    <Card style={{ margin: "25px 0" }} square>
      <ContentMedia post={post} />
    </Card>
  );
};
export default Posts;
