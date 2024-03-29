import banner from '../assets/banner.png'
import logo from '../assets/logo.png'
import { useNFTCollection } from '@thirdweb-dev/react';


export const collectionData = {
  

  name: 'Certificado de Reciclaje',
  description:
    'Bienvenido al Cripto-reciclaje. Para canjear tu certificado, debes adquirir ReLife, llevando a los centros de reciclaje materiales clasificados y pesados. Con esas monedas podrás canjear tu certificado de reciclaje. Baja tu huella de carbono y certifícalo con un NFT validado en la red de Polygon',
  isVerified: true,
  banner_image_url: banner,
  image_url: logo,
  stats: {
    total_volume: 907100,
    total_supply: 10000,
    num_owners: 3500,
    floor_price: 22.6,
  },
  address: '0x97F27729d7D0f6550D71253CC8E625D7c20528BD',
}
