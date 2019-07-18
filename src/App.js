import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Images from "./components/Images";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    score: "0",
    topScore: "0",
    images: [
      { id: "0", img: "./imgs/kyle1.jpg", isClicked: false },
      { id: "1", img: "./imgs/kyle2.jpg", isClicked: false },
      { id: "2", img: "./imgs/kyle3.jpg", isClicked: true },
      { id: "3", img: "./imgs/kyle4.jpg", isClicked: false },
      { id: "4", img: "./imgs/kyle5.jpg", isClicked: false },
      { id: "5", img: "./imgs/kyle6.jpg", isClicked: false },
      { id: "6", img: "./imgs/kyle7.jpg", isClicked: false },
      { id: "7", img: "./imgs/kyle8.jpg", isClicked: false },
      { id: "8", img: "./imgs/kyle9.jpg", isClicked: false },
      { id: "9", img: "./imgs/kyle10.jpg", isClicked: false },
      { id: "10", img: "./imgs/kyle11.jpg", isClicked: false },
      { id: "11", img: "./imgs/kyle12.jpg", isClicked: false }
    ]
  };

  componentDidMount() {
    this.randomize();
  }

  randomize = () => {
    let arry = this.state.images;
    for (var i = arry.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = {
        id: arry[i].id,
        img: arry[i].img,
        isClicked: arry[i].isClicked
      };
      arry[i] = {
        id: arry[j].id,
        img: arry[j].img,
        isClicked: arry[j].isClicked
      };
      arry[j] = temp;
    }
    this.setState({ images: arry });
  };
  handleClick = idx => {
    console.log(idx);
    this.state.images.forEach(image => {
      if (image.id === idx) {
        if (image.isClicked) {
          console.log("Game Over");
        } else {
          console.log("Add to score and update state");
          this.randomize();
        }
      }
    });
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Banner />
        <Images images={this.state.images} handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
