import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { getTypographyUtilityClass } from '@mui/material';
import React, { useState } from 'react'
import styled from "styled-components"

function Slider() {
 const Container=styled.div`
 width:100%;
 height:100vh;
 display:flex;
 position:relative;
 overflow:hidden;
 `
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:plum;
   border-radius:50%;
   justify-content:center;
   align-items:center;
   display:flex;
   position:absolute;
   top:0;
   bottom:0;
   left: ${props=>props.direction === "left" && "10px"};
   right: ${props=>props.direction === "right" && "10px"};
   margin:auto;
   cursor:pointer;
   opacity:0.5;
   z-index:2;
`;

const Wrapper=styled.div`
    height:100%;
    display:flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=> props.slideIndex *-100}vw);

`;
const Slide=styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    align-items:center;`


const ImageContainer=styled.div`
flex:1;
height:100%

`;
const InfoContainer=styled.div`
flex:1;
padding:50px`;

const Title=styled.h1`
font-size:70px;

`
const Desc=styled.p`
    margin: 50px 0px;
    font-size:20px;
font-weight:500;
letter-spacing:3px;

`
const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`

const Image=styled.img`
height:80%;



`;

const [slideIndex, setslideIndex]=useState(0);

const handleClick=(direction)=>{
    if(direction==="left"){
        setslideIndex(slideIndex>0 ? slideIndex-1:2)
    }else{
        setslideIndex(slideIndex<2 ? slideIndex+1: 0)
    }

}

    return (
        <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        <Slide bg="lightgray">
        <ImageContainer>
        <Image src="https://images.pexels.com/photos/6069080/pexels-photo-6069080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>  
        </ImageContainer>
        <InfoContainer>
           <Title>Christmas Sale</Title>
           <Desc>Don't Compromise on Style! Get Flat 50%
            OFF for new arrivals.</Desc>
           <Button>Shop Now</Button>
        </InfoContainer>
        </Slide>
        <Slide bg="lightblack">
        <ImageContainer>
        <Image src="https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>  
        </ImageContainer>
        <InfoContainer>
           <Title>Christmas Sale</Title>
           <Desc>Don't Compromise on Style! Get Flat 50%
            OFF for new arrivals.</Desc>
           <Button>Shop Now</Button>
        </InfoContainer>
        </Slide>
        <Slide bg="lightblack">
        <ImageContainer>
        <Image src="https://images.pexels.com/photos/4271568/pexels-photo-4271568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>  
        </ImageContainer>
        <InfoContainer>
           <Title>Christmas Sale</Title>
           <Desc>Don't Compromise on Style! Get Flat 50%
            OFF for new arrivals.</Desc>
           <Button>Shop Now</Button>
        </InfoContainer>
        </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
        </Container>
            
        
    )
}

export default Slider
