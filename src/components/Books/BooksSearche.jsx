import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cobbis from '../../images/cobbis.jpg'
import './BooksSearche.css'
import AnimatedCard from '../Department/AnimatedCard'; 

const BooksSearche = () => {
  return (
    <Container className="container-library ms-auto mt-4 mb-4">
      <Row>
        <Col xs={12} md={12} >
          <h2 className="container-title" >
            Шта је COBISS?
          </h2>
          <p className="container-text">
          У савременом друштву модерне библиотеке као
важни центри знања захтевају и савремену
информациону технологију, као и повезивање у
заједнички библиотечко-информациони систем
као што је Cobiss ( Co-operative Online
Bibliographic System and Services).
          </p>
          <AnimatedCard>
           <img 
                src={cobbis}
                alt="COBISS" 
                className="cobiss-image" 
                style={{ 
                        display: 'block', 
                        margin: '0 auto', 
                        width: '50%' 
                      }} 
                /></AnimatedCard>
     <br/>
     <hr/>
<AnimatedCard className="cobiss-card">
            <Card.Body>
              <Card.Text>
                <p className="container-text"><a href='https://plus.cobiss.net/cobiss/sr/sr/bib/search' rel="noreferrer"   target="_blank" alt='линк ка MCOBISS'>COBISS+</a>
<br/>•	Web апликација која библиотекарима и
корисницима омогућава приступ претраживању
различитих база података (апликација је
бесплатна за све кориснике).
<br/>• Апликација је намењена свим корисницима
који траже релевантне информације или
расположиву грађу у библиотекама.
<br/>• Моја библиотека је кориснички налог унутар
библиотеке за појединачног члана, и он
омогућава различите библиотечке услуге путем
интернета.
</p>
              </Card.Text>
            </Card.Body>
          </AnimatedCard>
          <AnimatedCard className="cobiss-card">
            <Card.Body>
              <Card.Text>
                <h1 className='container-title'>  MCOBISS</h1>
           <p className="container-text">
           • Корисницима је на располагању прилагођена
верзија mcobiss преко мобилних уређаја.
<br/>• Апликација је бесплатна и може се преузети у
web продавници - Google play: MCOBISS. <a href='https://play.google.com/store/apps/details?id=si.izum.mcobiss&hl=sr&pli=1' rel="noreferrer"   target="_blank" alt='линк ка MCOBISS'>MCOBISS.</a>  </p>
              </Card.Text>
            </Card.Body>
          </AnimatedCard>

          <Row>
        <Col xs={12} md={12} className="border-end">
          <h1 className="container-title">
         <br/> Упутство за коришћење COBISS-а
          </h1>
                <br/><p className="container-text">
                  
                • Посетите платформу:
                    <a
                      href="https://sr.cobiss.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     COBISS. 
                    </a>

                   <br/> • Унесите назив књиге, аутора или кључне речи у претрагу.
                  
                  <br/>• Изаберите библиотеку из падајућег менија да бисте видели
                    доступност.
                  
                  <br/> • Кликните на књигу за више детаља или резервишите ако је
                    доступна.
                  
                </p>
            </Col></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BooksSearche;