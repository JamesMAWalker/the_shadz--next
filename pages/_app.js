import Head from 'next/head';

import TopNav from '../components/top-nav.component.jsx';
import SideNav from '../components/side-nav.component.jsx';
import Footer from '../components/footer.component';


import '../styles/app.styles.scss';


const ShadzApp = ({ Component, pageProps }) => {

  return (
    <div className='page-container'>
      <Head>
        <title>SHADZ</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='page-wrapper'>
        <TopNav />
        <div className='center-container'>
          <SideNav />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ShadzApp;


