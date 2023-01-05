import { Suspense } from "react"
import {useAddress, useMetamask} from '@thirdweb-dev/react'


const Auth = ({address,setAddress}) => {

const connectMetamask = useMetamask();
setAddress(useAddress());


  

  return (
    <Suspense fallback={'Loading Auth...'}>
    <div className={'flex h-screen items-center justify-center index'}>
    <button
     onClick={connectMetamask}
     className= {'rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white'}
     >{"Connect Metamask"}</button>
  </div>
  </Suspense>
  )
}

export default Auth