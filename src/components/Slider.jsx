import Carousel from 'react-bootstrap/Carousel';
// import SliderImage from 'components/SliderImage';

function Slider() {
  return (
    <>

    <Carousel className='mt-1'>
      <Carousel.Item>
        <img src='https://picsum.photos/400/300' className="w-auto"alt='random'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://picsum.photos/400/300?grayscale' className="w-auto"alt='random'/>

      
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://picsum.photos/id/1/400/300' className="w-auto"alt='random'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Slider;