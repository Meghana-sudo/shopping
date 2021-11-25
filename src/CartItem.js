import { useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "./context/Context";
import './Categories.css';

function CartItem(props) {
    const { id, image, inStock, name, price, qty } = props
    const {
        state: { cart },
        dispatch,
    } = CartState();
    const [itemQty, setItemQty] = useState(qty)
    return (
        <div>


            <ListGroup.Item key={id}>
                <Row>
                    <Col md={2}>
                        <Image src={image} alt={name} fluid rounded />
                    </Col>
                    <Col md={2}>
                        <span>{name}</span>
                    </Col>
                    <Col md={2}>₹ {price}</Col>

                    <Col md={2}>
                        {/* <Form.Control
                    as="select"
                    value={qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control> */}
                        <button
                            onClick={() => {
                                let add = itemQty;
                                add++;
                                console.log("inStock", inStock)
                                if (inStock >= add) {

                                    setItemQty(add)
                                    dispatch({
                                        type: "CHANGE_CART_QTY",
                                        payload: {
                                            id: id,
                                            qty: itemQty,
                                        },
                                    })


                                }
                                else { }
                            }} style={{ borderRadius: "50%", width: "30px" }}>+</button>
                        <span> {
                            itemQty
                        }
                        </span>
                        <button
                            onClick={() => {
                                let sub = itemQty;
                                sub--;
                                if (sub >= 0) {
                                    setItemQty(sub)
                                    dispatch({
                                        type: "CHANGE_CART_QTY",
                                        payload: {
                                            id: id,
                                            qty: itemQty,
                                        },
                                    })
                                }
                                else { }

                            }}

                            style={{ borderRadius: "50%", width: "30px" }}>-</button>

                    </Col>
                    <Col md={2}>
                        <Button
                            type="button"
                            variant="light"
                       onClick={() =>
                         dispatch({
                           type: "REMOVE_FROM_CART",
                        payload: {
                            id: id,
                        }
                      })
                      }
                        >
                            <AiFillDelete fontSize="20px" />
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>

        </div>
    )
}

export default CartItem
