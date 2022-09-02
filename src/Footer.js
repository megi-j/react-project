import React from 'react'
import { SocialIcon } from 'react-social-icons';
export default function Footer() {
  return (
    <footer style={{backgroundColor: "#1b9aaa", width: "100%", padding: "30px", display:"flex", justifyContent:"center"}}>
        <div style={{width: 250,display: "flex", justifyContent:"space-between"}}>
            <SocialIcon url="https://facebook.com" />
            <SocialIcon url="https://instagram.com" />
            <SocialIcon url="https://mail.google.com" />
            <SocialIcon url="https://web.whatsapp.com/" />
        </div>
        
    </footer>
  )
}
