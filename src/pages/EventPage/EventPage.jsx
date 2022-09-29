import React from "react";
import { CalendarOutlined, RightOutlined } from "@ant-design/icons";
import { ImLocation2 } from "react-icons/im";
import MediaQuery from "react-responsive";
import birthdayCake from "../../assests/Birthday cake.png";
import "./EventPage.styles.css";
const EventPage = () => {
  return (
    <>
      <MediaQuery minWidth={768}>
        <div className="event-main-container">
          <div className="event-left-container">
            <span className="create-heading">Birthday Bash</span>
            <br></br>
            <span className="event-text">
              Hosted by <b>Raj Gautam</b>
            </span>
            <div className="info-main-container">
              {" "}
              <div className="row">
                <div className=" mx-3  icon-container">
                  <CalendarOutlined className="icon px-2" />
                </div>
                <div className="col-8">
                  <span className="date-info">18 August 6:00PM</span>
                  <br></br>
                  <span className="info">
                    to <b>19 August 1:00PM</b>
                  </span>
                </div>
                <div className="col-1">
                  <RightOutlined />
                </div>
              </div>
              <div className="row py-4">
                <div className=" mx-3 col-1 icon-container">
                  <ImLocation2
                    className="icon px-2"
                    style={{ fontSize: "40px" }}
                  />
                </div>
                <div className="col-8">
                  <span className="date-info">Street Name</span>
                  <br></br>
                  <span className="info">Bareilly, State, India</span>
                </div>
                <div className=" col-1">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img src={birthdayCake} className="event-image" />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div className="image-container">
          <img src={birthdayCake} className="event-image" />
        </div>
        <div className="event-left-container py-4">
          <span className="create-heading">Birthday Bash</span>
          <br></br>
          <span className="event-text">
            Hosted by <b>Raj Gautam</b>
          </span>
          <div className="info-main-container">
            {" "}
            <div className="row">
              <div className=" mx-3  icon-container">
                <CalendarOutlined className="icon px-2" />
              </div>
              <div className="col-8">
                <span className="date-info">18 August 6:00PM</span>
                <br></br>
                <span className="info">
                  to <b>19 August 1:00PM</b>
                </span>
              </div>
              <div className="col-1">
                <RightOutlined style={{ color: "#bdbdbd" }} />
              </div>
            </div>
            <div className="row py-4">
              <div className=" mx-3 col-1 icon-container">
                <ImLocation2
                  className="icon px-2"
                  style={{ fontSize: "40px" }}
                />
              </div>
              <div className="col-8">
                <span className="date-info">Street Name</span>
                <br></br>
                <span className="info">Bareilly, State, India</span>
              </div>
              <div className=" col-1">
                <RightOutlined style={{ color: "#bdbdbd" }} />
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default EventPage;
