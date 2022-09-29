import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import eventCardImage from "../../assests/Landing page image.svg";

import "./Homepage.styles.css";
const Homepage = () => {
  return (
    <>
      <MediaQuery minWidth={1080}>
        <div className="homepage-main-container">
          <div>
            <img src={eventCardImage} className="homepage-image" />
          </div>
          <div className="homepage-right-container">
            <div className="heading py-2">
              Imagine if <br></br>
              <span className="styled-heading">Snapchat</span> <br></br>had
              events
            </div>
            <div className="text py-4">
              Easily host and share events with your friends<br></br> across any
              social media.
            </div>
            <div>
              <Link to="/create">
                <button className="button">
                  <span className="px-2">🎉</span>Create my event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1080}>
        <div className=" homepage-container">
          <div className="heading pt-4">
            Imagine if <br></br>
            <span className="styled-heading">Snapchat</span> <br></br>had events
          </div>
          <div className="text py-4">
            Easily host and share events with your friends<br></br> across any
            social media.
          </div>
          <div>
            <img src={eventCardImage} className="homepage-image" />
          </div>
          <div>
            <Link to="/create">
              <button className="button my-4">
                <span className="px-2">🎉</span>Create my event
              </button>
            </Link>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Homepage;
