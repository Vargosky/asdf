import Image from 'next/image'
import { Suspense } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const NFTCard = ({listing}) => {
const style = {

  NFTWrapper : "xl:mx-10 xl:p-10 relative flex h-[450px] w-[340px] cursor-pointer flex-col rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-[#333333]",
  imageContainer: " space-x-5 h-3/4",
  nftImage: "rounded-t-lg object-cover",
  nftLowerContainer:"flex h-1/4 flex-col justify-between p-4",
  nftInfoContainer: "flex justify-between",
  collectionTitle: "text-sm text-gray-500 dark;text-gray-400 ",
  nftTitle: "text-whitetext-sm font-bold",
  wethImageContainer: "flex item-center space-x-2",
  priceContainer: "flex flex-col intem-end justify-center space-y-1",
  priceTitle: "text-xs font-light",
  likeContainer: "flex item-center justify-end space-x-2",
  heartIcon:"h-3 w-3 text-gray-500 dark:text-gray-400",
  likeCounter:"text-xs text-gray-500 dark:text-gray-400",

}
  //console.log(listing.asset.name);
  return (
    <Suspense fallback={'Loading'}>
    <div className={style.NFTWrapper}>
      <div className={style.imageContainer}>
        <Image
        className={style.nftImage}
        src = {listing.asset.image}
        width = {340}
        height = {340}
        alt = {listing.asset.name}
        />
      </div>

    <div className={style.nftLowerContainer}>
      <div className={style.nftInfoContainer}>
      <div>
        { listing.asset.collection && (
        <div className={style.collectionTitle}>
        {listing.asset?.name}  
        </div>
        )}
      <div className={style.nftTitle}>{listing.asset.name}</div>  
      <div className={style.priceContainer}>
        <div className={style.priceTitle}>Comprar</div>
        <div className={style.wethImageContainer}>
          {/* <Image    
          height={16}
          width={16}
          src='./weth-logo.svg'
          alt='weth'
          /> */}
          <div className={style.priceValue}>{listing.buyoutCurrencyValuePerToken?.displayValue}</div>
        </div>
      </div>
      </div>
      </div> 
      <div className={style.likeContainer}>
        <Suspense fallback={'Loading....'}>
        <AiOutlineHeart
        className={style.heartIcon}/>
        </Suspense>
        <div className={style.likeCounter}>
          { listing.asset?.stats?.favorites ?? 0 }
        </div>
      </div>
    </div>

    </div>
    </Suspense>
  )
}

export default NFTCard