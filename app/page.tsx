import About from '@/components/Home/About/About'
import Features from '@/components/Home/Features/Features'
import Footer from '@/components/Home/Footer/Footer'
import Header from '@/components/Home/Header/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
        <section className='headersection-gradient'>
          <Header/>
        </section>
        <About/> 
        <Features/>
        <Footer/>  
    </main>
  )
}
