import Carousel from 'react-bootstrap/Carousel';
import './Car.css'

function Car() {
  return (
    <div className="Car-parent">
        <Carousel fade>

      {/* First Carousel Item */}
      
      <Carousel.Item>
      <div className="item">
          <img
          className="d-block w-100"
          src="	https://employmenthero.com/wp-content/uploads/2021/07/Testimonial-Dinner-Twist-520x550.png"
          alt="First slide"
        />
        
        {/* <Carousel.Caption className='description'> */}
        <div className="content">
          <h3>"Before Employment Hero, everything was on paper. Now it takes half the time to do everything."</h3>
          <p>Katri Tormanen, HR and Office Admin</p>
        </div>
        {/* </Carousel.Caption> */}
        
        </div>
      </Carousel.Item>
      
      {/* Second Carousel Item */}
      <Carousel.Item>
        <div className="item">
        <img
          className="d-block w-100"
          src="https://employmenthero.com/wp-content/uploads/2021/07/Testimonial-Everlearnv3-520x550.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption className='description'> */}
          <div className="content">
          <h3>"It takes a manager 10 to 15 minutes to approve 50 timesheets."</h3>
          <p>Alex Spencer, Operations Manager</p>
          </div>
    
        {/* </Carousel.Caption> */}
        </div>

      </Carousel.Item>

      {/* Third Carouel Item */}
      <Carousel.Item>
        <div className="item">
        <img
          className="d-block w-100"
          src="	https://employmenthero.com/wp-content/uploads/2023/03/Testimonial-Community-Therapyv2-520x550.jpg"
          alt="Third slide"
        />

        {/* <Carousel.Caption className='description'> */}
          <div className="content">
          <h3>Employment Hero has streamlined our process recruitment through to onboarding. At the click of a button, we can coordinate everything from the recruitment process through to issuing a contract, managing payroll and compliance documents for new staff. Employment Hero is also</h3>
          <p>
            Scott Lynch, Managing Director
          </p>
          </div>

        {/* </Carousel.Caption> */}
        </div>

      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default Car;