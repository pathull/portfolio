import Tilt from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utilities/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Work</p>
        <h3 className={styles.sectionHeadText}>Projects🙂</h3>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          Experience designing and building web applications from start to
          finish as shown below with links. Strong understanding of various
          programming languages, frameworks, and libraries, such as React |
          Angular | Typescript | Node.js | MongoDB | PostgreSQL | RESTful API |
          Express | Koa | Mongoose | Auth0 | Socket.io | Redux | Docker |
          GraphQL | Jest | Git | Github | Tailwind | CSS | HTML5.
        </motion.p>
      </div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        ></motion.p>
      </div>
      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="cursor-pointer w-auto h-auto"
      onClick={() => window.open(source_code_link, "_blank")}
    >
      <Tilt
        options={{
          max: 35,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-500 p-5 rounded-xl sm:w-[340px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`Image of the app ${name}`}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-[18px] text-primary font-bold">{name}</h3>
          <p className="mt-1 text-[14px]">{description}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              ~{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SectionWrapper(Works, "work");
