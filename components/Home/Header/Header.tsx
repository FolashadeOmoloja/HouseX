import MaxWidthWrapper from '@/components/Elements/MaxWidthWrapper'
import NavBar from './Nav'

const Header = () => {
  return (
    <header className='flex'>
        <MaxWidthWrapper className='first-headersection'>
             <NavBar/>
        </MaxWidthWrapper>
        <section>

        </section>
    </header>
  )
}

export default Header