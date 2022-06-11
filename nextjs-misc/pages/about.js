import Footer from '../components/layout/Footer'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>About CodeEvolution</title>
        <meta name='description' content='free tuts'></meta>
      </Head>
      <div>about</div>
    </>
  )
}
export default About

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
