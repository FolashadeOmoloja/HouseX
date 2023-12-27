import MaxWidthWrapper from '@/components/Elements/MaxWidthWrapper'
import NavBar from './Nav'
import Login from './Login'

const Header = () => {
  return (
    <header className='flex md:h-[100vh]'>
        <section className='first-headersection basis-3/5'>
             <NavBar/>
        </section>
        <section className='basis-2/5 bg-cover bg-no-repeat bg-[#5E686A]' style={{backgroundImage: `url('wallpaper.jpg')`}}>
             <Login/>
        </section>
    </header>
  )
}

export default Header