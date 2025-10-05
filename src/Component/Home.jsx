import React from 'react'
import "../Component/home.css"

import  { MyCard } from "./Card/Card"; 

const Home = () => {
  return (
    <>
   <div className='banner'>
    
    
     </div>
     {/* Multiple Dynamic Cards */}
      <div style={{ display: "flex",   gap: "1rem", marginTop: "20px" }}>
        <MyCard title="Card 1" image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <MyCard title="Card 2" image="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <MyCard title="Card 3" image="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <MyCard title="Card 4" image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
  
  
    </>
  )
}

export default Home