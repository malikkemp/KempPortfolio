import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion";
import { styles } from '../styles';
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Technologies I have worked with</p>
          <h2 className={styles.sectionHeadText}>Tech.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technologies) => 
        <div className="w-16 h-16" key={technologies.name}>
            <img src={technologies.icon} />
        </div>
        )}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "technologies")