import React from 'react'
import { useUser } from '../lib/hooks'
import Link from "next/Link"
export default function Some() {
  const user = useUser()
  const data=JSON.stringify(user,null,2)
  return (
    <>
      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
      <Link href="/api/logout" >LOGOUT</Link>

    </>
  )
}
