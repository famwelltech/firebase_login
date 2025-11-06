import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Service icons
import imgRide from "../assets/care_ride1.png";
import imgMate from "../assets/care_mate1.png";
import imgTrack from "../assets/care_track1.png";
import imgAssist from "../assets/care_assist1.png";
import imgMed from "../assets/care_med1.png";

// Hero & other art
import carePeople from "../assets/care-people.png";
import favProp from "../assets/OurStory.png";
import peopleColumn from "../assets/people.png";

// Why Choose Us icons
import endToEnd from "../assets/End_to_End.png";
import humanTouch from "../assets/human_touch.png";
import seamlessExp from "../assets/seamless_exp.png";
import peaceOfMind from "../assets/peace_of_mind.png";
import trusted from "../assets/Trusted.png";
import smartSafe from "../assets/smart_safe.png";

// App promo art
import phone13Pro from "../assets/iPhone_13_Pro.png";
import character from "../assets/OurTechnology.png";


// ------------------------------ Centralized style tokens ------------------------------
const styles = {
  appRoot: "min-h-screen bg-white text-gray-900",
  // Hero
  heroSec: "relative overflow-hidden",
  heroBg: "absolute inset-0 -z-10 bg-gradient-to-b from-purple-50 to-white",
  heroWrap:
    "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-2 items-start",
   heroH1: "text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight",
  heroP: "mt-4 text-lg text-gray-600",
  heroCtaRow: "mt-6 flex flex-wrap gap-3",
  ctaPrimary:
    "inline-flex h-11 items-center rounded-xl bg-[#AF85D9] px-6 text-white font-bold hover:bg-[#AF85D9]",
  heroImgs: "flex justify-center",
  heroImg: "w-1/2 max-w-sm",
  heroCareImg:
    "absolute left-1/2 -translate-x-1/2 bottom-0 md:-bottom-10 lg:-bottom-16 z-20 w-auto object-contain h-[200px] sm:h-[300px] md:h-[360px] lg:h-[450px]",
  // Services
  servicesSec: "relative bg-[#8FC890] overflow-hidden px-5 py-16 sm:px-12 sm:py-24 lg:p-20 lg:pt-40",
  servicesGrid:
    "mx-auto max-w-7xl   grid lg:grid-cols-[340px,1fr] gap-10 items-start",
  servicesLeft: "flex justify-start -ml-4 m-5",
  servicesLeftImg:
    "w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-auto object-contain",
  servicesPanel:
    "relative rounded-2xl border border-[#78D9AA] bg-[#BFEFCC] p-6 sm:p-8 overflow-hidden",
  servicesDeco1:
    "pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A9E7A]/60 hidden min-[650px]:block",
  servicesDeco2:
    "pointer-events-none absolute right-0 bottom-0 h-[550px] w-[550px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#5A9E7A]/60 hidden min-[650px]:block",
  // Services
// Services
servicesList: "grid sm:grid-cols-2 gap-x-24 gap-y-12",
// no background/shadow/ring — keep only sizing helper
servicesTile: "shrink-0",

servicesItemTitle: "text-[40px] leading-[100%] font-black tracking-[0%]",
servicesItemDesc: "mt-2 text-[16px] leading-6 font-semibold max-w-[32ch]",


  learnMoreRow: "mb-10 flex justify-end",
  learnMoreBtn:
    "inline-flex items-center gap-2 text-xl font-semibold text-[#0F3A2D] underline underline-offset-4 decoration-2 hover:text-[#1a5a42] transition",
  // Why
  whySec: "py-16",
  whyTopWrap: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  whyAccent: "h-2 w-full rounded-full bg-[#BFEFCC] mb-8",
  whyGridWrap: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  whyH2: "text-5xl font-extrabold text-center tracking-tight",
  whyGrid: "mt-12 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3",
  whyCard: "text-center",
  whyIconWrap: "mx-auto mb-6 md:mb-8 grid place-items-center",
  whyIcon: "h-28 w-28 sm:h-[240px] sm:w-[240px] object-cover",
  whyTitle: "text-3xl font-bold",
  whyDesc: "mt-2 text-md leading-relaxed text-gray-600 max-w-xs mx-auto",
  promoSec: "relative overflow-hidden bg-[#8F5DD3] text-white py-8 sm:py-10 md:py-12 lg:py-14",
  promoDeco1:
    "pointer-events-none absolute -bottom-24 -left-24 h-[260px] w-[260px] rounded-full bg-white/20",
  promoDeco2:
    "pointer-events-none absolute -top-24 -right-24 h-[220px] w-[220px] rounded-full bg-white/20",
  promoWrap: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  promoGrid: "grid lg:grid-cols-2 items-center p-5 m-5",
  promoH2: "text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight",
  promoSub: "mt-4 text-white/90 text-base sm:text-[17px]",
  promoForm: "mt-6 max-w-md",
  promoInput:
    "flex-1 px-5 py-3 text-gray-900 placeholder-gray-500 focus:outline-none text-base bg-transparent",
  promoBtn:
    "px-6 py-3 font-black text-black bg-[#8FC890] hover:brightness-105 transition text-base flex items-center gap-2 border-none rounded-full",
  promoRight: "relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] xl:h-[540px]",
  promoPhone:
    "absolute bottom-0 right-12 sm:right-16 lg:right-20 h-[90%] sm:h-[92%] lg:h-[95%] w-auto z-[1] drop-shadow-2xl object-contain",
  promoShadow:
    "absolute right-8 sm:right-12 lg:right-16 bottom-0 w-[200px] sm:w-[260px] lg:w-[320px] h-[60px] sm:h-[80px] lg:h-[100px] rounded-full bg-black/30 blur-3xl",
  promoChar:
    "absolute bottom-0 right-6 sm:right-8 lg:right-12 h-[52%] sm:h-[55%] lg:h-[58%] w-auto z-[2] object-contain",
  // Mission
  missionSec: "py-16",
  missionBar: "h-1 w-full bg-[#8F5DD3]",
  missionWrap: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
  missionH2: "mt-6 text-center text-4xl font-extrabold tracking-tight",
  missionForm:
    "mt-8 rounded-2xl bg-white p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5",
  missionGrid: "grid grid-cols-1 gap-4 md:grid-cols-2",
  missionInputBase:
    "h-11 w-full rounded-md bg-[#F2F3F5] px-4 text-[15px] text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#8F5DD3]",
  missionTextarea: "md:col-span-2 h-auto py-3 resize-none",
  missionBtn:
    "w-full select-none rounded-full bg-[#8F5DD3] px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:brightness-110 active:scale-[0.99]",
  // Contact
  contactSec: "py-16 bg-white",
  contactWrap: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center",
  contactH2: "text-2xl sm:text-3xl font-extrabold mb-12",
  contactGrid: "grid gap-10 sm:grid-cols-3",
  contactCard: "flex flex-col items-center text-center",
  contactIcon: "h-10 w-10 mb-4",
  contactTitle: "font-semibold text-lg",
  contactLink: "mt-2 text-purple-600 hover:underline text-sm",
};

