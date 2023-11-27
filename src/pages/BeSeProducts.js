import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PrFilterBar from '../components/ProductFilterBar/PrFilterBar'
import BestSeProducts from '../components/BestSeProducts/BestSeProducts'



const BeSeProducts = () => {
    const [grid,setGrid] = useState()

  const handleChildData =(childData)=>{
    useEffect(()=>{
        setGrid(childData)
    })
  }

  return (
    <>
      <section className='py-4'>
        <Container>
          <Row>
            <Col lg={3} className='col-align'>
              <div className='fs-cont-m'>
                <div>
                  <h1 className='fs-4 m-0'>Best selling products</h1>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <PrFilterBar onChildData={handleChildData}/>
            </Col>
            <Col lg={12}>
              <BestSeProducts grid={grid}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default BeSeProducts
