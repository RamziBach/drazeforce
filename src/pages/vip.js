import { useEffect } from 'react';
import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Index from '../components/vip/landing/Index';

const Vip = ({ price }) => {
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
      <Seo title="DRAZE - VIP" />
      <main data-scroll-container>
        <Header price={price} isOnVipPage={true} />
        <Index />
      </main>
    </>
  );
};

export default Vip;

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
