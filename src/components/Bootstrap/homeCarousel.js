import React from 'react';

    import Carousel from 'react-bootstrap/Carousel';

    function CarouselFadeExample() {
      return (
        <div className='carousel'>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/banner5.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/banner6.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/banner7.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/banner8.jpg"
              alt="Four slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>
      );

    }
    
    export default CarouselFadeExample;

