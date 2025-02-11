import Link from 'next/link'

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Sign Up</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <div className="flex flex-row">
              <div className="px-2">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Firstname
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
              <div className="px-2">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Lastname
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="px-2">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Username
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
              <div className="px-2">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Password
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
            </div>
            <div className="px-2">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Email
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
            </div>
            <button
              type="button"
              className="transition duration-200 bg-neutral-500 hover:bg-neutral-600 focus:bg-neutral-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Sign Up</span>
            </button>
          </div>
          <div className="py-5 text-center">
            Already have an account?{' '}
            <span className="font-semibold">
              <Link href="/login">LOGIN</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
