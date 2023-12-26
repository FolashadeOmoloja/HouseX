import MaxWidthWrapper from '@/component/Elements/MaxWidthWrapper'
import NavBar from './Nav'

const Header = () => {
  return (
    <header>
        <MaxWidthWrapper className='bg-red-500'>
             <NavBar/>
        </MaxWidthWrapper>
        <section>

        </section>
    </header>
  )
}

export default Header