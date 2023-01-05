import Image from 'next/image'
import imgLogo from '/assets/logoReLife.png'

const style = {
  wrapper: `flex cursor-pointer items-center space-x-3`,
  svgText: `h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src={imgLogo} width={150} height={75} />

    </div>
  )
}

export default Logo
