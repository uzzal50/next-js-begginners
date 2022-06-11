import Link from 'next/Link'

function PostList({ posts }) {
  return (
    <div>
      <h4>lIST OF posts</h4>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h3>
              {post.id} {post.title}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostList

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: {
      posts: data,
    },
  }
}
