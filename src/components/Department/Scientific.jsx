import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LiaBookSolid } from "react-icons/lia";
import naucno from '../../images/naucno.jpg'
import naucno2 from '../../images/naucno2.jpg'
import predavanjeOMacu from '../../images/predavanjeOMacu.jpg'
import WordPress from '../../images/WordPress.jpg'
import AnimatedImage from "./AnimatedImage";
const Scientific =()=>{
    return(<>
      <Container className="container-library mt-4 mb-4">
      <div className="container-frame"><h2 className="container-title" >ОДЕЉЕЊЕ НАУЧНЕ<br/> И СТРУЧНЕ ЛИТЕРАТУРЕ</h2><div className="container-icon">
                   <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div>  <hr/>
      <Row>   
        <Col md={8} >

          <p className="container-text">
   
          Фонд Одељења научне и стручне литературе броји
преко 22.000 публикација које обухватају готово све
области људског знања. На Одељењу научне и
стручне литературе налазе се публикације из
области општих знања, друштвених, природних и
примењених наука као и практични приручници и
савети за свакодневни живот. Одељење научне и
стручне литературе располаже вредним
публикацијама из области филозофије, психологије,
религије, економије, права, уметности, медицине,
историје и других наука. У оквиру Одељења научне
и стручне литературе налази се Референсна збирка
која обухвата вредну стручну литературу
(енциклопедије, речници, лексикони) која се даје на
коришћење само у Читаоници библиотеке. Набавка

књига Одељења научне и стручне литературе
осмишљена је тако да задовољи интересовања
наших корисника, пре свега ученика, студената,
научника и истраживача, па  велику пажњу
посвећујемо набавци актуелних и популарних
наслова из свих области знања.
Библиотекари Одељења научне и стручне
литературе пружају помоћ корисницима како у
проналажењу и коришћењу грађе доступне у фонду, тако и у претраживању електронских
база података и доступних фондова других
библиотека. На тај начин нашим корисницима
омогућена је и услуга међубиблиотечке позајмице.
Одељење научне и стручне литературе нуди богату
ризницу знања и право је место где наши корисници
могу да се едукују, истражују и прошире своје
знање.	
          </p>
        </Col>
        <br/>
      
     <Col md={4}>
     <AnimatedImage src={naucno} alt="Научно одељење" className='container-image'/>
     <br/><br/><br/><hr/>
     <AnimatedImage src={naucno2} alt="Научно одељење" className='container-image'/>
      </Col>
    
        <h1 className="container-title"  >Културни кутак</h1><hr/>
        <Col md={8} className="text-center">
        <p className="container-text">Предавање на тему: „ТАЈНЕ КОВАЊА МАЧА“ које је
одржао Слободан Маринић, мајстор ковача мачева,
публика је имала прилику први пут да чује 12.
октобра 2023. године у Читаоници наше установе.
<br/>Како би своје умеће демонстрирао, аутор се
одлучио да присутнима покаже уживо мач, и на тај
начин предочи историју његовог настанка. </p><div className="container-icon">
<LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div></Col>
<Col md={4}><AnimatedImage src={predavanjeOMacu} alt="Предавање о мачу" className='container-image4'/></Col>
    <hr/>
      <Col md={12} className="text-center">
      <p className="container-text"> У жељи да нашим суграђанима пружи могућност
упознавања нових вештина, Градска библиотека
„Атанасије Стојковић“ угостила је део WordPress
заједнице.
Циљ ових предавања је приближити интернет и

послове на интернету локалној заједници, како би
се људи осамосталили и охрабрили за упуштање у 
дигиталне воде. </p>
<Col md={12}>
<AnimatedImage src={WordPress} alt="WordPress" className='container-image'/></Col>
                </Col>
    
     </Row>
<hr/>
</div>
    </Container>
    
    </>)
}

export default Scientific