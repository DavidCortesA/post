'use client'
import { getPosts } from "../data/data";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import Link from "next/link";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center w-full">
      {posts && posts.map(post => (
        <Link key={post.id} href={`/posts/${post.id}`} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 gap-4 p-5">
          <PostItem post={post} />
        </Link>
      ))}
    </div>
  );
}

export default PostList;

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}