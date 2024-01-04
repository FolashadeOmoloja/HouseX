import MaxWidthWrapper from '@/components/Elements/MaxWidthWrapper'
import NavBar from './Nav'
import Login from './Login'
import HeadLine from './HeadLine'

const Header = () => {
  return (
    <header className='flex xlg:h-[100vh] headersection-gradient max-xslg:flex-col'>
        <section className=' basis-3/5'>
             <NavBar/>
             <HeadLine/>
        </section>
        <section className='basis-2/5 bg-cover bg-no-repeat  background-position max-xslg:hidden ' style={{backgroundImage: `url('wallpaper.png')`}}>
             <Login/>
        </section>
    </header>
  )
}

export default Header