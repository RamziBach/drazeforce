import { useEffect } from 'react';
import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Index from '../components/home/index/Index';
import About from '../components/home/about/About';
import Discography from '../components/home/discography/Discography';
import Contact from '../components/home/contact/Contact';
import Footer from '../components/global/footer/Footer';

const Home = ({ price }) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]') ?? undefined,
          smooth: true,
        });
      } catch (error) {
        throw Error(`LocomotiveScroll: ${error}`);
      }
    })();
    return () => scroll.destroy();
  }, []);

  return (
    <>
      <Seo title="DRAZE - HOME" />
      <main data-scroll-container>
        <Header price={price} />
        <Index />
        <About />
        <Discography />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch(
    'https://api.rally.io/v1/creator_coins/DRAZE/price'
  );
  const data = await response.json();
  const price = data.priceInUSD.toString().slice(0, 5);

  return {
    props: { price },
    revalidate: 30,
  };
}
