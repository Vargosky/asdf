import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import {useAddress, useMarketplace} from '@thirdweb-dev/react';
import {BigNumber} from 'ethers';
import dynamic from 'next/dynamic';

const TopNavbarLayout = dynamic(()=> import('../../../layouts/TopNavbarLayout'),{suspense:true});
const NFTImage = dynamic(()=> import('../../../components/NFTDetails/NFTImage'),{suspense:true});
const NFTSaleInfo = dynamic(()=> import("../../../components/NFTDetails/NFTSaleInfo"),{suspense:true});





const style = {

  NFTwrapper: "",
  nftContainer: "",
  leftContainer: "",
  rigthContainer: "",
  leftElement: "",

}




const NFT = () => {

const marketplace = useMarketplace("0x9EaC7BF97320a8bBa95903d2f20A89B213255f1F");
const address = useAddress();

useEffect(()=>{

  getListing();

},[]);

useEffect(()=>{

 if(!address){
  router.replace('/');
 }

},[address]);



const [listing, setListing] = useState();
const getListing = async () => {

  try {
    setLoading(true);
    const _listing = await marketplace.getListing(BigNumber.from(tokenID));
    setListing(_listing);
    setLoading(false);

  } catch (error) {
    console.log(error)
  }

}
  //const [listing, setListing] = useState();
  const buyNFT = async ()=>{
    try {
      await marketplace.buyoutListing(tokenID,1);
    } catch (error) {
      
    }

  }


  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const  {tokenID} = router.query;
  console.log("tokenId = ",tokenID);

console.log("Listing = ",listing);
  return (
    

<TopNavbarLayout>
<div className={style.NFTwrapper}>
    {loading ? (<div>Loading...</div>) : (
    
    <div className={style.nftContainer}>
      <div className={style.leftContainer}>

          <div className={style.leftElement}>
          <NFTImage image= {listing?.asset?.image}/>
          </div>
          <div className={style.leftElement}>
          {/* <NFTDetails/> */}
          </div>
      </div>
      <div className={style.rigthContainer}>
          {/* <NFTBasicInfo/> */}
          <div className={style.buyoutContainer}>
            <NFTSaleInfo
             price = {listing?.buyoutCurrencyValuePerToken?.displayValue} 
             buyNFT = { buyNFT }
             />
          </div>
      </div>
    </div>)}
</div>

</TopNavbarLayout>


  )
}

export default NFT