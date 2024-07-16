import React from 'react'
import Image1 from '../assets/designs/next-rated-designer-image.png'
import Image2 from '../assets/designs/heritage-smiling-in-goggles.png'
import Image3 from '../assets/designs/heritage-red-bg-img.png'
import Image4 from '../assets/designs/heritage-and-friends.png'
import Image5 from '../assets/designs/heritage-in-graduation-gown.png'
import Image6 from '../assets/designs/heritage-working-on-laptop.png'
import Image7 from '../assets/designs/tech-ready-flyer.png'
import Signature from '../assets/designs/Logo.svg';


import './MeetIsaac.css'

const MeetIsaac = () => {
  return (
    <div id="meet-isaac" className='section'>
      <p id='headline-text'>M<span id="about-yellow-mask">E</span>ET <span id="about-blue-mask">H</span>ERITAGE IS<span id="about-red-mask">A</span>AC</p>
      <div id='story'>
        <p id='first-paragraph'>Hi My name is <span className='emphasised-text'>Heritage Isaac</span> and designs is what I do. I'm not a unicorn, but I sprinkle magic (and pixels) into digital experiences. I'm a <span className='emphasised-text'>multidisciplinary designer</span> with 2+ years experience under my belt and a degree in <span className='emphasised-text'>Human Anatomy.</span> I am also a <span className='emphasised-text'>no-code devloper</span> (Framer, Wix and Wordpress).</p>
        <div id='first-grid'>
            <img id='grid1img1' src={Image1} alt="next rated designer award image" />
            <img id="grid1img2" src={Image2} alt="Isaac laughing" />
            <img id="grid1img3" src={Image3} alt="Isaac's passport image" />
            <img id="grid1img4" src={Image4} alt="Isaac and Friends" />
        </div>
        <p id='second-paragraph'>My design passion got ignited in high school. I started recreating logos in Corel Draw. Then I started experimenting with social media design usin Canva and Pixellab. Photoshop fueled my desire for professional tools and then became my go-to.</p>
        <div id='second-grid'>
            <div id='grid2img1'><img src={Image5} alt="Isaac's graduation image"/></div>
            <p id='grid2par1'>And by 2022, i wanted to make more impact so I started seeking a problem-solving role in tech. I then became a Web3 Community & Partnership Manager for NFT projects.</p>
            <div id='grid2img2'><img src={Image6} alt="Isaac at work" /></div>
            <p id='grid2par2'>The experience was valuable, but design called me back. Product design resonated, and through bootcamps, I leveraged my graphics design foundation to transition. It's been an amazing journey ever since.</p>
        </div>
        <div id='third-grid' >
            <div id='grid3img1'><img src={Image7} alt="techready flyer featuring Isaac"/></div>
            <div id='grid3par1'>
            <p>When I'm not designing, you wou'll catch me in my element-educating, chatting up a storm about all things design and inspiring designers and helping my friends find their feet in design.</p>
            <p>Now I am currently pursuing an MBA degree</p>
            <p>Thank you for taking the time to read my story. Until next time, stay jiggy.</p>
            <img className='signature' src={Signature}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MeetIsaac
