import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Icon,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Posts from "../../Components/Posts";
import api from "../../Services/api";
import { PostsProps } from "../../types";

const Timeline: React.FC<PostsProps> = ({ post }) => {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      const response = await api.get("posts");
      setPosts(response.data);
      console.log(response.data);
      setLoading(false);
    }
    getPosts();
  },[]);
  return (
    <div style={{ padding: 10 }}>
      <div
        style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "20px" }}
      >
          {loading ? <Typography variant="overline">Loading....</Typography>
          :
          posts.map((post,i)=>(
            <Posts key={i} post={post.post} />
          ))
          }
      </div>
    </div>
  );
};
export default Timeline;
