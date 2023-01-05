import Image from "next/image";
import {AiOutlineHeart } from 'react-icons/ai'

const style = {
    nftImageWrapper : "rounded -lg border dark:border-transparent dark:bd-[#313339]",
    nftHeader: "flex item-center justify-between p-4",
    likesContainer: "flex iten-center justify-end space-x-2",
    heartIcon: "h-5 w-5 text-gray-500 dark:text-gray-400",
    likesCount:"text-sm font-semibold text-gray-500 dark:text-gray-400",
    nftImage: "rounded-b-lg object-cover"

}

const NFTImage = ({image}) => {
  
  return (
    <div>

    <div className={style.nftImageWrapper}></div>
        <div className={style.nftHeader}>
          <Image width={20} height={20} src = "/eth-logo.svg" alt="NFT"/>
          <div className={style.likesContainer}>
            <AiOutlineHeart className= {style.heartIcon}/>
            <div className={style.likesCount}>200</div>
          </div>

        </div>
        <div>
        {image &&
        <Image 
        src={image}
        alt="NFT"
        width={500}
        height={500}
        />}
        </div>
    </div>
  )
}

export default NFTImage