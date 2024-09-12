import React, { Component } from 'react'
import { Carousel  } from 'react-bootstrap'

export default class Sliderss extends Component {
  render() {
    return (
      <div>

     
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./pics/banner3.jpg "
      alt="First slide"
      width="100%"
    /> 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./pics/banner4.jpg"
      alt="Second slide"
      width="100%"
    />

  </Carousel.Item>

           </Carousel>
      </div>
    )
  }
}
