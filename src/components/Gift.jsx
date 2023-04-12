import {useState} from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utilities/motion";

const Gift = () => {
  const [img, setImg] = useState(null);
  const [load, setLoad] = useState(false);

  async function fetchWithTimeout(resource, options = {}) {
    const {timeout = 8000} = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  }

  async function fetchCat() {
    setLoad(true);
    try {
      const response = await fetchWithTimeout("https://cataas.com/cat/cute", {
        timeout: 6000,
      });
      const cat = await response.blob();
      setImg(URL.createObjectURL(cat));
      setLoad(false);
    } catch (error) {
      setLoad(false);
      setImg("Sorry. The free 3rd party cat API must be down currently.")
    }
  }

  async function fetchDog() {
    setLoad(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random", {
        timeout: 6000,
      });
      const dog = await response.json();
      setImg(dog.message);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      setImg("Sorry. The free 3rd party dog API must be down currently.")
    }
  }

  const handleCatClick = () => {
    fetchCat().then(
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
      })
    );
  };

  const handleDogClick = () => {
    fetchDog().then(
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
      })
    );
  };

  return (
    <div className="xl:mt-10 xl:flex-row flex-col-reverse flex gap-8  overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gray-600 p-8 rounded-xl"
      >
        <p className={styles.sectionSubText}>Gift for You</p>
        <h3 className={styles.sectionHeadText}>Thank you!🙌</h3>
        <p className="text-primary font-bold">
          I appreciate you taking the time to check out my stuff!
        </p>
        <div className="mt-44 flex flex-col gap-5">
          <span className="text-[32px]">What type of person are you?</span>
          <div className="flex flex-row gap-10">
            <button
              className="p-8 w-[150px] h-[auto] bg-white text-primary rounded-xl"
              onClick={handleDogClick}
            >
              Dog Person
              <br />
              <span className="text-[2rem]">🐶</span>
            </button>
            <button
              className="p-8 w-[150px] h-[auto] bg-white text-primary rounded-xl"
              onClick={handleCatClick}
            >
              Cat Person
              <br />
              <span className="text-[2rem]">😺</span>
            </button>
          </div>
        </div>
        <div className="max-w-xs max-h-xs">
          {load ? (
            <p className="mt-10">Loading...</p>
          ) : (
            <img
              src={img}
              alt={img ? "Cute image of dog or cat" : null}
              className="mt-7 rounded-xl"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Gift, "gift");
