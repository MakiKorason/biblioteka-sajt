
import { Table, Container, Card } from 'react-bootstrap';
import './Services.css';
import { IoBookSharp } from "react-icons/io5";
import AnimatedCard from './Department/AnimatedCard'; 
import AnimatedContainer from '../AnimatedContainer';
const Services =()=>{

  
  return (
    <Container className=" container-library mb-4 mt-4 ms-auto">
      <AnimatedContainer className='cobiss-card'>
<p className='container-title'>
  <IoBookSharp className='container-icon'/> </p><hr/>

  <AnimatedCard className="container mt-3">

  <br/>

  <ul className="nav nav-tabs" role="tablist" >
    <li className="nav-item">
      <a className="nav-link active" style={{color:'#3f2c11'}} data-bs-toggle="tab" href="#home">ПРАВИЛA</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab"  style={{color:'#3f2c11'}} href="#menu1">1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab"  style={{color:'#3f2c11'}} href="#menu2">2</a>
    </li> 
  </ul>

  <div class="tab-content" >
    <div id="home" className="container tab-pane active"><br/>
      <p className='container-text'>Правилник о раду са корисницима и начину коришћења библиотечке грађе.</p>
    </div>
    <div id="menu1" className="container tab-pane fade"><br/>
      <p className='container-text'>1. Публикације Oдељења за одрасле, Одељења за децу и Одељења научне и стручне литературе се могу задржати 14 дана уз могућност продужетка.</p>
      <p className='container-text'>2. Публикације Завичајног одељења, Референсне збирке и легати користе се у Читаоници Градске библиотеке. </p>
      <p className='container-text'>3. Чланарина се плаћа на годишњем нивоу, док је за децу, до завршетка основне школе, чланарина бесплатна.  </p>

    </div>
    <div id="menu2" className="container tab-pane fade"><br/>
      <p className='container-text'>4. На једну чланску карту могуће је позајмити највише 3 књиге.  </p>
      <p className='container-text'>5.  Читалац који је изгубио или оштетио књигу, треба да купи књигу истог наслова или да плати накнаду за изгубљену или оштећену грађу. </p>
      <p className='container-text'>6. Сви корисници треба да враћају књиге на време. Сваки дан кашњења се наплаћује 5 динара по књизи.  </p>
      <p className='container-text'>7. Корисницима резервишемо грађу која тренутно није доступна у фонду. </p>
    </div>
  </div>
</AnimatedCard>

</AnimatedContainer>
<br/><br/>
        <br/><h1 className='container-title' >ЦЕНОВНИК</h1>
     
        <Table striped  className="brown-table">
  <thead className='containert-text'>
    <tr>
      <th>УСЛУГЕ</th>
      <th>Цена (РСД)</th>
    </tr>
  </thead>
  <tbody className='container-text' >
    <tr>
      <td>Чланарина за средњошколце, студенте, запослене и незапослене</td>
      <td>700,00</td>
    </tr>  
    <tr>
      <td>Чланарина за пензионере</td>
      <td>300,00</td>
    </tr>
    <tr>
      <td>Дупликат чланске карте</td>
      <td>50,00</td>
    </tr>
    <tr>
      <td>Пенал (по дану кашњења)</td>
      <td>5,00</td>
    </tr>
    <tr>
      <td>Накнада за изгубљену грађу</td>
      <td>600,00</td>
    </tr>
    <tr>
      <td>Накнада за оштећену грађу</td>
      <td>400,00</td>
    </tr>
    <tr>
      <td>Трошкови опомене</td>
      <td>40,00</td>
    </tr>
    <tr>
      <td>Међубиблиотечка позајмица</td>
      <td>700,00</td>
    </tr>
  </tbody>
</Table><br/>

      <AnimatedCard className="cobiss-card mt-5">    
        <Card.Title ><h1 className='container-title'>Међубиблиотечка<br/> позајмица</h1><hr/></Card.Title>
        <Card.Body> 
        
          <div>
            <p className='container-text' > 
            Међубиблиотечка позајмица је једна од услуга коју
пружа наша установа. Ова услуга подразумева
прибављање библиотечке грађе, коју Градска
библиотека не поседује у свом фонду, а потребна је
корисницима. Услугу међубиблиотечке позајмице
могу користити сви чланови наше библиотеке.
Овом услугом се могу поручити монографске

публикације, као и периодика (чланци). Књиге се
позајмљују на период од 15 дана, а услуге
међубиблиотечке позајмице се наплаћују према
утврђеном Ценовнику Градске библиотеке
„Атанасије Стојковић“. </p></div>
    
          <div >
         <p className='container-text text-center'> Упутство за кориснике<hr/></p>
<p className='container-text'>Корисник прво треба да провери да ли потребну књигу Градска библиотека
поседује у свом фонду. Уколико је не поседује, потребно је
да корисник изврши претрагу Централног електронског каталога COBISS.SR и да
прегледа у којим библиотекама Србије она постоји. Након тога, потребно је да
корисник дође у нашу библиотеку  и да попуни Захтев за
међубиблиотечку позајмицу подацима о књизи која се позајмљује. Попуњен захтев
наша библиотека прослеђује другој библиотеци. О приспећу књиге из
међубиблиотечке позајмице корисник ће бити благовремено обавештен
телефонским путем или електронском поштом.
</p>
          </div>
        </Card.Body>
      </AnimatedCard>

   <br/>
              
       
    </Container>
  );
}

export default Services;
