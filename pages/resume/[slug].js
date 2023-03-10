import { useRouter } from 'next/router'
import React from 'react'

export default function Slug() {
  const router = useRouter()
  const q = router.query
  return (
    <div>one {q.slug}</div>
  )
}
