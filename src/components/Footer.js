import React from 'react'
import { Container,Row,Col,InputGroup,Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {RiTwitterLine,RiInstagramLine,RiYoutubeLine,RiFacebookLine} from 'react-icons/ri'


const Footer = () => {
  return (
    <>
      <footer className='py-3 mt-5 ft-ne-sec'>
        <Container className='position-relative'>
          <div>
            <img className='ele-gi1' src="images/gift.png" alt="" />
            <img className='ele-gi2' src="images/gift.png" alt="" />
            <img className='ele-gi3' src="images/gift.png" alt="" />
          </div>
          <Row>
            <Col lg={5} className='d-flex flex-column justify-content-center'>
              <h2 className='mb-2 c-pri'>Get <span className="c-pri">20%</span> Off Discount Coupon</h2>
              <p>by subscribing our Newsletter</p>
              <InputGroup>
                <Form.Control
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="sub-new"
                  className='py-1 sub-new-inp'
                />
                <InputGroup.Text id="sub-new f-n">Subscribe</InputGroup.Text>
              </InputGroup>
            </Col>
            <Col lg={7}>
              <div className='nl-coupon'>
                <img src="/images/nl-coupon.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer className='py-4'>
        <Container>
          <Row>
            <Col lg={12} className='mb-4'>
              <div className='brand-co text-center'>
                <Link to='/'><img src="/logo.png" alt="brand logo" className='brand-logo' /></Link>
              </div>
              <hr />
            </Col>
            <Col lg={3} md={6} sm={6} className='ft-col'>
              <h4 className='mb-3 c-pri'>Contact</h4>
              <div className='d-flex flex-column gap-10'>
                <address className='mb-0 '>
                  1259 Freedom,New York, <br /> 
                  United States
                </address>
                <a href="tel:+880 1893630373" className="d-block ">
                  +880 189363037
                </a>
                <a href="mailto:contact@mhmbright.com" className="d-block ">
                  contact@mhmbright.com
                </a>              
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} className='ft-col'>
              <h4 className='mb-3 c-pri'>Information</h4>
              <div className='footer-links d-flex flex-column gap-10'>
                <Link className=''>Privacy policy</Link>
                <Link className=''>Refund policy</Link>
                <Link className=''>Shipping policy</Link>
                <Link className=''>Terms of service</Link>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} className='ft-col'>
              <h4 className='mb-3 c-pri'>Company</h4>
              <div className='footer-links d-flex flex-column gap-10'>
                <Link className=''>About</Link>
                <Link className=''>Faq</Link>
                <Link className=''>Contact</Link>
                <Link className=''>Blogs</Link>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} className='ft-col'>
              <h4 className='mb-3 c-pri'>Mobile apps</h4>
              <div className='footer-links apps-col d-flex flex-column gap-15'>
                <img src="/images/gplay.png" alt="" />
                <img src="/images/astore.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer className='py-4'>
        <Container>
          <Row>
            <Col lg={12} className='mb-3'><hr className='mt-0' /></Col>
            <Col lg={6} className='d-flex align-items-center gap-30 sc-mc'>
              <div className="social-icons d-flex fs-5 gap-15">
                <a className=' ' href="/">
                  <RiFacebookLine className=''/>
                </a>
                <a className=' ' href="/">
                  <RiInstagramLine className=''/>
                </a>
                <a className=' ' href="/">
                  <RiTwitterLine className=''/>
                </a>
                <a className=' ' href="/">
                  <RiYoutubeLine className=''/>
                </a>
              </div>
              <div>
                <p className=" mb-0 ">&copy; <span className="c-pri">{new Date().getFullYear()}</span> - by MHM Bright & Co. All Rights Reserved</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className='pay-m-co'>
                <div className='pay-s'>
                  <img src="/images/Cash_On_Delevery.svg" alt="" />
                </div>
                <div className='pay-s'>
                  <img src="/images/Visa_Inc._logo.svg" alt="" />
                </div>
                <div className='pay-s'>
                  <img src="/images/Mastercard_.svg" alt="" />
                </div>
                <div className='pay-s'>
                  <img src="/images/Bkash_Logo.svg" alt="" />
                </div>
                <div className='pay-s'>
                  <img src="/images/Rocket_Logo.svg" alt="" />
                </div>
                <div className='pay-s'>
                  <img src="/images/Nagat_Logo.svg" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
