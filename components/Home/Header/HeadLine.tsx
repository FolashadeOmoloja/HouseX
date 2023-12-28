import { PT_Serif } from 'next/font/google'

const ptSerif = PT_Serif(
  {
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-ptSerif'
  }
)

const HeadLine = () => {
  return (
    <section>
         <h1 className={`${ptSerif.className} text-[44px] text-white font-bold`}>Sell or rent your <span>Home</span> at the best prices</h1>
         <h2>Discover a place you would love to live</h2>
         <p>Connect with more than 75 million renters looking for new homes<br/>using our comprehensive marketing platform</p>
    </section>
  )
}

export default HeadLine