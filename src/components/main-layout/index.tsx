import Header from './header'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='flex flex-col'>
    <Header />
    <Outlet />
    </div>
  )
}
