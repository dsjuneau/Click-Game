import React from "react";

function Header() {
  return (
    <div className="py-5 container-fluid bg-dark text-white-50">
      <div className="row">
        <div className="text-center font-weight-bold h1 col-3">Clicky Game</div>
        <div className="text-center font-weight-light h2 col-4">Filler</div>
        <div className="text-center font-weight-bold h1 col-2">Score</div>
        <div className="text-center font-weight-bold h1 col-3">Top Score</div>
      </div>
    </div>
  );
}

export default Header;
