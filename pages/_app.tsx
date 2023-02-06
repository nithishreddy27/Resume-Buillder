import '@/styles/globals.css'
import { ResultType } from '@remix-run/router/dist/utils'
import type { AppProps } from 'next/app'
import ResumeState from "../pages/context/ResumeState"

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ResumeState>
      <Component {...pageProps} />
    </ResumeState>
  )
}
