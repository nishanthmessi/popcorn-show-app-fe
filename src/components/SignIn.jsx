const SignIn = () => {
  return (
    <>
    <div className="container max-w-full mx-auto py-24 px-6">
      <div className="">
      <div className="max-w-sm mx-auto px-6">
        <div className="relative flex flex-wrap">
          <div className="w-full relative">
            <div className="mt-6">
              <div className="mb-5 pb-1border-b-2 text-center font-bold text-xl text-gray-700">
                <span>Welcome <a className="text-primary">There</a></span>
              </div>
              <div className="text-center font-semibold text-black">
                Sign in to grab your popcorns
              </div>
            
              <form className="mt-8">
                <div className="mx-auto max-w-lg">
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">Username</span>
                    <input placeholder="" type="text"
                      className="text-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                  </div>
                  <div className="py-2" x-data="{ show: true }">
                    <span className="px-1 text-sm text-gray-600">Password</span>
                    <div className="relative">
                      <input placeholder="" className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <label className="block text-gray-500 font-bold my-4">
                    <input type="checkbox"
                        className="leading-loose"/> 
                      <span className="py-2 text-sm text-gray-600 leading-snug"> Remember Me</span>
                    </label> 
                    <label className="block text-gray-500 font-bold my-4">
                      <a href="#" className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"><span>Forgot
                        Password?</span></a>
                    </label>
                  </div> 
                  <button className="mt-3 bg-neutral text-lg font-semibold w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default SignIn