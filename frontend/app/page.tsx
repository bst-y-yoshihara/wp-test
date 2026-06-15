import { getPosts } from '@/lib/posts';

export default async function Page() {
  const data = await getPosts();

  return (
    <main>
      {data.posts.nodes.map((post: any) => (
        <div key={post.title}>
          {post.title}
        </div>
      ))}
    </main>
  );
}