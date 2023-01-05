const Theme = dynamic(() => import('./Theme.js'), {
  ssr: false,
})
import dynamic from 'next/dynamic';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react'

const Third = ({Component, pageProps} ) => {



  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      chainRpc = {{[ChainId.Mumbai]: 'https://polygon-mumbai.infura.io/v3/2d2bdba3b94a4cad84ab7c3d5ecafcab'}}
    >
      <Theme Component={Component} pageProps = {pageProps} />
    </ThirdwebProvider>
  )
}

export default Third