import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'
function Services() {
    return (
        <>
            <Container>
                <h1>How to Become a Web Developer</h1>
                <span>Responsible for programming many web applications, web developers help to create websites
                    that users can interact with and enjoy. They typically receive designs from a web designer
                    or graphic artist and create code that brings those designs to life in website form.
                    Web developers control nearly all “behind the scenes” aspects of a website, including its code,
                    outbound links, and content, to ensure a quality user experience that leaves
                    consumers satisfied. Individuals with a passion for technology and a love for coding will find
                    a rewarding career in website development.
                </span>
            </Container>
            <sliderContainer>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="blog1.jpg"
                            alt="Third slide"
                            height="500px"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </sliderContainer>
        </>
    )
}

export default Services;
const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
`
const sliderContainer = styled.div`
height:600px;
`