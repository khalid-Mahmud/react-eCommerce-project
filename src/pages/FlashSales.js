import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PrFilterBar from '../components/ProductFilterBar/PrFilterBar'
import FlashCountDown from '../components/FlashCountDown/FlashCountDown'
import FlashSaleProducts from '../components/FlashSaleProducts/FlashSaleProducts'





const FlashSales = () => {

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
                  <h1 className='fs-4 m-0'>Flash sales</h1>
                </div>
                <FlashCountDown/>
              </div>
            </Col>
            <Col lg={9}>
              <PrFilterBar onChildData={handleChildData}/>
            </Col>
            <Col lg={12}>
              <FlashSaleProducts grid={grid}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default FlashSales
