import {useState, useEffect, Suspense} from 'react'
import {useMarketplace} from '@thirdweb-dev/react'
import dynamic from 'next/dynamic';

const Link = dynamic(()=>import('next/link'),{suspense:true});
const NFTCard = dynamic(()=>import('./NFTCard'),{suspense:true});


const style = {

    ListWrapper: "mx-auto grid max-w-fit flrx-1 grid-cols-1 gap-8 p-10 pty-24 md:grid-cols-2 md;pt-0 lg:grid-cols-3 xl;grid-cols-3 2xl:grid-cols-4",
    auxiliar: "text-white"
}

const Listings = ({address,setAddress}) => {

  

    const [listings,setListings] = useState([]);

    const marketplace = useMarketplace("0x9EaC7BF97320a8bBa95903d2f20A89B213255f1F"); 
    
    useEffect(()=>{
        getListings();
    },[]);

    const getListings = async ()=>{
        
        try {
            const list = await marketplace.getActiveListings("0x9EaC7BF97320a8bBa95903d2f20A89B213255f1F");
            setListings(list);   
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Suspense fallback={'Loading'}>
    <div className = {style.ListWrapper} >
    {listings.length > 0 ? (<>{listings?.map( (listing,index)=>(
    <Suspense fallback={'Loading'} key={index}>
    <Link
    href={`/assets/${listing.assetContractAddress}/${listing.id}`}
    key={index}
    >
    <a>
        <Suspense fallback={'Loading...'}>
            <NFTCard listing = {listing} wallet={address}/>
        </Suspense>
        
    </a>
    
    </Link>  
    </Suspense>


    ))}</>):(<div className={style.auxiliar}>Cargando...</div>) } 
        
  

    </div>
    </Suspense>
  )
}

export default Listings