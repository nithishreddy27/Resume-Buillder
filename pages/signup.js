import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Form from '../components/registerform'

const Signup = () => {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`)
      return
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        Router.push('/addDetails')
      } 
      else {
        console.log("in push")
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
      <div className="login mx-auto my-10 z-40 relative ">
        <div className="className='sm:mx-auto sm:w-full sm:max-w-md w-[300px] mx-auto">
        <Form isLogin={false} errorMessage={errorMsg} onSubmit={handleSubmit} />
        </div>
      </div>

    </>

  )
}

export default Signup
