import { useEffect, useState } from 'react';
import '../App.css';
function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='cart'>
            {
                CART?.map((cartItem, cartIndex) => {
                    return (
                        <div className='child_cart'>
                            <img src={cartItem.url} width={200} />
                            <span>{cartItem.name}</span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }
                                }
                            >-</button>
                            <span>{cartItem.quantity}</span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }
                                }
                            >+</button>
                            <span>Rs.{cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }
            <p> Total <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            <button>Buy Now</button>
        </div>
    )
}
export default CartList