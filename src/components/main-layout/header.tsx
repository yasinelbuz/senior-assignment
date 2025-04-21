import { Link, useLocation } from 'react-router-dom'
import LoginButton from '../login-button'

export default function Header() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-500' : ''
  }


  return (
    <aside className='flex gap-4 bg-gray-100 p-4 justify-between items-center'>
      <div className='flex gap-4'>
      <Link to="/" className={`border-r-2 border-gray-200 pr-4 ${isActive('/')}`}>Dashboard</Link>
      <Link to="/posts" className={`border-r-2 border-gray-200 pr-4 ${isActive('/posts')}`}>Posts</Link>
      <Link to="/create" className={`border-r-2 border-gray-200 pr-4 ${isActive('/create-post')}`}>Create Post</Link>
      </div>
      <LoginButton />
    </aside>
  )
}

