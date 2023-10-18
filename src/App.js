// import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Slider from './components/Slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Container className='mx-auto my-2'>
      <Row>
        <Col><Cards links="https://picsum.photos/300/400" title="Item-1" desc='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."' action="Buy Now"/></Col>
        <Col><Cards links="https://picsum.photos/300/400" title="Item-2" desc='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."' action="Buy Now"/></Col>
        <Col><Cards links="https://picsum.photos/300/400" title="Item-3" desc='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."' action="Buy Now"/></Col>
      </Row>
    </Container>
    <Footer ftext="Designed By Raghav"/>
      
    </div>
  );
}

export default App;
