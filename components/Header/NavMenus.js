import Link from 'next/link'
import { Suspense } from 'react'
import dynamic from 'next/dynamic.js'



import Login from '../Login/Login'

const style = {
  list: `flex space-x-10`,
  element: `font-semibold text-gray-600 transition-all hover:text-black dark:text-gray-300 hover:dark:text-white cursor-pointer`,
}

const NavMenus = ({ menus }) => {
  return (
    <nav>
      <ul className={style.list}>
        {menus.map((menu, index) => (
          <Link href={menu.href} className = "cursor-pointer" key={index} >
          <li className="cursor-pointer">
          {menu.name}
          </li>
          </Link>

        ))}
      </ul>

    </nav>
  )
}

export default NavMenus
