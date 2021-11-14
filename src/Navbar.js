import React from 'react'
import styled from 'styled-components'
import {SearchSharp} from '@mui/icons-material'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { MenuItem } from '@mui/material';
import { Dropdown, Nav , Badge} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import { CartState } from './context/Context';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import './Navbar.css';
import { color } from '@mui/system';


const Container = styled.div`
height:100px;
width:100%;
background: aliceblue;

;`

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between`;


const SearchContainer = styled.div`
border:1px solid lightgray;
width:200px;
display:flex;
align-item:center;
margin-left:25px;
padding:5px`;


const Input = styled.div`
border:none`;


const Left =styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-start;
`;

const Logo = styled.h2`

font-weight:bold`;


const Center =styled.div`
flex:1;
text-align:center;
display: flex;
justify-content: center;

`;

const Right =styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;



function Navbar() {

    const {
        state:{cart},
        dispatch,
        productDispatch,
    }=CartState()
    


    return (
        <Container>
        <Wrapper>
        <Left>
            <SearchContainer className="search">
            <Input/>
            <SearchSharp style={{color:"black", fontSize:16}}/>
            </SearchContainer>
        </Left>
        <Center>
        <Logo style={{fontFamily:"serif"}}>
            SHOPIFY.
         </Logo>
        </Center>
        <Right>
            <MenuItem >
                Register
            </MenuItem>
            <MenuItem >
                Sign In
            </MenuItem>
            <MenuItem>
            <Nav>
            <Dropdown>
            <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="20px"/>
                <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>

            
                    <Dropdown.Menu style={{minWidth:370}}>
                    {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                  </>
                    ):(
                        <span style= {{padding:10}}> Cart is Empty</span>
                    )}
                    </Dropdown.Menu>
                </Dropdown>
           </Nav>
           </MenuItem>
         
        </Right>
        </Wrapper>
          
        </Container>
    )
}

export default Navbar
