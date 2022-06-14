import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="textContainer"
    >
      {/* Top */}
      <div className="textContainer-top">
        <motion.span variants={fadeIn()} className="text-green-600">
          Frontend Developer
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-5xl">
          2 /4
        </motion.span>
      </div>

      {/* Middle */}
      <motion.div
        variants={fadeIn()}
        initial="initial"
        animate="animate"
        className="textContainer-middle"
      >
        <span className="">Hafijur</span>
      </motion.div>

      {/* Bottom */}
      <div className="textContainer-bottom">
        <motion.button className="" variants={fadeIn()}>
          Download Resume
        </motion.button>
        <motion.p variants={fadeIn()}>
          View Projects <span>or</span> <br /> Read About Me
        </motion.p>
      </div>

      <div className="absolute right-[100px] bottom-[60px]">
        <div className="border-4 border-indigo-500 p-3"></div>
      </div>
    </motion.div>
  );
};

export default TextContainer;
