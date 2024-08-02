'use client'
import { getPost } from "@/app/data/data";
import PostItem from "@/app/components/PostItem";
import { useEffect, useState } from "react";
import Link from "next/link";

function Page({ params }) {
  const { slug } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost(slug);
      setPost(data);
    };

    fetchData();
  }, [slug]);

  if (!post) {
    return <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-lg font-bold">Cargando...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="w-full md:w-1/2 p-5">
        <Link href="/">Return</Link>
        <PostItem post={post} />
      </div>
    </div>
  );
}

export default Page;