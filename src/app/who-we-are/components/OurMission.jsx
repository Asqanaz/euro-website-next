import React from 'react'

export const OurMission = () => {
  return (
    <section>
      <div className='flex xl:flex-row flex-col justify-between gap-10 py-20'>
        <div className='w-auto lg:w-[824px] flex flex-col gap-8'>
          <h3 className='text-4xl text-secondary font-bold'>Our Mission</h3>
          <p className='md:text-3xl text-2xl md:leading-relaxed leading-relaxed text-primary '><span className='text-secondary'>IERA</span> builds bridges and develops active cooperation between European and Global Higher Education Institutions (HEIs) and Research and Technology Organizations (RTOs) with a focus on the Transcaucasian and Central Asian area to exchange know-how and best practices, promote international education and research with the aim of joining forces for future challenges.</p>
        </div>
        <div className='flex items-center justify-center'>
          <img src="/images/actions-pic.webp" className='' alt="Our Mission"/>
        </div>
      </div>
    </section>
  )
}