export default function Home() {
  return (
    <div className={styles.appRoot}>
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <AppPromo />
      <Footer />
    </div>
  );
}

/* ------------------------------ Hero ------------------------------ */
function Hero() {
  return (
    <section className={styles.heroSec}>
      <div className={styles.heroBg} />
      
      {/* Desktop Layout (lg and above - 1024px+) */}
      <div className="hidden lg:block">
        <div className={styles.heroWrap}>
          <div>
            <h1 className={styles.heroH1}>Simplifying Your Healthcare Journey..</h1>
            <div className={styles.heroCtaRow}>
              <a href="/services" className={styles.ctaPrimary}>Get Services</a>
            </div>
          </div>
          
          <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] justify-between flex">
            <img
              src={favProp}
              alt="Famwell brand"
              className="absolute top-5 right-0 h-full w-auto object-contain"
            />
          </div>
          
          <img
            src={carePeople}
            alt="Caregiver with patient"
            className={styles.heroCareImg}
          />
        </div>
      </div>

      {/* Tablet Layout (650px - 1024px) */}
      <div className="hidden min-[650px]:block lg:hidden relative px-6 py-12 bg-white">
        <div className="grid grid-cols-3 items-center gap-4">
          {/* Col 1: Text content */}
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 mb-6">
              Simplifying Your<br/>Healthcare<br/>Journey..
            </h1>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center h-11 px-7 bg-[#AF85D9] text-white font-bold text-sm rounded-xl hover:brightness-110 transition"
            >
              Get Services
            </a>
          </div>

          {/* Col 2: Caregiver Image */}
          <div className="flex justify-center">
            <img
              src={carePeople}
              alt="Caregiver"
              className="w-auto h-[240px] md:h-[280px] object-contain"
            />
          </div>

          {/* Col 3: Heart Logo */}
          <div className="flex justify-center">
            <img
              src={favProp}
              alt="Famwell"
              className="w-auto h-[220px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout (below 650px) */}
      <div className="min-[650px]:hidden relative px-6 pt-10 pb-8 bg-white">
        {/* Heading with proper spacing */}
        <div className="mb-10">
          <h1 className="text-[3.8rem] leading-[0.9] font-black text-gray-900">
            Simplifying
          </h1>
          
          {/* Your + Caregiver image in a row */}
          <div className="flex items-center gap-3 my-2">
            <h1 className="text-[3.8rem] leading-[0.9] font-black text-gray-900">
              Your
            </h1>
            <img
              src={carePeople}
              alt="Caregiver"
              className="w-[120px] h-auto object-contain"
            />
          </div>
          
          <h1 className="text-[3.8rem] mb-5 leading-[0.9] font-black text-gray-900">
            Healthcare
          </h1>
          <h1 className="text-[3.8rem] mt-2 leading-[0.9] font-black text-gray-900">
            Journey..
          </h1>
        </div>

        {/* Buttons */}
        <div className="space-y-4 mb-10">
          <a 
            href="/services" 
            className="inline-flex items-center justify-center h-14 px-10 bg-[#AF85D9] text-white font-bold text-base rounded-2xl hover:brightness-110 transition"
          >
            Get Services
          </a>
        </div>

        {/* Large Heart Logo at Bottom */}
        <div className="w-full">
          <img
            src={favProp}
            alt="Famwell"
            className="w-full max-w-sm mx-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Services (right panel) --------5---------------------- */
function ServicesSection() {
  const items = [
    { title: "Care Ride",   desc: "Pick & drop services to hospitals.",               image: imgRide },
    { title: "CareMate",    desc: "Trained helpers to accompany patients.",          image: imgMate },
    { title: "CareTrack",   desc: "Digital tracking of appointments & schedules.",   image: imgTrack },
    { title: "CareAssist",  desc: "On-call support for families & paperwork.",       image: imgAssist },
    { title: "CareMeds",    desc: "Smart tracking of medicines & follow-ups.",       image: imgMed },
  ];

  return (
    <section id="services" className={styles.servicesSec}>
      {/* Decorative circles - hidden on mobile */}
      <div className={styles.servicesDeco1} />
      <div className={styles.servicesDeco2} />

      {/* ≥650px: keep existing layout */}
      <div className="hidden min-[650px]:block">
        <div className={styles.servicesGrid}>
          {/* Left column illustration */}
          <div className={styles.servicesLeft}>
            <img src={peopleColumn} alt="Care helpers" className={styles.servicesLeftImg} />
          </div>

          {/* Services content */}
          <div className="relative">
            <div className={styles.servicesList}>
              {items.map(({ title, desc, image }, i) => (
                <div key={i} className="flex items-start gap-6 m-3">
                  <div className={styles.servicesTile} aria-hidden="true">
                    <div className="h-[150px] w-[150px] rounded-xl flex-shrink-0">
                      <img src={image} alt="" className="object-contain" loading="lazy" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className={styles.servicesItemTitle}>{title}</div>
                    <p className={styles.servicesItemDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.learnMoreRow}>
              <a href="/services" className={styles.learnMoreBtn}>Learn More →</a>
            </div>
          </div>
        </div>
      </div>

      {/* <650px: mobile layout with semi-circle accents */}
      <div className="min-[650px]:hidden relative">
        {/* Mobile decorative semi-circles */}
        <div className="pointer-events-none absolute -top-20 -right-16 h-[180px] w-[180px] rounded-full bg-[#5A9E7A]/40" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-[200px] w-[200px] rounded-full bg-[#5A9E7A]/30" />
        
        {/* Section heading */}
        <div className="px-6 relative z-10">
          <h2 className="text-[46px] leading-[0.96] font-extrabold tracking-tight text-black text-center">
            Our
            <br />
            Services
          </h2>
        </div>

        {/* Stacked service blocks */}
        <div className="mt-8 max-w-[420px] mx-auto space-y-16 mb-5 relative z-10">
          {items.map(({ title, desc, image }, i) => (
            <div key={i} className="px-4 relative">
              {/* Semi-circle dividers alternating left/right */}
              {i > 0 && (
                <>
                  {i % 2 === 1 ? (
                    // Odd items: semi-circle on left only
                    <div className="pointer-events-none absolute -top-8 -left-12 h-[80px] w-[80px] rounded-full bg-[#5A9E7A]/25" />
                  ) : (
                    // Even items: semi-circle on right only
                    <div className="pointer-events-none absolute -top-8 -right-12 h-[80px] w-[80px] rounded-full bg-[#5A9E7A]/25" />
                  )}
                </>
              )}
              
              {/* Service visual */}
              <div className="w-full flex justify-center mb-4">
                <img
                  src={image}
                  alt={title}
                  className="h-[200px] w-auto object-contain drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="text-[40px] leading-[0.96] font-extrabold tracking-tight text-black text-center mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-6 font-medium text-[#111] text-center">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ------------------------------ Why Choose Us ------------------------------ */
function WhyChooseUs() {
  const features = [
    { title: "End To End Care", desc: "From hospital visits and lab tests to pharmacy management and insurance", image: endToEnd },
    { title: "Human Touch", desc: "Dedicated care assistants ensure you and your family get personal attention, not just app-based chats.", image: humanTouch },
    { title: "Seamless Experience", desc: "No juggling between multiple apps—one trusted partner for all your healthcare needs.", image: seamlessExp },
    { title: "Peace of Mind", desc: "With clear guidance, organized health records, and proactive support, you stay stress-free.", image: peaceOfMind },
    { title: "Trusted & Reliable", desc: "Genuine medicines, transparent processes, and compassionate care at every step.", image: trusted },
    { title: "Smart & Safe Services", desc: "location tracking, secure conversations records of Doctor-patient discussions, easy digital payments", image: smartSafe },
  ];

  return (
    <section id="why" className={styles.whySec}>
      <div className={styles.whyGridWrap}>
        <h2 className={styles.whyH2}>Why Choose Us?</h2>

        <div className={styles.whyGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.whyCard}>
              <div className={styles.whyIconWrap}>
                <img src={f.image} alt={f.title} className={styles.whyIcon} loading="lazy" />
              </div>
              <h2 className={styles.whyTitle}>{f.title}</h2>
              <p className={styles.whyDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ------------------------------ App Promo ------------------------------ */
function AppPromo() {
  return (
    <section className={styles.promoSec}>
      {/* Background decorative elements */}
      <div className={styles.promoDeco1} />
      <div className={styles.promoDeco2} />

      <div className={styles.promoWrap}>
        {/* Main content grid for screens 900px and above */}
        <div className="hidden min-[900px]:grid min-[900px]:grid-cols-2 items-center py-4">
          <div className="pr-4">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight">
              Our Own Famwellplus application is coming soon ...
            </h2>
            <p className="mt-3 text-white/90 text-[clamp(0.95rem,1.5vw,1.15rem)]">Get notification on App release</p>
            <form className="mt-5 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-stretch gap-4">
                <input
                  type="tel"
                  placeholder="+91"
                  className="flex-1 px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none text-[clamp(0.9rem,1.2vw,1rem)] font-medium bg-white rounded-lg shadow-lg border-r-2 border-gray-200"
                />
                <button type="submit" className="px-8 py-3.5 font-black text-black bg-[#8FC890] hover:brightness-105 transition text-[clamp(0.9rem,1.2vw,1rem)] flex items-center justify-center gap-2 border-none whitespace-nowrap rounded-lg shadow-lg">
                  <span className="text-2xl leading-none">▶</span>
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
          <div className={styles.promoRight}>
            <img src={phone13Pro} alt="App preview" className={styles.promoPhone} />
            <div className={styles.promoShadow} />
            <img src={character} alt="Character" className={styles.promoChar} />
            {/* Character shadow */}
            <div className="absolute right-4 sm:right-6 lg:right-10 bottom-0 w-[120px] sm:w-[140px] lg:w-[160px] h-[40px] sm:h-[50px] lg:h-[60px] rounded-full bg-black/30 blur-3xl z-[1]" />
          </div>
        </div>

        {/* Mobile-specific layout: text on top, image below (below 900px) */}
        <div className="min-[900px]:hidden flex flex-col items-center text-center px-4 py-6">
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight text-white">
            Our Own Famwellplus application is coming soon ...
          </h2>
          <p className="mt-3 text-white/90 text-[clamp(0.9rem,3vw,1.1rem)]">Get notification on App release</p>
          <form className="mt-5 max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-stretch gap-3 mx-auto">
              <input
                type="tel"
                placeholder="+91"
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none text-sm font-medium bg-white rounded-lg shadow-lg border-r-2 border-gray-200"
              />
              <button type="submit" className="px-6 py-3 font-black text-black bg-[#8FC890] hover:brightness-105 transition text-sm flex items-center justify-center gap-2 border-none whitespace-nowrap rounded-lg shadow-lg">
                <span className="text-lg leading-none">▶</span>
                <span>Send</span>
              </button>
            </div>
          </form>

          {/* Image stack for mobile, centered */}
          <div className="relative mt-6 h-[400px] sm:h-[450px] w-full max-w-sm mx-auto">
            <img src={phone13Pro} alt="App preview" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-auto object-contain z-[1] drop-shadow-2xl" />
            <img src={character} alt="Character" className="absolute bottom-0 right-8 h-[55%] w-auto object-contain z-[2]" />
            {/* Character shadow */}
            <div className="absolute right-10 bottom-0 w-[140px] h-[50px] rounded-full bg-black/30 blur-3xl z-[1]" />
          </div>
        </div>
      </div>
    </section>
  );
}