import React, { useEffect, useRef, useState } from 'react'
import { MensProMenu } from '../../Data/MePrMenuData';
import MePrMenu from './MePrMenu';
import {AiOutlineMenu} from 'react-icons/ai'



const PrMeSidebar = () => {
  
  const [menus,setMenus] = useState(MensProMenu);

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
          <h1 className='fs-4 mb-0'>Mens Fashion</h1>
          <AiOutlineMenu className='c-pri' onClick={()=>{setToggle(!toggle)}}/>
        </div>
        {toggle && <div className='pd-si-me-bar'>
          {menus.map(mpm => <MePrMenu key={mpm.id} {...mpm} onClick={()=>{setMenus()}} />)}     
        </div>}
      </div>
    </>
  )
}

export default PrMeSidebar
