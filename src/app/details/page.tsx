'use client'

import { useEffect, useRef, useState } from "react";
import { BsFlower2 } from "react-icons/bs";
import { FaHome, FaImage, FaLongArrowAltLeft, FaLongArrowAltRight, FaMapMarkedAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowDown, MdQrCode2 } from "react-icons/md";

const slides = [
  { image: '/images/img1.png'},
  { image: '/images/img2.png'},
  { image: '/images/img3.png'},
  { image: '/images/img4.png'},
  { image: '/images/img5.png'},
]

export default function Details(){
  const [openMap, setOpenGoogleMap] = useState(false);
  const [openQr , setOpenQrCode] = useState(false);
  const [openImage , setOpenImage] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
      } catch (err) {
        console.warn("Autoplay failed. User interaction may be required.");
      }
    };

    playAudio();
  }, []);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };


  // Close when clicking outside the modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenGoogleMap(false);
        setOpenQrCode(false);
        setOpenImage(false);
      }
    }

    if (openMap || openQr || openImage) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMap,openQr,openImage]);

  
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
    <div className="min-h-svh w-full max-w-[500px] bg-background relative">

      {/* TODO: For music */}
      <audio
        ref={audioRef}
        src="/music/music-wedding.weba"
        preload="auto"
        hidden // 👈 hide the audio player
      />
      {/* <div className="flex flex-col items-center gap-4 p-4">
        <audio ref={audioRef} src="/music/music-wedding.weba" preload="auto" hidden />
        <div className="flex gap-2">
          <button onClick={handlePlay} className="px-4 py-2 bg-green-600 text-white rounded">Play</button>
          <button onClick={handlePause} className="px-4 py-2 bg-red-600 text-white rounded">Pause</button>
        </div>
      </div> */}
    
      {/* Vertical mirrored images left and right */}
      <div className="w-full max-w-[500px] fixed top-48 left-1/2 flex justify-end -translate-x-1/2 z-10 pointer-events-none">
        <div className="relative w-10 mirror h-full">
          <img alt="" loading="lazy" src="/images/frame.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' ,transform: 'scaleX(-1)'}} />
        </div>
      </div>
      <div className="w-full max-w-[500px] fixed top-48 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="relative w-10 h-full">
          <img alt="" loading="lazy" src="/images/frame.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Bottom buttons and image left */}
      <div className="fixed w-full max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 z-50">
        <div className="absolute xs:w-52 w-44 bottom-0 left-0 z-30">
          <img src="/images/flower-frame.webp" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Home button (Green) */}
        <a href="/">
          <div className="absolute bottom-14 left-2 z-50 flex items-center justify-center">
            <button className="btn-scale bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-green-500">
              <FaHome className="text-xl" />
            </button>
          </div>
        </a>

        {/* Map button (Blue) */}
        <div className="fixed bottom-2 left-14 z-50 flex items-center justify-center">
          <button onClick={() => setOpenGoogleMap(true)} className="btn-scale bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-blue-500">
            <FaMapMarkedAlt className="text-xl" />
          </button>
        </div>
      </div>

      {/* Bottom buttons and image right */}
      <div className="fixed w-full max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 z-50">
        <div className="absolute xs:w-52 w-44 bottom-0 right-0 z-30">
          <img src="/images/flower-frame.webp" alt="" className="w-full h-full object-cover" style={{ transform: 'scaleX(-1)' }} />
        </div>

        {/* QR Code button (Purple) */}
        <div className="fixed bottom-14 right-2 z-50 flex items-center justify-center">
          <button onClick={() => setOpenQrCode(true)} className="btn-scale bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-purple-500">
            <MdQrCode2 className="text-xl" />
          </button>
        </div>

        {/* Image viewer button (Pink) */}
        <div className="fixed bottom-2 right-14 z-50 flex items-center justify-center">
          <button onClick={() => setOpenImage(true)} className="btn-scale bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-pink-500">
            <FaImage className="text-xl" />
          </button>
        </div>
      </div>

      {/* Overlay loading screen */}
      <div className="bg-neutral-900/40 fixed top-0 left-0 h-full w-full flex-col z-[100] flex justify-center items-center animate-fade-out-delay">
        <MdOutlineKeyboardDoubleArrowDown className="text-white text-4xl animate-bounce"/>
        <p className="text-khmer-arrow-down">អូសចុះក្រោម</p>
      </div> 


      {/* Background videos */}
      {/* <div className="min-h-dvh w-full max-w-[500px] pointer-events-none fixed top-0 left-1/2 mix-blend-multiply -translate-x-1/2 z-[60]">
        <video playsInline autoPlay loop preload="metadata" className="fixed mirror w-52 top-[210px] -left-8 z-10 mix-blend-multiply">
          <source src="" type="video/webm" />
        </video>
        <video playsInline autoPlay loop preload="metadata" className="fixed w-72 -bottom-44 right-0 z-50 pointer-events-none mix-blend-multiply">
          <source src="" type="video/webm" />
        </video>
      </div> */}

      {/* Main content */}
      <div className="flex z-10 items-center flex-col pt-10 gap-4">
        {/* <div className="relative w-[80%]">
          <img alt="" loading="lazy" src="/images/wedding-title.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div> */}
