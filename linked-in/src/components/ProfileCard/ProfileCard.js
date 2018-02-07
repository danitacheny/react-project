import React from 'react';
import './ProfileCard.css';

const ProfileCard = (props) => {
  return (
    <div className="card">
      <div className="card__info">
        <img className="card__img" src={props.profile.image} alt="profile pic" />
        <div className="card__name">{props.profile.fullName}</div>
        <div className="card__species">{props.profile.commonName}</div>
        <div className="card__city">{props.profile.city}</div>
      </div>
      <div className="card__button">Connect</div>
    </div>
  )
}

export default ProfileCard;