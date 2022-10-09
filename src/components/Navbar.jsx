import { Link } from 'react-router-dom'
import { User } from 'react-feather'

const Navbar = () => {
  return (
    <>
    <header className="header sticky top-0 bg-neutral text-white shadow-md flex items-center justify-between px-8 py-4 z-10">
      <div className="flex justify-start gap-6">
        <button href="">
          <Link to='/'>
            <img src='https://cdn-icons-png.flaticon.com/512/3418/3418886.png' alt='logo' className='h-12'/>
          </Link>
        </button>
        <h1 className="text-xl font-bold mt-2 text-center">
          <Link to='/'>Popcorn Show</Link>
        </h1>
      </div> 
      <div className="w-3/12 flex justify-end">
        <button>
          <div>
            <span className="flex absolute -mt-1 ml-4">

            </span>
          </div>
          <div className='flex gap-8'>
            <Link to='/contact'>
            <h1>Contact us</h1>
            </Link>
            <Link to='/sign-in'>
            <User className='hover:text-gray-300'/>
          </Link>
          </div>
        
          
          
        </button>
      </div>
    </header>
    </>
  )
}

export default Navbar