<div className="sticky top-0 z-50 bg-white w-[80%] mx-auto">
  <img
    alt=""
    loading="lazy"
    src="/images/wedding-title.webp"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>


        {/* Couple section */}
        <section className="w-full flex flex-col items-center relative">
          {/* <div className="w-24 relative top-6">
            <img alt="" loading="lazy" src="/images/name-initial.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div> */}
          <div className="w-32 relative top-6">
            <img alt="" loading="lazy" src="/images/hear-wedding.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div> 
          <div className="flex justify-between w-full px-14">
            <div className="flex flex-col gap-2">
              <p className="text-khmer">កូនប្រុស</p>
              <p className="text-khmer-body">អុល តុក្កតា</p>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p className="text-khmer">កូនស្រី</p>
              <p className="text-khmer-body">ភិន ផានូ</p>
            </div>
          </div>
        </section>

        {/* Parents section */}
        <section className="flex flex-row justify-between items-start w-full px-14 sm:px-14 mt-6 gap-4">
          {/* Left block */}
          <div className="flex flex-col gap-2 items-start">
            <p className="text-khmer">
              លោក<span className="text-khmer-body"> ប៊ិន​ អុល</span>
            </p>
            <p className="text-khmer">
              អ្នកស្រី<span className="text-khmer-body"> រស់ ផល</span>
            </p>
          </div>

          {/* Right block */}
          <div className="flex flex-col gap-2 items-end text-right">
            <p className="text-khmer">
              លោក<span className="text-khmer-body"> ភិន ផាន</span>
            </p>
            <p className="text-khmer">
              អ្នកស្រី<span className="text-khmer-body"> ម៉ែន វួន</span>
            </p>
          </div>
        </section>

        {/* Divider */}
        <section className="flex flex-col items-center gap-4 mt-4">
          <div className="relative w-10 h-auto">
            <img
              alt="Embroidery"
              loading="lazy"
              width="43"
              height="12"
              src="/images/small-embroidery.webp"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-khmer-body text-2xl">សូមគោរពអញ្ជើញ</h1>

          <p className="px-16 text-center text-sm text-khmer leading-6">
            ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្ត ចូលរួមជាភ្ញៀវកិត្តិយស ក្នុង
            <span className="font-bold"> ពិធីរៀបអាពាហ៍ពិពាហ៍ </span>
            កូនប្រុស-ស្រី របស់យើងខ្ញុំនិងប្រសិទ្ធិពរជ័យ សិរីមង្គល បវរប្រសើរ ដល់គូស្វាមីភរិយាថ្មី ពិសាភោជនាហារ ប្រព្រឹត្តទៅនៅថ្ងៃ១២កើត ខែមាឃ ឆ្នាំរោង ឆស័ក ព.ស.២៥៦៩ ត្រូវនឹង
            <span className="font-bold">
              {" "}
              ថ្ងៃសៅរ័ ទី១១ ខែមេសា ឆ្នាំ២០២៦ វេលាម៉ោង ៥ល្ងាច នៅគេហដ្ឋានខាងស្រី 
            ភូមិឈើទាល ឃុំម្រោម ស្រុកអង្គរជ័យ ខេត្តកំពត{" "}
            </span>
            ដោយមេត្រីភាព។ (សូមមើលប្លង់បញ្ជាក់)
          </p>

          <p className="mt-6 text-sm text-khmer-body">សូមសំណាងល្អ សូមអរគុណ!</p>

          <div className="flex gap-4">
            <div className="relative w-4 h-auto">
              <img
                alt="Decoration Left"
                loading="lazy"
                width="48"
                height="46"
                src="/images/small-embroidery-2.webp"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="size-4 rounded-full bg-primary-foreground flex justify-center items-center animate-scale-bounce">
              <BsFlower2 />
            </div>

            <div className="relative w-4 h-auto">
              <img
                alt="Decoration Right"
                loading="lazy"
                width="48"
                height="46"
                src="/images/small-embroidery-2.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-16 mb-4 flex flex-col items-center w-full gap-10">
          <h1 className="text-khmer-body text-2xl">ប្លង់កម្មវិធី</h1>
          <div className="relative w-[70%]">
            <img
              alt="Location Map"
              loading="lazy"
              width="1066"
              height="1186"
              src="/images/location-map.webp"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      <section className="flex flex-col items-center w-full gap-4">
        <h1 className="text-khmer-body text-xl">ទំនាក់ទំនងទូរស័ព្ទ</h1>
        {/* Name + phone row: make always horizontal */}
        <div className="flex flex-row justify-between w-full px-14 sm:px-16 gap-4">
          {/* Left block */}
          <div className="flex flex-col gap-2 items-start">
            <p className="text-khmer">
              កូនប្រុស <span className="text-khmer-body">អុល តុក្កតា</span>
            </p>
            <p className="font-bold text-khmer-title-bold text-xl">010785306</p>
          </div>

          {/* Right block */}
          <div className="flex flex-col gap-2 items-end text-right">
            <p className="text-khmer">
              កូនស្រី <span className="text-khmer-body">ភិន ផានូ</span>
            </p>
            <p className="font-bold text-khmer-title-bold text-xl">0972352572</p>
          </div>
        </div>

        {/* Decoration */}
        <div className="flex gap-4 items-center">
          <div className="relative w-4 h-4">
            <img
              alt="decoration"
              loading="lazy"
              width="48"
              height="46"
              src="/images/small-embroidery-2.webp"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="size-4 rounded-full bg-primary-foreground flex justify-center items-center animate-scale-bounce">
            <BsFlower2 />
          </div>

          <div className="relative w-4 h-4">
            <img
              alt="decoration"
              loading="lazy"
              width="48"
              height="46"
              src="/images/small-embroidery-2.webp"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

        {/* <section className="flex flex-col items-center w-full gap-10">
          <h1 className="text-khmer-body text-xl">ទំនាក់ទំនងទូរស័ព្ទ</h1>
          <div className="flex flex-col sm:flex-row xs:flex-row justify-between w-full px-16 gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-khmer">
                កូនប្រុស <span className="text-khmer-body">អុល តុក្កតា</span>
              </p>
              <p className="font-bold text-khmer-title-bold text-xl">010785306</p>
            </div>

            <div className="flex flex-col gap-2 sm:items-end">
              <p className="text-khmer">
                កូនស្រី <span className="text-khmer-body">ភិន ផានូ</span>
              </p>
              <p className="font-bold text-khmer-title-bold text-xl">0972352572</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative w-4 h-4">
              <img
                alt="decoration"
                loading="lazy"
                width="48"
                height="46"
                src="/images/small-embroidery-2.webp"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="size-4 rounded-full bg-primary-foreground flex justify-center items-center animate-scale-bounce">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-white"
                height="12"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>

            <div className="relative w-4 h-4">
              <img
                alt="decoration"
                loading="lazy"
                width="48"
                height="46"
                src="/images/small-embroidery-2.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section> */}

         <section className="my-16 flex items-center flex-col w-full gap-10">
            <h1 className="text-khmer-body text-2xl ">
              គណនី <span className="font-bold">ABA</span>
            </h1>

            {/* USD Account */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center items-center p-4">
                <div className="relative w-[150px] h-[150px] rounded-2xl border-4 border-white bg-[#DACBB1] shadow-[0_0_10px_rgb(104,134,218)] overflow-hidden cursor-pointer">
                  {/* Animation ring */}
                  {/* <div className="absolute w-[15px] h-[200px] -mt-[92px] bg-gradient-to-b from-[#00ccff] to-[#d400d4] animate-spin z-0" /> */}

                  {/* Mask layer */}
                  <div className="absolute inset-1 rounded-[16px] bg-[#DACBB1] z-10" />
                  {/* Animated border segments */}
                  <span className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-white animate-border-top"></span>
                  <span className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-transparent to-white animate-border-right delay-[0.25s]"></span>
                  <span className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-l from-transparent to-white animate-border-bottom delay-[0.5s]"></span>
                  <span className="absolute bottom-0 left-0 h-full w-[4px] bg-gradient-to-t from-transparent to-white animate-border-left delay-[0.75s]"></span>

                  {/* QR Code Image */}
                  <img
                    src="/images/tokata-usd.png" 
                    alt="QR Code"
                    className="relative z-20 w-full h-full object-contain rounded-[16px]"
                  />
                </div>
              </div>

              <p className="text-khmer-title __className_951876">គណនីប្រាក់ដុល្លារ</p>
              <p className="font-bold text-xl text-khmer-title-bold">ORL TOKATA</p>
              <p className="font-bold text-xl text-khmer-title-bold">004327824</p>
            </div>

            {/* Divider */}
            <div className="w-1/2 h-[1px] border-t border-dashed border-khmer-title"></div>

          {/* KHR Account */}
              <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center items-center p-4">
                <div className="relative w-[150px] h-[150px] rounded-2xl border-4 border-white bg-[#DACBB1] shadow-[0_0_10px_rgb(104,134,218)] overflow-hidden cursor-pointer">
                 
                  {/* Animated border segments */}
                  <span className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-white animate-border-top"></span>
                  <span className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-transparent to-white animate-border-right delay-[0.25s]"></span>
                  <span className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-l from-transparent to-white animate-border-bottom delay-[0.5s]"></span>
                  <span className="absolute bottom-0 left-0 h-full w-[4px] bg-gradient-to-t from-transparent to-white animate-border-left delay-[0.75s]"></span>

                  {/* QR Image */}
                   <img
                    src="/images/tokata-kh.png" 
                    alt="QR Code"
                    className="relative z-20 w-full h-full object-contain rounded-[16px]"
                  />
                </div>
              </div>

              <p className="text-khmer-title __className_951876">គណនីប្រាក់រៀល</p>
              <p className="font-bold text-xl text-khmer-title-bold">ORL TOKATA</p>
              <p className="font-bold text-xl text-khmer-title-bold">501084362</p>
            </div>

          </section>

        <footer className="w-full grid grid-cols-1 place-items-center gap-16">
          {/* Text & Go Back Button */}
          <div className="flex flex-col items-center gap-16">
            <div className="grid grid-cols-1 gap-2 place-items-center">
              {/* <p className="text-2xl text-khmer-title ">សូមសំណាងល្អ</p> */}
              {/* <p className="text-4xl text-khmer-title-bold ">សូមអរគុណ!</p> */}
              <div className="wave-container">
                <h1 className="wave-text text-4xl text-khmer-title-bold">
                    <span>សូ</span><span>ម</span><span>អ</span><span>រ</span><span>គុ</span><span>ណ</span>
                </h1>
            </div>
            </div>
            <a href="/">
              <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:opacity-80 px-4 py-2 bg-transparent border-none shadow-none h-12 z-30">
                  <div className="relative z-30 w-60 animate-zoom-in-out">
                    <img
                      alt="Click to join"
                      loading="lazy"
                      src="/images/go-back-button.webp"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
            </a>
          </div>

          {/* Middle Image */}
          <div className="relative w-[80%]">
            <img
              alt=""
              loading="lazy"
              width="883"
              height="313"
              decoding="async"
              data-nimg="1"
              sizes="(max-width: 1250px) 100vw, 1250px"
              src="/images/save-the-date.png"
              style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Bottom Full-width Image */}
          <div className="relative w-full z-20">
            <img
              alt=""
              decoding="async"
              data-nimg="1"
              sizes=""
              src="/images/pre-wedding-frame-tokata.png"
              style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </footer> 
      </div>

      {/* TODO: For Open Google maps */}
      {openMap && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          aria-labelledby="radix-location-label"
          aria-describedby="radix-location-desc"
        >
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-neutral-900/80"
            aria-hidden="true"
            onClick={() => setOpenGoogleMap(false)} // close on clicking overlay
          />

          {/* Modal content */}
          <div
            ref={modalRef}
            className="relative z-60 max-w-md w-full max-h-[80vh] bg-white rounded-lg p-6 shadow-lg animate-fadeIn overflow-y-auto"
            tabIndex={-1}>
            <h2 id="radix-location-label" className="sr-only">
              Location
            </h2>
            <p className="text-khmer-title font-normal text-2xl mb-4 text-center pt-7">
              ស្កែន QR កូដ​ ដើម្បីទៅកាន់ Google Maps
            </p>

            <div className="relative w-full h-[360px] mb-6">
              <img
                alt="Location"
                src="/images/qr-location.png"
                style={{
                  color: "transparent",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

          <p className="text-khmer-title font-normal text-2xl mb-4 text-center">
              ប្លង់កម្មវិធី
            </p>
            <div className="relative w-full h-[360px] mb-6">
              <img
                alt="Location"
                src="/images/location-map.webp"
                style={{
                  color: "transparent",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <button
              type="button"
              onClick={() => setOpenGoogleMap(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Close modal"
            >
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>

        </div>
      )}

      {/* TODO: For Open QR Code */}
      {openQr && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          aria-labelledby="radix-location-label"
          aria-describedby="radix-location-desc"
        >
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-neutral-900/80"
            aria-hidden="true"
            onClick={() => setOpenQrCode(false)} // close on clicking overlay
          />

          {/* Modal content */}
          <div
            ref={modalRef}
            className="relative z-60 max-w-md w-full max-h-[80vh] bg-white rounded-lg p-6 shadow-lg animate-fadeIn"
            tabIndex={-1}>
            {/* QR Code កូនកំលោះ */}
            <p className="text-khmer-title font-normal text-2xl mb-4 text-center pt-7">
              QR Code ABA កូនកំលោះ
            </p>

            <div className="flex justify-center items-center gap-6">
              <div className="relative w-[150px] h-[150px] rounded-2xl border-4 border-white bg-[#DACBB1] shadow-[0_0_10px_rgb(104,134,218)] overflow-hidden cursor-pointer">
                <div className="absolute inset-1 rounded-[16px] bg-[#DACBB1] z-10" />
                <span className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-white animate-border-top"></span>
                <span className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-transparent to-white animate-border-right delay-[0.25s]"></span>
                <span className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-l from-transparent to-white animate-border-bottom delay-[0.5s]"></span>
                <span className="absolute bottom-0 left-0 h-full w-[4px] bg-gradient-to-t from-transparent to-white animate-border-left delay-[0.75s]"></span>
                <img
                  src="/images/tokata-usd.png"
                  alt="QR Code"
                  className="relative z-20 w-full h-full object-contain rounded-[16px]"
                />
              </div>

              <div className="relative w-[150px] h-[150px] rounded-2xl border-4 border-white bg-[#DACBB1] shadow-[0_0_10px_rgb(104,134,218)] overflow-hidden cursor-pointer">
                <span className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-white animate-border-top"></span>
                <span className="absolute top-0 right-0 h-full w-[4px] from-transparent to-white animate-border-right delay-[0.25s]"></span>
                <span className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-l from-transparent to-white animate-border-bottom delay-[0.5s]"></span>
                <span className="absolute bottom-0 left-0 h-full w-[4px] bg-gradient-to-t from-transparent to-white animate-border-left delay-[0.75s]"></span>
                <img
                  src="/images/tokata-kh.png"
                  alt="QR Code"
                  className="relative z-20 w-full h-full object-contain rounded-[16px]"
                />
              </div>
            </div>
            {/* QR Code កូនក្រមំ */}
             <p className="text-khmer-title font-normal text-2xl mb-4 text-center pt-7">
              QR Code ABA កូនក្រមំ
            </p>
            <div className="flex justify-center items-center gap-6">
              <div className="relative w-[150px] h-[150px] rounded-2xl border-4 border-white bg-[#DACBB1] shadow-[0_0_10px_rgb(104,134,218)] overflow-hidden cursor-pointer">
                <div className="absolute inset-1 rounded-[16px] bg-[#DACBB1] z-10" />
                <span className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-white animate-border-top"></span>
                <span className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-transparent to-white animate-border-right delay-[0.25s]"></span>
                <span className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-l from-transparent to-white animate-border-bottom delay-[0.5s]"></span>
                <span className="absolute bottom-0 left-0 h-full w-[4px] bg-gradient-to-t from-transparent to-white animate-border-left delay-[0.75s]"></span>
                <img
                  src="/images/tokata-usd.png"
                  alt="QR Code"
                  className="relative z-20 w-full h-full object-contain rounded-[16px]"
                />
              </div>

              <div className="relative w-[150px] h-[150px] rounded-2xl border-4 border-white bg-[#DACBB1] shadow-[0_0_10px_rgb(104,134,218)] overflow-hidden cursor-pointer">
                <span className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-white animate-border-top"></span>
                <span className="absolute top-0 right-0 h-full w-[4px] from-transparent to-white animate-border-right delay-[0.25s]"></span>
                <span className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-l from-transparent to-white animate-border-bottom delay-[0.5s]"></span>
                <span className="absolute bottom-0 left-0 h-full w-[4px] bg-gradient-to-t from-transparent to-white animate-border-left delay-[0.75s]"></span>
                <img
                  src="/images/tokata-kh.png"
                  alt="QR Code"
                  className="relative z-20 w-full h-full object-contain rounded-[16px]"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpenQrCode(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Close modal">
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>

        </div>
      )}

      {/* TODO: For Open Images */}
        {openImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            aria-labelledby="radix-location-label"
            aria-describedby="radix-location-desc"
          >
            {/* Background Overlay */}
            <div
              className="fixed inset-0 bg-neutral-900/80"
              aria-hidden="true"
              onClick={() => setOpenGoogleMap(false)} // close on clicking overlay
            />

            {/* Modal content */}
            <div className="slider-container" ref={modalRef}>
            <div className="slide" 
              ref={slideRef}>
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
                    <FaLongArrowAltLeft className=" sm:xl xs:xl"/>
                  </button>
                  <button className="next" onClick={handleNext} aria-label="Next slide">
                    <FaLongArrowAltRight className=" sm:xl xs:xl"/>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenImage(false)}
                  className="absolute right-4 top-4 z-10 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  aria-label="Close modal">
                  <IoCloseOutline className="text-2xl" />
              </button>
          </div>
        </div>
        )}

    </div>
  );
};
