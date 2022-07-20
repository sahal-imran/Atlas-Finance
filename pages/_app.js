import '../styles/CDNfonts.css'
import '../styles/gilroy.css';
import '../styles/axiforma.css';
import '../styles/globals.css';
import Layout from '../pages/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
