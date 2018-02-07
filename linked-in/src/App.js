import React, { Component } from 'react';
import Data from './data.js';
import NavBar from './components/NavBar/NavBar.js';
import ProfileCard from './components/ProfileCard/ProfileCard.js';
import './App.css';

class App extends Component {
  render = () => {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          {Data.map((profile) => {
            return (
              <div>
                <ProfileCard key={profile.id} profile={profile} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;