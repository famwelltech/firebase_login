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
    "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 items-center",
  heroH1: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight",
  heroP: "mt-4 text-lg text-gray-600",
  heroCtaRow: "mt-6 flex flex-wrap gap-3",
  ctaPrimary:
    "inline-flex h-11 items-center rounded-xl bg-purple-600 px-6 text-white hover:bg-purple-700",
  ctaSecondary:
    "inline-flex h-11 items-center rounded-xl border px-6 hover:bg-gray-50",
  heroImgs: "flex justify-center",
  heroImg: "w-1/2 max-w-sm",
  // Services
  servicesSec: "relative py-16 bg-[#E8FBEF]",
  servicesGrid:
    "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[300px,1fr] gap-8 items-stretch",
  servicesLeft: "flex items-end justify-center lg:justify-start",
  servicesLeftImg:
    "w-[200px] sm:w-[230px] md:w-[250px] lg:w-[280px] h-auto object-contain",
  servicesPanel:
    "relative rounded-2xl border border-[#78D9AA] bg-[#BFEFCC] p-6 sm:p-8 overflow-hidden",
  servicesDeco1:
    "pointer-events-none absolute left-0 -top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-[#94E5BD]/40",
  servicesDeco2:
    "pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-[#94E5BD]/40",
  // Services
// Services
servicesList: "grid sm:grid-cols-2 gap-x-16 gap-y-16",
// no background/shadow/ring — keep only sizing helper
servicesTile: "shrink-0",

servicesItemTitle: "text-[28px] leading-7 font-semibold text-[#0F3A2D]",
servicesItemDesc: "mt-2 text-[15px] leading-6 text-[#214D3F]/80 max-w-[40ch]",


  learnMoreRow: "mt-1 flex sm:justify-center",
  learnMoreBtn:
    "inline-flex items-center rounded-full bg-white/90 px-6 py-2.5 text-sm font-medium text-[#0F3A2D] ring-1 ring-black/5 hover:bg-white transition",
  // Why
  whySec: "py-16",
  whyTopWrap: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  whyAccent: "h-2 w-full rounded-full bg-[#BFEFCC] mb-8",
  whyGridWrap: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  whyH2: "text-5xl font-extrabold text-center tracking-tight",
  whyGrid: "mt-12 grid gap-y-12 gap-x-10 sm:grid-cols-2 lg:grid-cols-3",
  whyCard: "text-center",
  whyIconWrap: "mx-auto mb-6 md:mb-8 grid place-items-center",
  whyIcon: "h-[240px] w-[240px] object-cover",
  whyTitle: "text-3xl font-bold",
  whyDesc: "mt-2 text-md leading-relaxed text-gray-600 max-w-xs mx-auto",
  promoSec: "relative overflow-hidden bg-[#8F5DD3] text-white py-14 lg:py-16",
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
    "px-5 md:px-6 py-2.5 font-semibold text-black bg-[#A4E07F] hover:brightness-105 transition text-base flex items-center gap-2 border-none rounded-full",
  promoRight: "relative h-[320px] sm:h-[400px] lg:h-[500px]",
  promoPhone:
    "absolute bottom-0 right-12 sm:right-16 lg:right-20 h-[320px] sm:h-[400px] lg:h-[480px] z-[1] drop-shadow-2xl",
  promoShadow:
    "absolute right-8 sm:right-12 lg:right-16 bottom-0 w-[200px] sm:w-[260px] lg:w-[320px] h-[60px] sm:h-[80px] lg:h-[100px] rounded-full bg-black/30 blur-3xl",
  promoChar:
    "absolute bottom-0 right-6 sm:right-8 lg:right-12 h-[180px] sm:h-[220px] lg:h-[260px] z-[2]",
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
      <div className={styles.heroWrap}>
        <div>
          <h1 className={styles.heroH1}>Simplifying Your Healthcare Journey..</h1>
          <div className={styles.heroCtaRow}>
            <a href="/services" className={styles.ctaPrimary}>Get Services</a>
          </div>
        </div>
        
        {/* Right visual stack: large heart logo with overlapping caregiver illustration */}
        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px]">
          {/* Heart/brand mark */}
          <img
            src={favProp}
            alt="Famwell brand"
            className="absolute top-0 right-0 h-full w-auto object-contain"
          />
          {/* Caregiver with patient */}
          <img
            src={carePeople}
            alt="Caregiver with patient"
            className="absolute bottom-0 me-5 sm:left-10 h-[70%] w-auto object-contain"
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
      <div className={styles.servicesGrid}>
        {/* Left column illustration (unchanged) */}
        <div className={styles.servicesLeft}>
          <img src={peopleColumn} alt="Care helpers" className={styles.servicesLeftImg} />
        </div>

        {/* Right panel */}
        <div className={styles.servicesPanel}>
          <div className={styles.servicesDeco1} />
          <div className={styles.servicesDeco2} />

          <div className={styles.servicesList}>
            {items.map(({ title, desc, image }, i) => (
              <div key={i} className="flex items-center gap-4">
                {/* Icon without white background */}
<div className={styles.servicesTile} aria-hidden="true">
  <div className="h-[84px] w-[84px] overflow-hidden rounded-xl">
    <img
      src={image}
      alt=""
      className="h-full w-full object-contain"  // keeps original artwork (no bg added)
      loading="lazy"
    />
  </div>
</div>


                {/* Copy */}
                <div>
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
      <div className={styles.promoDeco1} />
      <div className={styles.promoDeco2} />
      <div className={styles.promoWrap}>
        <div className={styles.promoGrid}>
          <div className="ms-5 ps-5">
            <h2 className={styles.promoH2}>
              Our Own Famwellplus application is coming soon ...
            </h2>
            <p className={styles.promoSub}>Get notification on App release</p>
            <form className={styles.promoForm} onSubmit={(e) => e.preventDefault()}>
              {/* pill input + button like mockup */}
              <div className="flex items-center bg-white rounded-full ring-1 ring-white/30 shadow-sm overflow-hidden">
                <input
                  type="tel"
                  placeholder="+91"
                  className={styles.promoInput}
                />
                <button type="submit" className={styles.promoBtn}>
                  <span className="text-lg">▶</span>
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
      </div>
    </section>
  );
}
