import React, { useEffect, useRef, useState } from 'react'
import {HiOutlineChevronDown} from 'react-icons/hi'
import { Link } from 'react-router-dom';


const WoPrMenu = (props) => {

  const {menu,subMenu,id} = props;
  const [toggle, setToggle] = useState(false);
  const windowWidth = useRef(window.innerWidth);


  useEffect(()=>{
    if(id === 0 && windowWidth.current >= 992){
      setToggle(true)
    }
  },[id])



  return (
    <>
      <div className='side-me-item'>
        <div>
          <h6 onClick={()=>{setToggle(!toggle)}}><span>{menu}</span> <HiOutlineChevronDown/></h6>
        </div>
        {toggle && <div className='d-flex flex-column mt-3'>
          {subMenu.map((meData)=>{
          const {id,menu,category} = meData;      
          return <Link to={`/womensFashion/${category}`} key={id} className='mb-2'>{menu}</Link>        
        })}
        </div>}
      </div>
    </>
  )
}

export default WoPrMenu
