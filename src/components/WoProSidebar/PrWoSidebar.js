import React, { useEffect, useRef, useState } from 'react'
import { WomensProMenu } from '../../Data/WoPrMenuData'
import WoPrMenu from './WoPrMenu'
import {AiOutlineMenu} from 'react-icons/ai'



const PrWoSidebar = () => {

    const [woProMe] = useState(WomensProMenu)

    const [toggle,setToggle] = useState(false)

    const windowWidth = useRef(window.innerWidth);

    useEffect(()=>{
      if(windowWidth.current >= 992){
        setToggle(true)
      }
    },[toggle])
    
    


  return (
    <>
      <div className='pd-si-me-con'>
        <div className={`${toggle === true ? "mb-3 ps-ti": `mb-0 ps-ti`}`}>
          <h1 className='fs-4 mb-0'>Womens Fashion</h1>
          <AiOutlineMenu className='c-pri' onClick={()=>{setToggle(!toggle)}}/>
        </div>
        {toggle && <div className='pd-si-me-bar'>
          {woProMe.map(mpm => <WoPrMenu key={mpm.id} {...mpm}/>)}     
        </div>}
      </div>
    </>
  )
}

export default PrWoSidebar
