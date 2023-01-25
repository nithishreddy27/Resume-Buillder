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
      <div className="login w-[50%] mx-auto my-10">
        <Form isLogin={false} errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>

    </>

  )
}

export default Signup
