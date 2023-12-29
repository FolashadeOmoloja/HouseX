import MaxWidthWrapper from '@/components/Elements/MaxWidthWrapper'
import NavBar from './Nav'
import Login from './Login'
import HeadLine from './HeadLine'

const Header = () => {
  return (
    <header className='flex md:h-[100vh] first-headersection'>
        <section className=' basis-3/5'>
             <NavBar/>
             <HeadLine/>
        </section>
        <section className='basis-2/5 bg-cover bg-no-repeat  background-position' style={{backgroundImage: `url('wallpaper.png')`}}>
             <Login/>
        </section>
    </header>
  )
}

export default Header