import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'



const Wishlist = () => {
  return (
    <>
      <section className='py-5'>
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className='fs-2 mb-4'>Your favourite wishlist</h1>
            </Col>
            <Col lg={12}>
              <div>
                <form action="">
                  <table className="" style={{width:"100%"}}>
                    <thead>
                      <tr>
                        <th className="">
                          <div className='d-flex align-items-center justify-content-center'>
                            <input type="checkbox" className="me-2" title="Select all for bulk action" />
                            <span>All</span>
                          </div>
                        </th>
                        <th className="text-danger text-center">remove</th>
                        <th className=""></th>
                        <th className="">Product Name</th>
                        <th className="">Price</th>
                        <th className="">Date Added</th>
                        <th className="">Stock Status</th>
                        <th className="">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="wishlist_item">
                        <td className="product-cb">
                          <input type="checkbox" name="" className="input-checkbox" value="5730"/>
                        </td>
                        <td className="product-remove">
                          x
                        </td>
                        <td className="product-thumbnail">
                          <div>
                            <a href="/"><img width="100%" height="60" src="/images/polo1.png" className="" alt=""/></a>
                          </div>
                        </td>
                        <td className="product-name">
                          <a href="/">Lacoste Polo T-Shirt</a>
                        </td>
                        <td className="product-price">
                          <ins>
                            <span className="">
                              <bdi>
                                <span className="">$</span>10.58
                              </bdi>
                            </span>
                          </ins>
                        </td>
                        <td className="product-date">
                          <time className="entry-date" dateTime="2023-03-27 10:23:48">March 27, 2023</time>
                        </td>
                        <td className="product-stock">
                            <span><i className="ftinvwl ftinvwl-check"></i></span><span className='c-pri'>In Stock
                            </span>
                        </td>
                        <td className="product-action">
                          <button className="cust-btn border-0" name="tinvwl-add-to-cart" value="" title="">
                            <i className="ftinvwl ftinvwl-shopping-cart"></i><span className="tinvwl-txt">Add to Cart</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="wishlist_item">
                        <td className="product-cb">
                          <input type="checkbox" name="" className="input-checkbox" value="5730"/>
                        </td>
                        <td className="product-remove">
                          x
                        </td>
                        <td className="product-thumbnail">
                          <div>
                            <a href="/"><img width="100%" height="60" src="/images/polo2.png" className="" alt=""/></a>
                          </div>
                        </td>
                        <td className="product-name">
                          <a href="/">Lauren Polo T-Shirt</a>
                        </td>
                        <td className="product-price">
                          <del>
                            <span className="">
                              <bdi>
                                <span className="l">$</span>11.68
                              </bdi>
                            </span>
                          </del>
                          <ins>
                            <span className="">
                              <bdi>
                                <span className="">$</span>10.58
                              </bdi>
                            </span>
                          </ins>
                        </td>
                        <td className="product-date">
                          <time className="entry-date" dateTime="2023-03-27 10:23:48">March 27, 2023</time>
                        </td>
                        <td className="product-stock">
                            <span><i className="ftinvwl ftinvwl-check"></i></span><span className='c-pri'>In Stock
                            </span>
                        </td>
                        <td className="product-action">
                          <button className="cust-btn border-0" name="tinvwl-add-to-cart" value="" title="">
                            <i className="ftinvwl ftinvwl-shopping-cart"></i><span className="tinvwl-txt">Add to Cart</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="wishlist_item">
                        <td className="product-cb">
                          <input type="checkbox" name="" className="input-checkbox" value="5730"/>
                        </td>
                        <td className="product-remove">
                          x
                        </td>
                        <td className="product-thumbnail">
                          <div>
                            <a href="/"><img width="100%" height="60" src="/images/polo3.png" className="" alt=""/></a>
                          </div>
                        </td>
                        <td className="product-name">
                          <a href="/">Lacoste Polo T-Shirt</a>
                        </td>
                        <td className="product-price">
                          <ins>
                            <span className="">
                              <bdi>
                                <span className="">$</span>10.58
                              </bdi>
                            </span>
                          </ins>
                        </td>
                        <td className="product-date">
                          <time className="entry-date" dateTime="2023-03-27 10:23:48">March 27, 2023</time>
                        </td>
                        <td className="product-stock">
                            <span><i className="ftinvwl ftinvwl-check"></i></span><span className='c-pri'>In Stock
                            </span>
                        </td>
                        <td className="product-action">
                          <button className="cust-btn border-0" name="tinvwl-add-to-cart" value="" title="">
                            <i className="ftinvwl ftinvwl-shopping-cart"></i><span className="tinvwl-txt">Add to Cart</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="wishlist_item">
                        <td className="product-cb">
                          <input type="checkbox" name="" className="input-checkbox" value="5730"/>
                        </td>
                        <td className="product-remove">
                          x
                        </td>
                        <td className="product-thumbnail">
                          <div>
                            <a href="/"><img width="100%" height="60" src="/images/polo4.png" className="" alt=""/></a>
                          </div>
                        </td>
                        <td className="product-name">
                          <a href="/">Lauren Polo T-Shirt</a>
                        </td>
                        <td className="product-price">
                          <del>
                            <span className="">
                              <bdi>
                                <span className="l">$</span>11.68
                              </bdi>
                            </span>
                          </del>
                          <ins>
                            <span className="">
                              <bdi>
                                <span className="">$</span>10.58
                              </bdi>
                            </span>
                          </ins>
                        </td>
                        <td className="product-date">
                          <time className="entry-date" dateTime="2023-03-27 10:23:48">March 27, 2023</time>
                        </td>
                        <td className="product-stock">
                            <span><i className="ftinvwl ftinvwl-check"></i></span><span className='c-pri'>In Stock
                            </span>
                        </td>
                        <td className="product-action">
                          <button className="cust-btn border-0" name="tinvwl-add-to-cart" value="" title="">
                            <i className="ftinvwl ftinvwl-shopping-cart"></i><span className="tinvwl-txt">Add to Cart</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>                  
                  </table>
                  <div className="wi-ad-c-btns">
                    <button type="submit" className="cust-btn border-0">Add Selected to Cart</button>
                    <button type="submit" className="cust-btn border-0">Add All to Cart</button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
    )
}

export default Wishlist
