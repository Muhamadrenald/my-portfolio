import { TypeAnimation } from "react-type-animation";

const TypewriterHero = () => {
  return (
    <TypeAnimation
      sequence={[
        1000,
        "Hi Everyone, ", // Teks pertama
        3000, // Tunggu 3 detik
        "I'm Renald!", // Teks kedua
        3000,
      ]}
      //   sequence={[
      //     <>
      //       <span style={{ color: "white" }}>Hi Everyone </span>
      //       <span>I'm Renald</span>
      //     </>,
      //     3000,
      //     "",
      //     500,
      //   ]}
      wrapper="span"
      speed={40}
      //   deletionSpeed={40}
      repeat={Infinity}
      className="animated-text"
    />
  );
};

export default TypewriterHero;
