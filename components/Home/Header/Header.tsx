import MaxWidthWrapper from '@/components/Elements/MaxWidthWrapper'
import NavBar from './Nav'
import Login from './Login'

const Header = () => {
  return (
    <header className='flex'>
        <MaxWidthWrapper className='first-headersection basis-3/5'>
             <NavBar/>
        </MaxWidthWrapper>
        <section>
             <Login/>
        </section>
    </header>
  )
}

export default Header