import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import tiger from "./tiger.json";
import "./App.css";

class App extends Component {
  state = {
    tiger,
    clickedTiger: [],
    score: 0
  };

  imageClick = event => {
    const currentTiger = event.target.alt;
    const TigerAlreadyClicked =
      this.state.clickedTiger.indexOf(currentTiger) > -1;

    if (TigerAlreadyClicked) {
      this.setState({
        tiger: this.state.tiger.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedTiger: [],
        score: 0
      });
        alert("Sorry, You lose. Play again?");

    } else {
      this.setState(
        {
          tiger: this.state.tiger.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedTiger: this.state.clickedTiger.concat(
            currentTiger
          ),
          score: this.state.score + 1
        },
     
        () => {
          if (this.state.score === 12) {
            alert("Good Job! You Win!");
            this.setState({
              tiger: this.state.tiger.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedTiger: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.tiger.map(tiger => (
            <FriendCard
              imageClick={this.imageClick}
              id={tiger.id}
              key={tiger.id}
              image={tiger.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;