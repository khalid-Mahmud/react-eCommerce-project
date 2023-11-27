import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { Container,Row,Col,InputGroup,Form,Dropdown } from 'react-bootstrap'
import {BsSearch,BsCart3,BsTelephone} from 'react-icons/bs'
import {AiOutlineHeart,AiOutlineUser,AiOutlineMenu} from 'react-icons/ai'
import {RiFindReplaceLine} from 'react-icons/ri'

const Header = () => {




  // .header-bottom .dropdown-menu.show

  return (
    <>
      <header>
        <Link to='/' style={{width: "100%",display: "block"}}>
          <img src="/images/header-top-banner.png" alt="header-top-banner" style={{width: "100%",display: "block"}} />
        </Link>
      </header>
      <header className="header-upper py-3">
        <Container>
          <Row className='align-items-center'>
            <Col lg={3} md={{span:3,order:1}} xs={{span:5,order:1}}>
              <div className='brand-co'>
                <Link to='/'><img src="/logo.png" alt="brand logo" className='brand-logo' /></Link>
              </div>
            </Col>
            <Col lg={4} md={{span:6,order:2}} xs={{span:12,order:3}}>
              <InputGroup className='me-inp'>
                <Form.Control
                  placeholder="Search product"
                  aria-label="Search product"
                  aria-describedby="header-search"
                  className='he-se-for-inp'
                />
                <InputGroup.Text id="header-search"><BsSearch /></InputGroup.Text>
              </InputGroup>
            </Col>
            <Col lg={5} md={{span:3,order:3}} xs={{span:7,order:2}}>
              <header className="header-upper-links d-flex align-items-center">
                <div>
                  <Link to='/trackOrders' className='d-flex align-items-center gap-10 '>
                    <RiFindReplaceLine className='hu-ics'/>
                    <p className='mb-0 hu-li-me-te'>Track <br/> orders</p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 '>
                    <AiOutlineHeart className='hu-ics'/>
                    <p className='mb-0 hu-li-me-te'>Favourite <br/> wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10 '>
                    <AiOutlineUser className='hu-ics'/>
                    <p className='mb-0 hu-li-me-te'>Login <br/> Signup</p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center gap-10 '>
                    <BsCart3 className='hu-ics'/>
                    <p className='mb-0 hu-li-me-te'>View <br/> cart</p>
                  </Link>
                </div>
              </header>
            </Col>
          </Row>
        </Container>
      </header>
      <header className="header-bottom">
        <Container>
          <Row>
            <Col lg={12} className='d-flex align-items-center justify-content-between'>
              <div className="menu-bottom d-flex align-items-center">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='border-0 d-flex align-items-center'>
                      <AiOutlineMenu className='me-2 c-pri'/>
                      <span style={{color:'#767676'}}>Shop categories</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <NavLink to="/mensFashion" className='dr-it '>Mens fashion</NavLink>
                      <NavLink to="/womensFashion" className='dr-it '>Womens fashion</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className='menu-links'>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
              <div className='nav-nu-co-tel'>
                <p className='text-end mb-0 text-uppercase'>Hotline: <a className='c-pri' href="tel:+880 1893630373">+880 1893630373</a></p>
              </div>
              <div className='nav-nu-co-tel-ic'>
                <p className='text-end mb-0 text-uppercase'><a className='c-pri' href="tel:+880 1893630373"><BsTelephone/></a></p>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header;
