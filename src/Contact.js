import React, { useState } from 'react'
import sent from './images/send-data.png'

export default function Contact() {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")

 
  function nameChange(e){
    setName(e.target.value)
   
  }
  function emailChange(e){
    setEmail(e.target.value)
  }
  function phoneChange(e){
    setPhone(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    
    if(name.length < 3){
      alert("please enter valid name")
        
    }else if(!email.includes("@")) {
      alert("please enter valid email")
    }else if(phone.length < 5){
      alert("please enter valid phone")
    }else{
      document.querySelector("form").style.display = "none"
      document.querySelector(".sent").style.display = "block"
    }
  }
  return (
    <section style={{width: "100%", height: "65vh", display: "flex", justifyContent: "space-around", alignContent: "space-around", alignItems:"center", backgroundColor: "#f8ffe5"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23826.048863571126!2d44.76225795!3d41.714992099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1662033721081!5m2!1sen!2sge" loading="lazy" style={{width: "50%", height: "60%"}}></iframe>
      
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
        <h1>contact us</h1>
        <input type="text" placeholder='name' style={{marginBottom: 10}} value={name} onChange={(e)=>nameChange(e)} />
        <input type="email" name="" id="" placeholder='email address' style={{marginBottom: 10}} value={email} onChange={(e)=>emailChange(e)} />
        <input type="phone" name="" id="" placeholder='phone' style={{marginBottom: 10}} value={phone} onChange={(e)=>phoneChange(e)} />
        <textarea name="" id="" cols="30" rows="10" placeholder='message' style={{marginBottom: 10}}></textarea>
        <button type='submit' style={{border: "none", width: 100, height: 35, backgroundColor: "#ef476f", borderRadius: 10, cursor: "pointer"}}>submit</button>
      </form>
      <img className='sent' src={sent} alt="sent" style={{display: "none"}} />
    </section>
  )
}
