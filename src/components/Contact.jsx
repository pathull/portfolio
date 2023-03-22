import {useState, useRef} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "../styles";
import {EarthCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utilities/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gray-600 p-8 rounded-xl"
      >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>
          Let's connect!🤝
        </h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-7"
        >
          <label className="flex flex-col">
            <span className="text-primary font-bold mb-4">Your Name</span>
            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name here."
            className="bg-secondary py-4 px-6 placeholder:text-gray-700 text-primary rounded-lg outlined-none border-none font-medium"
            />
            </label>
          <label className="flex flex-col">
            <span className="text-primary font-bold mb-4">Your Email</span>
            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email here."
            className="bg-secondary py-4 px-6 placeholder:text-gray-700 text-primary rounded-lg outlined-none border-none font-medium"
            />
            </label>
          <label className="flex flex-col">
            <span className="text-primary font-bold mb-4">Message</span>
            <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write message here. Open to work and collaborations."
            className="bg-secondary py-4 px-6 placeholder:text-gray-700 text-primary rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
          type="submit"
          className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          > {loading ? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
