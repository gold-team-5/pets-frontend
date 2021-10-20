import React from "react";
import { Card } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import '../../reset.css'
import "./home.css";
import logo from "../../img/Screenshot__137_-removebg-preview.png";
export default function Home(props) {

  return (
    <>
      <div style={{ height: '400px' }}>
        <Carousel  >
          <Carousel.Item interval={1000}>
            <img

              className="d-block w-100"
              src="https://cdn.cnn.com/cnnnext/dam/assets/210407132946-01-pets-home-return-to-work-super-tease.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/curious-kitten-looking-at-the-camera-picture-id1270023880?b=1&k=20&m=1270023880&s=170667a&w=0&h=7tAE4L2d7qJ4k1OMydwof1kObkG6TuNkDj2n2QC88ic="
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              <p>“When you look into the eyes of an animal you’ve rescued, you can’t help but fall in love.”
                <br />
                — Paul Shaffer</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.understandinganimalresearch.org.uk/files/9015/8333/7886/Neutering_pets_-_puppy.png"
              alt="Third slide"
            />
            <Carousel.Caption>

              <p>“An animal’s eyes have the power to speak a great language.”
                <br />

                - Martin Buber, German Philosopher</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      <br />
      <body>


        {/* <div style={{ backgroundColor: '#f0efef', height: '20%', marginTop: '50%' }}>
          <h2>Planning to Adopt a Pet?</h2>
        </div> */}
        <div className='par'>
          <p>
            Bringing home a new pet is incredibly exciting. And adopting a pet from a shelter or rescue group is not only exciting, but it’s truly a feel-good experience as well. Every day, dogs and cats are killed simply because they don’t have safe places to call home. By adopting, it means that each time you look into your pet’s eyes, you can feel good knowing that you truly did save a life.
            That has always been our goal
            <br /> <br />
            <span> read more about us🧾</span>
          </p>
          <img class="logop" src={logo} alt="logo" />
        </div>
        <div className='homecads' >


          <Card  >
            <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVp_3v2cAzZ5bAwawLniLNz9j7ABHVPyMkBg&usqp=CAU' />
            <Card.Body>
              {/* <Card.Title>Adoption Tips</Card.Title> */}
              <Card.Text>
                Should my pet be tested for COVID-19?
              </Card.Text>


            </Card.Body>
          </Card>

          <Card  >
            <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIew5f5gVc8Gd8n9zu87acY-YS3hN9BkfCyA&usqp=CAU' />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text >
                Do Dogs Dream?
              </Card.Text>


            </Card.Body>
          </Card>
          <Card >
            <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ps8TZRyIWb6SoQdrElDc0BWnkwI9p0TiSQ&usqp=CAU' />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text >
                Eight Tips for Keeping Your Dog Free From Tick-Borne Diseases
              </Card.Text>
            </Card.Body>
          </Card>

          <Card >
            <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyC6rf-VDqrZDKKq0X7JmHrtz7xJjEV5ITGQ&usqp=CAU' />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text >
                Kidney Disease in Cats: What Cat Owners Should Know
              </Card.Text>


            </Card.Body>
          </Card>
        </div>
        <div className='par2'>
          <img class="logop" src={logo} alt="logo" />
          
          <p>
          
         
            Our vision of  site lies in achieving security and protection from cruelty for all pets through the adoption of animal’s, which increases love and happiness for the adopter.
            
            {/* <span> read more about us🧾</span> */}
          </p>

        </div>
      </body>
    </>
  );
}
