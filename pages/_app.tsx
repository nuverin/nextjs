
import { AppProps } from 'next/app'
import '../styles/style.css'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Pagination from '../Components/Pagination'

const App = ({Component, pageProps}: AppProps) => {
  
  return <>
    <div className='container mx-auto font-sans'>
      <Navbar />
      <main className='pb-32'>
        <Component {...pageProps} />
      </main>
     
      <Footer />
    </div>
  </>
}
export default App