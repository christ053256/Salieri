import React, { useState, useRef, useEffect } from "react";
import "./pages_style/Home.css";
import { Music, Play, Headphones } from "lucide-react";

// Messages for hover tooltip
const messages = {
  music: ["Music makes everything better!", "Feel the beat!", "Lost in melody~"],
  play: ["Let’s jam!", "Press play and enjoy!", "Music is calling!"],
  headphones: ["Headphones on, world off!", "Enjoy your private concert!", "Escape into the sound~"]
};

const Home = () => {
  const [hoverMessage, setHoverMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(false); // To track visibility of About Us
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false); // To track visibility of Feedback
  const [rating, setRating] = useState(0); // To store user rating (1 to 5)

  const aboutUsRef = useRef(null);
  const feedbackRef = useRef(null);

  const handleHover = (type, event) => {
    if (!showMessage) {
      setHoverMessage(messages[type][Math.floor(Math.random() * messages[type].length)]);
      setShowMessage(true);

      // Positioning the tooltip near the hovered icon
      setPosition({ x: event.clientX - 50, y: event.clientY - 250 });
    }
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  const handleRating = (value) => {
    setRating(value); // Set the rating when a star is clicked
  };

  useEffect(() => {
    const aboutUsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutUsVisible(true); // Trigger animation when About Us enters the viewport
        }
      },
      { threshold: 0.3 } // Trigger animation when 30% of the element is visible
    );

    const feedbackObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFeedbackVisible(true); // Trigger animation when Feedback enters the viewport
        }
      },
      { threshold: 0.3 } // Trigger animation when 30% of the element is visible
    );

    if (aboutUsRef.current) {
      aboutUsObserver.observe(aboutUsRef.current);
    }
    if (feedbackRef.current) {
      feedbackObserver.observe(feedbackRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        aboutUsObserver.unobserve(aboutUsRef.current);
      }
      if (feedbackRef.current) {
        feedbackObserver.unobserve(feedbackRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="home">
        {/* Background Video */}
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src="videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="overlay"></div>
        <div className="home-content">
          <h1>Salieri</h1>
          <p>Lose yourself in the rhythm of the clouds.</p>

          <div className="icons">
            <div
              className="icon-wrapper"
              onMouseEnter={(e) => handleHover("music", e)}
              onMouseLeave={handleMouseLeave}
            >
              <Music size={40} />
            </div>
            <div
              className="icon-wrapper"
              onMouseEnter={(e) => handleHover("play", e)}
              onMouseLeave={handleMouseLeave}
            >
              <Play size={40} />
            </div>
            <div
              className="icon-wrapper"
              onMouseEnter={(e) => handleHover("headphones", e)}
              onMouseLeave={handleMouseLeave}
            >
              <Headphones size={40} />
            </div>
          </div>

          {showMessage && (
            <div
              className="chatbox"
              style={{ top: `${position.y + 10}px`, left: `${position.x}px` }}
            >
              {hoverMessage}
            </div>
          )}

          <button className="explore-btn">Explore</button>
        </div>
      </div>

      {/* About Us Section */}
      <div
        ref={aboutUsRef}
        className={`about-us ${isAboutUsVisible ? "animate-about-us" : ""}`}
      >
        <h1>About Us</h1>
        <p><strong>Our Mission:</strong> Placeholder text for our mission statement. We'll fill this in later.</p>
        <p><strong>Our Story:</strong> Placeholder text for our company story. We'll fill this in later.</p>
        <p><strong>What We Do:</strong> Placeholder text for what our company does. More info coming soon.</p>
        <p><strong>Contact Us:</strong> Placeholder text for contact info. We'll fill this in later.</p>
      </div>

      {/* Feedback Section */}
      <div
        ref={feedbackRef}
        className={`feedback ${isFeedbackVisible ? "animate-feedback" : ""}`}
      >
        <h1>Feedback</h1>
        <form>
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            placeholder="Write your feedback here..."
          ></textarea>

          {/* Rate Us Section */}
          <div className="rate-us">
            <p>Rate Us:</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={`star ${rating >= value ? "filled" : ""}`}
                  onClick={() => handleRating(value)} // Update rating on click
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Home;
