import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Form from '../components/loginForm'
import Image from 'next/image'

const Login = () => {
  useUser({ redirectTo: '/profile', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }
    console.log(body)
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        console.log("status true")
        Router.push('/profile')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <>
      <img className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
        alt=""
      />
      <div className="login mx-auto my-10 z-40 relative">
        <div className="sm:mx-auto sm:w-full sm:max-w-md w-[300px] mx-auto">
        <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
        </div>
      </div>
      
    </>
  )
}

export default Login
