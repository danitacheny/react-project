import React from "react";
import "./Connections.css";

const Connections = props => {
  return (
    <div className="connection">
      <div className="connection__number">554</div>
      <div className="connection__text">Your connections</div>
      <a href="#">See all</a>
      <div className="connection__box">
        <div className="connection__box-text">Add personal contacts</div>
        <form>
          <input type="text" placeholder="Enter your email" />
        </form>
        <div className="connection__box-button">
          Continue
        </div>
        <div className="connection__box-text" >More options</div>
      </div>
    </div>
  )
};

export default Connections;