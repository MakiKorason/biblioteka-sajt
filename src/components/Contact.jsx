import React from 'react';
import { Container, Row, Col, Card, CardTitle } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import AnimatedCard from './Department/AnimatedCard';
const Contact = () => {

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   document.body.classList.add('form-submitted');
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "d3efaa2a-1c6e-4a2c-af80-9e50e001b682");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: json
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     Swal.fire({
  //       title: "Браво!",
  //       text: "Порука је успешно послата",
  //       icon: "success"
  //     });
  //   }
  // };



  return (
    <Container fluid>
         <h1 className='container-title mt-5' >КОНТАКТИРАЈТЕ НАС</h1>
         <Row >
    
{/*     
         <Col md={6} className='mt-4'>
          <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
          <Form.Control type="text" placeholder='Упишите ваше име и презиме' name='name' autoComplete="name"  required/></Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
          <Form.Control type="mail" placeholder='Упишите ваш email' name='email' autoComplete="email" required/></Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaMessage">
        <Form.Label>Ваша порука</Form.Label>
        <Form.Control as="textarea" rows={3}  name='message' autoComplete="message"  required/> 
      </Form.Group>   <Button className='btn btn-secondary' type="submit"  >Пошаљите поруку</Button>
          </Form>
         </Col> */}
        
         <Col md={12} className='mt-4' >
         <Card className="cobiss-card">
       <Card.Body>
         <CardTitle className='container-title'  >Телефони</CardTitle>
         <br/>       
          <Row >
           <Col md={6} className='container-text text-center'>
              <FaPhone className='container-icon' /><br/> <hr/>
              <h5>Дечије одељење</h5>
             <p>022/495-047</p>
              </Col>
             <Col md={6} className='container-text text-center'>
             <FaPhone className='container-icon' /><br/> <hr/><h5>Научно одељење</h5>
             <p>022/490-047</p></Col>
             <Col md={6} className='container-text text-center'>
             <FaPhone className='container-icon' /><br/> <hr/><h5>Одрасло одељење</h5>
             <p>022/478-920</p>
           </Col>
           <Col md={6} className='container-text text-center'>
             <FaPhone className='container-icon' /><br/> <hr/><h5>Администрација</h5>
             <p>022/215-65-63</p>
           </Col>
           </Row> 

           <Row>
             <Col md={6} className='container-text text-center' >
          <FaMapMarkerAlt className='container-icon' />
             <hr/><h5 >Адреса</h5>
             <p >Главна 114, Рума</p>        
            <FaEnvelope className='container-icon'/>
            <hr/><h5>Е-mail</h5>
             <p>gbasruma@gmail.com</p></Col>
         <Col md={6} className='mt-2' >
           <AnimatedCard><iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.8357378135383!2d19.815873700000015!3d45.007957499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475babf03c300113%3A0x1b25325c9cabd2d9!2z0JPRgNCw0LTRgdC60LAg0LHQuNCx0LvQuNC-0YLQtdC60LAgItCQ0YLQsNC90LDRgdC40ZjQtSDQodGC0L7RmNC60L7QstC40Zsi!5e0!3m2!1ssr!2srs!4v1727858256248!5m2!1ssr!2srs"  
          width='100%'
          height='280px'
         title="Градска библиотека, Рума" 
        ></iframe></AnimatedCard> 
       </Col>     

        </Row>
    
         <Row >

          <Col md={12} className='mt-5'>
          <h1 className='container-title'>Друштвене мреже</h1><hr/></Col></Row>
          
          <Row className="social-media">
           <Col md={4} className='text-center'>
             <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer" >
               <FaYoutube style={{ fontSize: '50px', color: '#ff0000'}} /> 
               <p style={{fontSize:'20px' }}>YouTube</p>
             </a>
           </Col>
           <Col md={4} className='text-center' >
             <a href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer" >
               <FaFacebook style={{ fontSize: '50px', color: '#3b5998' }} /> 
               <p style={{fontSize:'20px'}}>Facebook</p>
             </a>
           </Col>
           <Col md={4} className='text-center' >
           <a href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer" >
               <FaInstagram style={{ fontSize: '50px', color: '#e4405f'}} /> 
               <p  style={{fontSize:'20px' }}>Instagram</p>
             </a>
           </Col>
         </Row>
       </Card.Body>
     </ Card >
         </Col>
         </Row>
  

     </Container>
   
  );
};

export default Contact;


