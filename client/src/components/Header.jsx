import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="bg-tertiary">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link>
          <h1 className='font-bold'>Auth</h1>
        </Link>
            
        <ul className="flex gap-6">
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>        
          <Link to='/sign-in'>
            <li>Sign In</li>
          </Link>    
        </ul>
      </div>
      
    </div>
  )
}

export default Header
