import '../styles/globals.css'
import Layout from '../views/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp