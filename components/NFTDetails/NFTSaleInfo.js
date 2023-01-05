import { BsCreditCard2FrontFill, BsFillTagFill} from 'react-icons/bs'
import { AiOutlineCiCircle, AiOutlineClockCircle } from 'react-icons/ai'
import Image from 'next/image'


const style = {

  SaleWrapper : "flex flex col divide-y border dark:rounded-lg dark:border-black",
  header: "flex intem-center justify-between rounded-t-lg px-6 py-4 dark:bg-[#262a30",
  headerContent: "h-6 w-6",
  headerIcon: "h-6 w-2",
  greyText: 'text-gray-400',
  mainContainer: "spcae-y-4 rounded-b-lg px-y dark:bg-[#313339",
  priceInfoContainer: "space-y-1",
  mediumFont: 'font-medium',
  priceContainer: "flex items-center space-2",
  price:"text-3xl font-bold",
  button: 'flex w-[14rem] items-center cursor-pointer justify-center space-x-4 rounded-lg py-2 text-white',
  purchaseButton: "bg-blue-500",
  offerButton: "border border-black bg-[#363840]",
  buttonIcon: "h-6 w-6",
}

const NFTSaleInfo = ({price, buyNFT}) => {
  

  return (

    <div className={style.SaleWrapper}>
      <div className={style.header}>
        <div className={style.headerContent}>
          <AiOutlineClockCircle className={`style.greyText ${style.headerIcon}`}/>
        </div>
        <div className={style.mainContainer}>
        
        <div className={style.priceInfoContainer}>
          <div className={`style.greyText ${style.headerIcon}`}>
          Canjea por 
          </div>
          <div className={style.priceContainer}>
            <Image
            src = '/eth-logo.svg'
            width = {24}
            height = {24}
            alt = 'weth'
            />
            <span className={style.price}>{price}</span>
          </div>
          </div>  
          <div className={style.buttonContainer}>
            <div className={`${style.button} ${style.purchaseButton}`}>
              <button onClick = {buyNFT}>Canjear</button>
              <BsCreditCard2FrontFill className={style.buttonIcon}/>
              <span className='text-lg font-semibold cursor-pointer'>Adquiérelo!!</span>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default NFTSaleInfo