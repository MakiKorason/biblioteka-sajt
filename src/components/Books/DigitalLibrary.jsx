import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import digitalna2 from '../../images/digitalna2.jpg'
import AnimatedCard from '../Department/AnimatedCard'; 
const DigitalLibrary =()=>{
    return (<>
     <Container className='container-library mt-4 mb-4' >
      <h2 className="container-title  mb-4" >НАШ ДИГИТАЛНИ ФОНД <hr/></h2>
      <p className="container-text mb-5">
      Дигитална библиотека „Атанасије Стојковић“ Рума
је основана 2023. године у оквиру пројекта који је
суфинансиран од стране Министарства културе
Републике Србије и Локалне самоуправе. Пројекат
има за циљ да дигитализује и промовише културну
баштину Руме и околине. У оквиру дигиталне
библиотеке може се видети грађа која је од
културног значаја за локалну средину.
Библиотекари Градске библиотеке „Атанасије Стојковић“ у континуитету дигитализују и додавају
нову грађу.
      </p>

      <Row className="mb-5">
        <Col md={12} className="mb-4">
          <AnimatedCard>
            <Card.Img   src={digitalna2} variant="top"  alt="Дигитална библиотека"  style={{ 
              display: 'block', 
              margin: '0 auto', 
              width: '100%', 
              height:'100%'
           
            }}  />
            <Card.Body>
           
              <Button style={{width:'100%'}} href="https://www.digitalna.bibliotekaruma.rs" target="_blank" rel="noopener noreferrer"  variant="outline-secondary" >
                Посетите нашу дигиталну библиотеку
              </Button>
            </Card.Body>
          </AnimatedCard>
        </Col>
      </Row>

     
    </Container>
    
    
    
    </>)
}

export default DigitalLibrary