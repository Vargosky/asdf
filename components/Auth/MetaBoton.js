import { useMetamask, useAddress  } from "@thirdweb-dev/react";

import React, { useEffect, useState } from 'react'



const MetaBoton = ({ address, setAddress}) => {
  
  const  [textBotton,setTextBotton] = useState('Conectar Metamask') 
  
  const connectWithMetamask = useMetamask();
  const account = useAddress();

  useEffect(()=>{

    (account!=undefined) ? setTextBotton(account) : setTextBotton('Conectar Metamask')
    
  },[account]); 
  
  return <button className="rounded-xl py-3 px-7 bg-blue-300 text-center font-semibold" onClick={connectWithMetamask}>{textBotton}</button>;
  
}

export default MetaBoton