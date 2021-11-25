import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "./context/Context";
import './Categories.css';
import { Link } from 'react-router-dom';
import CartItem from "./CartItem";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  const [cartData, setCartData] = useState("")
  const [num, setNum] = useState(0)
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    // setItemQuantity(cart != null || cart != undefined ? cart.prod.qty : "")
    setCartData(cart)


  }, [cart]);
  console.log(">>>", cart.qty)
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => {

            return (<CartItem
              id={prod.id}
              image={prod.image}
              inStock={prod.inStock}
              name={prod.name}
              price={prod.price}
              qty={prod.qty}
            />)


          }

          )}
        </ListGroup>
      </div>
      <div className="categories summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
        <div>
          <Link to="/">
            <Button className="btn-home" style={{ width: "70%", margin: "15px 50px" }}>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;