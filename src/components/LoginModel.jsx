import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
    <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
      <h3 className="text-xl font-bold">Welcome to Popcorn Show</h3>
        <div>
          <label for="email" className="text-sm font-medium  block mb-2">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@mail.com" required=""/>
        </div>
        <div>
          <label for="password" className="text-sm font-medium  block mb-2">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required=""/>
        </div>
        <div className="flex justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required=""/>
              </div>
              <div className="text-sm ml-3">
                <label for="remember" className="font-medium ">Remember me</label>
              </div>
            </div>
            <a href="#" className="text-sm text-secondary hover:underline">Lost Password?</a>
        </div>
        <button type="submit" className="w-full btn btn-secondary text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
        <div className="text-sm font-medium text-gray-500">
          Not registered? 
          <Link to='/' className="text-secondary hover:underline">Create account</Link>
        </div>
    </form>
    </>
  )
}

export default Login