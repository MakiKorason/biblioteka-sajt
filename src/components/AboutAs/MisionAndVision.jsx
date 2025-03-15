import { Button, Col, Container, Row } from "react-bootstrap"
import React from "react";
import horhe from '../../images/horhe.jpg'
import stiven from '../../images/stiven.jpg'
import AnimatedImage from "../Department/AnimatedImage";


const MisionAndVision=()=>{

    const shoot = () => {
      alert("У нашу библиотеку учлањено је 16.800 корисника!");
    }
 
    return (
 
    <Container className='container-library mt-4 mb-4'>
        <Row>
          
  <Col xs={12} sm={12} md={8} lg={8} xl={8}>
  <h1 className="container-title">Визија</h1><br/>
<br/>
<p className="container-text">Наша визија је да постанемо ослонац у образовању
и културном развоју, пружајући подршку свим
 потребама наших корисника.
Да растемо као иновативни центар знања и културе,
у којем ће се користити најновије технологије за
пружање услуга, где ће сваки корисник имати
прилику да истражује, учи и доприноси заједници. 
  </p><br/></Col>

  <Col md={4} > 
<AnimatedImage className="container-image" alt='књиге' src={stiven}/>
</Col></Row>
<br/>
<Row><Col xs={12} sm={12} md={8} lg={8} xl={8}>
  <hr/><br/><h1 className="container-title">Мисија</h1> 

<p className="container-text">Мисија наше библиотеке је да пружи приступ
информацијама, књигама и образовним ресурсима
свим нашим корисницима.
Библиотека је место инклузије, међусобног учења и
размене идеја, зато је наш основни задатак да код
деце развијемо и подстичемо навике читања.
Циљ нам је да подржимо целоживотно учење, културну
размену и развој критичког размишљања.
</p>
 
  </Col>

  <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mt-4"> 
  <AnimatedImage className="container-image" alt='књиге' src={horhe}/></Col>
  
</Row>  



<Row><Col xs={12} sm={12} md={6} lg={6} xl={6}>
       <br/> <hr/>
<Button onClick={shoot}  class="btn-library" id="toastbtn">Број корисника!</Button>  </Col></Row>
<hr/>

  </Container>
  )


}


export default MisionAndVision;