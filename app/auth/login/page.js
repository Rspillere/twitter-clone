
export default function Page() {
    return (
    <div className="flex-col">
      <div className='bg-indigo-500 w-screen'>
        <h1>Login</h1>
      </div>
      <div>
        <form className="flex-col">
          <input type="text" placeholder="user"></input>
          <input type="password" placeholder="user"></input>
          <button className='bg-blue-400'>Login</button>
        </form>

      </div>
    </div>
    )
  }