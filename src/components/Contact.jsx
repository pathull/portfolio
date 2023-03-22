import {useState, useRef} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utilities/motion";
import mypic from "../assets/mypic.png";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6ahx0nb",
        "template_7p33iss",
        {
          from_name: form.name,
          to_name: "Patrick",
          from_email: form.email,
          to_email: "patrick9hull4@gmail.com",
          message: form.message,
        },
        "5UvcqklTS0G6vZXRq"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I look forward to speaking with you.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => () => {
          alert(
            "Something went wrong. Sorry, my email is patrick9hull4@gmail.com"
          );
        }
      );
  };

  return (
    <div className="xl:mt-10 xl:flex-row flex-col-reverse flex gap-9  overflow-hidden">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gray-600 p-8 rounded-xl"
      >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>Let's connect!🤝</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-2 flex flex-col gap-7"
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
              placeholder="Write message here. Open to opportunities."
              className="bg-secondary py-4 px-6 placeholder:text-gray-700 text-primary rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {" "}
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[270px]"
      >
        <img
          src={mypic}
          alt={"pic of pat the site owner"}
          className="rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
