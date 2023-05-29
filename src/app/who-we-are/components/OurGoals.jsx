import Image from 'next/image'
import React from 'react'

export const OurGoals = () => {
  return (
    <section>
      <div className='container flex xl:flex-row flex-col-reverse justify-between gap-10'>
        <div className='flex items-center justify-center'>
          <Image src="/images/ourGoalsImg.svg" width = "500" height = "300" alt="Our goals"/>
        </div>
        <div className='w-auto lg:w-[824px] flex flex-col gap-6'>
          <h2 className='text-4xl text-secondary font-bold'>Our Goals</h2>
          <ul className='md:text-3xl text-2xl md:leading-9 text-primary list-disc ml-6 space-y-12'>
            <li>Educational, research and cultural cooperation, dialogue and exchange between HEIs and RTOs in different countries.​</li>
            <li>Exchange of best practices in the fields of professional education and applied research.</li>
            <li>Adaptation of educational programs to the best international standards.​</li>
            <li>Continuous development of innovative education and research technologies.</li>
            <li>Supporting ecological, social and economic transformation processes through the education of global citizens for a sustainable world.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
