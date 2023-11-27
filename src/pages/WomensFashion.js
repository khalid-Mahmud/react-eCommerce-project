import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PrWoSidebar from '../components/WoProSidebar/PrWoSidebar'
import { useParams,useLocation } from 'react-router-dom'
import WomensProducts from '../components/WomensProducts/WomensProducts'
import PrFilterBar from '../components/ProductFilterBar/PrFilterBar'





const WomensFashion = () => {

    const {category} = useParams();
    const location = useLocation()

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
            <Col lg={3} xl={2}>
              <PrWoSidebar/>
            </Col>
            <Col lg={9} xl={10}>
              <PrFilterBar onChildData={handleChildData} />
              <WomensProducts category={category} location={location} grid={grid} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WomensFashion
