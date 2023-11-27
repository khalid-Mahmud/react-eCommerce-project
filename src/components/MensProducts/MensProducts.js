import React, { useEffect,useState } from 'react'
import { MeProCatData } from '../../Data/MeProCatData';
import { Link } from 'react-router-dom';
import {AiOutlineStar,AiOutlineShoppingCart} from 'react-icons/ai'
import {RiHeartLine,RiShareForwardFill} from 'react-icons/ri'






const MensProducts = (props) => {


  const {category,location,grid} = props;

  const [meProducts,setMeProducts] = useState(MeProCatData[0].products);

  useEffect(()=>{
    const meProData = MeProCatData.filter((data)=> data.category === category);

    if(location.pathname === '/mensFashion' ){
      setMeProducts(MeProCatData[0].products)
    }else{
      setMeProducts(meProData[0].products)
    }

  },[category])





  return (
    <>
      <div className={`${grid === null ? "grid-layout": `grid-layout-${grid}`}`}>
        {meProducts.map((cardsData)=>{
          const {id,brand,title,image,price,rating} = cardsData;
          return <div className='pro-card' key={id}>
            <div className='pr-ics'>
              <Link><RiHeartLine title='Add to wishlist'/></Link>
              <div className='pr-an-ics tr-1'>
              <Link><RiShareForwardFill title='Share this product'/></Link>
              </div>
              <div className='pr-an-ics tr-2'>
              <Link><AiOutlineShoppingCart title='Add to cart'/></Link>
              </div>
            </div>
            <div>
              <Link to='/productDetails'>
                <img src={image} alt="polo" className='' />
              </Link>
            </div>
            <div className='pr-ca-meta'>
            <span className='pr-brand'>{brand}</span>
            <Link  to='/productDetails'><h5 className='m-0'>{title}</h5></Link>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='m-0'><span className="c-pri">$</span>{price}</p>
              <p className='m-0'><AiOutlineStar className='c-pri'/>{rating}</p>
            </div>
            </div>
          </div>
        })} 
      </div> 
    </>
  )
}

export default MensProducts
