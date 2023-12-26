import MaxWidthWrapper from '@/component/Elements/MaxWidthWrapper'
import NavBar from './Nav'

const Header = () => {
  return (
    <header>
        <MaxWidthWrapper className='first-headersection flex'>
             {/* <NavBar/> */}
             <div className='w-9 h-7 bg-red-600'>
                hi
             </div>
        </MaxWidthWrapper>
        <section>

        </section>
    </header>
  )
}

export default Header