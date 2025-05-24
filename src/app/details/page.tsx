import { FaHome, FaImage, FaMapMarkedAlt } from "react-icons/fa";
import { MdQrCode2 } from "react-icons/md";

export default function Details(){
  return (
    <div className="min-h-svh w-full max-w-[500px] bg-background relative">
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
      {/* <div className="fixed w-full max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 z-50">
        <div className="absolute xs:w-52 w-44 bottom-0 left-0 z-30">
          <img alt="" loading="lazy" src="/images/flower-frame.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <a href="/">
          <button className="flex items-center justify-center bg-primary text-primary-foreground shadow px-4 py-2 h-12 w-12 rounded-full absolute bottom-14 left-2 z-50 animate-scale-bounce">
            <FaHome />
          </button>
        </a>
        <button className="flex items-center justify-center bg-primary text-primary-foreground shadow px-4 py-2 h-12 w-12 rounded-full fixed bottom-2 left-14 z-50 animate-scale-bounce">
          <FaMapMarkedAlt />
        </button>
      </div> */}

      {/* Bottom image and buttons right */}
      {/* <div className="fixed w-full max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 z-50">
        <div className="absolute xs:w-52 w-44 bottom-0 right-0 mirror z-30">
          <img alt="" loading="lazy" src="/images/flower-frame.webp" style={{ width: '100%', height: '100%', objectFit: 'cover',    transform: 'scaleX(-1)' }} />
        </div>
        <button className="flex items-center justify-center bg-primary text-primary-foreground shadow px-4 py-2 h-12 w-12 rounded-full fixed bottom-14 right-2 z-50 animate-scale-bounce">
          <MdQrCode2 />
        </button>
        <button className="flex items-center justify-center bg-primary text-primary-foreground shadow px-4 py-2 h-12 w-12 rounded-full fixed bottom-2 right-14 z-50 animate-scale-bounce">
          <FaImage />
        </button>
      </div> */}

{/* Bottom buttons and image left */}
<div className="fixed w-full max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 z-50">
  <div className="absolute xs:w-52 w-44 bottom-0 left-0 z-30">
    <img src="/images/flower-frame.webp" alt="" className="w-full h-full object-cover" />
  </div>
  <a href="/">
    <div className="absolute bottom-14 left-2 z-50 flex items-center justify-center">
      <button className="btn-scale bg-white shadow-lg shadow-blue-100 h-12 w-12 rounded-full flex items-center justify-center">
        <FaHome className="text-primary text-xl" />
      </button>
    </div>
  </a>
  <div className="fixed bottom-2 left-14 z-50 flex items-center justify-center">
    <button className="btn-scale bg-white shadow-lg shadow-blue-100 h-12 w-12 rounded-full flex items-center justify-center">
      <FaMapMarkedAlt className="text-primary text-xl" />
    </button>
  </div>
</div>

{/* Bottom buttons and image right */}
<div className="fixed w-full max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 z-50">
  <div className="absolute xs:w-52 w-44 bottom-0 right-0 z-30">
    <img src="/images/flower-frame.webp" alt="" className="w-full h-full object-cover" style={{ transform: 'scaleX(-1)' }} />
  </div>
  <div className="fixed bottom-14 right-2 z-50 flex items-center justify-center">
    <button className="btn-scale bg-white shadow-lg shadow-blue-100 h-12 w-12 rounded-full flex items-center justify-center">
      <MdQrCode2 className="text-primary text-xl" />
    </button>
  </div>
  <div className="fixed bottom-2 right-14 z-50 flex items-center justify-center">
    <button className="btn-scale bg-white shadow-lg shadow-blue-100 h-12 w-12 rounded-full flex items-center justify-center">
      <FaImage className="text-primary text-xl" />
    </button>
  </div>
</div>

      {/* Overlay loading screen */}
      {/* <div className="bg-neutral-900/40 fixed top-0 left-0 h-full w-full flex-col z-[100] flex justify-center items-center animate-fade-out-delay">
        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="text-primary animate-bounce" height="32" width="32" xmlns="http://www.w3.org/2000/svg"></svg>
        <p className="text-primary font-bold">អូសចុះក្រោម</p>
      </div> */}

      {/* Background videos */}
      <div className="min-h-dvh w-full max-w-[500px] pointer-events-none fixed top-0 left-1/2 mix-blend-multiply -translate-x-1/2 z-[60]">
        <video playsInline autoPlay loop preload="metadata" className="fixed mirror w-52 top-[210px] -left-8 z-10 mix-blend-multiply">
          <source src="" type="video/webm" />
        </video>
        <video playsInline autoPlay loop preload="metadata" className="fixed w-72 -bottom-44 right-0 z-50 pointer-events-none mix-blend-multiply">
          <source src="" type="video/webm" />
        </video>
      </div>

      {/* Main content */}
      <div className="flex z-10 items-center flex-col pt-10 gap-4">
        <div className="relative w-[80%]">
          <img alt="" loading="lazy" src="/images/wedding-title-1.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>


        {/* Couple section */}
        <section className="w-full flex flex-col items-center relative">
          <div className="w-24 relative top-6">
            <img alt="" loading="lazy" src="/name-initial.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="flex justify-between w-full px-14">
            <div className="flex flex-col gap-2">
              <p className="text-khmer-title">កូនប្រុស</p>
              <p className="text-khmer-title-bold">អុល តុក្កតា</p>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p className="text-khmer-title">កូនស្រី</p>
              <p className="text-khmer-title-bold">ភិន ផានូ</p>
            </div>
          </div>
        </section>

        {/* Parents section */}
        {/* <section className="flex xs:flex-row flex-col justify-between w-full px-14 mt-6 xs:gap-0 gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-khmer-title">លោក<span className="text-khmer-title-bold"> សែម ដា</span></p>
            <p className="text-khmer-title">អ្នកស្រី<span className="text-khmer-title-bold"> ជូ សំ</span></p>
          </div>
          <div className="flex justify-end xs:w-auto w-full">
            <div className="flex flex-col gap-2">
              <p className="text-khmer-title">លោក<span className="text-khmer-title-bold"> យាន បូលី</span></p>
              <p className="text-khmer-title">អ្នកស្រី<span className="text-khmer-title-bold"> ឈុំ សុជាតាំ</span></p>
            </div>
          </div>
        </section> */}
        <section className="flex flex-col sm:flex-row justify-between w-full px-14 mt-6 gap-4 sm:gap-0">
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <p className="text-khmer-title">លោក<span className="text-khmer-title-bold"> ប៊ិន​ អុល</span></p>
            <p className="text-khmer-title">អ្នកស្រី<span className="text-khmer-title-bold"> រស់ ផល</span></p>
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-auto items-end">
            <p className="text-khmer-title">លោក<span className="text-khmer-title-bold"> ភិន ផាន</span></p>
            <p className="text-khmer-title">អ្នកស្រី<span className="text-khmer-title-bold"> ម៉ែន វួន</span></p>
          </div>
        </section>


        {/* Divider */}
        {/* <section className="flex items-center flex-col gap-4 mt-4">
          <div className="relative w-10">
            <img alt="" loading="lazy" src="/images/small-embroidery.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h1 className="text-khmer-title-bold text-2xl">...</h1>
        </section> */}
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

          <h1 className="text-khmer-title-bold text-2xl">សូមគោរពអញ្ជើញ</h1>

          <p className="px-16 text-center text-sm text-khmer-title leading-6">
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

          <p className="mt-6 text-sm text-khmer-title-bold">សូមសំណាងល្អ សូមអរគុណ!</p>

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
          <h1 className="text-khmer-title-bold text-2xl">ប្លង់កម្មវិធី</h1>
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

        <section className="flex flex-col items-center w-full gap-10">
          <h1 className="text-khmer-title-bold text-xl">ទំនាក់ទំនងទូរស័ព្ទ</h1>
          <div className="flex flex-col sm:flex-row justify-between w-full px-16 gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-khmer-title">
                កូនប្រុស <span className="font-bold">អុល តុក្កតា</span>
              </p>
              <p className="font-bold text-khmer-title-bold text-xl">010785306</p>
            </div>

            <div className="flex flex-col gap-2 sm:items-end">
              <p className="text-khmer-title">
                កូនស្រី <span className="font-bold">ភិន ផានូ</span>
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
        </section>

         <section className="my-16 flex items-center flex-col w-full gap-10">
            <h1 className="text-khmer-title-bold text-2xl __className_f1a86b">
              គណនី <span className="font-bold">ABA</span>
            </h1>

            {/* USD Account */}
            <div className="flex flex-col items-center gap-1">
              <div className="relative w-2/5">
                <img
                  alt=""
                  loading="lazy"
                  width="261"
                  height="256"
                  decoding="async"
                  data-nimg="1"
                  sizes="(max-width: 1250px) 100vw, 1250px"
                  src="/images/tokata-usd.png"
                  style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className="text-khmer-title __className_951876">គណនីប្រាក់ដុល្លារ</p>
              <p className="font-bold text-xl text-khmer-title-bold">ORL TOKATA</p>
              <p className="font-bold text-xl text-khmer-title-bold">000 737 471</p>
            </div>

            {/* Divider */}
            <div className="w-1/2 h-[1px] border-t border-dashed border-khmer-title"></div>

            {/* KHR Account */}
            <div className="flex flex-col items-center gap-1">
              <div className="relative w-2/5">
                <img
                  alt=""
                  loading="lazy"
                  width="261"
                  height="257"
                  decoding="async"
                  data-nimg="1"
                  sizes="(max-width: 1250px) 100vw, 1250px"
                  src="/images/tokata-kh.png"
                  style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className="text-khmer-title __className_951876">គណនីប្រាក់រៀល</p>
              <p className="font-bold text-xl text-khmer-title-bold">ORL TOKATA</p>
              <p className="font-bold text-xl text-khmer-title-bold">003 739 666</p>
            </div>
          </section>

        <footer className="w-full grid grid-cols-1 place-items-center gap-16">
          {/* Text & Go Back Button */}
          <div className="flex flex-col items-center gap-16">
            <div className="grid grid-cols-1 gap-2 place-items-center">
              <p className="text-2xl text-khmer-title __className_f1a86b">សូមសំណាងល្អ</p>
              <p className="text-4xl text-khmer-title-bold __className_f1a86b">សូមអរគុណ!</p>
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
    </div>
  );
};
