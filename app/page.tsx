import About from '@/components/Home/About/About'
import FAQ from '@/components/Home/FAQ/FAQ'
import Features from '@/components/Home/Features/Features'
import Footer from '@/components/Home/Footer/Footer'
import Header from '@/components/Home/Header/Header'
import Listings from '@/components/Home/Listings/Listings'
import Offer from '@/components/Home/Offer/Offer'



export default function Home() {
  return (
    <main className="">
        <section className='headersection-gradient'>
          <Header/>
        </section>
        <About/> 
        <Features/>
        <Listings/>
        <Offer/>
        <FAQ/>
        <Footer/>  
    </main>
  )
}
