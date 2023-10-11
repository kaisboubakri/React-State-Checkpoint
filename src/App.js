import React, { Component } from 'react';
import pic from './Profile-pic.jpg'

class App extends Component {
  state = {
    person: {
      fullName: 'Kais Boubakri',
      bio: 'A React Developer',
      imgSrc: <img src={pic} alt='profile'/>,
      profession: 'Software Engineer',
    },
    shows: true, // Initially set to true to display the profile
    mountTime: null,
  };

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    this.setState({ mountTime: new Date() });
    this.interval = setInterval(() => {
      this.forceUpdate(); // Force a re-render to update the time
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const currentTime = new Date();
    const timeInterval =
      this.state.mountTime &&
      Math.floor((currentTime - this.state.mountTime) / 1000);

    return (
      <div style={{backgroundColor: 'gray',padding: '10px', width: '30%' , margin: '15px 0 0 15px'}}>
        {this.state.shows && (
          <div>
            <h1 style={{color: 'blue'}}>{fullName}</h1>
            <p>Bio: {bio}</p>
            {imgSrc}
            <p>Profession: {profession}</p>
          </div>
        )}

        <button onClick={this.toggleProfile}>Toggle Profile</button>
        <p>Time since mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
