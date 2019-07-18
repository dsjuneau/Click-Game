import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Images from "./components/Images";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    images: [
      { id: "1", img: "./imgs/kyle1.jpg" },
      { id: "2", img: "./imgs/kyle2.jpg" },
      { id: "3", img: "./imgs/kyle3.jpg" },
      { id: "4", img: "./imgs/kyle4.jpg" },
      { id: "5", img: "./imgs/kyle5.jpg" },
      { id: "6", img: "./imgs/kyle6.jpg" },
      { id: "7", img: "./imgs/kyle7.jpg" },
      { id: "8", img: "./imgs/kyle8.jpg" },
      { id: "9", img: "./imgs/kyle9.jpg" },
      { id: "10", img: "./imgs/kyle10.jpg" },
      { id: "11", img: "./imgs/kyle11.jpg" },
      { id: "12", img: "./imgs/kyle12.jpg" }
    ]
  };

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Images images={this.state.images} />
        <Footer />
      </div>
    );
  }
}

export default App;
