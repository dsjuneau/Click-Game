import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Images from "./components/Images";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Images />
        <Footer />
      </div>
    );
  }
}

export default App;
