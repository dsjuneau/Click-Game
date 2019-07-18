import React from "react";

function Images(props) {
  const imgArry = props.images.map(image => (
    <img
      className="col-2 m-4"
      height="200px"
      src={image.img}
      key={image.id}
      onClick={() => props.handleClick(image.id)}
      alt=""
    />
  ));

  return <div className="container d-flex flex-wrap">{imgArry}</div>;
}

export default Images;
