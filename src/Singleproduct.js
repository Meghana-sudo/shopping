import React from 'react'
import {Card, Button} from "react-bootstrap"
import { CartState } from './context/Context'
import './Singleproduct.css'

const Singleproduct = ({prod}) => {

    const {
        state: {cart},
        dispatch,
        
    }=CartState()

        console.log(cart)

    return (
        <div className="products">
            <Card>
            <Card.Img variant='top' src={prod.image} alt={prod.name}></Card.Img>
            <Card.Body>
                <Card.Title>{prod.name}
                </Card.Title>
                <Card.Subtitle style= {{paddingBottom:15}}>
                    <span> INR {prod.price.split(".")[0]}</span>
                </Card.Subtitle>
                {
                    cart.some((p) => p.id === prod.id) ?
                    (
                    <Button variant='danger'
                    onClick={()=> {
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload:prod,
                        })
                    }}>Remove from cart
                </Button>
                    
                    ):
                    (
                    <Button onClick={()=> {
                        dispatch({
                            type: "ADD_TO_CART",
                            payload:prod,
                        });
                    }}>
                    Add to cart
                </Button>
                    )
                }
                
                
            </Card.Body>
            </Card>
        </div>
    )
}

export default Singleproduct
