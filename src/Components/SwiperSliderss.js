import React, { Component } from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import {Row , Col, Container,Button} from 'react-bootstrap';
import 'swiper/css';
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from 'swiper';
import { sliderdata } from './Pages/SliderData';
import { Link } from 'react-router-dom';
export default class SwiperSliderss extends Component {
  render() {
    return (
      <div>
         <Container className='px-0'>
         <Row className='mt-lg-5 mt-3  '>
              <Col lg='3' className='p-4'>
              <h3 className='fw-light'>NEW-IN</h3>
                <p className='fw-light my-3 '>These spectacular styles are new and here to certainly tempt you</p>
                <Link to ="/newin" >Link</Link>
              </Col>
              <Col lg='9' className='p-4'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  freeMode={true}
                  autoplay={{delay:2500}}
                  modules={[FreeMode, Autoplay]}
                  className="mySwiper"
                >
                {
                  sliderdata.map((e)=>(
                    <SwiperSlide key={e.id}>
                      <img src={e.img}/>
                      <h5 className='fw-light mt-3'>{e.title}</h5>
                    </SwiperSlide>

                  ))
                }
                
                </Swiper>
              </Col>
          </Row>
         </Container>
      </div>
    )
  }
}
