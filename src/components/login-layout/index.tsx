import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <div className='flex flex-col'>
    <Outlet />
    </div>
  )
}
