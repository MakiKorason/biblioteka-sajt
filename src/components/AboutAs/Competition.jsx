
import {  Button, Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import konkurs from '../../images/konkurs.jpg'
import AnimatedCard from '../Department/AnimatedCard'; 
const Competition =()=>{
  

    return (<>
     <Container className="container-library mt-4 mb-4 ">
      <Row >
        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
          <h1 className="container-title">КЊИЖЕВНИ КОНКУРС „АТАНАСИЈЕ СТОЈКОВИЋ“</h1>
          <p style={{textAlign:'center'}} className="container-text">
            За први необјављени роман на српском језику
          </p>
        </Col>       </Row>

        <Col md={12} className='text-center'> <AnimatedCard><img  src={konkurs} alt='конкурс' style={{width:'20%'}}/></AnimatedCard> </Col>


            <div class="container mt-3">
  <h2 className='container-title'>Конкурс се односи:</h2>
</div>
<AnimatedCard>
<div className="container mt-3">
  <ul className="list-group list-group-flush " >
    <li className="list-group-item container-text">  На први, до сада необјављени роман написан на српском језику.</li>
    <li className="list-group-item container-text">  Право учешћа на Конкурсу имају аутори из Србије и расејања.</li>
    <li className="list-group-item container-text">   Конкурс је отворен од 7. јуна до 1. новембра сваке године.</li>
    <li className="list-group-item container-text">    Уз откуцане примерке доставити текст романа у PDF или WORD формату заједно са попуњеним обрасцем за пријаву.
                   <br/>Образац можете преузети овде: 
                    <br/><Button
  onClick={() => window.open('/Конкурс.pdf', '_blank')}
  className='btn btn-secondary btn-sm'
>
Образац за пријаву
</Button></li>
    <li className="list-group-item container-text">   Рукописи се потписију шифром (спаковати у велику коверту), а разрешење шифре уз личне
                  податке се доставља у засебној (малој) коверти.</li>
    <li className="list-group-item container-text">   Пристигле рукописе оцењиваће трочлани жири састављен од једног књижевника, једног
                  књижевног критичара и једног представника Градске библиотеке „Атанасије Стојковић”.</li>
    <li class="list-group-item container-text">          Градска библиотека „Атанасије Стојковић” сноси сву одговорност око лектуре и коректуре
                  награђеног романа, око уређења издања и техничке опремљености награђеног романа. </li>
    <li class="list-group-item container-text">      Радове слати на адресу:
Градска библиотека „Атанасије  Стојковић“
(за Конкурс „Атанасије Стојковић“)
Главна 114,
22400 Рума </li>
<li class="list-group-item container-text">     Додатне информације можете добити на тел. 060/505-39-23 (Ивана Костадиновић) или на
                  мејл адресу: gbasruma@gmail.com       </li>
  </ul>
</div>
        </AnimatedCard>
                
    </Container>
    </>)
}

export default Competition