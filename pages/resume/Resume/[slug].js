import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import dynamic from 'next/dynamic';

export default function slug() {

  const router = useRouter()
  const name = router.query.slug
  console.log("name outside",name);
  var GoodbyeDynamic;
  useEffect(()=>{
    if(name){
      console.log("name",name);
       GoodbyeDynamic = dynamic(() => import(`../creative/Dynamic`), {
        loading: () => 'Loading...'});
    }
  },[name])

  

  return (
    <div>

      {name && (
        <>
          name:{name}
          <GoodbyeDynamic/>
        </>
      )}
    </div>
  )
}




