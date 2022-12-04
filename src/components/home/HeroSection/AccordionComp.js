import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { PlayState } from 'react-gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Flip from "gsap/Flip";
// import Draggable from "gsap/Draggable";
// import AnimationQuote from "./AnimationQuote"

const AccordionComp = () => {

  const component = useRef(); 
  const [Show, setShow] = useState(false)
  const [playState, setPlayState] = useState(PlayState.play);
  useEffect(()=>{
    setPlayState(PlayState.play);
  },[])

 // useLayoutEffect(() => {
    
 //    // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
 //    let ctx = gsap.context(() => {

 //      let split = SplitText.create("h1", {type:"chars"});
      
 //      gsap.from(split.chars, { // <- selector text, scoped to this component!
 //        opacity: 0,
 //        y: 100,
 //        ease: "back",
 //        duration: 1,
 //        stagger: 0.1
 //      });
      
 //      return () => split.revert(); // context cleanup
      
 //    }, component); // <- scopes all selector text inside the context to this component (optional, default is document)
    
 //    return () => ctx.revert(); // useLayoutEffect cleanup
 //  }, []);


  return (
    <>
      <style jsx>
        {
          `
        .accordion {
          width: 100%;
          height: 450px;
          overflow: hidden;
          margin: 0px auto;
        }
        
        .accordion ul {
          width: 100%;
          display: table;
          table-layout: fixed;
          margin: 0;
          padding: 0;
          overflow:hidden;
        }
        
        .accordion ul li {
          display: table-cell;
          vertical-align: bottom;
          position: relative;
          width: 16.666%;
          height: 350px;
          background-repeat: no-repeat;
          background-position: center center;
          transition: all 400ms ease-in-out;
        }
        
        .accordion ul li div {
          display: block;
          overflow: hidden;
          width: 100%;
        }
        
        .accordion ul li div a {
          display: block;
          height: 350px;
          width: 100%;
          position: relative;
          z-index: 3;
          vertical-align: bottom;
          padding: 15px 20px;
          box-sizing: border-box;
          color: #fff;
          text-shadow: 1px 1px 2px #000;
          /*filter: invert(100%);*/
          text-decoration: none;
          font-family: Open Sans, sans-serif;
          transition: all 300ms ease-in-out;
        }
        
        .accordion ul li div a * {
          opacity: 0;
          margin: 0;
          width: 100%;
          text-overflow: ellipsis;
          position: relative;
          z-index: 5;
          white-space: normal;
          overflow: hidden;
          -webkit-transform: translateX(-20px);
          transform: translateX(-20px);
          -webkit-transition: all 400ms ease-in-out;
          transition: all 400ms ease-in-out;

        }
        .accordion ul li div a h2 {
          font-family: Montserrat, sans-serif;
          text-overflow: clip;
          font-size: 40px;
          text-transform: uppercase;
          margin-bottom: 2px;
          top: 80px;
        }
        
        .accordion ul li div a p {
          top: 100px;
          font-size: 20px;
          padding-left: 1em;
          text-align:center;
        }
        
        .accordion ul li:nth-child(1) { 
          /* background-image: url("/images/accordion1.jpg");  */
          filter: saturate(3);
          border-radius:20px 0px 0px 20px;
        }
        
        .accordion ul li:nth-child(2) { 
          /* background-image: url("/images/accordion2.jpg");  */
         filter: grayscale(70%);
        }
        
        .accordion ul li:nth-child(3) { 
          /* background-image: url("/images/accordion3.jpg");  */
          filter: saturate(2);
        }
        
        .accordion ul li:nth-child(4) { 
          /*background-image: url("/images/accordion4.jpg"); */
          filter: hue-rotate(180deg);
          border-radius:0px 20px 20px 0px;
        }
      
        
        .accordion ul li { 
          font-weight:bold;
          background-size: cover; 
          background-color: rgba(0,0,0,.3);
          background-blend-mode: overlay;
        }
        .accordion ul:hover li { width: 10%; }
        .accordion ul:hover li:hover { width: 90%; }
        
        /*.accordion ul:hover li:hover a { background: rgba(0, 0, 0, 0.4); }*/
        
        .accordion ul:hover li:hover a * {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
     
         @media only screen and (max-width: 680px) {
  
          .sliderTextTrue{
            display:none;
          }

          .heading-hide {
            display: none;
          }
          
          .accordion ul li div a p {
            top: 20px;
            font-size: 18px;
            padding-left: 1em;
          }
          .accordion ul li div a {
            height: 390px;
          }
          
          body { margin: 0; }
          .accordion { height: auto; }
          .accordion ul li { 
            font-weight:bold;
            background-size: cover; 
            background-color: rgba(0,0,0,.3);
            background-blend-mode: overlay;
            margin-bottom:50px;
          }
          .accordion ul li,
          .accordion ul li:hover,
          .accordion ul:hover li,
          .accordion ul:hover li:hover {
            position: relative;
            display: table;
            table-layout: fixed;
            width: 100%;
            -webkit-transition: none;
            transition: none;
          }
          .accordion ul li div a h2 {
            display:none;
          }
          
          .accordion ul li div a * {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
            white-space: normal;

          }
        }

        .animationBox{
            position:relative;
            width:100%;
        }
        .animationContainer {
            width:100%;
            position:absolute;
            top:0;
            left:0;
            height:450px;
        }

        .sliderText{
          font-size: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          top: 45%;
          color:white;
        }

        .sliderTextTrue{
          font-size: 20px;
          display: flex;
          justify-content: start;
          align-items: start;
          position: relative;
          top: 25%;
          color:white;
          transform:rotate(-90deg);
        }
        `
        }
      </style>
      <div className="accordion relative pb-[650px] pb-[100px] px-4">
        <ul>
          <Link href="/accordionSections/section1">
            <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              {Show ? <span className='sliderTextTrue heading-hide'>Trigan Blockchain</span> : <span className='sliderText'>Trigan Blockchain</span>}
              <div>
                <a href="#" className="sliderLink">
                  <h2>Trigan Blockchain</h2>
                  <p>The first real-world relevant blockchain
                    Designed as a fairer more powerful solution to the needs of urban communities.
                    The foundation of our smart city operating system.
                  </p>
                </a>
              </div>
            </li>
          </Link>
          <Link href="/accordionSections/section2">
            <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              {Show ? <span className='sliderTextTrue heading-hide'>Trigan Economy</span> : <span className='sliderText'>Trigan Economy</span>}
              <div>
                <a href="#" className="sliderLink">
                  <h2>Trigan Economy</h2>
                  <p>The next step in community enablement.Imagine a caring economy actively working for the success of everyone, regardless of background - a system created to bring external funding to real-world towns and cities everywhere.
                  </p>
                </a>
              </div>
            </li>
          </Link>
          <Link href="/accordionSections/section3">
            <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              {Show ? <span className='sliderTextTrue'>Trigan Smartest City</span> : <span className='sliderText'>Trigan Smartest City</span>}
              <div>
                <a href="#" className="sliderLink">
                  <h2>Trigan Smartest City</h2>
                  <p>Fact checked networks of sensors providing data and analysis to the Trigan urban blockchain, empowering communities and helping everyone to have a voice. The operating system for smart cities.</p>
                </a>
              </div>
            </li>
          </Link>
          <Link href="/accordionSections/section4">
            <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              {Show ? <span className='sliderTextTrue'>Trigan Digital Twins</span> : <span className='sliderText'>Trigan Digital Twins</span>}
              <div>
                <a href="#" className="sliderLink">
                  <h2>Trigan Digital Twins</h2>
                  <p>A new community-centric approach to digital twins. Applying data holistically to inform real-time community simulations. This is Trigan’s answer to Metaverse, introducing new ways to live, work and play virtually. Commuting should be a choice, not a necessity.
                  </p>
                </a>
               {/*{Show ?  <div className="animationContainer">
                    <div className="animationBox">
                        <AnimationQuote show={Show} text={<span>A new community-centric approach to digital twins. Applying data holistically to inform real-time community <br /> simulations. This is Trigan’s answer to Metaverse, introducing new ways to live, work and play virtually. <br /> Commuting should be a choice, not a necessity.</span>}/>
                    </div>
                </div>:""}*/}
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default AccordionComp