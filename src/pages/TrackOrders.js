import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const TrackOrders = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <div className='tr-od-inn'>
                <Row>
                  <Col lg={12}>
                    <h1 className='fs-2'>Track your order</h1>
                    <p>To track your order please enter your order number in the box below and press the Track Order button. The order number was given to you on your receipt and in the order confirmation email you have received.</p>
                  </Col>
                  <Col lg={12}>
                    <div>
                      <form action="" className='tr-od-for'>
                        <div className='od-for'>
                          <label htmlFor="" className='c-pri'>Order number</label>
                          <input type="text" placeholder='enter your order number' />
                        </div>
                        <Link to='/trackOrders/:id' className='cust-btn'>Track order</Link>
                      </form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TrackOrders