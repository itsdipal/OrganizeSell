import React, { useState, useEffect } from "react";

const About = () => {
const [posts, setPosts] = useState([]);

const fetchPostData = async ()=>{
  try{
  let res = await fetch("https://dummyjson.com/posts")
  const data = await res.json()
  console.log("data", data)
  setPosts(data.posts)
  }
  catch(err){
    console.log("err",err)
  }
}
useEffect(()=>{
  fetchPostData()
},[])

  return (
    <section id ="about" className="about">
    <div className="about-container">
      <div className="about-left">
        <h2>Built for Social Sellers</h2>
        <p>
          Sellory was created to help social media sellers manage their orders,
          customers, and payments without confusion.
        </p>
        <p>
          We understand the challenges of selling through Facebook, Instagram,
          and WhatsApp — scattered messages, missed orders, and manual tracking.
          Sellory brings everything together into one simple dashboard.
        </p>
        
      </div>
{/*       
      <div className="about-right">

       <div className="about-card">
  <h3>All-in-One Control</h3>
  <p>
    <span className="about-icon">📦</span>
    Manage products, orders, and customers from one organized dashboard.
  </p>
</div>

<div className="about-card">
  <h3>Built for Daily Selling</h3>
  <p>
    <span className="about-icon">🎯</span>
    Designed to handle real-world selling speed on Facebook, Instagram, and WhatsApp.
  </p>
</div>

<div className="about-card">
  <h3>Made for Local Sellers</h3>
  <p>
    <span className="about-icon">🚀</span>
    Supports Nepali workflows, payments, and practical business needs.
  </p>
</div>
     </div> */}

      <div className = "about-right">
      {posts && posts.length >0 && posts.map((post,key)=>(
        <div className = "about-card">
          <p style={{fontSize:12,fontWeight:600}}>{post.title}</p>
          <p style={{fontSize:9}}>{post.body}</p>
        </div>
      ))}
      </div>
    </div>
    </section>
  );
};
export default About;
