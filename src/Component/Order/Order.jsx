import React, { useState } from 'react';
import "../Order/Order.css"

export const Order = () => {
    const [orderData, setOrderData] = useState({
        name: "",
        email: "",
        phone: "",
        quantity: "",
        productName: "",
        specialRequirement: "",
        address: ""
    });

    const handleChange = (e) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", orderData);
        alert("🎉 Your order has been placed successfully!");
    };

    return (
        <div>
            <h1 className='text-center mt-5 order'>Place Your Order</h1>

            <div className='Order-form d-flex justify-content-center align-items-center'>
                <form onSubmit={handleSubmit} className='d-flex flex-column w-25 border py-4 px-3 rounded-2'>
                    
                    <input name="name" value={orderData.name} onChange={handleChange} placeholder='Full Name' required type="text" />

                    <input name="email" value={orderData.email} onChange={handleChange} placeholder='Email' required type="email" />

                    <input name="phone" value={orderData.phone} onChange={handleChange} placeholder='Phone Number' required type="tel" />

                    <input name="productName" value={orderData.productName} onChange={handleChange} placeholder='Product Name' required type="text" />

                    <input name="quantity" value={orderData.quantity} onChange={handleChange} placeholder='Quantity' required type="number" />

                    <input name="specialRequirement" value={orderData.specialRequirement} onChange={handleChange} placeholder='Special Requirements' type="text" />

                    <input name="address" value={orderData.address} onChange={handleChange} placeholder='Address' required type="text" />

                    <button type='submit'>Submit</button>

                </form>
            </div>
        </div>
    );
};
