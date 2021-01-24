import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { PostsProps } from "../../types";

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
        <div>
          <h1>{post.username}</h1>
          <p>{post.post}</p>
          <p>{post.likes}</p>
        </div>
      ))}
    </>
  );
}
