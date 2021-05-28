import { useRef, useContext } from 'react';
import { priceContext } from '../context/priceContextProvider';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Index from '../components/home/index/Index';
import About from '../components/home/about/About';
import Discography from '../components/home/discography/Discography';
import Contact from '../components/home/contact/Contact';
import Footer from '../components/global/footer/Footer';

const Home = () => {
  const { price } = useContext(priceContext);
  const containerRef = useRef(null);

  return (
    <>
      <Seo title="DRAZE - HOME" />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          tablet: {
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
          },
          smartphone: {
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
          },
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //...all the dependencies you want to watch to update the scroll
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Header price={price} />
          <Index />
          <About />
          <Discography />
          <Contact />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Home;

// export async function getStaticProps() {
//   const response = await fetch(
//     'https://api.rally.io/v1/creator_coins/DRAZE/price'
//   );
//   const data = await response.json();
//   const price = data.priceInUSD.toString().slice(0, 5);

//   return {
//     props: { price },
//     revalidate: 30,
//   };
// }
