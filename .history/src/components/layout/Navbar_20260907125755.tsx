import {Link} from 'react-router-dom'
function Navbar() {
  return (
      <nav className='bg-gray-800 text-white p-4'>
          <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">My App</h1>
              <ul>
                  <li>
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                  </li>
              </ul>
           </div>
       
    </nav>
  )
}

export default Navbar
