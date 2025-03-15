import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { BsCalendar2Heart } from 'react-icons/bs';
import { LiaBookSolid } from "react-icons/lia";
import daniSlovensk from '../images/daniSlovensk.jpg';
import Atanasije from '../images/Atanasije.jpg';
import knjizevnaKolonija from '../images/knjizevnaKolonija.jpg'
import kulturnoLeto from '../images/kulturnoLeto.jpg';
import folklor from '../images/folklor.jpg'
import knjizevnaKolonija2 from '../images/knjizevnaKolonija2.jpg'
import rumskoKulturnoLeto2 from '../images/rumskoKulturnoLeto2.jpg'
import predavanjeAtanasije from '../images/predavanjeAtanasije.jpg'
import kvizOAtanasiju from '../images/kvizOAtanasiju.jpg'
import ikona from '../images/ikona.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedCard from './Department/AnimatedCard'; 
import './Events.css'
import AnimatedImage from './Department/AnimatedImage';

const Events = () => {

  const [showEvent1, setShowEvent1] = useState(false);
  const [showEvent2, setShowEvent2] = useState(false);
  const [showEvent3, setShowEvent3] = useState(false);
  const [showEvent4, setShowEvent4] = useState(false);


  const handleShowEvent1 = () => setShowEvent1(true);
  const handleShowEvent2 = () => setShowEvent2(true);
  const handleShowEvent3 = () => setShowEvent3(true);
  const handleShowEvent4 = () => setShowEvent4(true);


  const handleClose = () => {
    setShowEvent1(false);
    setShowEvent2(false);
    setShowEvent3(false);
    setShowEvent4(false);
  };

  return (
    <>

      <Container className='container-library d-flex flex-wrap justify-content-center mt-4 mb-4'>
        <Row> 
          <Col md={6} xs={12} sm={12} lg={6} xl={6} className='text-center'>
          
            < AnimatedCard  className='events-card' >
              <Card.Body>
                 <h1 className="container-title">
                  Дани словенске писмености и културе <BsCalendar2Heart />
                </h1>
                <Card.Img style={{width:'205px'}}  src={daniSlovensk} />
                <p className='container-text'><br/>Дани словенске писмености и културе обележавају се у недељи када се прославља дан Светих
                   Ћирила и Методија, 24. мај.</p>
              <Button className='btn btn-secondary ' onClick={handleShowEvent1}>Детаљније</Button>
            </Card.Body>
            </ AnimatedCard >
          </Col>

          <Col md={6} xs={12} sm={12}  lg={6} xl={6} className='text-center'>
            < AnimatedCard  className='events-card' >
              <Card.Body>
                <Card.Title className="container-title">
                  Дани Атанасија<br/> Стојковића <BsCalendar2Heart />
                </Card.Title>
              
                <Card.Img style={{width:'140px', borderRadius:'50%'}} src={Atanasije} />
                <p className='container-text'><br/>Дани Атанасија Стојковића традиционално се обележавају у току недеље његовог рођендана, 20. септембра.</p>
             <Button className='btn btn-secondary ' onClick={handleShowEvent2}>Детаљније</Button>
              </Card.Body>
            </ AnimatedCard >
          </Col>
          </Row>

          <Row>
          <Col md={6} xs={12} sm={12} lg={6} xl={6} className='text-center'>
            < AnimatedCard  className='events-card'>
              <Card.Body>
                <Card.Title className="container-title">
                  Румска књижевна <br/>колонија <BsCalendar2Heart />
                </Card.Title>
              <br/>  <Card.Img style={{width:'188px', borderRadius:'50%' }} src={knjizevnaKolonija}/>
              <p className='container-text'> <br/> Румска књижевна колонија традиционално се одржава сваке године у децембру.</p>
                <br/><Button className='btn btn-secondary' onClick={handleShowEvent3}>Детаљније</Button>
              </Card.Body>
            </ AnimatedCard >
          </Col>
        
          <Col md={6} xs={12} sm={12} lg={6} xl={6} className='text-center'>
            < AnimatedCard  className='events-card'>
              <Card.Body>
                <Card.Title  className="container-title">
                  Румско културно<br/> лето <BsCalendar2Heart />
                </Card.Title>
                <br/><Card.Img style={{width:'240px', borderRadius:'50%'}}  src={kulturnoLeto}/>
              <p className='container-text'> <br/>Традиционална манифестација која се одржава од 28. јуна до 31. августа. <BsCalendar2Heart /> </p>
               <br/><Button className='btn btn-secondary' onClick={handleShowEvent4}>Детаљније</Button>
              </Card.Body>
            </AnimatedCard >
          </Col>
        </Row>
    
      <Modal show={showEvent1} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12}>
            <p className='container-text'>
            У Градској библиотеци „Атанасије Стојковић“ у Руми
препозната је идеална прилика да се Рума
позиционира на културној мапи Србије и свих
словенских земаља, славећи дан словенских
апостола, Ћирила и Методија. Први „Дани
словенске писмености и културе“ отворени су на
Градском тргу у Руми 21. маја 2011. године. Након
прве манифестације, све наредне су свечано
отворене у Великој сали Културног центра. Током
14 година свог постојања манифестација је успела
да окупи истакнуте културне јавне личности, са
јасним циљем афирмисања богатог наслеђа
словенских народа. Имали смо част да
угостимо и слушамо беседе академика Матије

Бећковића, Владета Јеротића, Јасминe Грковић
Мејџор, Мухарема Баздуља и других уважених
учесника. Свих ових година одржала су се и бројна
предавања на тему словенске историје, митологије,
књижевности, филма и музике.<br/></p></Col>
<Col md ={12}>
<AnimatedCard>
<div className='container-iframe'>
<iframe
src="https://www.youtube.com/embed/2bseDBcsU2U?start=964"
title='Свечано отварање Дана словенске писмености и културе'

></iframe></div></AnimatedCard>
</Col>
</Row>

               <Row>
         <Col md={12}>
              <p className='container-text'>
              <br/>Почев од седме манифестације, хол Културног
центра постао је место где гости могу да уживају у
калиграфским радовима и иконама, које са великом
посвећеношћу стварају ученици основних школа
општине Рума.
              </p>
              </Col>
             <Col md={6} className='text-center'>
         <AnimatedImage
            className='container-image text-center'
              src={folklor}
              alt="Фолклор" 
            /> 
            <br/><br/><div className="container-icon">
              <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div>   </Col>  
                <Col md={6} className='text-center' >
              <AnimatedImage style={{width:'60%'}} className='container-image' alt="икона" src={ikona}/>
            </Col>
           </Row>
          <br/><hr/>
         <Row>    
         <Col md={12} >
               <p  className='container-text text-center'>Уметничком програму ове манифестације јединствену димензију лепоте и креативности дали су: <br/>Aнсамбл народних игара и песама АНИП „Бранко Радичевић“ из Руме;<br/> Oперски певач Бранислав Јатић; <br/> Камерни састав хора карловачке богословије; <br/> Сања Пргоњић, солисткиња на клавиру; <br/>Градски мешовити хор „Никола Ћириловић Ћира“ из Беочина;
        <br/> Еди Тајм, солиста на гајдама; <br/>„Арс футура“- ученици „Музичког кутка“; <br/>Врело, музичка група из Руме; <br/>
         Стефан Бодирожа, солиста на хармоници. 
            </p></Col></Row>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEvent2} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <p className='container-text'>
         
            </p>
            <p className='container-text' >
            Сваке године 20. септембра наша библиотека обележава дан рођења Атанасија Стојковића
