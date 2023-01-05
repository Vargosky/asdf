import '../styles/globals.css'
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Third = dynamic(() => import('../components/Wrapper/Third.js'), {
  loading: () => <div>Loading...</div>,
})

function MyApp({ Component, pageProps }) {

  const [address,setAddress] = useState(''); 
  return (
    <>
    <Suspense>
      <Third Component= {Component} pageProps = {pageProps} address={address} setAddress={setAddress}/>
    </Suspense>
    </>
  );


}

export default MyApp
