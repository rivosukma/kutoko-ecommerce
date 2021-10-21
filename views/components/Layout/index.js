import { ThemeProvider } from "@emotion/react"
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from "../Footer"

const Layout = props => {

    const {
        children
    } = props

    return(
        <ThemeProvider theme={{ primary: '#fff' }}>
            <Head>
                <title>KUTOKO</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}

            </Head>
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    )
}
export default Layout