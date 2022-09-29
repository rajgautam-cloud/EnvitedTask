import React from "react";
import { Link } from "react-router-dom";
import illustration from "../../assests/party.webp";
import "./CreateEventPage.styles.css";
const CreateEventPage = () => {
  return (
    <div className="create-main-container">
      <div className=" create-left-container">
        <div className="form-container">
          {" "}
          <h1 className="heading-create mx-4 py-4">Create your event</h1>
          <div className="mx-4 pb-4">
            <form>
              <label className="form-label">
                Name of the event
                <br></br>
                <input className="form-input"></input>
              </label>
              <br></br>
              <label className="form-label">
                Host Name
                <br></br>
                <input className="form-input"></input>
              </label>
              <br></br>
              <label className="form-label">
                Location of your event
                <br></br>
                <input className="form-input"></input>
              </label>{" "}
              <br></br>
              <label className="form-label">
                Starting Time
                <br></br>
                <input className="form-input"></input>
              </label>{" "}
              <br></br>
              <label className="form-label">
                Ending Time
                <br></br>
                <input className="form-input"></input>
              </label>{" "}
              <br></br>
              <label className="form-label">
                Description
                <br></br>
                <input className="form-input"></input>
              </label>
              <br></br>
              <Link to="/event">
                <button className="button py-2 mx-2">
                  <span className="px-2">🎊 </span>Create Event
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <img src={illustration} className=" create-image" />
      </div>
    </div>
  );
};

export default CreateEventPage;
