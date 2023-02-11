import React from 'react'
import { useUser } from '../../lib/hooks'

export default function Resume() {
  const user = useUser()
  console.log("user",user)
  return (
    <div>resume

      {user && (
        <div>
          one
          {user.username}
        </div>
      ) }

    </div>
  )
}