(1773–1832), великог српског просветитеља, научника и писца. Стојковић је био један од
најобразованијих Срба свог времена, доктор филозофије и утемељивач природних наука у
Србији. 
              <br/>
              Како бисте више сазнали о његовом лику и делу погледајте филм који је реализован од стране наше установе. </p>
           
  <AnimatedCard><div className='container-iframe'>

            <iframe 
    src="https://www.youtube.com/embed/w4RtolhtK7M?start=46" 
    title="Филм о Атанасију Стојковићу" 
    >    
</iframe></div></AnimatedCard>
           <br/>
            <hr/> <p className='container-text '>Поводом обележавања 250 година од рођења
српског научника, писца и професора универзитета
у Харкову Атанасија Стојковића, Библиотека
Матице српске приредила је електронску изложбу
грађе из својих збирки. Аутор изложбе је Ненад
Станојевић, а уредник је Селимир Радуловић.
<br/><a  href='https://www.youtube.com/embed/Mvy9extAUb0?start=269'alt='Изложба Атанасије Стојковић' target='_blank' rel="noreferrer" >Изложба Атанасије Стојковић</a>
</p>
<p className='container-text'>Поводом јубилеја одржан је и 
округли сто „Стваралачки портрет Атанасија Стојковића“, на којем су учествовали професори: Радослав Ераковић, Исидора Бјелаковић и Срђан Орсић.
<br/> Предавање можете погледати на овом линку: <a href='https://www.youtube.com/embed/pnPgdfMg38w?start=747' alt='ДАНИ МАТИЦЕ СРПСКЕ- Омаж Атанасију Стојковићу' target='_blank' rel="noreferrer" >Дани Матице српске - Омаж Атанасију Стојковићу</a></p>

<Row>
  <Col md={6}>
