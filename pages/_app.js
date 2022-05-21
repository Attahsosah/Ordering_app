import { ColorProvider } from '../components/context/ColorContext';
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ColorProvider>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ColorProvider>
  );
  
}

export default MyApp
