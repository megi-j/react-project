import img from './images/1.webp'
import img1 from './images/2.jpg'
import img2 from './images/3.webp'
import img3 from './images/4.png'
import {useState, useEffect} from 'react'

let images = [img, img1, img2, img3]
//ეს კომპონენტი მიხატავს ყუთს, რომელსაც ფონად აქვს ფოტო და ეს ფოტო იცვლება ყოველ 2 წამში ერთხელ
export default function Slider() {
    const[index, setIndex] = useState(0)
    useEffect(()=>{
    
       setInterval(()=>{
         if(index < images.length-1){
            setIndex(index+1)
         }else{
            setIndex(0)
         }
         
       },2000)
    })
  return (
    <div style={{width: "80%", height: '80vh', backgroundImage: `url("${images[index]}")`, transition: "all 0.3s", backgroundPosition: "center", backgroundSize: "cover"}}></div>
  )
}
