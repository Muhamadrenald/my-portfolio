import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "I accept website development services",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "If you need to build a website",
            1000,
            "Contact me at the contact listed or email me at avryso@gmail.com",
            1000,
            "Thankyou❤️",
            1000,
          ]}
          wrapper="span"
          speed={40}
          //   style={{ fontSize: "2em", display: "inline-block" }}
          deletionSpeed={60}
          //   omitDeletionAnimation={true}
          repeat={Infinity}
        />
      </div>
      <img src="/renald2.png" alt="" />
    </motion.div>
  );
};

export default Speech;
