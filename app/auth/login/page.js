
export default function Login() {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="flex bg-sky-600 h-1/4 items-center justify-center">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-white">
            LoginBienChingon
          </h2>
        </div>

        <div className="flex flex-col mt-10 w-screen px-6 items-center">
          <form className="space-y-6 w-full md:w-1/2 lg:w-1/3" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="user"
                  className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="password"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-sm text-right">
                  <a href="#" className="font-semibold text-sky-600 hover:text-sky-500">
                    Forgot password?
                  </a>
                </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                login
              </button>
            </div>

            
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-sky-600 hover:text-sky-500">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </>
  )
}