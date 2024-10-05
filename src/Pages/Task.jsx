import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaImage01 from "../Images/PizzaImage1.jpg";
import PizzaImage02 from "../Images/PizzaImage2.jpg";
import PizzaImage03 from "../Images/PizzaImage3.jpg";

import "../Styles/Task.css";

export default function Task() {
  // Track scroll position
  const { scrollY } = useScroll();

  const [scrollPos, setScrollPos] = useState(0); // Track scroll position
  const [imageOpacity, setImageOpacity] = useState(1); // Track opacity
  const [imageXPosition, setImageXPosition] = useState(0); // Track horizontal movement
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position


  // Rotate the image based on scroll position
  const rotate = useTransform(scrollY, [0, 1000], [0, 180]); // Reduced rotation range

  // Fade out text based on scroll position
  const textOpacity1 = useTransform(scrollY, [0, 200], [1, 0]); // Fade out first text
  const textOpacity2 = useTransform(scrollY, [0, 250], [1, 0]); // Fade out second text
  const textOpacity3 = useTransform(scrollY, [0, 300], [1, 0]); // Fade out third text
  const textOpacity4 = useTransform(scrollY, [0, 350], [1, 0]); // Fade out fourth text

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Determine scroll direction
      if (scrollY > lastScrollY) {
        // Scrolling down
        const newOpacity = Math.max(1 - scrollY / 200, 0); // Fade out slowly
        const newXPosition = Math.min(-scrollY / 50, -30); // Move left slowly
        setImageOpacity(newOpacity);
        setImageXPosition(newXPosition);
      } else {
        // Scrolling up
        const newOpacity = Math.min(1, imageOpacity + (scrollY / 3000)); // Fade back in
        const newXPosition = Math.max(0, imageXPosition + (scrollY / 1000)); // Move back to right
        setImageOpacity(newOpacity);
        setImageXPosition(newXPosition);
      }

      setLastScrollY(scrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageOpacity, imageXPosition, lastScrollY]); // Depend on state changes


  return (
    <div
      className="container-fluid task-container"
      style={{ overflowX: "hidden" }} // Removed width: "98%"
    >
      {/* Section 1: Text & Image */}
      <motion.div
        className="bg-white row-container border border-white mt-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up on scroll
        transition={{ duration: 1, ease: "easeOut" }} // Smooth scroll effect
      >
        <div className="row">
          {/* Text Section */}
          <motion.div
            className="col-12 col-lg-6 text-content d-flex flex-column justify-content-center"
            whileHover={{ scale: 1.05 }} // Subtle hover effect on text
            transition={{ type: "spring", stiffness: 80 }} // Smooth spring transition
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transformOrigin: "center center",
            }} // Temporary for debugging
          >
             <motion.img
      src={PizzaImage03}
      alt="PizzaImage03"
      className="img-fluid"
      style={{ opacity: imageOpacity, width: "10%" }}
      initial={{ y: 20 }}
      animate={{ x: imageXPosition, opacity: imageOpacity }} // Move left and fade
      transition={{ ease: "easeOut", duration: 0.9 }} // Smooth transition
    />

            <motion.p
              style={{ opacity: textOpacity1 }} // Bind opacity
              initial={{ y: 0 }}
              whileInView={{ y: 0 }} // Slide in
              transition={{ duration: 1 }}
              className="fw-bold fs-1 mt-3"
            >
              Take a taste
            </motion.p>
            <motion.p
              style={{ opacity: textOpacity2 }} // Bind opacity
              initial={{ y: 20 }}
              whileInView={{ y: 0 }} // Slide in
              transition={{ duration: 0.9 }}
              className="fw-bold fs-1"
            >
              Join us for a slice of happiness
            </motion.p>
            <motion.p
              style={{ opacity: textOpacity3 }} // Bind opacity
              initial={{ y: 20 }}
              whileInView={{ y: 0 }} // Slide in
              transition={{ duration: 1 }}
              className="fs-2"
            >
              Every slice is a burst of flavor!
            </motion.p>
            <motion.p
              style={{ opacity: textOpacity4 }} // Bind opacity
              initial={{ y: 20 }}
              whileInView={{ y: 0 }} // Slide in
              transition={{ duration: 1.1 }}
              className="fs-5"
            >
              Our pizzas are crafted with fresh ingredients and love. Indulge in
              a delicious experience that will tantalize your taste buds!
            </motion.p>

            <motion.p
              style={{ opacity: textOpacity4 }} // Bind opacity
              initial={{ y: 20 }}
              whileInView={{ y: 0 }} // Slide in
              transition={{ duration: 1.1 }}
              className="fs-5"
            >
              <button className="btn btn-primary">Explore Now</button>
            </motion.p>
          </motion.div>

          {/* Rotating Image */}
          <motion.div
            className="col-12 col-lg-6 text-center d-flex align-items-center justify-content-center"
            style={{ perspective: 1000, overflow: "hidden" }} // Added overflow: hidden
          >
            <motion.img
              src={PizzaImage01}
              alt="PizzaImage01"
              className="img-fluid pizza-img mt-2 mt-md-5"
              style={{ rotate }} // Removed width: "50%" to rely on CSS
              whileHover={{ scale: 1.05 }} // Subtle hover effect on image
              transition={{ type: "spring", stiffness: 90 }} // Smooth hover transition
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Section 2: Second Animated Section */}
      <motion.div
        className="bg-white row-container mt-5 border border-white"
        initial={{ opacity: 0, x: -100 }} // Slide in from the left
        whileInView={{ opacity: 1, x: 0 }} // Fade in and slide in on scroll
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="row p-5">
          {/* Image Section */}
          <motion.div
            className="col-12 col-lg-6 text-center d-flex align-items-center justify-content-center mb-4 mb-lg-0"
            style={{ perspective: 1000, overflow: "hidden" }} // Added overflow: hidden
          >
            <motion.img
              src={PizzaImage02}
              alt="PizzaImage02"
              className="img-fluid pizza-img"
              style={{ rotate }} // Removed width: "70%" to rely on CSS
              whileHover={{ scale: 1.03 }} // Hover effect on image
              transition={{ type: "spring", stiffness: 60 }} // Smooth hover transition
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="col-12 col-lg-6 text-content d-flex flex-column justify-content-center"
            whileHover={{ scale: 1.05 }} // Subtle hover effect on text
            transition={{ type: "spring", stiffness: 60 }}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transformOrigin: "center center",
            }} // Temporary for debugging
          >
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="fw-bold fs-1 mt-5"
            >
              Discover More
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="fw-bold fs-1"
            >
              Experience our special dishes crafted just for you
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="fs-2"
            >
              Our unique preparation gives you a taste like never before!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="fs-5"
            >
              From classic cheese to gourmet toppings, we have it all!
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
