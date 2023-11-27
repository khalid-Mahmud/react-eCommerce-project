import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PrMeSidebar from '../components/ProductSidebar/PrMeSidebar'
import { useParams,useLocation } from 'react-router-dom'
import MensProducts from '../components/MensProducts/MensProducts'
import PrFilterBar from '../components/ProductFilterBar/PrFilterBar'



const MensFashion = () => {

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
              <PrMeSidebar />
            </Col>
            <Col lg={9} xl={10}>
              <div>
                <PrFilterBar onChildData={handleChildData}/>
                <MensProducts category={category} location={location} grid={grid} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default MensFashion
