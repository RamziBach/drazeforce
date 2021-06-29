import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Seo from '@components/global/seo';
import Header from '@components/global/header';
import Landing from '@components/draze/landing';
import Services from '@components/draze/services';
import Footer from '@components/global/footer';

const Draze = ({ price }) => {
  const containerRef = useRef(null);

  return (
    <>
      <Seo title="DRAZE - $DRAZE" />
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
          <Landing />
          <Services />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Draze;

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
