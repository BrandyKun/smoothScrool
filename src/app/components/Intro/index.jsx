import styles from "./style.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap//ScrollTrigger";
import { useLayoutEffect } from "react";

const Index = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "+=500px",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image
          src={"/images/background.jpeg"}
          fill={true}
          alt="backgropund Image"
        />
      </div>
      <div className={styles.introContainer}>
        <div data-scroll data-scroll-speed="0.3" className={styles.introImage}>
          <Image src={"/images/intro.png"} fill={true} alt="background image" />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          Smooth Scroll
        </h1>
      </div>
    </div>
  );
};

export default Index;
