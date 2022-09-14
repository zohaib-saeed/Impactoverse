import '../styles/fonts.css';
import '../styles/globals.css';
import Layout from '../pages/layout';
import { LicenseInfo } from '@mui/x-data-grid-pro';


LicenseInfo.setLicenseKey('YOUR_LICENSE_KEY');

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