<hr/><p className='container-text' >Предавања поводом ове манифестације одржао је и проф. др Ненад Нинковић</p>
<AnimatedImage className='container-image' src={predavanjeAtanasije} alt='Предавање о Атанасију Стојковићу'/>
<p className='container-text'><br/>Подробније о Стојковићу баве се пре свега запослени наше установе, који у жељи да очувају сећање на овог великог просветитеља, сваке године на дан његовог рођења организују предавања која се баве његовим стваралаштвом. </p>
   <div className="container-icon">
     <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div> 
    </Col>
      <Col md={6}>
      <h6 className='container-title'>КВИЗ „ЖИВОТ И ДЕЛО АТАНАСИЈА СТОЈКОВИЋА“</h6>
      <p className='container-text'>
     <br/> У наставку манифестације у част Атанасија
Стојковића, Градска библиотека је организовала
квиз „Живот и дело Атанасија Стојковића“ за
ученике виших разреда румских основних школа са
идејом да се и наши млађи суграђани упознају са
његовим ликом и делом.
</p>
     <AnimatedImage className='container-image' alt ='Квиз' src={kvizOAtanasiju}/>
              
      </Col>
      
      </Row>    
</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showEvent3} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <Col md={12}>
              <p className='container-text' >
              Румска књижевна колонија настала је из идеје и потребе да се савремено књижевно стваралаштво што боље представи и обогати.
               Наша библиотека успела је у намери да књижевном колонијом међусобно повеже писце, афимирше, популаризује читање и 
               читалачке навике и интензивира сарадњу међу књижевним стараоцима. 
            <br/> </p></Col>
             <Row>
            <Col md={12} className='text-center'>
            <AnimatedImage
             className='container-image'
              src={knjizevnaKolonija2}
              alt="Румска књижевна колонија"
              style={{width:'50%'}}    
            />
            </Col>
            </Row>
            <hr/>

            <Row>
            <Col md={12} >
            <p className='container-text' >
            Градска библиотека „Атанасије Стојковић“ са поносом истиче да је идеја о књижевној колонији потекла управо из наше установе. У самом почетку, овај пројекат је реализован у сарадњи са Заједницом матичних библиотека и Народном библиотеком Србије, уз чију подршку су успешно организоване прве три колоније.
            До сада је одржано седам књижевних колонија, а последње четири године наша библиотека је самостално преузела организацију овог значајног културног догађаја. Сваке године, колонија добија посебан креативни печат, јер теме нису унапред одређене, већ их сами аутори бирају у складу са својом инспирацијом и интересовањима.
            Радови са Колоније представљају се у Зборнику, који садржи књижевне прилоге учесника, као и њихове текстове на задату тему.
<hr/>Тема прошлогодишње 7. Румске књижевне колоније је „Књижевност између принуде и слободе”.
 Сви учесници ове Колоније су библиотекари из Библиотеке Матице српске:
Бојан Самсон - песник, приповедач, књижевни критичар
Гордана Ђилас - песникиња, библиограф
Снежана Николић - песникиња
Ненад Станојевић - књижевни критичар
Мирко Димић - песник.

            </p></Col></Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Затвори
          </Button>
        </Modal.Footer>
      </Modal> 

 
      <Modal show={showEvent4} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <p className='container-text'>
              <Row>
              <Col md={6}>
              <AnimatedImage
              style={{marginLeft:'-4px'}}
              className='container-image'
              src={rumskoKulturnoLeto2}
              alt="Румско културно лето"
            /></Col> 
    
            <Col md={6}><br/>Румско културно лето je манифестација која се већ
традиционално одржава у Руми у периоду од 28.
јуна до 30. августа. Румљани и сви посетиоци нашег
града сваке године имају прилику да прате богат
културно-уметнички програм. У оквиру
прошлогодишњег Културног лета одржавани су:
концерти, позоришне представе, ликовне изложбе,
предавања из различитих области културе, као и
књижевни догађаји. 

 </Col></Row><br/>Општина Рума је покровитељ ове манифестације, а
у реализацији програма учествују Културни центар
„Брана Црнчевић“, Завичајни музеј, Градска
библиотека „Атанасије Стојковић“ и Туристичка
организација Општине Рума. У оквиру Румског
културног лета, Градска библиотека организује
различите културне догађаје који обогаћују
друштвени и уметнички живот нашег краја. Тако су у
складу са традицијом библиотеке, представљене
књиге које су добиле значајна признања у
литератури, као и представе, од којих се посебно
истиче монодрама „Музеј живих људи: Голооточка

сага“ у изведби Јовице Јашина, по тексту
Драгољуба Јовановића. Одржан је и хуманитарни
концерт који је окупио љубитеље музике уз посебну
пажњу на хуманитарни карактер догађаја.
<br/>Сви ови догађаји потврђују значај културних
активности у Руми и њеним институцијама,
пружајући платформу за креативност и размену идеја.
            </p>   
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>
        </Container> 
    </>
  );
};

export default Events;
