import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


{/*creating serviceCard to display experience*/}
const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-120 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-center font-bold text-[16px]'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <> {/*starts motion.div to move and style text*/}
      <motion.div 
        variants={textVariant()}
        className='mt-5'
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/*starts p tag for introduction text*/}
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-secondary text-[17px] max-w-3xl leading-[25px]'
      >
        I'm a new developer currently working as a 
        Lead Technician and Store Lead at a large computer repair company and in college working 
        to achieve my Bachelors of Science in Computer Science. Computers 
        have always interested me and I enjoy being able to learn new technologies
        and build my skillset. Programming and building small projects is what 
        sparked my interest in computers. When I was 17, I made my first very small
        program in C# and Unity and have never looked back since. 
      </motion.p>

      {/*starts div to populate buttons*/}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}  
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")