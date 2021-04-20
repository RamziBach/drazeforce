import { signIn, signOut, useSession } from 'next-auth/client';
import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Landing from '../components/vip/landing/Landing';
import Footer from '../components/global/footer/Footer';

const Vip = ({ price }) => {
  const [session, loading] = useSession();

  return (
    <>
      <Seo title="DRAZE - VIP" />
      <Header price={price} isOnVipPage={true} />
      {!session && (
        <>
          <h3>Not signed in.</h3>
          <button
            style={{ color: 'white' }}
            onClick={() =>
              signIn('rally', {
                callbackUrl: 'https://drazeforce.vercel.app/api/auth/callback',
                url: 'https://rallyio-prod.auth.us-west-2.amazoncognito.com/',
              })
            }
          >
            Sign in
          </button>
        </>
      )}
      {session && <Landing />}
      {/* <Landing /> */}
      <Footer />
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
