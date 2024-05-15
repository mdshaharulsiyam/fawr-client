import React from 'react'
import Banner from '../../Components/AboutPage/Banner/Banner'
import OurFirm from '../../Components/AboutPage/OurFirm/OurFirm'
import OurPeople from '../../Components/AboutPage/OurPeople/OurPeople'
import Partnership from '../../Components/AboutPage/Partnership/Partnership'

const About = () => {
  return (
    <>
    <Banner/>
    <p className='text-xl lg:text-3xl 2xl:text-4xl container mx-auto py-14 text-center'>We are a global creative solution company that designs the future with the most ambitious change agents. We work together with our clients to reinvent industries and provide outstanding results that are superior to those of our rivals. We mix our specialised, integrated expertise with a strong ecosystem of digital businesses to generate better, quicker, and longer-lasting outcomes. We are able to assist organisations striving to solve the crucial challenges in education, racial equity, social justice, economic development, and the environment because of our commitment to delivering services.</p>
    <OurFirm/>
    <OurPeople/>
    <Partnership/>
    </>
  )
}

export default About