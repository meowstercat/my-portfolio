import Head from 'next/head'
import NavBar from '../navbar'

const Main = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <NavBar />

      {children}
    </div>
  )
}
export default Main
