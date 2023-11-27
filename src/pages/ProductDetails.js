import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { Container, Row, Col } from 'react-bootstrap'
import { Magnifier } from '@ricarso/react-image-magnifiers'
import {Link} from 'react-router-dom'
import {AiOutlineStar,AiOutlineShoppingCart,AiOutlineDollar,AiOutlineCheckCircle,AiOutlineUser} from 'react-icons/ai'
import {RiHeartLine,RiShareForwardFill,RiQuestionAnswerLine,RiQuestionAnswerFill} from 'react-icons/ri'
import Slider from "react-slick";
import {SlLocationPin,SlLike,SlDislike} from 'react-icons/sl'
import {HiOutlineTruck,HiChevronRight,HiOutlineChevronDown} from 'react-icons/hi'





 

const ProductDetails = () => {


  //images section
  const descImgs = [
    {id:0,src:'images/polo1.png'},
    {id:1,src:'images/polo2.png'},
    {id:2,src:'images/polo3.png'},
    {id:3,src:'images/polo4.png'}
  ]

  const [imgValue, setimgValue] = useState(descImgs[0])
  const handleClick=(index)=>{
    const slider = descImgs[index]
    setimgValue(slider)
  }

  //cart count
  const [count, setCount] = useState(1);

  //slider
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  //toggle side ques
  const [toggle, setToggle] = useState(false);

  //like toggle
  
  
    const ratingChanged = (newRating) => {
      console.log(newRating)
    }



  return (
    
    <>
      <section className='py-5'>
        <Container>
          <Row>
            <Col lg={6}>
              <Magnifier imageSrc={imgValue.src} className='pr-dr-des-ic'/>
              <div className='der-ic-cont'>
                {descImgs.map((data,i)=>{
                  return <div className='pr-dr-ic' key={data.id}>
                      <img src={data.src} alt='img' onClick={()=>handleClick(i)} className='pr-dr-des-img' />
                    </div>                   
                })}
              </div>
            </Col>
            <Col lg={6}>
              <h1 className='pd-ti'>Ralph Lauren Men's Sport Short Ultra Dry Raglan Sleeve Polo Shirt</h1>
              <div className='d-flex gap-10 align-items-center mb-3'>
                <ReactStars count={5} onChange={ratingChanged} size={24} color2={'#ed7a5d'} edit={false} value={4.5} />
                <div><Link>(<span className='c-pri'>50</span> reviews)</Link></div>
                <a href="#review-sec" className='c-pri'>write a review</a>
              </div>
              <div>
                <h3 className='mb-3'><span className="c-pri me-1">$</span>99</h3>
                <p><b>Brand :</b> LAUREN</p>
                <p><b>Category :</b> T-Shirt</p>
                <p><b>Availablity :</b> In Stock</p>
                <div className='d-flex align-items-center gap-10 mb-3'>
                  <p className='m-0'><b>Colors :</b> </p>
                  <div className='pr-cls-con'>
                    <span className='pr-cls bg-secondary'></span>
                    <span className='pr-cls bg-danger'></span>
                    <span className='pr-cls bg-primary'></span>
                    <span className='pr-cls bg-dark'></span>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10 mb-3'>
                  <p className='m-0'><b>Size :</b></p>
                  <div className='pr-strs-con'>
                    <span className='pr-strs'>S</span>
                    <span className='pr-strs'>M</span>
                    <span className='pr-strs'>L</span>
                    <span className='pr-strs'>XL</span>
                    <span className='pr-strs'>XXL</span>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10 mb-3'>
                  <p className='m-0'><b>Quantity :</b></p>
                  <div className='d-flex align-items-center gap-10'>
                    <button className='count-btn' onClick={() => setCount(count - 1)} disabled={count < 2 ? true : false}>-</button>
                    <div className='pr-q-co'>{count}</div>
                    <button className='count-btn' onClick={() => setCount(count + 1)}>+</button>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15 mb-4'>
                  <div className='cust-btn'>Buy now</div>
                  <div className='cust-btn'>Add to cart</div> 
                </div>              
              </div>
              <hr />
              <div className=''>
                <div>
                  <p><b>Delivery</b></p>
                </div>
                <div className='prd-de-sec'>
                  <Row>
                    <Col lg={6}>
                      <div className='del-me-con'>
                        <div className='del-me-inn'>
                          <div className='del-me-svg'><SlLocationPin/></div>
                          <div>Khulna, Khulna - Town, Khulna Sadar</div>
                        </div>
                        <div><Link className='c-pri' title='select to see standard delivery charges'>select</Link></div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className='del-me-con'>
                        <div className='del-me-inn'>
                          <div className='del-me-svg'>
                            <HiOutlineTruck/>
                          </div>
                          <div>
                            Standard Delivery <br />(5-7days)
                          </div>
                        </div>
                        <div className='c-pri'>$50</div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className='del-me-con'>
                        <div className='del-me-inn'>
                          <div className='del-me-svg'><AiOutlineDollar/></div>
                          <div>Cash on delivery</div>
                        </div>
                        <div className='c-pri'>available</div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className='del-me-con'>
                        <div className='del-me-inn'>
                          <div className='del-me-svg'><AiOutlineDollar/></div>
                          <div>Free delivery</div>
                        </div>
                        <div className='c-gray'>unavailable</div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className=''>
                <div>
                  <p><b>Service</b></p>
                </div>
                <div>
                  <ul className='pd-ser-ul'>
                    <li><HiChevronRight/> <span>7 Days Returns (change of mind not applicable)</span></li>
                    <li><HiChevronRight/> <span>1 Year official warranty</span></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className='pt-5'>
                <h3 className='mb-3'>About this item</h3>
                <p>S PEN INCLUDED: The included S Pen makes it easier than ever to write notes and personalize photos and videos, all without needing to charge. The S Pen attaches magnetically right to your tablet and is always ready to go.</p>
                <p>SLIM METAL DESIGN: Take this sleek, lightweight tablet anywhere. Its slim design slips right into your bag and comes in your choice of stylish colors.</p>
                <p>ENTERTAINMENT READY: A vivid, crystal clear display draws you into content while dual speakers with sound by AKG supply spacious Dolby Atmos surround sound. With discovery powered by Spotify, setting a personal soundtrack to your waking moments has never been easier.</p>
                <p>LONG-LASTING BATTERY: A long-lasting battery lets you stream for up to 12 hours¹ on a single charge. The fast-charging USB-C port allows you to quickly get back to where you left off when you need to recharge.</p>
                <p>ONE UI CONNECTIVITY: Sync up multiple devices and double down on your todos with Galaxy Tab S6 Lite. Use it as a hotspot and create share-ready content all at once.</p>
                <p className='m-0'>DEX EXPERIENCE: Get more done each day by turning your Galaxy devices into an expanded desktop workstation. Send multiple windows to the devices of your choice and control them all from your Galaxy Tab S6 Lite like a boss.² ¹Battery power consumption depends on usage patterns. Results may vary. ²DeX will be available on R OS or above.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='py-4'>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className='mb-4'>Products related to this item</h2>
            </Col>
            <Col lg={12}>
              <Slider {...settings1} className='fl-pr-sli'>
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

      <section className='py-4'>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className='mb-4'>Check the reviews here </h2>
            </Col>
            <Col lg={3}>
              <div className='rev-rat-side'>
                <div>
                  <div className='re-ma-co-pd'>
                    <AiOutlineStar className='to-pr-ra-ic'/> <p className='m-0'><span className='to-pr-rat'>4.5</span><span className='ac-rat'>/5</span></p>
                  </div>
                  <p className='m-0'>( Based on all <span className="c-pri">50</span> reviews )</p>
                </div>
                <div>
                  <div className='re-stars-cont'>
                    <span className='sta-sta'>5 </span>star <ReactStars count={5} size={24} color2={'#ed7a5d'} edit={false} value={5} /> <span className='r-st-co'>45</span>
                  </div>
                  <div className='re-stars-cont'>
                    <span className='sta-sta'>4 </span>star <ReactStars count={5} size={24} color2={'#ed7a5d'} edit={false} value={4} /> <span className='r-st-co'>5</span>
                  </div>
                  <div className='re-stars-cont'>
                    <span className='sta-sta'>3 </span>star <ReactStars count={5} size={24} color2={'#ed7a5d'} edit={false} value={3} /> <span className='r-st-co'>0</span>
                  </div>
                  <div className='re-stars-cont'>
                    <span className='sta-sta'>2 </span>star <ReactStars count={5} size={24} color2={'#ed7a5d'} edit={false} value={2} /> <span className='r-st-co'>0</span>
                  </div>
                  <div className='re-stars-cont'>
                    <span className='sta-sta'>1 </span>star <ReactStars count={5} size={24} color2={'#ed7a5d'} edit={false} value={1} /> <span className='r-st-co'>0</span>
                  </div>
                </div>
                <div>
                  <Link className='c-pri tq-link mb-3' onClick={()=>{setToggle(!toggle)}}>How customer reviews and ratings works?</Link>
                  {toggle && (
                    <>
                      <p>Customer Reviews, including Product Star Ratings help customers to learn more about the product and decide whether it is the right product for them.</p>
                      <p>To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average. Instead, our system considers things like how recent a review is and if the reviewer bought the item from us. It also analyzed reviews to verify trustworthiness.</p>
                    </>
                  )}               
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div>
                <h4 className='mb-3'>All reviews</h4>
                <div className='d-flex flex-column gap-15 pb-4'>
                  <div className='rev-main'>
                    <div className='rev-tb'>
                      <div className='rev-st'>
                        <div className='rev-user'>
                          <AiOutlineUser/>
                          <p className="m-0">Mahmud</p>
                        </div>
                        rated
                        <div className='rev-rat'>
                          <AiOutlineStar/>
                          <span>5</span>
                        </div>
                      </div>
                      <div className='rev-cp'>
                        <AiOutlineCheckCircle className='c-pri'/>
                        <p className="m-0">certified purchase</p>
                      </div>
                    </div>
                    <div>
                      <h5 className='m-0'>It's a top of the line polo t-shirt.</h5>
                    </div>
                    <div>
                      <img src="images/tab.jpg" alt="tab" width='80' height='60' />
                      <img src="images/tab1.jpg" alt="tab" width='80' height='60' />
                    </div>
                    <div>
                      <p className="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis temporibus incidunt sed error quasi ad animi modi quia consectetur illo voluptate voluptates, ipsam eligendi perferendis suscipit fugiat dignissimos? Eos, facilis.Lorem ipsum dolor sit, amet consectetur adipisicing elit <Link className='c-pri'>read more...</Link></p>
                    </div>
                    <div className='rev-bb'>
                      <div className='re-bb-ints'>
                        <div className='re-int'><SlLike className='c-pri' /><span>15</span></div>
                        <div className='re-int'><SlDislike className='c-pri' /><span>4</span></div>
                        <div><HiOutlineChevronDown className='c-pri' /></div>
                      </div>
                      <div>
                        <p className="m-0">Khulna, Bangladesh - 27/02/2023</p>
                      </div>
                    </div>
                  </div>
                  <div className='rev-main'>
                    <div className='rev-tb'>
                      <div className='rev-st'>
                        <div className='rev-user'>
                          <AiOutlineUser/>
                          <p className="m-0">Mahmud</p>
                        </div>
                        rated
                        <div className='rev-rat'>
                          <AiOutlineStar/>
                          <span>5</span>
                        </div>
                      </div>
                      <div className='rev-cp'>
                        <AiOutlineCheckCircle className='c-pri'/>
                        <p className="m-0">certified purchase</p>
                      </div>
                    </div>
                    <div>
                      <h5 className='m-0'>It's a top of the line polo t-shirt.</h5>
                    </div>
                    <div>
                      <img src="images/tab.jpg" alt="tab" width='80' height='60' />
                      <img src="images/tab1.jpg" alt="tab" width='80' height='60' />
                    </div>
                    <div>
                      <p className="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis temporibus incidunt sed error quasi ad animi modi quia consectetur illo voluptate voluptates, ipsam eligendi perferendis suscipit fugiat dignissimos? Eos, facilis.Lorem ipsum dolor sit, amet consectetur adipisicing elit <Link className='c-pri'>read more...</Link></p>
                    </div>
                    <div className='rev-bb'>
                      <div className='re-bb-ints'>
                        <div className='re-int'><SlLike className='c-pri' /><span>15</span></div>
                        <div className='re-int'><SlDislike className='c-pri' /><span>4</span></div>
                        <div><HiOutlineChevronDown className='c-pri' /></div>
                      </div>
                      <div>
                        <p className="m-0">Khulna, Bangladesh - 27/02/2023</p>
                      </div>
                    </div>
                  </div>
                  <div className='rev-main'>
                    <div className='rev-tb'>
                      <div className='rev-st'>
                        <div className='rev-user'>
                          <AiOutlineUser/>
                          <p className="m-0">Mahmud</p>
                        </div>
                        rated
                        <div className='rev-rat'>
                          <AiOutlineStar/>
                          <span>5</span>
                        </div>
                      </div>
                      <div className='rev-cp'>
                        <AiOutlineCheckCircle className='c-pri'/>
                        <p className="m-0">certified purchase</p>
                      </div>
                    </div>
                    <div>
                      <h5 className='m-0'>It's a top of the line polo t-shirt.</h5>
                    </div>
                    <div>
                      <img src="images/tab.jpg" alt="tab" width='80' height='60' />
                      <img src="images/tab1.jpg" alt="tab" width='80' height='60' />
                    </div>
                    <div>
                      <p className="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis temporibus incidunt sed error quasi ad animi modi quia consectetur illo voluptate voluptates, ipsam eligendi perferendis suscipit fugiat dignissimos? Eos, facilis.Lorem ipsum dolor sit, amet consectetur adipisicing elit <Link className='c-pri'>read more...</Link></p>
                    </div>
                    <div className='rev-bb'>
                      <div className='re-bb-ints'>
                        <div className='re-int'><SlLike className='c-pri' /><span>15</span></div>
                        <div className='re-int'><SlDislike className='c-pri' /><span>4</span></div>
                        <div><HiOutlineChevronDown className='c-pri' /></div>
                      </div>
                      <div>
                        <p className="m-0">Khulna, Bangladesh - 27/02/2023</p>
                      </div>
                    </div>
                  </div>
                  <div className='rev-main'>
                    <div className='rev-tb'>
                      <div className='rev-st'>
                        <div className='rev-user'>
                          <AiOutlineUser/>
                          <p className="m-0">Mahmud</p>
                        </div>
                        rated
                        <div className='rev-rat'>
                          <AiOutlineStar/>
                          <span>5</span>
                        </div>
                      </div>
                      <div className='rev-cp'>
                        <AiOutlineCheckCircle className='c-pri'/>
                        <p className="m-0">certified purchase</p>
                      </div>
                    </div>
                    <div>
                      <h5 className='m-0'>It's a top of the line polo t-shirt.</h5>
                    </div>
                    <div>
                      <img src="images/tab.jpg" alt="tab" width='80' height='60' />
                      <img src="images/tab1.jpg" alt="tab" width='80' height='60' />
                    </div>
                    <div>
                      <p className="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis temporibus incidunt sed error quasi ad animi modi quia consectetur illo voluptate voluptates, ipsam eligendi perferendis suscipit fugiat dignissimos? Eos, facilis.Lorem ipsum dolor sit, amet consectetur adipisicing elit <Link className='c-pri'>read more...</Link></p>
                    </div>
                    <div className='rev-bb'>
                      <div className='re-bb-ints'>
                        <div className='re-int'><SlLike className='c-pri' /><span>15</span></div>
                        <div className='re-int'><SlDislike className='c-pri' /><span>4</span></div>
                        <div><HiOutlineChevronDown className='c-pri' /></div>
                      </div>
                      <div>
                        <p className="m-0">Khulna, Bangladesh - 27/02/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pb-4'><h4 className='mb-0'>pagination</h4></div>
              <div>
                <form action="">
                  <input type="text" name='title' />
                  <textarea name="" id="" cols="" rows="5" style={{width:"100%",}}></textarea>
                  <ReactStars count={5} size={24} color2={'#ed7a5d'} edit={true} value={5} onChange={ratingChanged} />
                  <label htmlFor="myfile">Select files:</label>
                  <input type="file" id="myfile" name="myfile" multiple></input>
                  <input type="submit"></input>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='py-4'>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className='mb-4'>Ask question about this product</h2>
              <div className='ques-main-co pb-4'>
                <div className='ques-co'>
                  <div className='rev-tb'>
                    <div className='rev-st'>
                      <div className='rev-user'>
                        <AiOutlineUser/>
                        <p className="m-0">Mahmud</p>
                      </div>
                    </div>
                    <div className='rev-cp'>
                      <AiOutlineCheckCircle className='c-pri'/>
                      <p className="m-0">certified buyer</p>
                    </div>
                  </div>
                  <div className='ques'><RiQuestionAnswerFill className='c-pri'/> - <span>Pubg 90fps support?</span></div>
                  <div className='answ'><RiQuestionAnswerLine className='c-pri'/> - <span>No</span></div>
                  <div className='rev-bb'>
                    <div className='re-bb-ints'>
                      <div className='re-int'><SlLike className='c-pri' /><span>15</span></div>
                      <div className='re-int'><SlDislike className='c-pri' /><span>4</span></div>
                      <div><HiOutlineChevronDown className='c-pri' /></div>
                    </div>
                    <div>
                      <p className="m-0">Khulna, Bangladesh - 27/02/2023</p>
                    </div>
                  </div>
                </div>
                <div className='ques-co'>
                  <div className='rev-tb'>
                    <div className='rev-st'>
                      <div className='rev-user'>
                        <AiOutlineUser/>
                        <p className="m-0">Shejan</p>
                      </div>
                    </div>
                    <div className='rev-cp'>
                      <AiOutlineCheckCircle className='c-pri'/>
                      <p className="m-0">certified buyer</p>
                    </div>
                  </div>
                  <div className='ques'><RiQuestionAnswerFill className='c-pri'/> - <span>AirPods included in the box?</span></div>
                  <div className='answ'><RiQuestionAnswerLine className='c-pri'/> - <span>No</span></div>
                  <div className='rev-bb'>
                    <div className='re-bb-ints'>
                      <div className='re-int'><SlLike className='c-pri' /><span>15</span></div>
                      <div className='re-int'><SlDislike className='c-pri' /><span>4</span></div>
                      <div><HiOutlineChevronDown className='c-pri' /></div>
                    </div>
                    <div>
                      <p className="m-0">Khulna, Bangladesh - 27/02/2023</p>
                    </div>
                  </div>
                </div>               
                <div className='ques-co'>
                  <div className='rev-tb'>
                    <div className='rev-st'>
                      <div className='rev-user'>
                        <AiOutlineUser/>
                        <p className="m-0">Khalid</p>
                      </div>
                    </div>
                    <div className='rev-cp'>
                      <AiOutlineCheckCircle className='c-pri'/>
                      <p className="m-0">certified buyer</p>
                    </div>
                  </div>
                  <div className='ques'><RiQuestionAnswerFill className='c-pri'/> - <span>Do we have to buy an apple pencil also or get it  inbox?</span></div>
                  <div className='answ'><RiQuestionAnswerLine className='c-pri'/> - <span>Apple Pencil is not included in box, have to buy separately.</span></div>
                  <div className='rev-bb'>
                    <div className='re-bb-ints'>
                      <div className='re-int'><SlLike className='c-pri' /><span>15</span></div>
                      <div className='re-int'><SlDislike className='c-pri' /><span>4</span></div>
                      <div><HiOutlineChevronDown className='c-pri' /></div>
                    </div>
                    <div>
                      <p className="m-0">Khulna, Bangladesh - 27/02/2023</p>
                    </div>
                  </div>
                </div>
                <div className='ques-co'>
                  <div className='rev-tb'>
                    <div className='rev-st'>
                      <div className='rev-user'>
                        <AiOutlineUser/>
                        <p className="m-0">Sadman</p>
                      </div>
                    </div>
                    <div className='rev-cp'>
                      <AiOutlineCheckCircle className='c-pri'/>
                      <p className="m-0">certified buyer</p>
                    </div>
                  </div>
                  <div className='ques'><RiQuestionAnswerFill className='c-pri'/> - <span>What is there inside the box man?</span></div>
                  <div className='answ'><RiQuestionAnswerLine className='c-pri'/> - <span>ipad mini 6,20 watt charger and type c to c charger, apple logo sticker(2)and manual. that's all</span></div>
                  <div className='rev-bb'>
                    <div className='re-bb-ints'>
                      <div className='re-int'><SlLike className='c-pri' /><span>15</span></div>
                      <div className='re-int'><SlDislike className='c-pri' /><span>4</span></div>
                      <div><HiOutlineChevronDown className='c-pri' /></div>
                    </div>
                    <div>
                      <p className="m-0">Khulna, Bangladesh - 27/02/2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pb-4'><h4 className='mb-0'>pagination</h4></div>
              <div className=''>
                <form action="">
                  <label htmlFor="myfile">Write your question here</label>
                  <textarea name="" id="" cols="" rows="3" style={{width:"100%",}}></textarea>
                  <input type="submit"></input>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-4 pb-5'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className='mb-0'>You might be interested in</h2>
                <Link className='cust-btn'>See more</Link>
              </div>
            </Col>
            <Col lg={12}>
              <Slider {...settings1} className='fl-pr-sli'>
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
    </>
  )
}

export default ProductDetails;
