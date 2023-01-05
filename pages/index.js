import dynamic from 'next/dynamic';
import { useState } from 'react';


const Market = dynamic(() => import('../components/Market/index.js'), {
  loading: () => <div>Loading...</div>,
})

const Auth = dynamic(() => import('../components/Auth/Auth'), {
  loading: () => <div>Loading...</div>,
})


const style = {
  wrappers : 'flex h-screen items-center justify-center index'
}

export default function Home({address,setAddress}) {


    //lo inicializo en true para que no salte la verificacion de metamask

   

  return (
    <div className={style.wrapper}>
      {<Market address={address} setAddress={setAddress}/> }  
    </div>
  )
}
