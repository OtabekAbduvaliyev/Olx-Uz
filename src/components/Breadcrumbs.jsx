import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
export const Breadcrumbs = () => {
  const arrow = '>'
  const location = useLocation();
  let currentLink = ''
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`
      if(currentLink == '/search'){
        return ''
      }else if(currentLink == '/profile'){
        return ''
      }
      else if(currentLink == '/likedproducts2'){
        return ''
      }
      else if(currentLink == `/productdetail`){
        return ''
      }
      return (
        <div className='mt-[60px]' key={crumb}>
          <Link to={currentLink} className='text-xl font-[600] text-[#2D9596] no-underline hover:no-underline flex items-center gap-[5px] hover:text-[#9AD0C2]'><FaHome /><Link to='/' className='text-xl font-[600] text-[#2D9596] no-underline hover:no-underline flex items-center gap-[5px] hover:text-[#9AD0C2]'>Home</Link> {arrow} {crumb}</Link>
        </div>
      )
    })
  return (
    <nav aria-label="">
      <ol class="max-w-[1090px] m-auto">
        <li class="breadcrumb-item"><a href="#" className='no-underline hover:no-underline'>{crumbs}</a></li>
      </ol>
    </nav>
  )
}
export default Breadcrumbs