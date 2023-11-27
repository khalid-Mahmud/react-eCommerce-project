import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai'
import { RiHeartLine, RiShareForwardFill } from 'react-icons/ri'



const FlashSaleProducts = (props) => {

    const { grid } = props;

    return (
        <>
          <div className={`${grid === null ? "grid-layout" : `grid-layout-${grid}`}`}>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/polo1.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/polo2.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/polo3.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/polo4.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>

            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/wo1.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/wo2.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/wo3.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/wo4.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>

            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/polo1.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/polo2.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/polo3.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/polo4.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>

            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/wo1.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/wo2.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/wo3.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
            <div className='pro-card'>
                <div className='pr-dis'>-20%</div>
                <div className='pr-ics'>
                    <Link><RiHeartLine title='Add to wishlist' /></Link>
                    <div className='pr-an-ics tr-1'>
                        <Link><RiShareForwardFill title='Share this product' /></Link>
                    </div>
                    <div className='pr-an-ics tr-2'>
                        <Link><AiOutlineShoppingCart title='Add to cart' /></Link>
                    </div>
                </div>
                <div>
                    <Link to='/productDetails'>
                        <img src="images/wo4.png" alt="polo" className='' />
                    </Link>
                </div>
                <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='m-0'><del>$99</del><span className='c-pri'>$</span>79.2</p>
                        <p className='m-0'><AiOutlineStar className='c-pri' />5</p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default FlashSaleProducts
