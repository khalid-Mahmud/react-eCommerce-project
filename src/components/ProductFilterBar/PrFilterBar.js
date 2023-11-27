import React, { useState } from 'react'
import {IoReorderFourOutline,IoReorderThreeOutline,IoReorderTwoOutline,IoRemoveOutline} from 'react-icons/io5'
import {TfiViewGrid} from 'react-icons/tfi'



const PrFilterBar = (props) => {

  const [viewToggle, setViewToggle] = useState(false);


   // view and grid dropdown
   const [grid, setGrid] = useState(null);
  
   const GridFour = () => {
     setGrid(3);
     setViewToggle(false)
   }
   const GridThree = () => {
     setGrid(4);
     setViewToggle(false)
   }
   const GridTwo = () => {
     setGrid(6);
     setViewToggle(false)
   }
   const GridOne = () => {
     setGrid(12);
     setViewToggle(false)
   }

  props.onChildData(grid);



  return (
    <>
      <div className='to-fil-bar'>
        <div className='to-fil-bar-le'>
        <p className="m-0">Short by: </p>
        <div>
          <select name="short-filter" id="short-filter">
          <option value="category">category</option>
          <option value="featured">featured</option>
          <option value="best-selling">best selling</option>
          <option value="low-to-high-price">low to high price</option>
          <option value="high-to-low-price">high to low price</option>
          <option value="newest-by-date">newest by date</option>
          <option value="oldest-by-date">oldest by date</option>
          </select>
        </div>
        <div>
          <select name="color-filter" id="color-filter">
          <option value="color">color</option>
          <option value="black">black</option>
          <option value="blue">blue</option>
          <option value="grey">grey</option>
          <option value="white">white</option>
          <option value="silver">silver</option>
          <option value="yellow">yellow</option>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="purple">purple</option>
          <option value="maroon">maroon</option>
          <option value="multicolor">multicolor</option>
          </select>
        </div>
        <div>
          <select name="size" id="size">
          <option value="size">size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
          <option value="Free">Free</option>
          </select>
        </div>
        </div>
        <div className='to-fil-bar-ri'>
        <div className='gr-vi-btn' onClick={()=>{setViewToggle(!viewToggle)}}><TfiViewGrid className='c-pri'/></div>
          {viewToggle && <div className='vi-cont'>
            <div className='GridFour' onClick={GridFour}><IoReorderFourOutline/></div>
            <div className='GridThree' onClick={GridThree}><IoReorderThreeOutline/></div>
            <div className='GridTwo' onClick={GridTwo}><IoReorderTwoOutline/></div>
            <div className='GridOne' onClick={GridOne}><IoRemoveOutline/></div>
          </div>}
        </div>
      </div>
    </>
  )
}

export default PrFilterBar
