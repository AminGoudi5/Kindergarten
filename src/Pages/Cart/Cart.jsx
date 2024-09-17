import React from 'react'
import './Cart.css'
import Carts from '../../Components/Carts/Carts'
const Cart = () => {
    return (
        <div className='cart'>
            <p className='cart-title'>برای پیشرفت دلبند شما</p>
            <p className='cart-titr'>چه برنامه هایی رو داریم</p>
            <div className="cart-info">
                <Carts />
            </div>
        </div>
    )
}

export default Cart
