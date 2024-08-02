import PostList from "./components/PostList";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center bg-slate-950">
      <PostList />
    </main>
  );
}
