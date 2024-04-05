import MaxWidthWrapper from '@/components/Elements/MaxWidthWrapper'
import NavBar from './Nav'
import Login from './Login'
import HeadLine from './HeadLine'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className=' mx-auto'>
                       <NavBar/>         
       <section className='flex  w-full max-xslg:flex-col'>
           <section className=' basis-3/5'>

                 <HeadLine/>
            </section>
            <section className='basis-2/5 bg-cover bg-no-repeat  background-position max-xslg:hidden ' style={{backgroundImage: `url('wallpaper.png')`}}>
            </section>
           </section>
    </header>
  )
}

export default Header