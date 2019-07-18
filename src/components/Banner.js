import React from "react";

function Banner() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Rules</h1>
        <p class="lead">1. Try to click on each image only once.</p>
        <p class="lead">2. After each click, the images will reposition.</p>
        <p class="lead">
          3. If you click on same image a second time, game over.
        </p>
      </div>
    </div>
  );
}

export default Banner;
