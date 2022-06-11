import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>Home -NextJs PreRendering</h1>
      <p>This is the home page</p>
      <Link href='/users'>
        <a>users</a>
      </Link>
      <Link href='/posts'>
        <a>posts</a>
      </Link>
    </div>
  )
}

export default Home
