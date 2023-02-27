import '../styles/globals.css'

import ResumeState from "../context/ResumeState"

function MyApp({ Component, pageProps }) {

  return <>
    <ResumeState>
      <Component {...pageProps} />
    </ResumeState>
  </>

}

export default MyApp
