import React from "react";
import "./Connections.css";

const Connections = props => {
  return (
    <div className="connections">
      <div className="connections__top">
        <div className="connections__top-number">554</div>
        <div className="connections__text">Your connections</div>
        <a href="#">See all</a>
      </div>
      
      <div className="connections__bottom">
        <div className="connections__text">Add personal contacts</div>
        <form className="connections__form">
          <input className="connections__form-input" type="text" placeholder="Enter your email" />
        </form>
        <div className="connections__button">
          Continue
        </div>
        <div className="connections__bottom-text" >More options</div>
      </div>
      
    </div>
  )
};

export default Connections;