import React from 'react'
import "../Component/home.css"


import { MyCard } from "./Card/Card";
import { Footer } from './Footer/Footer';

const Home = () => {
  return (
    <>
      <div className='banner d-flex justify-content-center align-items-center'>
        <div className='text-center text-white '>    <h1 className='fw-bold'>“Best Food Quality, Every Time.”</h1>
          <p className='text-white'>“Freshly made with premium ingredients and delivered hot to your door.”</p>
          <button>Order Now</button>
        </div>
      </div>

      <div className='text-center'>
        <h6 className='our-services mt-5'> Our Services</h6>
        <h1 className='m-2 mb-5 fs-1'>How Does It Work?</h1>
      </div>
      <div className='about-sec'>


        <div>
          <img className='order-now-img mb-3' src="/Easy-Order.png" alt="ORDER NOW" />
          <h4 className='fw-bold'>Easy To Order</h4>
          <p>You needs only few steps to order the food.</p>
        </div>
        <div> <img className='fast-deliver-img rounded-3 mb-3 ' src="/fast-deliver.png" alt="" />
          <h4 className='fw-bold'>Fast Delivery</h4>
          <p>Delivery that is always ontime even faster</p>
        </div>
        <div>
          <img className='best-quality-img mb-3' src="/best-quality.png" alt="" />
          <h4 className='fw-bold' >Best Quality</h4>
          <p>Not only fast for us in quality is also number one </p>
        </div>


      </div>
      <h2 className='text-center m-5'>Menu</h2>
      {/* Multiple Dynamic Cards */}
      <div className='justify-content-center align-items-center m-3 mt-4' style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "20px" }}>
        <MyCard price=" 12$" desc="Juicy beef patty with fresh lettuce, tomato, cheese, and our special sauce." title="Zinger Burger" image="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <MyCard price=" 14$" desc="Delicious cheesy pizza with fresh toppings and soft crust."  title="Loaded Pizza" image="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <MyCard price=" 9$" desc="Crispy golden fries topped with melted cheese, pepperoni, and Italian herbs." title="Pizza Fries" image="https://images.unsplash.com/photo-1666304752980-678d5c35c911?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <MyCard price=" 10$" desc=" Crispy golden chicken bites, perfectly seasoned and served with your favorite dipping sauce." title="Chicken Nuggets" image="https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <MyCard price=" 25$" desc="Fragrant basmati rice layered with tender chicken, aromatic spices, and garnished with fried onions." title="Chicken Biryani" image="https://images.unsplash.com/photo-1705174299330-939dd03cc864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D" />
        <MyCard price=" 30$" desc="Tender chicken cooked in a spicy tomato and pepper gravy, garnished with fresh coriander and ginger." title="CHicken Karahi" image="https://media.istockphoto.com/id/2002216833/photo/hot-madras-paneer-and-vegetable-masala-with-rice.jpg?s=2048x2048&w=is&k=20&c=rFYMflWWByxAoD-S03kvKjMfvJeWFPFFubQvbz_yhEI=" />
        <MyCard price=" 20$" desc=" Slow-cooked wheat and lentils blended with tender meat and aromatic spices, served warm and hearty." title="Haleem" image="https://media.istockphoto.com/id/1454433038/photo/chicken-haleem-with-fried-onion-and-lemon-served-in-plate-isolated-on-table-top-view-of.jpg?s=2048x2048&w=is&k=20&c=n2H1ceKB7atPCZ2T6OaDyxDjawTeVVkbNOQRLOPBLMk=" />
        <MyCard price=" 40$" desc="Succulent mutton pieces cooked in a rich tomato and chili gravy, garnished with fresh coriander and ginger." title="Mutton Karahi" image="https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <MyCard price=" 8$" desc="   Rich and creamy chocolate shake topped with whipped cream and chocolate syrup.." title="Choclate Shake" image="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <MyCard price=" 9$" desc="Freshly blended mango juice, naturally sweet and served chilled for a refreshing taste." title="Fresh Mango Juice" image="https://images.unsplash.com/photo-1697642452436-9c40773cbcbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ28lMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D" />
        <MyCard price=" 5$" desc="Freshly pressed sugar cane juice, naturally sweet and extremely refreshing, served chilled." title="Sugar Cane Juics" image="https://plus.unsplash.com/premium_photo-1687564260630-2a5046f672ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VnYXIlMjBjYW5lJTIwanVpY2V8ZW58MHx8MHx8fDA%3D" />
        <MyCard price=" 8.5$" desc="Freshly pressed sugar cane juice, naturally sweet and extremely refreshing, served chilled." title="Fresh Orange Juice" image="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D" />
      </div>
<Footer/>


    </>
  )
}

export default Home