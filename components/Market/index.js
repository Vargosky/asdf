import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { collectionData } from '../../static/collections'
import Image from 'next/image'
import { useRouter } from 'next/router'


const TopNavbarLayout = dynamic(()=>import('../../layouts/TopNavbarLayout'),{suspense:true});
const Listings = dynamic(()=>import('./Listings'),{suspense:true});
//const InfoContract = dynamic(()=>import('../myComponent/infoContract'),{suspense:true});


const style = {
  wrapper: `flex flex-col dark:bg-[#202226] relative flex flex-col`,
  container: `relative flex h-[450px] flex-col`,
  bannerContainer: `absolute h-1/3 w-full`,
  banner: `rounded-t-lg object-cover`,
  collectionInfoWrapper: `absolute inset-0 top-1/3 z-10 h-2/3 -translate-y-16`,
  collectionInfoContainer: `flex flex-col items-center space-y-4`,
  collectionLogoContainer: `flex items-center justify-center rounded-full border-4 border-gray-100`,
  collectionLogo: `rounded-full object-cover`,
  collectionInfo: `flex flex-col items-center space-y-6`,
  title: `text-4xl font-bold`,
  creatorInfoContainer: `flex items-center space-x-1`,
  creator: `text-sm font-medium text-gray-500`,
  creatorName: `cursor-pointer text-blue-500`,
  verified: `h-5 w-5 text-blue-500`,
  descriptionContainer: `max-w-3xl py-2 px-10 text-center text-gray-500`,
}

export default function Home({address,setAddress}) {


  const [collection] = useState(collectionData)
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (!address) router.replace('/')
  }, [address])

  useEffect(() => {
    if (!slug) return
    ;(async () => {
      const collectionData = await getCollection();

      setCollection(collectionData)
    })()
  }, [slug])

  return (
    <Suspense fallback={'Loading...'}>
      
      <TopNavbarLayout>
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.bannerContainer}>
              <Suspense fallback={'Loading...'}>
              <Image
                className={style.banner}
                src={collection?.banner_image_url}
                layout='fill'
                alt='banner'
              />
              </Suspense>
            </div>

            <div className={style.collectionInfoWrapper}>
              <div className={style.collectionInfoContainer}>
                <div className={style.collectionLogoContainer}>
                <Suspense fallback={'Loading...'}>
                  <Image
                    className={style.collectionLogo}
                    src={collection?.image_url}
                    height={128}
                    width={128}
                    alt='logo'
                  />
                  /</Suspense>
                </div>

                <div className={style.collectionInfo}>
                  <div className={style.title}>{collection?.name}</div>

                  <div className={style.creatorInfoContainer}>
                    <div className={style.creator}>
                      Created by{'ReLife'}
                      <span className={style.creatorName}>
                        {collection?.creator}
                      </span>
                    </div>

                  </div>
                </div>
                {/* {console.log(collection?.stats)} */}
                {/* <CollectionStats stats={collection?.stats} /> */}
                {/* {<InfoContract/>} */}
                <div className={style.descriptionContainer}>
                  {collection?.description}
                </div>
              </div>
            </div>
          </div>

          <Listings address={address} setAddress={setAddress}/>
        </div>

      </TopNavbarLayout>
      
    </Suspense>
  )
}
