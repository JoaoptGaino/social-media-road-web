import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { PostsProps } from "../../types";
import Post from "../../Components/Post";
export default function Timeline() {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  useEffect(() => {
    async function getAllPosts() {
      const response = await api.get("posts");
      setPosts(response.data);
    }
    getAllPosts();
  }, []);
  return (
    <>
      {posts.map((post) => (
        <Post id={post.id} likes={post.likes} post={post.post} username={post.username} />
      ))}
    </>
  );
}
