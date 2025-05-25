// 'use client'
// import { useEffect, useRef } from 'react'
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

// const slides = [
//   { name: 'Tokata', image: '/images/img1.jpg' },
//   { name: 'Tokata', image: '/images/img2.jpg' },
//   { name: 'Tokata', image: '/images/img3.jpg' },
//   { name: 'Tokata', image: '/images/img4.jpg' },
//   { name: 'Tokata', image: '/images/img5.jpg' },
// ]

// export default function Slider() {
//   const slideRef = useRef<HTMLDivElement>(null)

//   const handleNext = () => {
//     const slide = slideRef.current
//     if (slide && slide.children.length > 0) {
//       slide.appendChild(slide.children[0])
//     }
//   }

//   const handlePrev = () => {
//     const slide = slideRef.current
//     if (slide && slide.children.length > 0) {
//       slide.prepend(slide.children[slide.children.length - 1])
//     }
//   }

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext()
//     }, 5000)

//     return () => clearInterval(interval) // Cleanup on unmount
//   }, [])

//   return (
//     <div className="container">
//       <div className="slide" ref={slideRef}>
//         {slides.map((item, index) => (
//           <div
//             className="item"
//             key={index}
//             style={{ backgroundImage: `url(${item.image})` }}
//           >
//             <div className="content">
//               <div className="name">{item.name}</div>
//               <div className="des">សួស្ដីអាពាហ៍ពីពាហ៍ កូនប្រុសកូនស្រី</div>
//               {/* <button>See More</button> */}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="button ">
//         <button className="prev" onClick={handlePrev}>
//           <FaLongArrowAltLeft className='text-white'/>
//         </button>
//         <button className="next" onClick={handleNext}>
//           <FaLongArrowAltRight className='text-white'/>
//         </button>
//       </div>
//     </div>
//   )
// }
'use client'
import { useEffect, useRef, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const slides = [
  { image: '/images/img1.jpg'},
  { image: '/images/img2.jpg'},
  { image: '/images/img3.jpg'},
  { image: '/images/img4.jpg'},
  { image: '/images/img5.jpg'},
]

export default function ResponsiveSlider() {
  const slideRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleNext = () => {
    const slide:any = slideRef.current
    if (slide && slide.children.length > 0) {
      slide.appendChild(slide.children[0])
    }
  }

  const handlePrev = () => {
    const slide:any = slideRef.current
    if (slide && slide.children.length > 0) {
      slide.prepend(slide.children[slide.children.length - 1])
    }
  }

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style jsx global>{`
       

        .slider-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(1000px, 60vw);
          height: min(606px, 80vh);
          background: #f5f5f5;
          box-shadow: 0 30px 50px #dbdbdb;
          border-radius: 10px;
          overflow: hidden;
        }

        .slide {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .slide .item {
          width: 200px;
          height: 300px;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          border-radius: 20px;
          box-shadow: 0 30px 50px #505050;
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          display: inline-block;
          transition: 0.5s ease-in-out;
          overflow: hidden;
        }

        /* Desktop positioning */
        @media (min-width: 768px) {
          .slide .item:nth-child(1) {
            top: 0;
            left: 0;
            transform: translate(0, 0);
            border-radius: 10px;
            width: 100%;
            height: 100%;
            z-index: 1;
            box-shadow: none;
          }

          .slide .item:nth-child(2) {
            top: 0;
            left: 0;
            transform: translate(0, 0);
            border-radius: 10px;
            width: 100%;
            height: 100%;
            z-index: 2;
            box-shadow: none;
          }

          .slide .item:nth-child(3) {
            left: 50%;
            z-index: 3;
          }

          .slide .item:nth-child(4) {
            left: calc(50% + 220px);
            z-index: 3;
          }

          .slide .item:nth-child(5) {
            left: calc(50% + 440px);
            z-index: 3;
          }

          .slide .item:nth-child(n + 6) {
            left: calc(50% + 660px);
            opacity: 0;
            z-index: 3;
          }

          /* Ensure full images on desktop main slides */
          .slide .item:nth-child(1),
          .slide .item:nth-child(2) {
            background-size: cover;
            background-position: center center;
          }
        }

        /* Mobile positioning - Show 1 large + 2 small */
        @media (max-width: 767px) {
          .slider-container {
            height: 70vh;
            min-height: 450px;
          }

          .slide .item {
            border-radius: 15px;
            transition: 0.5s ease-in-out;
          }

          /* Main large image (first item) */
          .slide .item:nth-child(1) {
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 85%;
            height: 60%;
            border-radius: 20px;
            z-index: 10;
            background-size: cover;
            background-position: center center;
          }

          /* First small preview (second item) */
          .slide .item:nth-child(2) {
            bottom: 80px;
            left: 10%;
            top: auto;
            transform: translateX(0);
            width: 35%;
            height: 25%;
            z-index: 5;
            opacity: 0.8;
            background-size: cover;
            background-position: center center;
          }

          /* Second small preview (third item) */
          .slide .item:nth-child(3) {
            bottom: 80px;
            right: 10%;
            top: auto;
            left: auto;
            transform: translateX(0);
            width: 35%;
            height: 25%;
            z-index: 5;
            opacity: 0.8;
            background-size: cover;
            background-position: center center;
          }

          /* Hide remaining items on mobile */
          .slide .item:nth-child(n + 4) {
            opacity: 0;
            pointer-events: none;
            transform: translateX(100%);
          }
        }

        .button-container {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 20px;
          display: flex;
          justify-content: center;
          gap: 10px;
          z-index: 50;
        }

        .button-container button {
          width: 40px;
          height: 35px;
          border-radius: 8px;
          border: 1px solid #ffffff;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .button-container button:hover {
          background: rgba(171, 171, 171, 0.8);
          transform: scale(1.1);
        }

        .button-container button:active {
          transform: scale(0.95);
        }

        /* Mobile button styling */
        @media (max-width: 767px) {
          .button-container {
            bottom: 10px;
          }

          .button-container button {
            width: 45px;
            height: 40px;
            background: rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .button-container button:hover {
            background: rgba(0, 0, 0, 0.8);
            transform: scale(1.05);
          }

          /* Add tap highlights for small previews */
          .slide .item:nth-child(2),
          .slide .item:nth-child(3) {
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .slide .item:nth-child(2):active,
          .slide .item:nth-child(3):active {
            transform: translateX(0) scale(0.95);
            opacity: 1;
          }
        }

        /* Touch-friendly interactions */
        @media (hover: none) and (pointer: coarse) {
          .button-container button:hover {
            background: rgba(0, 0, 0, 0.8);
            transform: none;
          }
        }

        /* Additional fixes for image display */
        .slide .item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          z-index: -1;
        }

        /* Ensure proper aspect ratio maintenance */
        @media (min-width: 768px) {
          .slide .item:nth-child(1),
          .slide .item:nth-child(2) {
            object-fit: cover;
          }
        }

        @media (max-width: 767px) {
          .slide .item:nth-child(1),
          .slide .item:nth-child(2),
          .slide .item:nth-child(3) {
            object-fit: cover;
          }
        }
      `}</style>

      <div className="slider-container">
        <div className="slide" ref={slideRef}>
          {slides.map((item, index) => (
            <div
              className="item"
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            >
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="prev" onClick={handlePrev} aria-label="Previous slide">
            <FaLongArrowAltLeft />
          </button>
          <button className="next" onClick={handleNext} aria-label="Next slide">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </>
  )
}