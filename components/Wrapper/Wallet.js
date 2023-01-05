import React from 'react'
import {useAddress} from '@thirdweb-dev/react'
const Wallet = (wallet,setWallet) => {
  return (
    <>{setWallet(useAddress)
      
    }</>
  )
}

export default Wallet