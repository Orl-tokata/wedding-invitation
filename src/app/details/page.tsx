'use client'

import { useEffect, useRef, useState } from "react";
import { BsFlower2 } from "react-icons/bs";
import {
  FaHome,
  FaImage,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaMapMarkedAlt,
  FaPause,
  FaPlay,
  FaUtensils,
  FaRing,
  FaFireAlt,
  FaCut,
  FaGlassCheers,
} from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowDown, MdQrCode2 } from "react-icons/md";
import { useTranslation } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";


const slides = [
  { image: '/images/img01.webp'},
  { image: '/images/img02.webp'},
  { image: '/images/img03.webp'},
  { image: '/images/img04.webp'},
  { image: '/images/img05.webp'},
  { image: '/images/img06.webp'},
  { image: '/images/img07.webp'},
  { image: '/images/img08.webp'},
  { image: '/images/img09.webp'},
  { image: '/images/img10.webp'},
]

export default function Details(){
  const [openMap, setOpenGoogleMap] = useState(false);
  const [openQr , setOpenQrCode] = useState(false);
  const [openImage , setOpenImage] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { t, locale } = useTranslation();

  useEffect(() => {
    // const playAudio = async () => {
    //   try {
    //     await audioRef.current?.play();
    //   } catch (err) {
    //     console.warn("Autoplay failed. User interaction may be required.");
    //   }
    // };

    // playAudio();
  }, []);

  const handlePlay = () => {
    //audioRef.current?.play();
  };

  const handlePause = () => {
    //audioRef.current?.pause();
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
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance only while the gallery is open
  useEffect(() => {
    if (!openImage) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [openImage]);


   // const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Draggable logic
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setPosition({ x: centerX, y: centerY });
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    // const audio = audioRef.current;
    // if (!audio) return;

    // if (isPlaying) {
    //   audio.pause();
    // } else {
    //   audio.play();
    // }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    dragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    offset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    e.preventDefault();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className="min-h-svh w-full max-w-[500px] bg-background relative">

      {/* Preload first 3 images for instant open */}
      <div style={{ position: 'absolute', visibility: 'hidden', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        {slides.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt=""
            loading={index < 3 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
      </div>


      {/* <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl shadow-lg bg-white max-w-md mx-auto mt-10">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-800">🎵 Wedding Song</h2>
              <span className="text-gray-500 text-sm">({formatTime(duration)})</span>
            </div>

            <button
              onClick={togglePlayPause}
              className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-md focus:outline-none"
              aria-label={isPlaying ? 'Pause song' : 'Play song'}
            >
              {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl" />}
            </button>

            <div className="text-gray-600 text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            <audio ref={audioRef} src="/music/song-soriya.webm" preload="auto" />
      </div> */}

      {/* <div className="flex flex-col items-center gap-4 p-4">
        <audio ref={audioRef} src="/music/song-soriya.webm" preload="auto" hidden />
        <div className="flex gap-2">
          <button onClick={handlePlay} className="px-4 py-2 bg-green-600 text-white rounded">Play</button>
          <button onClick={handlePause} className="px-4 py-2 bg-red-600 text-white rounded">Pause</button>
        </div>
      </div>  */}
    
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
        <Link href="/">
          <div className="absolute bottom-14 left-2 z-50 flex items-center justify-center">
            <button className="btn-scale bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-green-500">
              <FaHome className="text-xl" />
            </button>
          </div>
        </Link>

        {/* Map button (Blue) */}
        <div className="fixed bottom-2 left-14 z-50 flex items-center justify-center">
          <button onClick={() => setOpenGoogleMap(true)} className="btn-scale bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-blue-500">
            <FaMapMarkedAlt className="text-xl" />
          </button>
        </div>
      </div>

      <div className="min-h-dvh w-full max-w-[500px] pointer-events-none fixed top-0 left-1/2 mix-blend-multiply -translate-x-1/2 z-[60]">
      <video
        id="butterfly-left"
        playsInline
        muted
        autoPlay
        loop
        preload="metadata"
        className="fixed w-50 top-[376px] -left-11 z-10 mix-blend-multiply"
        style={{ transform: "scaleX(-1)" }}
      >
        <source src="/videos/f4.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

        <video
          id="butterfly-right"
          playsInline
          muted
          autoPlay
          loop
          preload="metadata"
          className="fixed w-53 bottom-30  -right-14 z-50 pointer-events-none mix-blend-multiply"
        >
          <source src="/videos/f1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
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
          <button
            onClick={() => setOpenImage(true)}
            onMouseEnter={() => setCurrentSlideIndex(0)} // warm up state
            className="btn-scale bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-pink-500"
          >
            <FaImage className="text-xl" />
          </button>
        </div>
      </div>

      {/* Overlay loading screen */}
      <div className="bg-neutral-900/40 fixed top-0 left-0 h-full w-full flex-col z-[100] flex justify-center items-center animate-fade-out-delay">
        <MdOutlineKeyboardDoubleArrowDown className="text-white text-4xl animate-bounce"/>
        <p className="text-khmer-arrow-down">{t.swipeDown}</p>
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
        {/* </div><div className="sticky top-0 z-50 bg-white w-[80%] mx-auto pt-2"> */}
        <div className=" z-50 bg-white w-[80%] mx-auto pt-2">
          <div className=" z-50 bg-white w-[80%] mx-auto pt-2">
            <img
              alt=""
              loading="lazy"
              src={{ en: '/images/wedding-title-en.png', kh: '/images/wedding-title-kh.png', ko: '/images/wedding-title-ko.png' }[locale] ?? '/images/wedding-title-en.png'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Parents section */}
        <section className="flex flex-row justify-between items-start w-full px-14 sm:px-14 mt-6 gap-4">
          {/* Left block */}
          <div className="flex flex-col gap-2 items-start">
            <p className="text-khmer">
              {t.mr}<span className="text-khmer-body">{t.groomFatherName}</span>
            </p>
            <p className="text-khmer">
              {t.mrs}<span className="text-khmer-body">{t.groomMotherName}</span>
            </p>
          </div>

          {/* Right block */}
          <div className="flex flex-col gap-2 items-end text-right">
            <p className="text-khmer">
              {t.mr}<span className="text-khmer-body"> {t.brideFatherName}</span>
            </p>
            <p className="text-khmer">
              {t.mrs}<span className="text-khmer-body"> {t.brideMotherName}</span>
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
              style={{ filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }}
            />
          </div>

          <h1 className="text-khmer-body text-xl">{t.weInviteYou}</h1>

          <p className="px-16 text-center text-sm text-khmer leading-6">
            {t.inviteParagraph}
          </p>

          {/* Couple section */}
          <section className="w-full flex flex-col items-center">
            <div className="w-full flex justify-between items-end px-14">

              {/* Groom */}
              <div className="flex flex-col gap-2 items-center">
                <div
                  className="w-28 h-36 sm:w-32 sm:h-40 overflow-hidden rounded-2xl"
                  style={{ border: "2px solid #918645", boxShadow: "0 4px 12px rgba(145, 134, 69, 0.3)" }}
                >
                  <img
                    alt="Groom"
                    loading="lazy"
                    src="/images/img02.webp"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-khmer text-sm">{t.groom}</p>
                <p className="text-khmer-body">{t.groomName}</p>
              </div>

              {/* Heart center — between names */}
              <div className="flex flex-col items-center mb-1">
                <img
                  alt=""
                  loading="lazy"
                  src="/images/hear-wedding.png"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
                  style={{ filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }}
                />
              </div>

              {/* Bride */}
              <div className="flex flex-col gap-2 items-center">
                <div
                  className="w-28 h-36 sm:w-32 sm:h-40 overflow-hidden rounded-2xl"
                  style={{ border: "2px solid #918645", boxShadow: "0 4px 12px rgba(145, 134, 69, 0.3)" }}
                >
                  <img
                    alt="Bride"
                    loading="lazy"
                    src="/images/img03.webp"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-khmer text-sm">{t.bride}</p>
                <p className="text-khmer-body">{t.brideName}</p>
              </div>

            </div>
          </section>

          <p className="px-16 text-center text-sm text-khmer leading-6">
            {t.inviteParagraphDate}<span className="text-khmer-body"> {t.dateInKhmer} {t.dateInEnglish} </span>{t.timeAt} {t.location}.
          </p>

          <p className="mt-6 text-sm text-khmer-body">{t.seeMapNote} {t.thankYou}</p>

          <div className="flex gap-4" style={{ filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }}>
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

        {/* Section: Wedding Program Day1*/}
        <section className="mt-16 mb-4 flex flex-col items-center w-full gap-10">

          <h1 className="text-khmer-body text-sm sm:text-base md:text-lg text-center px-4 sm:px-6 leading-7 sm:leading-8 w-full">
            <span className="block">{t.programWeddingDay1Title}</span>
            <span className="block text-[14px] sm:text-sm md:text-base">{t.programWeddingDay1Sub}</span>
          </h1>

          <div className="relative w-[70%] flex flex-col gap-3 text-sm text-khmer font-sans leading-relaxed text-wedding-program">
            {[
              { iconSrc: "/icons/yajna.png",         time: t.programWeddingDay1Time1, desc: t.programWeddingDay1Item1 },
              { iconSrc: "/icons/praying.png",  time: t.programWeddingDay1Time2, desc: t.programWeddingDay1Item2 },
              { iconSrc: "/icons/banquet.png",     time: t.programWeddingDay1Time3, desc: t.programWeddingDay1Item3 },
            ].map((item, index, arr) => (
              <div key={index} className="flex flex-col">
                {/* Top row: icon + time + desc */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "24px 1fr",
                    columnGap: "8px",
                  }}
                >
                  {/* Left icon — spans both rows, centered vertically */}
                  <img
                    src={item.iconSrc}
                    alt=""
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                      gridColumn: "1",
                      gridRow: "1 / 3",
                      alignSelf: "center",
                      filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)",
                    }}
                  />

                  {/* Time row */}
                  <span className="whitespace-nowrap" style={{ gridColumn: "2", gridRow: "1" }}>
                    {item.time}
                  </span>

                  {/* Desc row */}
                  <span className="break-words" style={{ gridColumn: "2", gridRow: "2" }}>
                    {item.desc}
                  </span>
                </div>

                {/* Divider — hidden on last item */}
                {/* {index < arr.length - 1 && ( */}
                {index < 3 && (
                  <div
                    style={{
                      margin: "8px 0",
                      height: "1px",
                      backgroundColor: "#918645",
                      opacity: 0.25,
                      boxShadow: "0 0 4px 1px rgba(145, 134, 69, 0.2)",
                      borderRadius: "999px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

         {/* Section: Wedding Program Day2*/}
        <section className="mt-1 mb-4 flex flex-col items-center w-full gap-10">
        
        <h1 className="text-khmer-body text-sm sm:text-base md:text-lg text-center px-4 sm:px-6 leading-7 sm:leading-8 w-full">
          <span className="block ">{t.programWeddingDay2Title}</span>
          <span className="block text-[14px] sm:text-sm md:text-base">{t.programWeddingDay2Sub}</span>
        </h1>

          <div className="relative w-[70%] flex flex-col gap-3 text-sm text-khmer font-sans leading-relaxed text-wedding-program">
            {[
              { iconSrc: "/icons/apple.png",         time: t.programWeddingItemTime1, desc: t.programWeddingItem1 },
              { iconSrc: "/icons/wedding-arch.png",  time: t.programWeddingItemTime2, desc: t.programWeddingItem2 },
              { iconSrc: "/icons/soup-bowl.png",     time: t.programWeddingItemTime3, desc: t.programWeddingItem3 },
              { iconSrc: "/icons/hair-cut-tool.png", time: t.programWeddingItemTime4, desc: t.programWeddingItem4 },
              { iconSrc: "/icons/wedding.png",       time: t.programWeddingItemTime5, desc: t.programWeddingItem5 },
              { iconSrc: "/icons/banquet.png",       time: t.programWeddingItemTime6, desc: t.programWeddingItem6 },
              { iconSrc: "/icons/wine.png",          time: t.programWeddingItemTime7, desc: t.programWeddingItem7 },
            ].map((item, index, arr) => (
              <div key={index} className="flex flex-col">
                {/* Top row: icon + time + desc */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "24px 1fr",
                    columnGap: "8px",
                  }}
                >
                  {/* Left icon — spans both rows, centered vertically */}
                  <img
                    src={item.iconSrc}
                    alt=""
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                      gridColumn: "1",
                      gridRow: "1 / 3",
                      alignSelf: "center",
                      filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)",
                    }}
                  />

                  {/* Time row */}
                  <span className="whitespace-nowrap" style={{ gridColumn: "2", gridRow: "1" }}>
                    {item.time}
                  </span>

                  {/* Desc row */}
                  <span className="break-words" style={{ gridColumn: "2", gridRow: "2" }}>
                    {item.desc}
                  </span>
                </div>

                {/* Divider — hidden on last item */}
                {/* {index < arr.length - 1 && ( */}
                {index < 7 && (
                  <div
                    style={{
                      margin: "8px 0",
                      height: "1px",
                      backgroundColor: "#918645",
                      opacity: 0.25,
                      boxShadow: "0 0 4px 1px rgba(145, 134, 69, 0.2)",
                      borderRadius: "999px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center w-full gap-4">
          <h1 className="text-khmer-body text-xl">{t.contactPhone}</h1>
          {/* Name + phone row: make always horizontal */}
<div className="flex flex-row justify-between w-full px-14 sm:px-16 gap-4">
  {/* Left block */}
  <div className="flex flex-col gap-2 items-start">
    <p className="text-khmer text-sm sm:text-base">
      {t.groom}
    </p>
    <p className="text-khmer-body text-sm sm:text-base break-all">
      {t.groomName}
    </p>
    <p className="text-khmer-body text-sm sm:text-base">010785306</p>
  </div>

  {/* Right block */}
  <div className="flex flex-col gap-2 items-end text-right">
    <p className="text-khmer text-sm sm:text-base">
      {t.bride}
    </p>
    <p className="text-khmer-body text-sm sm:text-base break-all">
      {t.brideName}
    </p>
    <p className="text-khmer-body text-sm sm:text-base">0972352572</p>
  </div>
</div>

          {/* Decoration */}
          <div className="flex gap-4 items-center" style={{ filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }}>
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

        

          <footer className="w-full grid grid-cols-1 place-items-center gap-16">
            {/* Text & Go Back Button */}
            <div className="flex flex-col items-center gap-16 mt-5">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=PMQ7%2BPXF+Kimhout+Hometown+Angkor+Chey" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:opacity-80 px-4 py-2 bg-transparent border-none shadow-none h-12 z-30">
                  <div className="relative z-30 w-60 animate-zoom-in-out">
                    <img
                      alt="Click to join"
                      loading="lazy"
                      src={{ en: '/images/go-googlemap-button-en.png', kh: '/images/go-googlemap-button-kh.png', ko: '/images/go-googlemap-button-ko.png' }[locale] ?? '/images/go-googlemap-button-en.png'}
                      className="w-full h-full object-cover"
                      //style={{ width: '100%', height: '100%', objectFit: 'cover' ,filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }}
                    />
                  </div>
                </button>
              </a>
            </div>

            {/* Middle Image */}
            <div className="relative w-[80%] mt-[-60px] z-20">
              <img
                  alt=""
                  loading="lazy"
                  width="883"
                  height="313"
                  decoding="async"
                  data-nimg="1"
                  sizes="(max-width: 1250px) 100vw, 1250px"
                  src={{ en: '/images/save-the-date-en.png', kh: '/images/save-the-date-kh.png', ko: '/images/save-the-date-ko.png' }[locale] ?? '/images/save-the-date-en.png'}
                  style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>

            {/* Bottom Full-width Image */}
            <div className="relative w-[96%] sm:w-[98%] z-20 mr-3 mt-[-80px]">
              <img
                alt=""
                decoding="async"
                src="/images/pre-wedding-frame.webp"
                style={{
                  color: "transparent",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </footer>
      </div>

      {/* TODO: For Open Google maps */}
      {openMap && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          aria-labelledby="radix-location-label"
          aria-describedby="radix-location-desc"
        >
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-neutral-900/80"
            aria-hidden="true"
            onClick={() => setOpenGoogleMap(false)}
          />

          {/* Modal content */}
          <div
            ref={modalRef}
            className="relative z-60 max-w-md w-full max-h-[95vh] bg-white rounded-lg p-6 shadow-lg animate-fadeIn overflow-y-auto"
            tabIndex={-1}>
            <h2 id="radix-location-label" className="sr-only">
              {t.locationLabel}
            </h2>

          <p className="text-khmer-title font-normal text-2xl mb-4 text-center">
              {t.programMap}
            </p>
            <div className="relative w-full h-[550px] mb-6">
              <img
                alt="Location"
                //src="/images/location-map.webp"
                src="/images/google-map.jpg"
                style={{
                  color: "transparent",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

             {/* Open in Google Maps button */}
      
            <a href="https://www.google.com/maps/search/?api=1&query=PMQ7%2BPXF+Kimhout+Hometown+Angkor+Chey"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-md text-sm font-medium hover:opacity-80 transition-opacity mb-4"
              style={{
                backgroundColor: "transparent",
                color: "#918645",
                border: "1px solid #918645",
                fontFamily: "'AKbalthom Freehand [Version 1.50] 082014', sans-serif",
              }}
            >
              {t.locationGoogleMaps}
            </a>

            <button
              type="button"
              onClick={() => setOpenGoogleMap(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label={t.closeModal}
            >
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>

        </div>
      )}

      {/* TODO: For Open QR Code */}
      {openQr && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          aria-labelledby="radix-location-label"
          aria-describedby="radix-location-desc"
        >
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-neutral-900/80"
            aria-hidden="true"
            onClick={() => setOpenQrCode(false)}
          />

          {/* Modal content */}
          <div
            ref={modalRef}
            className="relative z-60 max-w-md w-full max-h-[80vh] bg-white rounded-lg p-6 shadow-lg animate-fadeIn"
            tabIndex={-1}>
            {/* QR Code Groom */}
            <p className="text-khmer-title font-normal text-xl mb-4 text-center pt-7">
              {t.qrGroom}
            </p>

            <div className="flex justify-center items-center gap-6">
              <div className="relative w-[150px] h-[150px] rounded-2xl border-4 border-white bg-[#DACBB1] shadow-[0_0_10px_rgb(104,134,218)] overflow-hidden cursor-pointer">
                <div className="absolute inset-1 rounded-[16px] bg-[#DACBB1] z-10" />
                <span className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-white animate-border-top"></span>
                <span className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-transparent to-white animate-border-right delay-[0.25s]"></span>
                <span className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-l from-transparent to-white animate-border-bottom delay-[0.5s]"></span>
                <span className="absolute bottom-0 left-0 h-full w-[4px] bg-gradient-to-t from-transparent to-white animate-border-left delay-[0.75s]"></span>
                <img
                  src="/images/qr-aba.jpg"
                  alt="QR Code"
                  className="relative z-20 w-full h-full object-contain rounded-[16px]"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpenQrCode(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label={t.closeModal}
            >
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>

        </div>
      )}

      {/* Gallery viewer */}
      {openImage && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 py-6 px-3"
          aria-modal="true"
          role="dialog"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/90"
            aria-hidden="true"
            onClick={() => setOpenImage(false)}
          />

          {/* Main content */}
          <div ref={modalRef} className="relative z-[110] flex flex-col items-center gap-3 w-full">

            {/* Image wrapper with close button inside */}
            <div className="relative inline-block">
              <Image
                src={slides[currentSlideIndex].image}
                alt={`Wedding photo ${currentSlideIndex + 1}`}
                width={800}
                height={1000}
                priority={true}
                className="max-h-[65vh] w-auto max-w-[92vw] sm:max-w-[75vw] md:max-w-[60vw] object-contain rounded-2xl shadow-2xl"
              />

              {/* Close button — top right corner of image */}
              <button
                type="button"
                onClick={() => setOpenImage(false)}
                className="absolute -top-3 -right-3 z-[120] w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center text-white transition-all shadow-lg"
                aria-label={t.closeModal}
              >
                <IoCloseOutline className="text-lg" />
              </button>
            </div>

            {/* Prev / counter / next */}
            <div className="flex items-center gap-5 mt-1">
              <button
                onClick={handlePrev}
                className="bg-white/15 hover:bg-white/35 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
                aria-label={t.prevSlide}
              >
                <FaLongArrowAltLeft />
              </button>
              <span className="text-white/70 text-sm tabular-nums min-w-[48px] text-center">
                {currentSlideIndex + 1} / {slides.length}
              </span>
              <button
                onClick={handleNext}
                className="bg-white/15 hover:bg-white/35 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
                aria-label={t.nextSlide}
              >
                <FaLongArrowAltRight />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto max-w-[92vw] sm:max-w-[75vw] pb-1 px-1">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden transition-all ${
                    i === currentSlideIndex
                      ? 'ring-2 ring-white opacity-100 scale-110'
                      : 'opacity-45 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={s.image}
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
