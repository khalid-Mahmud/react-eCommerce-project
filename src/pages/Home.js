import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import {AiOutlineStar,AiOutlineShoppingCart} from 'react-icons/ai'
import {RiCustomerService2Line,RiHeartLine,RiShareForwardFill} from 'react-icons/ri'
import {HiOutlineCreditCard,HiOutlineGift,HiOutlineTruck} from 'react-icons/hi'
import FlashCountDown from '../components/FlashCountDown/FlashCountDown';





const Home = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000

  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <>
      <section className="home-wrapper-1 py-4">
        <Container>
          <Row>
            <Col lg={6}>
              <Slider {...settings} className='he-ma-sli'>
                <div className="main-banner">
                  <img src="images/mb1.png" className='img-fluid rounded-3' alt="main-banner-img" />
                  <div className="main-banner-content">
                    <h6 className='bs-tag'>best selling</h6>
                    <h5>Lacoste Polo T-Shirt</h5>
                    <p>Lacoste Men's Sport Short Sleeve Polo T-Shirt</p>
                    <Link className='cust-btn'>Buy now</Link>
                  </div>
                </div>
                <div className="main-banner">
                  <img src="images/mb2.png" className='img-fluid rounded-3' alt="main-banner-img" />
                  <div className="main-banner-content">
                    <h6 className='bs-tag'>best selling</h6>
                    <h5>Lauren Polo T-Shirt</h5>
                    <p>Lauren Men's Sport Short Sleeve Polo T-Shirt</p>
                    <Link className='cust-btn'>Buy now</Link>
                  </div>
                </div>
                <div className="main-banner">
                  <img src="images/mb3.png" className='img-fluid rounded-3' alt="main-banner-img" />
                  <div className="main-banner-content">
                    <h6 className='bs-tag'>best selling</h6>
                    <h5>Lauren Polo T-Shirt</h5>
                    <p>Lauren Men's Sport Short Sleeve Polo T-Shirt</p>
                    <Link className='cust-btn'>Buy now</Link>
                  </div>
                </div>
                <div className="main-banner">
                  <img src="images/mb4.png" className='img-fluid rounded-3' alt="main-banner-img" />
                  <div className="main-banner-content">
                    <h6 className='bs-tag'>best selling</h6>
                    <h5>Lauren Polo T-Shirt</h5>
                    <p>Lauren Men's Sport Short Sleeve Polo T-Shirt</p>
                    <Link className='cust-btn'>Buy now</Link>
                  </div>
                </div>
              </Slider>             
            </Col>
            <Col lg={6}>
              <div className='small-banner-container'>
                <div className="small-banner">
                  <img src="images/mb4.png" className='img-fluid rounded-3' alt="main-banner-img" />
                  <div className="small-banner-content">
                    <h6 className='bs-tag'>best selling</h6>
                    <h5>Lauren Polo T-Shirt</h5>
                    <Link className='cust-btn'>Buy now</Link>
                  </div>
                </div>

                <div className="small-banner">
                  <img src="images/mb3.png" className='img-fluid rounded-3' alt="main-banner-img" />
                  <div className="small-banner-content">
                    <h6 className='bs-tag'>best selling</h6>
                    <h5>Lacoste Polo T-Shirt</h5>
                    <Link className='cust-btn'>Buy now</Link>
                  </div>
                </div>

                <div className="small-banner">
                  <img src="images/mb2.png" className='img-fluid rounded-3' alt="main-banner-img" />
                  <div className="small-banner-content">
                    <h6 className='bs-tag'>best selling</h6>
                    <h5>Lacoste Polo T-Shirt</h5>
                    <Link className='cust-btn'>Buy now</Link>
                  </div>
                </div>

                <div className="small-banner">
                  <img src="images/mb1.png" className='img-fluid rounded-3' alt="main-banner-img" />
                  <div className="small-banner-content">
                    <h6 className='bs-tag'>best selling</h6>
                    <h5>Lauren Polo T-Shirt</h5>
                    <Link className='cust-btn'>Buy now</Link>
                  </div>
                </div>
              </div>               
            </Col>
          </Row>
        </Container>
      </section>

      <section className='home-wrapper-2 py-4'>
        <Container>
          <Row className='mt-4'>
            <Col lg={3} md={6} xs={6}>
              <div className='hw2wi d-flex gap-15 align-items-center'>
                <div>
                  <HiOutlineTruck className='hw-i'/>
                </div>
                <div>
                  <h6 className="hw2-wi-ti">Free shippings</h6>
                  <p className='m-0'>From all orders over $100</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} xs={6}>
              <div className='hw2wi d-flex gap-15 align-items-center'>
                <div>
                  <HiOutlineGift className='hw-i'/>
                </div>
                <div>
                  <h6 className="hw2wi-ti">Surprise gifts</h6>
                  <p className='m-0'>Save upto 25% off</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} xs={6}>
              <div className='hw2wi d-flex gap-15 align-items-center'>
                <div>
                  <HiOutlineCreditCard className='hw-i'/>
                </div>
                <div>
                  <h6 className="hw2-wi-ti">Secure payments</h6>
                  <p className='m-0'>100% Protected payments</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} xs={6}>
              <div className='hw2wi d-flex gap-15 align-items-center'>
                <div>
                  <RiCustomerService2Line className='hw-i'/>
                </div>
                <div>
                  <h6 className="hw2-wi-ti">24/7 Support</h6>
                  <p className='m-0'>We provide 24/7 support</p>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className='hw-2-items my-5'>
                <Link to='/mensFashion/tShirts'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>T-Shirt</h6>
                    <p className='m-0'>150 items</p>
                  </div>
                  <div>
                    <img src="images/polo.png" alt="" />
                  </div>
                  </div>
                </Link>               
                <Link to='/mensFashion/sherwanis'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Sherwani</h6>
                    <p className='m-0'>50 items</p>
                  </div>
                  <div>
                    <img src="images/sherwani.png" alt="" />
                  </div>
                  </div>
                </Link>
                <Link to='/mensFashion/jackets'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Jacket</h6>
                    <p className='m-0'>80 items</p>
                  </div>
                  <div>
                    <img src="images/jacket.png" alt="" />
                  </div>
                  </div>
                </Link>
                <Link to='/mensFashion/polos'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Polo</h6>
                    <p className='m-0'>180 items</p>
                  </div>
                  <div>
                    <img src="images/polo.png" alt="" />  
                  </div>
                  </div>
                </Link>
                <Link to='/mensFashion/jeans'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Jeans</h6>
                    <p className='m-0'>160 items</p>
                  </div>
                  <div>
                    <img src="images/jeans.png" alt="" />
                  </div>
                  </div>
                </Link>
                <Link to='/mensFashion/formalPants'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Formal Pants</h6>
                    <p className='m-0'>150 items</p>
                  </div>
                  <div>
                    <img src="images/formalpant.png" alt="" />
                  </div>
                  </div>
                </Link>
                <Link to='/mensFashion/sportsShoes'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Sports Shoes</h6>
                    <p className='m-0'>100 items</p>
                  </div>
                  <div>
                    <img src="images/sportshoe.png" alt="" />
                  </div>
                  </div>
                </Link>
                <Link to='/mensFashion/sneakers'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Sneakers</h6>
                    <p className='m-0'>120 items</p>
                  </div>
                  <div>
                    <img src="images/sneaker.png" alt="" />
                  </div>
                  </div>
                </Link>
                <Link to='/mensFashion/boots'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Boots</h6>
                    <p className='m-0'>80 items</p>
                  </div>
                  <div>
                    <img src="images/boot.png" alt="" />
                  </div>
                  </div>
                </Link>
                <Link to='/mensFashion/blazers'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Blazers</h6>
                    <p className='m-0'>50 items</p>
                  </div>
                  <div>
                    <img src="images/blazer.png" alt="" />
                  </div>
                  </div>
                </Link> 
                <Link to='/mensFashion/sherwanis'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>Sherwani</h6>
                    <p className='m-0'>50 items</p>
                  </div>
                  <div>
                    <img src="images/sherwani.png" alt="" />
                  </div>
                  </div>
                </Link> 
                <Link to='/mensFashion/tShirts'>
                  <div className='hw-2it'>
                  <div>
                    <h6 className='c-pri'>T-Shirt</h6>
                    <p className='m-0'>150 items</p>
                  </div>
                  <div>
                    <img src="images/polo.png" alt="" />
                  </div>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-wrapper-3 py-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-15">
                <div className="d-flex gap-15 align-items-center">
                  <h2 className='m-0'>Flash sales</h2>
                  <FlashCountDown/>
                </div>
                <Link to='/flashSales' className='cust-btn'>Shop more</Link>
              </div>
            </Col>
            <Col lg={12}>
              <Slider {...settings1} className='fl-pr-sli'>
                <div className='pro-card m-0'>
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

                <div className='pro-card m-0'>
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

                <div className='pro-card m-0'>
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

                <div className='pro-card m-0'>
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

                <div className='pro-card m-0'>
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

                <div className='pro-card m-0'>
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
              </Slider>            
            </Col>           
          </Row>
        </Container>
      </section>

      <section className="home-wrapper-4 py-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-15">
                <h2 className='m-0'>Best selling products</h2>
                <Link to='/bestSellingProducts' className='cust-btn'>Shop more</Link>
              </div>
            </Col>
            <Col lg={12}>
              <Slider {...settings2} className='fl-pr-sli'>
                <div className='pro-card m-0'>
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
                    <Link  to='/productDetails'>
                      <img src="images/polo4.png" alt="polo4" className='' />
                    </Link>
                  </div>
                  <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lacoste</span>
                    <Link  to='/productDetails'><h5 className='m-0'>Lacoste Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='m-0'><span className='c-pri'>$</span>99</p>
                      <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                    </div>
                  </div>
                </div>
                <div className='pro-card m-0'>
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
                      <img src="images/polo2.png" alt="polo" className='' />
                    </Link>
                  </div>
                  <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='m-0'><span className='c-pri'>$</span>99</p>
                      <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                    </div>
                  </div>
                </div>
                <div className='pro-card m-0'>
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
                    <Link  to='/productDetails'>
                      <img src="images/polo1.png" alt="polo4" className='' />
                    </Link>
                  </div>
                  <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lacoste</span>
                    <Link  to='/productDetails'><h5 className='m-0'>Lacoste Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='m-0'><span className='c-pri'>$</span>99</p>
                      <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                    </div>
                  </div>
                </div>
                <div className='pro-card m-0'>
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
                      <img src="images/polo2.png" alt="polo" className='' />
                    </Link>
                  </div>
                  <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='m-0'><span className='c-pri'>$</span>99</p>
                      <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                    </div>
                  </div>
                </div>
                <div className='pro-card m-0'>
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
                    <Link  to='/productDetails'>
                      <img src="images/polo3.png" alt="polo4" className='' />
                    </Link>
                  </div>
                  <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lacoste</span>
                    <Link  to='/productDetails'><h5 className='m-0'>Lacoste Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='m-0'><span className='c-pri'>$</span>99</p>
                      <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                    </div>
                  </div>
                </div>
                <div className='pro-card m-0'>
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
                      <img src="images/polo4.png" alt="polo" className='' />
                    </Link>
                  </div>
                  <div className='pr-ca-meta'>
                    <span className='pr-brand'>Lauren</span>
                    <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='m-0'><span className='c-pri'>$</span>99</p>
                      <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                    </div>
                  </div>
                </div>
              </Slider>            
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-wrapper-5 py-4">
        <Container>
          <Row>
            <Col lg={12}><h2 className='mb-4'>Featured products</h2></Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/polo1.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/polo2.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/polo3.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/polo4.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/wo1.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/wo2.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/wo3.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/wo4.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/polo1.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/polo2.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/polo3.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/polo4.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/wo1.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/wo2.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/wo3.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className='pro-card'>
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
                    <img src="images/wo4.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12}><div className="cust-btn mx-auto my-3">Load more</div></Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Home
