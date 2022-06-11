function Users({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  )
}

export default Users

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {
      users: data,
    },
  }
}
