
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Contact from './components/Contact';
import Home from './components/Home';
import History from './components/AboutAs/History';
import Employees from './components/AboutAs/Employees';
import Services from './components/Services';
import Competition from './components/AboutAs/Competition';
import Recommendations from './components/Books/Recommendations';
import DigitalLibrary from './components/Books/DigitalLibrary';
import BooksSearche from './components/Books/BooksSearche';
import Events from './components/Events';
import OurPublic from './components/Books/OurPublic';
import Kid from './components/Department/Kid';
import Adult from './components/Department/Adult';
import Scientific from './components/Department/Scientific';
import Homeland from './components/Department/Homeland';
import Project from './components/AboutAs/Project';
import Legati from './components/Department/Legati';
import MisionAndVision from './components/AboutAs/MisionAndVision';
import { FaEnvelope } from 'react-icons/fa';

const App = () => {


  return (<>

    <Row className="top-bar">
      <Col md={12} className="bar-content">
        <span>Адреса: Главна 114, Рума</span>
        <span> |Радно време: понедељак-петак: 08-20h и суботом: 08-13h </span>
      </Col>
    </Row>

    <Router> 
      <header>

    <Navbar expand="lg" className="sticky-navbar shadow" >
  <Container>
    <Navbar.Brand as={Link} to="/" >
    <Row>
   <Col md={4}> <img src="/logo.jpg" alt="Logo" className='logo' style={{marginLeft:'3.5rem'}} /></Col>
   <Col md={4} className='mt-3'><p className='container-text fw-bold 'style={{marginLeft:'0.1rem'}}  >Градска библиотека „Атанасије Стојковић” Рума</p></Col>
    </Row>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto fs-5 mt-5" >
    
        <NavDropdown title="О НАМА" id="about-dropdown"   >
          <NavDropdown.Item as={Link} to="/istorija">Историјат библиотеке</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/zaposleni">Запослени</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/misijaIvizija">Визија и мисија</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/projekat">Пројекат</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/konkurs">Конкурс</NavDropdown.Item>
        </NavDropdown>         

        <NavDropdown title="ФОНД" id="fund-dropdown" 
         > 
          <NavDropdown.Item as={Link} to="/preporuke">Препоруке библиотекара</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/nasaIzdanja">Наша издања</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/digitalna">Дигитална библиотека</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/pretrazivanje">Претраживање фонда</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="ОДЕЉЕЊА" id="sections-dropdown" 
>
          <NavDropdown.Item as={Link} to="/decije" >Одељење за децу</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/odraslo">Одељење за одрасле</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/naucno">Одељење научне и стручне литературе</NavDropdown.Item>
          <NavDropdown title={<Link to="/zavicajno"   style={{color:'black'}}>Завичајна збирка</Link>} id="homeland-submenu" drop="end">
            <NavDropdown.Item as={Link} to="/zavicajno/legati" >Легати</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
        <Nav.Link as={Link} to="/usluge">УСЛУГЕ</Nav.Link>
        <Nav.Link as={Link} to="/manifestacije">МАНИФЕСТАЦИЈЕ</Nav.Link>
        <Nav.Link as={Link} to="/kontakt">КОНТАКТ</Nav.Link>
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kontakt' element={<Contact />} />
        <Route path='/istorija' element={<History />} />
        <Route path='/zaposleni' element={<Employees />} />
        <Route path='/usluge' element={<Services />} />
        <Route path='/manifestacije' element={<Events />} />
        <Route path='/konkurs' element={<Competition />} />
        <Route path='/preporuke' element={<Recommendations />} />
        <Route path='/nasaIzdanja' element={<OurPublic />} />
        <Route path='/digitalna' element={<DigitalLibrary />} />
        <Route path='/pretrazivanje' element={<BooksSearche />} />
        <Route path='/decije' element={<Kid />} />
        <Route path='/odraslo' element={<Adult />} />
        <Route path='/naucno' element={<Scientific />} />
        <Route path='/zavicajno' element={<Homeland />} />
        <Route path='/projekat' element={<Project />} />
        <Route path='/zavicajno/legati' element={<Legati />} />
        <Route path='/misijaIvizija' element={<MisionAndVision />} />
      </Routes>
    </Router>

    <footer className="library-footer">
      <Container>
        <Row>
          <Col md={12}>
            <div  >
              <span >АДРЕСА: ГЛАВНА 114, РУМА</span>
              <span> |Радно време: понедељак-петак: 08-20h и суботом: 08-13h </span>
                  <span  >
                          |<FaEnvelope style={{ fontSize: '20px', color: '#4b301f'}} />
                          gbasruma@gmail.com
                         </span>
              <span> | <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer">YouTube</a>
              </span><span> | <a  href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer">Facebook</a></span>
              <span> | <a  href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer">Instagram</a></span>

            </div>
          </Col></Row>
        <br /><hr/>
        <Row>
          <Col md={12}>
            <p
            className='container-text'
            >
              <></>
              <br />&copy; 2025 Библиотека Рума. Задржава сва права.</p>
          </Col>
        </Row>

      </Container>
    </footer>
  </>

  );
}

export default App;
