export const LandingPage = () => {
  return (
    <main
      className="min-h-dvh w-full max-w-[500px] overflow-hidden bg-background relative"  >
      {/* Top decorations and chandelier videos */}
      <div className="flex justify-between">
        <div className="relative w-24">
          <img alt="Flower decoration" loading="lazy" width={95} height={85} style={{ objectFit: "cover" }}
            src="/shape-tl.webp"/>
        </div>
        <div className="relative w-24">
          <img alt="Top right decoration" loading="lazy" width={117} height={103} style={{ objectFit: "cover" }}
            src="/shape-tr.webp"/>
        </div>

        <div className="flex justify-between absolute w-full top-0">
            <video
                id="chandelier-right"
                playsInline
                muted
                autoPlay
                loop
                preload="metadata"
                className="w-1/2 mix-blend-color-dodge z-10 opacity-70"
                style={{ transform: "scaleX(-1)" }}>
                <source src="//butterfly.mp4" type="video/webm" />
            </video>

            <video
                id="chandelier-left"
                playsInline
                muted
                autoPlay
                loop
                preload="metadata"
                className="w-1/2 mix-blend-color-dodge z-10 opacity-70">
                <source src="/video/chandelier-2.webm" type="video/webm" />
            </video>
            </div>

    </div>
    {/* <video
        playsInline muted autoPlay loop  preload="metadata" className="w-1/2 mix-blend-color-dodge z-10 opacity-70"
        style={{ transform: "scale(-1, 1)" }}>
        <source src="/video/chandelier-2.webm" type="video/webm" />
    </video>

    <video
        playsInline muted autoPlay loop preload="metadata"
        className="w-1/2 mix-blend-color-dodge z-10 opacity-70">
        <source src="/video/chandelier-2.webm" type="video/webm" />
    </video> */}

      {/* Main content */}
      <div className="relative flex justify-center items-center flex-col gap-10 sm:-top-12 -top-16">
        {/* Background overlay image */}
        <div className="absolute top-0 left-0 w-full">
          <img
            alt=""
            loading="lazy"
            src="/shape-center.webp"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Title and decorations */}
        <div className="pt-20 flex flex-col gap-10 items-center justify-center">
          <div className="relative w-52">
            <img
              alt="Wedding Title"
              loading="lazy"
              src="/pre-wedding-frame.webp"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative w-32">
            <img
              alt="Name Initial"
              loading="lazy"
              src="/name-initial.webp"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Khmer invite text */}
          <h1 className="text-xl text-khmer-title max-w-[200px] text-center leading-[2rem]">
            សូមគោរពអញ្ជើញជាភ្ញៀវកិត្តិយស
          </h1>

          {/* Join button */}
          <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:opacity-80 px-4 py-2 bg-transparent border-none shadow-none h-12 z-30">
            <div className="relative z-30 animate-scale-bounce w-60">
              <img
                alt="Click to join"
                loading="lazy"
                src="/click-to-join-button.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </button>

          {/* Date and location */}
          <h2 className="text-khmer-title-bold text-lg font-bold">
            ថ្ងៃអាទិត្យ ទី០៩ ខែកុម្ភៈ ឆ្នាំ២០២៥
          </h2>

          <p className="text-sm text-center w-1/2 text-khmer-title-bold">
            វេលាម៉ោង <span className="font-bold">៥ល្ងាច នៅបាត់ដំបង សុីធីហល៍ (អគារ A)</span> ក្រុងបាត់ដំបង ខេត្តបាត់ដំបង <span className="font-bold">(សូមមើលប្លង់បញ្ជាក់)</span>
          </p>
        </div>
      </div>
        
    <div className="relative top-32 left-2">
  {/* Left side flowers */}
  <div className="absolute w-52 bottom-20 sm:-left-28 -left-20 origin-bottom animate-rotate-flower-reverse transform">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"/>
  </div>
  <div className="absolute w-52 bottom-10 sm:-left-20 -left-24 origin-bottom-left animate-rotate-flower">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"/>
  </div>
  <div className="absolute w-44 -bottom-28 -left-24 animate-rotate-flower">
    <img src="/flower.webp" alt="" loading="lazy" width="456" height="1095"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"/>
  </div>
  <div className="absolute w-44 -bottom-[250px] sm:-left-28 -left-20 animate-rotate-flower">
    <img src="/flower.webp" alt="" loading="lazy" width="456" height="1095"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"/>
  </div>
  <div className="absolute w-44 -bottom-20 -left-4 animate-rotate-flower !delay-100">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"/>
  </div>
  <div className="absolute w-52 -bottom-64 left-20 animate-rotate-flower origin-bottom !delay-100">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute w-64 -rotate-[5deg] -bottom-[440px] -left-4 -animate-rotate-flower-reverse origin-bottom !delay-100">
    <img src="/flower.webp" alt="" loading="lazy" width="456" height="1095"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute w-64 -rotate-[5deg] -bottom-[400px] -left-24 -animate-rotate-flower !delay-100">
    <img src="/flower.webp" alt="" loading="lazy" width="456" height="1095"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute -rotate-[5deg] w-52 -bottom-36 left-16 -animate-rotate-flower origin-bottom !delay-100">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute -rotate-[5deg] w-52 -bottom-32 left-24 -animate-rotate-flower origin-bottom !delay-100">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>

  {/* Right side flowers */}
  <div className="absolute -rotate-[5deg] w-52 bottom-24 -right-24 origin-bottom -animate-rotate-flower-reverse top-40 right-4">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute -rotate-[5deg] w-52 bottom-16 -right-16 -animate-rotate-flower">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute -rotate-[5deg] w-52 -bottom-32 -right-32 -animate-rotate-flower">
    <img src="/flower.webp" alt="" loading="lazy" width="456" height="1095"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute -rotate-[5deg] w-32 -bottom-[240px] -right-10 -animate-rotate-flower">
    <img src="/flower.webp" alt="" loading="lazy" width="456" height="1095"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute -rotate-[5deg] w-52 -bottom-4 -right-10 -animate-rotate-flower">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute w-64 -rotate-[5deg] -bottom-[380px] -right-10 -animate-rotate-flower">
    <img src="/flower.webp" alt="" loading="lazy" width="456" height="1095"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute w-64 -rotate-[5deg] -bottom-[500px] -right-10 -animate-rotate-flower-reverse origin-bottom !delay-100">
    <img src="/flower.webp" alt="" loading="lazy" width="456" height="1095"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute w-72 -rotate-[5deg] -bottom-[400px] -right-40 -animate-rotate-flower !delay-100">
    <img src="/flower.webp" alt="" loading="lazy" width="456" height="1095"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute -rotate-[5deg] w-52 -bottom-32 right-24 -animate-rotate-flower origin-bottom !delay-100">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
  <div className="absolute -rotate-[5deg] w-52 -bottom-24 right-20 -animate-rotate-flower origin-bottom !delay-100">
    <img src="/small-flower.webp" alt="" loading="lazy" width="552" height="981"
      style={{ color: "transparent", width: "100%", height: "100%", objectFit: "cover" }}
      sizes="(max-width: 1250px) 100vw, 1250px"
    />
  </div>
</div>
      </main>
  );
};
