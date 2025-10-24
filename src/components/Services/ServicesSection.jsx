import React from 'react'
import './ServicesSection.css'

// assets
import imgRide from '../../assets/care_ride.png'
import imgMate from '../../assets/care_mate.png'
import imgTrack from '../../assets/care_track.png'
import imgAssist from '../../assets/care_assist.png'
import imgMed from '../../assets/care_med.png'

function Service({ title, subtitle, desc, points, image, reverse=false }){
  return (
    <div className={`care care--grid ${reverse ? 'care--reverse' : ''}`}>
      <div className="care__content">
        <h2 className="care__title">{title}</h2>
        {subtitle && <p className="care__subtitle">{subtitle}</p>}
        {desc && <p className="care__desc">{desc}</p>}
        {points?.length ? (
          <ul className="care__list">
            {points.map((p, i) => (<li key={i}>{p}</li>))}
          </ul>
        ) : null}
        <div className="care__actions">
          <button className="btn btn--primary">Get Service Now</button>
          <button className="btn btn--ghost">Learn More</button>
        </div>
      </div>

      <div className="care__visual" aria-hidden="true">
        <img src={image} className="care__image" alt="" />
      </div>
    </div>
  )
}

export default function ServicesSection(){
  return (
    <section className="care-wrap" aria-label="Care services">
      <Service
        title="Care Ride"
        subtitle="Pick & drop services to hospitals"
        desc="Getting to the hospital doesn’t have to be stressful. With Care Ride, patients can enjoy safe, reliable, and comfortable transportation to and from hospitals, clinics, and diagnostic centres."
        points={[
          'Door-to-door pick-up and drop-off',
          'Trained drivers with healthcare sensitivity',
          'Timely coordination for appointments',
        ]}
        image={imgRide}
       
      />

      <Service
        title="Care Mate"
        subtitle="Trained helpers to accompany patients"
        desc="Whether it’s a hospital visit, lab test, or follow-up, patients are never alone with CareMate. Our trained companions provide support, guidance, and reassurance throughout the healthcare journey."
        points={[
          'Assistance with check-ins and navigation inside hospitals',
          'Help during admissions and discharges',
          'Emotional support and companionship',
          'A well-organized summary of patient records for better decisions',
        ]}
        image={imgMate}
         reverse 
      />

      <Service
        title="Care Track"
        subtitle="Digital tracking of appointments, schedules, and follow-ups"
        desc="CareTrack keeps patients and families on top of their healthcare schedules. Through our smart digital system, you’ll never miss an important check-up or medication."
        points={[
          'Appointment reminders and alerts',
          'Real-time schedule updates',
          'Follow-up tracking for continuity of care',
        ]}
        image={imgTrack}
      />

      <Service
        title="Care Assist"
        subtitle="On-call support for families"
        desc="From insurance paperwork to quick answers about healthcare processes, CareAssist ensures families always have someone to rely on."
        points={[
          '24/7 on-call support',
          'Assistance with claims and insurance documentation',
          'Guidance for healthcare-related queries and coordination',
        ]}
        image={imgAssist}
        reverse 
      />

      <Service
        title="Care Med"
        subtitle="Smart tracking of medicines, schedules & follow-ups"
        desc="We ensure patients get the right medicines at the right time with guidance and reminders. Beyond delivery, we provide support, clear instructions, refill alerts, and dedicated care."
        points={[
          'Home Delivery of prescribed medicines',
          'Clear Instructions on usage & dosage',
          'Refill Reminders for timely restocks',
          'Patient Support for queries & guidance',
        ]}
        image={imgMed}
      />
    </section>
  )
}