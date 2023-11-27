import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {AiOutlineStar} from 'react-icons/ai'
import {BiConversation} from 'react-icons/bi'


const TrackOrderDet = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className='fs-2 mb-4'>Order Details</h1>
            </Col>
            <Col lg={3}>
              <div className='pro-card'>
                <div>
                  <Link to='/productDetails'>
                    <img src="/images/polo1.png" alt="polo" className='' />
                  </Link>
                </div>
                <div className='pr-ca-meta mb-3'>
                  <span className='pr-brand'>Lauren</span>
                  <Link  to='/productDetails'><h5 className='m-0'>Lauren Polo T-Shirt</h5></Link>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'><span className='c-pri'>$</span>99</p>
                    <p className='m-0'><AiOutlineStar className='c-pri'/>5</p>
                  </div>
                </div>
                <p><b className='c-pri'>Order no:</b> #62683990</p>
                <p><b className='c-pri'>Placed on:</b> 22:36:31 | 03/28/23</p>
                <p><b className='c-pri'>Location:</b> Khulna, Khulna - Town, Khulna Sadar, Siddiqia Moholla, S.S. College Road</p>
                <p><b className='c-pri'>Delivery type:</b> standard delivery</p>
                <p><b className='c-pri'>Payment:</b> Cash on delivery</p>
              </div>
            </Col>
            <Col lg={9}>
              <div className='or-de-cont'>
                <div className='mb-3'>
                  <h5 className='mb-2'><b className='c-pri'>Delivery process</b></h5>
                  <div className='ste-co'>
                    <div>Step 1 - Your order has been successfully verified.</div>
                    <div>Step 2 - Your order is being prepared.</div>
                    <div>Step 2 - Your package has been packed and is being handed over to a logistics partner(courier service).</div>
                    <div>Step 3 - Your package is arrived at logistics service center (courier service).</div>
                    <div>Step 4 - Your package is out for delivery.</div>
                    <div>Step 4 - Your package is waiting for delivery.</div>
                    <div>Step 5 - Your package has been delivered successfully.</div>
                    <p className='m-0'><Link className='c-pri'><BiConversation/> chat now</Link></p>
                  </div>
                </div>
                <div className='mb-3'>
                  <h5 className='mb-2'><b className='c-pri'>Order summary</b></h5>
                  <div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p>Subtotal:</p>
                      <p><span className='c-pri'>$</span>99</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='m-0'>Delivery fee:</p>
                      <p className='m-0'><span className='c-pri'>$</span>6</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='m-0'>Total:</p>
                      <p className='m-0'><span className='c-pri'>$</span>105</p>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                  <p className='mb-0'><b className='c-pri'>Status:</b> Delivered</p>
                  <Link className='cust-btn'>give a review</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TrackOrderDet
