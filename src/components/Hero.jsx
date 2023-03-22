import {motion} from "framer-motion";
import {styles} from "../styles";
import {CoffeeCanvas} from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 pl-8">
          <div className="w-5 h-5 rounded-full bg-gradient-to-l from-gray-700 to-gray-100 " />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-l from-gray-700 to-gray-100 " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hey, I'm <span className="text-primary">Pat!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            I'm a fullstack developer based <br className="sm:block hidden" />
            in Los Angeles, CA🌴
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CoffeeCanvas />
      </div>
      <div className="absolute xs:bottom-4 bottom-12 w-full flex justify-center items-center">
        <a href="#work" className="p-3">
          <div className="w-[35px] h-[60px] rounded-full border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-secondary "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
