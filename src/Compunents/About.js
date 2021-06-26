import React from 'react'
import styled from 'styled-components'
function About() {
    return (
        <>
        <Container>
            <Header>
                <h1>Qamar Ejaz</h1>
                <h3>REACT JS DEVELOVER</h3>
                
             <span> Innovative task-driven professional with 1+ years of 
                    experience in fast and reponsive web development
                    across diverse industries Equipped with a record of sucess
                    in consistently identifing and providing the
                    technological needs of companies through ingenious innovation.
                    Proficient in developing databases,creating user interface,
                    writing and testing codes,troubleshooting simple and complex
                    issues,and implementing new features based on user feedback.</span> 
                   
             </Header>
             <ImgCntainer><img src="mypic.jpeg" alt="About Me" width="500" height="600"  ></img></ImgCntainer>
            
            
             
            
        </Container>
    
        </>
    )
}

export default About
const Container =styled.div`
 display:flex;
 background-color:#5F9EA0;
 align-items:center;
 justifi-content;center;
 padding:50px;
 img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius:50%;
    opacity: 1;
    filter: grayscale(50%);
    width: 300px;
    height: 300px;
    background: red;
    transition: width 2s, height 2s, transform 2s;

`
const Header=styled.div`
              display:flex;
              flex-direction: column;
              margin-left:200px;
           background-color:black;
           color:white;
           width:500px;
           height:600px;
           border-radius:30px;
           box-shadow: 10px 10px 10px 10px white;
           h1{
               margin-left:150px;
               font-size:
               font-weight: bold;
               text-shadow: 2px 2px #FF0000; 
            
           }
           h3{
            margin-left:66px;
            width:354px;
            height:84px;
            padding:14px;
            font-weight: bold;
            text-shadow: 2px 2px #FF0000; 
            border:10px solid white;
            border-radius:78px;
         
           }
           span{
               margin-left:10px;
               text-shadow: 2px 2px  #0000FF;
               font-size:25px
           }
          

`
const ImgCntainer=styled.div`
margin:100px;
`

