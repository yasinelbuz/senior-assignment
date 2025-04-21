import Header from './header'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col'>
      <Header />
      {children}
    </div>
  )
}
